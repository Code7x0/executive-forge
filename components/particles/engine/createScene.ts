import {
  AmbientLight,
  BufferAttribute,
  BufferGeometry,
  Color,
  DirectionalLight,
  NormalBlending,
  PerspectiveCamera,
  Points,
  Scene,
  ShaderMaterial,
  WebGLRenderer,
} from "three";
import {
  finalizeBudget,
  resolveBudget,
  type ParticleBudget,
} from "@/components/particles/engine/budget";
import { buildRibbonParticles } from "@/components/particles/engine/geometry";
import {
  createPointerState,
  easePointerStrength,
  releasePointer,
  updatePointerWorld,
  type PointerState,
} from "@/components/particles/engine/pointer";
import {
  particleFragmentShader,
  particleVertexShader,
} from "@/components/particles/engine/shaders";
import {
  composePositions,
  stepSimulation,
} from "@/components/particles/engine/simulation";

export type ParticleSceneOptions = {
  cameraZ?: number;
  objectScale?: number;
  /** Multiplier on pointer displacement force (e.g. 0.55 on mobile). */
  pointerForce?: number;
};

export type ParticleSceneHandle = {
  canvas: HTMLCanvasElement;
  pointer: PointerState;
  setPointerFromEvent: (e: PointerEvent | MouseEvent) => void;
  clearPointer: () => void;
  resize: () => void;
  setVisible: (v: boolean) => void;
  setReducedMotion: (v: boolean) => void;
  setPointerForce: (v: number) => void;
  dispose: () => void;
};

export function createParticleScene(
  canvas: HTMLCanvasElement,
  options: ParticleSceneOptions = {},
): ParticleSceneHandle {
  let disposed = false;
  let visible = true;
  let pointerForce = options.pointerForce ?? 1;
  let reducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const renderer = new WebGLRenderer({
    canvas,
    antialias: false,
    alpha: true,
    powerPreference: "high-performance",
  });
  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(1);

  const scene = new Scene();
  const camera = new PerspectiveCamera(32, 1, 0.1, 40);
  camera.position.set(0, 0.2, options.cameraZ ?? 6.4);

  scene.add(new AmbientLight(0xfff2e0, 0.75));
  const key = new DirectionalLight(0xffe6c8, 1.15);
  key.position.set(2.5, 3.5, 4);
  scene.add(key);
  const fill = new DirectionalLight(0xc8b8a0, 0.4);
  fill.position.set(-3, -1, 2);
  scene.add(fill);

  const pointer = createPointerState();

  let budget: ParticleBudget = finalizeBudget(
    resolveBudget(canvas.clientWidth || 1024, reducedMotion),
  );
  let ribbon = buildRibbonParticles(budget);
  let base = ribbon.positions;
  let offsets = new Float32Array(ribbon.count * 3);
  let velocities = new Float32Array(ribbon.count * 3);
  let renderPos = new Float32Array(ribbon.count * 3);
  renderPos.set(base);

  const geometry = new BufferGeometry();
  geometry.setAttribute("position", new BufferAttribute(renderPos, 3));
  geometry.setAttribute("aSeed", new BufferAttribute(ribbon.seeds, 1));
  geometry.setAttribute("aSize", new BufferAttribute(ribbon.sizes, 1));
  geometry.setAttribute("aTone", new BufferAttribute(ribbon.tones, 1));

  const material = new ShaderMaterial({
    vertexShader: particleVertexShader,
    fragmentShader: particleFragmentShader,
    transparent: true,
    depthWrite: false,
    blending: NormalBlending,
    uniforms: {
      uTime: { value: 0 },
      uPixelRatio: { value: 1 },
      uIdle: { value: 1 },
      uReducedMotion: { value: reducedMotion ? 1 : 0 },
      /* Warm ivory / champagne on blue field; soft cool accent for depth */
      uColorIvory: { value: new Color("#f1e7d4") },
      uColorChampagne: { value: new Color("#e8d4a8") },
      uColorBronze: { value: new Color("#9eb6ff") },
    },
  });

  const points = new Points(geometry, material);
  const objectScale = options.objectScale ?? 1;
  points.scale.setScalar(objectScale);
  points.rotation.x = -0.2;
  points.rotation.y = 0.4;
  scene.add(points);

  const applyBudgetLayout = () => {
    ribbon = buildRibbonParticles(budget);
    base = ribbon.positions;
    offsets = new Float32Array(ribbon.count * 3);
    velocities = new Float32Array(ribbon.count * 3);
    renderPos = new Float32Array(ribbon.count * 3);
    renderPos.set(base);
    geometry.setAttribute("position", new BufferAttribute(renderPos, 3));
    geometry.setAttribute("aSeed", new BufferAttribute(ribbon.seeds, 1));
    geometry.setAttribute("aSize", new BufferAttribute(ribbon.sizes, 1));
    geometry.setAttribute("aTone", new BufferAttribute(ribbon.tones, 1));
  };

  const applyRendererSize = () => {
    if (disposed) return;
    const w = canvas.clientWidth || 1;
    const h = canvas.clientHeight || 1;
    const dpr = Math.min(window.devicePixelRatio || 1, budget.dprCap);
    renderer.setPixelRatio(dpr);
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    material.uniforms.uPixelRatio!.value = dpr;
  };

  let last = performance.now();
  let raf = 0;

  const tick = (now: number) => {
    if (disposed) return;
    raf = requestAnimationFrame(tick);
    if (!visible) return;

    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;

    easePointerStrength(
      pointer,
      pointer.active && !reducedMotion ? 1 : 0,
      dt,
    );

    if (!reducedMotion) {
      points.rotation.y += dt * 0.055;
      points.rotation.x = -0.2 + Math.sin(now * 0.00022) * 0.025;
    }

    stepSimulation(
      base,
      offsets,
      velocities,
      ribbon.count,
      pointer,
      dt,
      reducedMotion,
      pointerForce,
    );
    composePositions(base, offsets, renderPos, ribbon.count);
    const posAttr = geometry.getAttribute("position");
    if (posAttr) posAttr.needsUpdate = true;

    material.uniforms.uTime!.value = now * 0.001;
    material.uniforms.uIdle!.value = reducedMotion ? 0.12 : 1;
    material.uniforms.uReducedMotion!.value = reducedMotion ? 1 : 0;

    renderer.render(scene, camera);
  };

  applyRendererSize();
  raf = requestAnimationFrame(tick);

  return {
    canvas,
    pointer,
    setPointerFromEvent: (e) => {
      const rect = canvas.getBoundingClientRect();
      updatePointerWorld(pointer, camera, e.clientX, e.clientY, rect);
    },
    clearPointer: () => {
      releasePointer(pointer);
    },
    resize: () => {
      const prev = budget.total;
      const next = finalizeBudget(
        resolveBudget(canvas.clientWidth || 1024, reducedMotion),
      );
      if (Math.abs(next.total - prev) > 800) {
        budget = next;
        applyBudgetLayout();
      } else {
        budget = { ...budget, dprCap: next.dprCap };
      }
      applyRendererSize();
    },
    setVisible: (v) => {
      visible = v;
      if (v) last = performance.now();
    },
    setReducedMotion: (v) => {
      reducedMotion = v;
      budget = finalizeBudget(
        resolveBudget(canvas.clientWidth || 1024, reducedMotion),
      );
      applyBudgetLayout();
      applyRendererSize();
    },
    setPointerForce: (v) => {
      pointerForce = v;
    },
    dispose: () => {
      disposed = true;
      cancelAnimationFrame(raf);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      scene.clear();
    },
  };
}
