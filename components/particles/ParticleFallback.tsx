export function ParticleFallback() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <svg
        viewBox="0 0 800 420"
        className="h-[70%] w-[90%] max-w-4xl opacity-80"
        role="img"
        aria-label="Static placeholder for the particle sculpture"
      >
        <defs>
          <radialGradient id="ef-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f1e7d4" stopOpacity="0.55" />
            <stop offset="55%" stopColor="#9eb6ff" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#174cc7" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse cx="400" cy="210" rx="280" ry="120" fill="url(#ef-glow)" />
        <path
          d="M160 220 C220 120, 320 100, 400 180 C480 260, 580 280, 640 200 C580 140, 500 160, 400 210 C300 260, 220 280, 160 220 Z"
          fill="none"
          stroke="#e0c9a6"
          strokeWidth="2.5"
          opacity="0.85"
        />
        <path
          d="M180 200 C260 140, 340 150, 400 200 C460 250, 540 260, 620 210"
          fill="none"
          stroke="#f3ebe0"
          strokeWidth="1.2"
          opacity="0.7"
        />
        <path
          d="M200 240 C280 280, 360 270, 400 220 C440 170, 520 150, 600 190"
          fill="none"
          stroke="#8a6a4a"
          strokeWidth="1"
          opacity="0.55"
        />
        <circle cx="400" cy="210" r="34" fill="none" stroke="#ddd6c7" strokeWidth="1" opacity="0.35" />
      </svg>
    </div>
  );
}
