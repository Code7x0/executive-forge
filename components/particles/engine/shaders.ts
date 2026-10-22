export const particleVertexShader = /* glsl */ `
uniform float uTime;
uniform float uPixelRatio;
uniform float uIdle;
uniform float uReducedMotion;

attribute float aSeed;
attribute float aSize;
attribute float aTone;

varying float vTone;
varying float vAlpha;

void main() {
  vTone = aTone;
  // \`position\` already includes CPU spring/inertia offsets from base
  vec3 pos = position;

  float idleAmp = 0.032 * uIdle * (1.0 - uReducedMotion);
  float t = uTime * (0.35 + aSeed * 0.25);
  pos.x += sin(t + aSeed * 6.2831) * idleAmp * (0.6 + aTone);
  pos.y += cos(t * 0.87 + aSeed * 4.1) * idleAmp * 0.55;
  pos.z += sin(t * 0.63 + aSeed * 2.7) * idleAmp * 0.7;

  vec4 mv = modelViewMatrix * vec4(pos, 1.0);
  gl_Position = projectionMatrix * mv;

  float size = aSize * uPixelRatio * (1.15 / max(-mv.z, 0.5));
  gl_PointSize = clamp(size * 52.0, 1.0, 72.0);

  vAlpha = mix(0.32, 0.96, aTone);
  vAlpha *= smoothstep(9.0, 2.0, -mv.z);
}
`;

export const particleFragmentShader = /* glsl */ `
uniform vec3 uColorIvory;
uniform vec3 uColorChampagne;
uniform vec3 uColorBronze;

varying float vTone;
varying float vAlpha;

void main() {
  vec2 uv = gl_PointCoord * 2.0 - 1.0;
  float d = length(uv);
  if (d > 1.0) discard;

  float core = smoothstep(1.0, 0.0, d);
  float rim = smoothstep(1.0, 0.5, d);
  vec3 col = mix(uColorIvory, uColorChampagne, clamp(vTone * 1.15, 0.0, 1.0));
  col = mix(col, uColorBronze, smoothstep(0.55, 1.0, vTone) * 0.7);

  float alpha = core * rim * vAlpha;
  gl_FragColor = vec4(col, alpha);
}
`;
