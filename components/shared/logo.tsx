import Image from "next/image";

type LogoProps = {
  size?: "sm" | "md" | "lg" | "xl";
  showText?: boolean;
  className?: string;
};

const sizes = {
  sm: { mark: 32, wordmark: 120 },
  md: { mark: 40, wordmark: 150 },
  lg: { mark: 56, wordmark: 200 },
  xl: { mark: 80, wordmark: 280 },
};

export function Logo({ size = "md", showText = true, className = "" }: LogoProps) {
  const dimensions = sizes[size];

  if (showText) {
    return (
      <div className={className}>
        <Image
          src="/logo-wordmark.svg"
          alt="Pink Pollos"
          width={dimensions.wordmark}
          height={Math.round(dimensions.wordmark * 0.31)}
          priority
        />
      </div>
    );
  }

  return (
    <div className={className}>
      <Image
        src="/logo-mark.svg"
        alt="Pink Pollos"
        width={dimensions.mark}
        height={dimensions.mark}
        priority
      />
    </div>
  );
}

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/logo-mark.svg"
      alt="Pink Pollos"
      width={500}
      height={500}
      className={className}
      priority
    />
  );
}

export function LogoWordmark({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/logo-wordmark.svg"
      alt="Pink Pollos"
      width={500}
      height={156}
      className={className}
      priority
    />
  );
}
