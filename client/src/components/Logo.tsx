export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="100" height="100" rx="20" fill="url(#gradient)" />
      <path
        d="M30 35 H45 V65 H30 V35 M55 35 H70 V65 H55 V35"
        stroke="white"
        strokeWidth="4"
        fill="none"
      />
      <text
        x="50"
        y="80"
        textAnchor="middle"
        fontSize="14"
        fill="white"
        fontFamily="sans-serif"
      >
        sup?
      </text>
      <defs>
        <linearGradient
          id="gradient"
          x1="0"
          y1="0"
          x2="100"
          y2="100"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#C90060" />
          <stop offset="100%" stopColor="#A80050" />
        </linearGradient>
      </defs>
    </svg>
  );
}
