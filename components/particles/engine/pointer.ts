import { Plane, Raycaster, Vector2, Vector3, type Camera } from "three";

const ndc = new Vector2();
const raycaster = new Raycaster();
const hit = new Vector3();
const plane = new Plane();
const planePoint = new Vector3(0, 0, 0);
const camDir = new Vector3();

export type PointerState = {
  ndcX: number;
  ndcY: number;
  world: Vector3;
  active: boolean;
  strength: number;
};

export function createPointerState(): PointerState {
  return {
    ndcX: 0,
    ndcY: 0,
    world: new Vector3(0, 0, 0),
    active: false,
    strength: 0,
  };
}

/** Project pointer onto a plane through the sculpture origin, facing the camera. */
export function updatePointerWorld(
  state: PointerState,
  camera: Camera,
  clientX: number,
  clientY: number,
  rect: DOMRect,
) {
  const x = ((clientX - rect.left) / rect.width) * 2 - 1;
  const y = -((clientY - rect.top) / rect.height) * 2 + 1;
  state.ndcX = x;
  state.ndcY = y;
  ndc.set(x, y);
  raycaster.setFromCamera(ndc, camera);
  camera.getWorldDirection(camDir);
  plane.setFromNormalAndCoplanarPoint(camDir, planePoint);
  if (raycaster.ray.intersectPlane(plane, hit)) {
    state.world.copy(hit);
    state.active = true;
  }
}

export function releasePointer(state: PointerState) {
  state.active = false;
}

export function easePointerStrength(
  state: PointerState,
  target: number,
  dt: number,
) {
  const lambda = state.active ? 10 : 4;
  const t = 1 - Math.exp(-lambda * dt);
  state.strength += (target - state.strength) * t;
}
