import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Pink Pollos - Senior Consultants, Geen Overhead";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0c0a09",
          backgroundImage:
            "radial-gradient(circle at 50% 50%, #1c1917 0%, #0c0a09 70%)",
        }}
      >
        {/* Grid pattern overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "linear-gradient(rgba(236, 72, 153, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(236, 72, 153, 0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Logo SVG inline */}
        <svg
          width="280"
          height="280"
          viewBox="0 0 500 500"
          style={{ marginBottom: 40 }}
        >
          <polygon
            points="111.27 212.91 90.48 294.37 140.34 287.66 187.09 250.45 111.27 212.91"
            fill="none"
            stroke="#ec4899"
            strokeWidth="6"
            strokeLinejoin="round"
          />
          <polygon
            points="187.09 250.45 181.56 224.11 150.42 176.38 111.27 212.91 187.09 250.45"
            fill="none"
            stroke="#ec4899"
            strokeWidth="6"
            strokeLinejoin="round"
          />
          <polygon
            points="90.48 221.05 111.27 212.91 90.48 294.37 67.72 249.82 90.48 221.05"
            fill="none"
            stroke="#ec4899"
            strokeWidth="6"
            strokeLinejoin="round"
          />
          <polygon
            points="75.94 197 24 251.99 67.72 249.82 90.48 221.05 111.27 212.91 150.42 176.38 170.03 153.34 174.31 142.47 162.55 130.89 116.93 110.75 124.41 123.22 115.41 156.55 75.94 197"
            fill="none"
            stroke="#ec4899"
            strokeWidth="6"
            strokeLinejoin="round"
          />
          <polygon
            points="104.18 144.61 89.5 169.38 86.59 186.09 115.41 156.55 124.41 123.22 104.18 144.61"
            fill="none"
            stroke="#ec4899"
            strokeWidth="6"
            strokeLinejoin="round"
          />
          <polygon
            points="186.85 126.67 173.6 104.22 172.61 114.42 137.62 81.42 146.55 108.33 140.17 103.02 114.39 96.15 124.41 114.05 162.55 130.89 174.31 142.47 186.85 126.67"
            fill="none"
            stroke="#ec4899"
            strokeWidth="6"
            strokeLinejoin="round"
          />
          <polygon
            points="188.61 146.29 178.41 148.13 174.31 142.47 186.85 126.67 188.61 146.29"
            fill="none"
            stroke="#ec4899"
            strokeWidth="6"
            strokeLinejoin="round"
          />
          <polygon
            points="178.41 148.13 174.31 142.47 170.03 153.34 178.41 148.13"
            fill="none"
            stroke="#ec4899"
            strokeWidth="6"
            strokeLinejoin="round"
          />
          <polygon
            points="194.96 168.44 195.48 160.22 188.61 146.29 178.41 148.13 170.03 153.34 174.9 162.14 180.08 160.88 189.93 163.55 194.96 168.44"
            fill="none"
            stroke="#ec4899"
            strokeWidth="6"
            strokeLinejoin="round"
          />
          <polygon
            points="172.97 178.28 174.9 162.14 180.08 160.88 182.76 161.61 172.97 178.28"
            fill="none"
            stroke="#ec4899"
            strokeWidth="6"
            strokeLinejoin="round"
          />
          <polygon
            points="174.9 162.14 170.03 153.34 150.42 176.38 174.9 162.14"
            fill="none"
            stroke="#ec4899"
            strokeWidth="6"
            strokeLinejoin="round"
          />
          <polygon
            points="173.89 212.35 172.97 178.28 174.9 162.14 150.42 176.38 173.89 212.35"
            fill="none"
            stroke="#ec4899"
            strokeWidth="6"
            strokeLinejoin="round"
          />
          <polygon
            points="198.32 222.76 239.01 222.76 262.77 248.42 184.03 235.86 181.56 224.11 173.89 212.35 173.43 195.28 198.32 222.76"
            fill="none"
            stroke="#ec4899"
            strokeWidth="6"
            strokeLinejoin="round"
          />
          <polygon
            points="176.04 390.33 307.78 392.28 240.3 431.14 176.04 390.33"
            fill="none"
            stroke="#ec4899"
            strokeWidth="6"
            strokeLinejoin="round"
          />
          <polygon
            points="307.78 392.28 249.64 314.07 329.8 324.87 307.78 392.28"
            fill="none"
            stroke="#ec4899"
            strokeWidth="6"
            strokeLinejoin="round"
          />
          <polygon
            points="249.64 314.07 307.78 392.28 176.04 390.33 183.68 319.86 249.64 314.07"
            fill="none"
            stroke="#ec4899"
            strokeWidth="6"
            strokeLinejoin="round"
          />
          <polygon
            points="176.04 390.33 172.2 417.47 205.49 453.09 240.3 431.14 176.04 390.33"
            fill="none"
            stroke="#ec4899"
            strokeWidth="6"
            strokeLinejoin="round"
          />
          <polygon
            points="242.33 492.2 205.49 453.09 240.3 431.14 277.73 455.03 242.33 492.2"
            fill="none"
            stroke="#ec4899"
            strokeWidth="6"
            strokeLinejoin="round"
          />
          <polygon
            points="277.73 455.03 240.3 431.14 307.78 392.28 294.87 437.02 277.73 455.03"
            fill="none"
            stroke="#ec4899"
            strokeWidth="6"
            strokeLinejoin="round"
          />
          <polygon
            points="313.3 417.67 307.78 392.28 294.87 437.02 313.3 417.67"
            fill="none"
            stroke="#ec4899"
            strokeWidth="6"
            strokeLinejoin="round"
          />
          <polygon
            points="351.3 377.77 329.8 324.87 307.78 392.28 313.3 417.67 351.3 377.77"
            fill="none"
            stroke="#ec4899"
            strokeWidth="6"
            strokeLinejoin="round"
          />
          <polygon
            points="448.61 275.62 351.3 377.77 329.8 324.87 448.61 275.62"
            fill="none"
            stroke="#ec4899"
            strokeWidth="6"
            strokeLinejoin="round"
          />
          <polygon
            points="67.72 249.82 24 251.99 172.2 417.47 176.04 390.33 158.32 270.8 67.72 249.82"
            fill="none"
            stroke="#ec4899"
            strokeWidth="6"
            strokeLinejoin="round"
          />
          <polyline
            points="177.5 245.7 158.32 270.8 176.04 390.33 183.68 319.86 174.46 280.39 179.28 257.45"
            fill="none"
            stroke="#ec4899"
            strokeWidth="6"
            strokeLinejoin="round"
          />
          <polygon
            points="385.24 193.89 402.66 322.72 329.8 324.87 249.64 314.07 385.24 193.89"
            fill="none"
            stroke="#ec4899"
            strokeWidth="6"
            strokeLinejoin="round"
          />
          <polygon
            points="174.46 280.39 183.68 319.86 249.64 314.07 174.46 280.39"
            fill="none"
            stroke="#ec4899"
            strokeWidth="6"
            strokeLinejoin="round"
          />
          <polygon
            points="249.64 314.07 272.22 238.04 322.29 161.29 385.24 220.03 249.64 314.07"
            fill="none"
            stroke="#ec4899"
            strokeWidth="6"
            strokeLinejoin="round"
          />
          <polygon
            points="366.4 279.38 399.07 296.15 329.8 324.87 366.4 279.38"
            fill="none"
            stroke="#ec4899"
            strokeWidth="6"
            strokeLinejoin="round"
          />
          <polygon
            points="418.66 233.12 385.24 193.89 402.66 322.72 451.36 272.79 418.66 233.12"
            fill="none"
            stroke="#ec4899"
            strokeWidth="6"
            strokeLinejoin="round"
          />
          <polygon
            points="442.04 194.45 474.49 251.99 451.36 272.79 418.66 233.12 385.24 220.03 322.29 161.29 290.76 124.25 283.88 106.77 302.79 88.15 376.14 55.77 364.11 75.83 378.58 129.41 442.04 194.45"
            fill="none"
            stroke="#ec4899"
            strokeWidth="6"
            strokeLinejoin="round"
          />
          <polygon
            points="396.64 110.21 420.25 150.04 424.92 176.9 378.58 129.41 364.11 75.83 396.64 110.21"
            fill="none"
            stroke="#ec4899"
            strokeWidth="6"
            strokeLinejoin="round"
          />
          <polygon
            points="263.72 81.37 285.03 45.27 285.79 53.1 290.52 57.99 342.87 8.61 328.52 51.88 338.77 43.34 380.22 32.29 364.11 61.08 302.79 88.15 283.88 106.77 263.72 81.37"
            fill="none"
            stroke="#ec4899"
            strokeWidth="6"
            strokeLinejoin="round"
          />
          <polygon
            points="260.89 112.91 277.28 115.87 283.88 106.77 263.72 81.37 260.89 112.91"
            fill="none"
            stroke="#ec4899"
            strokeWidth="6"
            strokeLinejoin="round"
          />
          <polygon
            points="277.28 115.87 283.88 106.77 290.76 124.25 277.28 115.87"
            fill="none"
            stroke="#ec4899"
            strokeWidth="6"
            strokeLinejoin="round"
          />
          <polygon
            points="250.68 148.52 249.84 135.31 260.89 112.91 277.28 115.87 290.76 124.25 282.94 138.4 274.6 136.38 258.77 140.67 250.68 148.52"
            fill="none"
            stroke="#ec4899"
            strokeWidth="6"
            strokeLinejoin="round"
          />
          <polygon
            points="286.03 164.35 282.94 138.4 274.6 136.38 270.3 137.54 286.03 164.35"
            fill="none"
            stroke="#ec4899"
            strokeWidth="6"
            strokeLinejoin="round"
          />
          <polygon
            points="282.94 138.4 290.76 124.25 322.29 161.29 282.94 138.4"
            fill="none"
            stroke="#ec4899"
            strokeWidth="6"
            strokeLinejoin="round"
          />
          <polygon
            points="284.55 219.14 286.03 164.35 282.94 138.4 322.29 161.29 284.55 219.14"
            fill="none"
            stroke="#ec4899"
            strokeWidth="6"
            strokeLinejoin="round"
          />
          <polyline
            points="174.46 280.39 249.64 314.07 272.22 238.04 284.55 219.14 285.29 191.69 245.28 235.86 184.03 235.86"
            fill="none"
            stroke="#ec4899"
            strokeWidth="6"
            strokeLinejoin="round"
          />
        </svg>

        {/* Text */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 72,
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            <span
              style={{
                background: "linear-gradient(135deg, #ec4899 0%, #f472b6 100%)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Pink
            </span>
            <span style={{ color: "white", marginLeft: 16 }}>Pollos</span>
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#a8a29e",
              marginTop: 16,
              letterSpacing: "0.05em",
            }}
          >
            Senior Consultants. Geen Overhead.
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
