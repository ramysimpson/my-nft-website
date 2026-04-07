import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTokenMetadata } from "../../lib/tokenMetadata";

export default async function TokenPage({ params }) {
  const { tokenId } = await params;

  try {
    const metadata = await getTokenMetadata(tokenId);

    return (
      <main
        style={{
          minHeight: "100vh",
          background:
            "radial-gradient(circle at top, #1f2a44 0%, #0c0f17 55%, #05070b 100%)",
          color: "#f5f1e8",
          padding: "48px 24px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            maxWidth: "960px",
            margin: "0 auto",
            display: "grid",
            gap: "24px",
          }}
        >
          <div>
            <p style={{ margin: 0, opacity: 0.7 }}>Token #{metadata.tokenId}</p>
            <h1 style={{ margin: "8px 0 12px", fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              {metadata.name}
            </h1>
            <p style={{ margin: 0, maxWidth: "720px", lineHeight: 1.6 }}>
              {metadata.description}
            </p>
          </div>

          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "1 / 1",
              borderRadius: "24px",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.12)",
              boxShadow: "0 24px 80px rgba(0,0,0,0.35)",
              background: "rgba(255,255,255,0.04)",
            }}
          >
            {metadata.localImageUrl ? (
              <Image
                src={metadata.localImageUrl}
                alt={metadata.name}
                fill
                priority
                sizes="100vw"
                style={{ objectFit: "contain" }}
              />
            ) : (
              <div
                style={{
                  height: "100%",
                  display: "grid",
                  placeItems: "center",
                  opacity: 0.7,
                }}
              >
                Image not available
              </div>
            )}
          </div>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            {metadata.localImageUrl ? (
              <Link
                href={metadata.localImageUrl}
                target="_blank"
                style={{
                  color: "#0c0f17",
                  background: "#f5f1e8",
                  padding: "12px 18px",
                  borderRadius: "999px",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                Open Raw Image
              </Link>
            ) : null}

            <Link
              href={`/api/token/${metadata.tokenId}`}
              target="_blank"
              style={{
                color: "#f5f1e8",
                border: "1px solid rgba(255,255,255,0.25)",
                padding: "12px 18px",
                borderRadius: "999px",
                textDecoration: "none",
              }}
            >
              View Metadata JSON
            </Link>
          </div>
        </div>
      </main>
    );
  } catch {
    notFound();
  }
}
