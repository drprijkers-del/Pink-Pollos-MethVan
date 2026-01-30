import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #ec4899 0%, #db2777 100%)",
          borderRadius: "6px",
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 500 500"
          fill="none"
          stroke="white"
          strokeWidth="20"
          strokeLinejoin="round"
        >
          <polygon points="111.27 212.91 90.48 294.37 140.34 287.66 187.09 250.45 111.27 212.91" />
          <polygon points="187.09 250.45 181.56 224.11 150.42 176.38 111.27 212.91 187.09 250.45" />
          <polygon points="176.04 390.33 307.78 392.28 240.3 431.14 176.04 390.33" />
          <polygon points="307.78 392.28 249.64 314.07 329.8 324.87 307.78 392.28" />
          <polygon points="249.64 314.07 307.78 392.28 176.04 390.33 183.68 319.86 249.64 314.07" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
