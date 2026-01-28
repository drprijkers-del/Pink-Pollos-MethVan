type LogoProps = {
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  className?: string;
};

const sizes = {
  sm: "w-8 h-8",
  md: "w-10 h-10",
  lg: "w-14 h-14",
  xl: "w-20 h-20",
};

export function Logo({ size = "md", showText = true, className = "" }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Chicken Icon */}
      <div className={`relative ${sizes[size]}`}>
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Body */}
          <ellipse
            cx="32"
            cy="38"
            rx="20"
            ry="18"
            className="fill-pink-500"
          />
          {/* Wing detail */}
          <ellipse
            cx="26"
            cy="40"
            rx="8"
            ry="10"
            className="fill-pink-600"
          />
          {/* Head */}
          <circle cx="32" cy="18" r="12" className="fill-pink-400" />
          {/* Comb */}
          <path
            d="M26 8 Q28 2 32 6 Q36 2 38 8 Q34 10 32 8 Q30 10 26 8Z"
            className="fill-pink-600"
          />
          {/* Beak */}
          <path
            d="M28 20 L32 26 L36 20 Z"
            className="fill-amber-500"
          />
          {/* Eye */}
          <circle cx="28" cy="16" r="2" className="fill-stone-900" />
          <circle cx="28.5" cy="15.5" r="0.5" className="fill-white" />
          {/* Feet */}
          <path
            d="M26 54 L24 60 M26 54 L26 60 M26 54 L28 60"
            className="stroke-amber-500"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M38 54 L36 60 M38 54 L38 60 M38 54 L40 60"
            className="stroke-amber-500"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {showText && (
        <span className="text-xl font-semibold tracking-tight text-white">
          Pink Pollos
        </span>
      )}
    </div>
  );
}

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <ellipse cx="32" cy="38" rx="20" ry="18" className="fill-pink-500" />
      <ellipse cx="26" cy="40" rx="8" ry="10" className="fill-pink-600" />
      <circle cx="32" cy="18" r="12" className="fill-pink-400" />
      <path d="M26 8 Q28 2 32 6 Q36 2 38 8 Q34 10 32 8 Q30 10 26 8Z" className="fill-pink-600" />
      <path d="M28 20 L32 26 L36 20 Z" className="fill-amber-500" />
      <circle cx="28" cy="16" r="2" className="fill-stone-900" />
      <circle cx="28.5" cy="15.5" r="0.5" className="fill-white" />
      <path d="M26 54 L24 60 M26 54 L26 60 M26 54 L28 60" className="stroke-amber-500" strokeWidth="2" strokeLinecap="round" />
      <path d="M38 54 L36 60 M38 54 L38 60 M38 54 L40 60" className="stroke-amber-500" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
