"use client";

import { useState } from "react";

export default function Home() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isGallerySectionHovered, setIsGallerySectionHovered] = useState(false);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#050509",
        color: "white",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      {/* Header / Navigation */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(5, 5, 9, 0.9)",
          borderBottom: "1px solid #1f1f30",
        }}
      >
        <div
          style={{
            maxWidth: "960px",
            margin: "0 auto",
            padding: "1rem 1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ fontWeight: 600, letterSpacing: "0.05em" }}>
            Ramé Delaireaux Art
          </div>

          <nav
            style={{
              display: "flex",
              gap: "1.5rem",
              fontSize: "0.95rem",
              opacity: 0.9,
              alignItems: "center",
            }}
          >
            <a
              href="#hero"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Home
            </a>

            {/* Gallery with dropdown */}
            <div
              style={{ position: "relative" }}
              onMouseEnter={() => setIsGalleryOpen(true)}
              onMouseLeave={() => setIsGalleryOpen(false)}
            >
              <button
                type="button"
                style={{
                  background: "none",
                  border: "none",
                  color: "inherit",
                  font: "inherit",
                  cursor: "pointer",
                  padding: 0,
                  display: "flex",
                  alignItems: "center",
                  gap: "0.25rem",
                }}
              >
                Gallery
                <span style={{ fontSize: "0.7rem" }}>▼</span>
              </button>

              {isGalleryOpen && (
                <div
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    backgroundColor: "#11111b",
                    borderRadius: "8px",
                    border: "1px solid #26263b",
                    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.6)",
                    minWidth: "160px",
                    padding: "0.4rem 0",
                    zIndex: 20,
                  }}
                >
                  <a
                    href="#cosmic"
                    style={{
                      display: "block",
                      padding: "0.5rem 0.9rem",
                      textDecoration: "none",
                      color: "white",
                      fontSize: "0.9rem",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Cosmic
                  </a>
                  <a
                    href="#blockchain"
                    style={{
                      display: "block",
                      padding: "0.5rem 0.9rem",
                      textDecoration: "none",
                      color: "white",
                      fontSize: "0.9rem",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Crypto
                  </a>
                  <a
                    href="#dataverse"
                    style={{
                      display: "block",
                      padding: "0.5rem 0.9rem",
                      textDecoration: "none",
                      color: "white",
                      fontSize: "0.9rem",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Dataverse
                  </a>
                  <a
                    href="#dimensional-continuum"
                    style={{
                      display: "block",
                      padding: "0.5rem 0.9rem",
                      textDecoration: "none",
                      color: "white",
                      fontSize: "0.9rem",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Dimensional Continuum
                  </a>
                  <a
                    href="#energy"
                    style={{
                      display: "block",
                      padding: "0.5rem 0.9rem",
                      textDecoration: "none",
                      color: "white",
                      fontSize: "0.9rem",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Energy
                  </a>
                  <a
                    href="#immutable"
                    style={{
                      display: "block",
                      padding: "0.5rem 0.9rem",
                      textDecoration: "none",
                      color: "white",
                      fontSize: "0.9rem",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Immutable
                  </a>
                  <a
                    href="#mind-collective"
                    style={{
                      display: "block",
                      padding: "0.5rem 0.9rem",
                      textDecoration: "none",
                      color: "white",
                      fontSize: "0.9rem",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Mind Collective
                  </a>
                  <a
                    href="#nature"
                    style={{
                      display: "block",
                      padding: "0.5rem 0.9rem",
                      textDecoration: "none",
                      color: "white",
                      fontSize: "0.9rem",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Nature
                  </a>
                </div>
              )}
            </div>

            <a
              href="#about"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              About
            </a>
            <a
              href="#contact"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "2rem 1.5rem 4rem",
        }}
      >
        {/* Hero / Intro section */}
        <section id="hero" style={{ paddingTop: "1rem", paddingBottom: "3rem" }}>
          <h1
            style={{
              fontSize: "2.7rem",
              marginBottom: "1rem",
              lineHeight: 1.2,
            }}
          >
            Ramé Delaireaux Art
          </h1>
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.7,
              maxWidth: "640px",
              color: "#d0d0e0",
            }}
          >
            Every piece here is an original digital creation—designed to stand
            out visually and built to live forever on-chain. This collection
            captures the spirit of the decentralized world: bold, scarce, and
            unapologetically future-focused. Collect what speaks to you. Own it
            permanently.
          </p>
        </section>

        {/* Gallery intro */}
        <section
          id="gallery"
          style={{ paddingBottom: "2rem" }}
          onMouseEnter={() => setIsGallerySectionHovered(true)}
          onMouseLeave={() => setIsGallerySectionHovered(false)}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              flexWrap: "wrap",
              marginBottom: "0.5rem",
            }}
          >
            <h2 style={{ fontSize: "1.9rem", margin: 0 }}>Gallery</h2>
            <div
              style={{
                display: "flex",
                gap: "0.4rem",
                opacity: isGallerySectionHovered ? 1 : 0,
                transform: isGallerySectionHovered
                  ? "translateY(0)"
                  : "translateY(-4px)",
                transition: "opacity 180ms ease, transform 180ms ease",
              }}
              >
                <a
                  href="#cosmic"
                  style={{
                    textDecoration: "none",
                  color: "white",
                  fontSize: "0.85rem",
                  padding: "0.4rem 0.65rem",
                  borderRadius: "999px",
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid #26263b",
                }}
              >
                Cosmic
              </a>
              <a
                href="#blockchain"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "0.85rem",
                  padding: "0.4rem 0.65rem",
                  borderRadius: "999px",
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid #26263b",
                }}
              >
                Crypto
              </a>
              <a
                href="#dataverse"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "0.85rem",
                  padding: "0.4rem 0.65rem",
                  borderRadius: "999px",
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid #26263b",
                }}
              >
                Dataverse
              </a>
              <a
                href="#dimensional-continuum"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "0.85rem",
                  padding: "0.4rem 0.65rem",
                  borderRadius: "999px",
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid #26263b",
                }}
              >
                Dimensional Continuum
              </a>
              <a
                href="#energy"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "0.85rem",
                  padding: "0.4rem 0.65rem",
                  borderRadius: "999px",
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid #26263b",
                }}
              >
                Energy
              </a>
              <a
                href="#immutable"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "0.85rem",
                  padding: "0.4rem 0.65rem",
                  borderRadius: "999px",
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid #26263b",
                }}
              >
                Immutable
              </a>
              <a
                href="#mind-collective"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "0.85rem",
                  padding: "0.4rem 0.65rem",
                  borderRadius: "999px",
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid #26263b",
                }}
              >
                Mind Collective
              </a>
              <a
                href="#nature"
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "0.85rem",
                  padding: "0.4rem 0.65rem",
                  borderRadius: "999px",
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid #26263b",
                }}
              >
                Nature
              </a>
            </div>
          </div>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.7,
              maxWidth: "640px",
              color: "#d0d0e0",
            }}
          >
            Browse the work by category below, or use the Gallery menu at the
            top to jump directly to Cosmic, Crypto, Dataverse, Dimensional
            Continuum, Energy, Immutable, Mind Collective, or Nature series.
          </p>
        </section>

        {/* Cosmic category */}
        <section
          id="cosmic"
          style={{
            paddingBottom: "3rem",
            borderTop: "1px solid #1f1f30",
            paddingTop: "2.5rem",
          }}
        >
          <h2 style={{ fontSize: "1.9rem", marginBottom: "1.25rem" }}>
            Cosmic Series
          </h2>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1.5rem",
            }}
          >
            {/* Cosmic 1 – hologram1.png */}
            <div
              style={{
                flex: "1 1 260px",
                maxWidth: "280px",
                backgroundColor: "#11111b",
                borderRadius: "14px",
                padding: "1rem",
                boxShadow: "0 0 25px rgba(0, 0, 0, 0.45)",
                border: "1px solid #26263b",
              }}
            >
              <img
                src="/hologram1.png"
                alt="Holographic Principle"
                style={{
                  width: "100%",
                  height: "190px",
                  borderRadius: "10px",
                  objectFit: "cover",
                  marginBottom: "0.75rem",
                }}
              />
              <h3 style={{ fontSize: "1.1rem", marginBottom: "0.25rem" }}>
                Holographic Principle
              </h3>
              <p style={{ fontSize: "0.9rem", opacity: 0.85 }}>
                A visual meditation on the idea that our three-dimensional
                reality may be encoded on a distant two-dimensional boundary.
              </p>
            </div>

            {/* Cosmic 2 – horizon.png */}
            <div
              style={{
                flex: "1 1 260px",
                maxWidth: "280px",
                backgroundColor: "#11111b",
                borderRadius: "14px",
                padding: "1rem",
                boxShadow: "0 0 25px rgba(0, 0, 0, 0.45)",
                border: "1px solid #26263b",
              }}
            >
              <img
                src="/horizon.png"
                alt="Event Horizon"
                style={{
                  width: "100%",
                  height: "190px",
                  borderRadius: "10px",
                  objectFit: "cover",
                  marginBottom: "0.75rem",
                }}
              />
              <h3 style={{ fontSize: "1.1rem", marginBottom: "0.25rem" }}>
                Event Horizon
              </h3>
              <p style={{ fontSize: "0.9rem", opacity: 0.85 }}>
                The last visible edge before no information escapes—a boundary
                between what can be known and what can only be imagined.
              </p>
            </div>

            {/* Cosmic 3 – cosmic-horizon.png */}
            <div
              style={{
                flex: "1 1 260px",
                maxWidth: "280px",
                backgroundColor: "#11111b",
                borderRadius: "14px",
                padding: "1rem",
                boxShadow: "0 0 25px rgba(0, 0, 0, 0.45)",
                border: "1px solid #26263b",
              }}
            >
              <img
                src="/cosmic-horizon.png"
                alt="Cosmic Horizon"
                style={{
                  width: "100%",
                  height: "190px",
                  borderRadius: "10px",
                  objectFit: "cover",
                  marginBottom: "0.75rem",
                }}
              />
              <h3 style={{ fontSize: "1.1rem", marginBottom: "0.25rem" }}>
                Cosmic Horizon
              </h3>
              <p style={{ fontSize: "0.9rem", opacity: 0.85 }}>
                Where the observable universe fades into the unknown—light,
                distance, and time compressed into a single frame.
              </p>
            </div>

            {/* Cosmic 4 – complientarity.png */}
            <div
              style={{
                flex: "1 1 260px",
                maxWidth: "280px",
                backgroundColor: "#11111b",
                borderRadius: "14px",
                padding: "1rem",
                boxShadow: "0 0 25px rgba(0, 0, 0, 0.45)",
                border: "1px solid #26263b",
              }}
            >
              <img
                src="/complientarity.png"
                alt="Black Hole Complementarity"
                style={{
                  width: "100%",
                  height: "190px",
                  borderRadius: "10px",
                  objectFit: "cover",
                  marginBottom: "0.75rem",
                }}
              />
              <h3 style={{ fontSize: "1.1rem", marginBottom: "0.25rem" }}>
                Black Hole Complementarity
              </h3>
              <p style={{ fontSize: "0.9rem", opacity: 0.85 }}>
                Two seemingly incompatible perspectives on the same reality,
                fused into a single visual paradox at the edge of a black hole.
              </p>
            </div>

            {/* Cosmic 5 – symphony-of-dark-matter.png */}
            <div
              style={{
                flex: "1 1 260px",
                maxWidth: "280px",
                backgroundColor: "#11111b",
                borderRadius: "14px",
                padding: "1rem",
                boxShadow: "0 0 25px rgba(0, 0, 0, 0.45)",
                border: "1px solid #26263b",
              }}
            >
              <img
                src="/symphony-of-dark-matter.png"
                alt="Symphony of Dark Matter"
                style={{
                  width: "100%",
                  height: "190px",
                  borderRadius: "10px",
                  objectFit: "cover",
                  marginBottom: "0.75rem",
                }}
              />
              <h3 style={{ fontSize: "1.1rem", marginBottom: "0.25rem" }}>
                Symphony of Dark Matter
              </h3>
              <p style={{ fontSize: "0.9rem", opacity: 0.85 }}>
                An unseen orchestra shaping galaxies, rendered as ripples of hidden mass.
              </p>
            </div>

            {/* Cosmic 6 – invisible-force.png */}
            <div
              style={{
                flex: "1 1 260px",
                maxWidth: "280px",
                backgroundColor: "#11111b",
                borderRadius: "14px",
                padding: "1rem",
                boxShadow: "0 0 25px rgba(0, 0, 0, 0.45)",
                border: "1px solid #26263b",
              }}
            >
              <img
                src="/invisible-force.png"
                alt="Invisible Force"
                style={{
                  width: "100%",
                  height: "190px",
                  borderRadius: "10px",
                  objectFit: "cover",
                  marginBottom: "0.75rem",
                }}
              />
              <h3 style={{ fontSize: "1.1rem", marginBottom: "0.25rem" }}>
                Invisible Force
              </h3>
              <p style={{ fontSize: "0.9rem", opacity: 0.85 }}>
                Dark energy accelerating the cosmos—an unseen pressure stretching space itself.
              </p>
            </div>

            {/* Cosmic 7 – cosmic-genesis.png */}
            <div
              style={{
                flex: "1 1 260px",
                maxWidth: "280px",
                backgroundColor: "#11111b",
                borderRadius: "14px",
                padding: "1rem",
                boxShadow: "0 0 25px rgba(0, 0, 0, 0.45)",
                border: "1px solid #26263b",
              }}
            >
              <img
                src="/cosmic-genesis.png"
                alt="Cosmic Genesis"
                style={{
                  width: "100%",
                  height: "190px",
                  borderRadius: "10px",
                  objectFit: "cover",
                  marginBottom: "0.75rem",
                }}
              />
              <h3 style={{ fontSize: "1.1rem", marginBottom: "0.25rem" }}>
                Cosmic Genesis
              </h3>
              <p style={{ fontSize: "0.9rem", opacity: 0.85 }}>
                The birth of everything—an explosion of color, energy, and possibility.
              </p>
            </div>
          </div>
        </section>

        {/* Blockchain category */}
        <section
          id="blockchain"
          style={{
            paddingBottom: "3rem",
            borderTop: "1px solid #1f1f30",
            paddingTop: "2.5rem",
          }}
        >
          <h2 style={{ fontSize: "1.9rem", marginBottom: "1.25rem" }}>
            Crypto Series
          </h2>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1.5rem",
            }}
          >
            {/* Blockchain 1 – blockchain-future.png */}
            <div
              style={{
                flex: "1 1 260px",
                maxWidth: "280px",
                backgroundColor: "#11111b",
                borderRadius: "14px",
                padding: "1rem",
                boxShadow: "0 0 25px rgba(0, 0, 0, 0.45)",
                border: "1px solid #26263b",
              }}
            >
              <img
                src="/blockchain-future.png"
                alt="Blockchain Sun"
                style={{
                  width: "100%",
                  height: "190px",
                  borderRadius: "10px",
                  objectFit: "cover",
                  marginBottom: "0.75rem",
                }}
              />
              <h3 style={{ fontSize: "1.1rem", marginBottom: "0.25rem" }}>
                Blockchain Sun
              </h3>
              <p style={{ fontSize: "0.9rem", opacity: 0.85 }}>
                A glowing metaphor for decentralized infrastructure—radiating
                outward, powering a new kind of digital gravity.
              </p>
            </div>

            {/* Crypto 2 – fiat-currency.png */}
            <div
              style={{
                flex: "1 1 260px",
                maxWidth: "280px",
                backgroundColor: "#11111b",
                borderRadius: "14px",
                padding: "1rem",
                boxShadow: "0 0 25px rgba(0, 0, 0, 0.45)",
                border: "1px solid #26263b",
              }}
            >
              <img
                src="/fiat-currency.png"
                alt="Fiat Currency Museum"
                style={{
                  width: "100%",
                  height: "190px",
                  borderRadius: "10px",
                  objectFit: "cover",
                  marginBottom: "0.75rem",
                }}
              />
              <h3 style={{ fontSize: "1.1rem", marginBottom: "0.25rem" }}>
                Fiat Currency Museum
              </h3>
              <p style={{ fontSize: "0.9rem", opacity: 0.85 }}>
                Fiat money displayed behind glass like an artifact—an exhibit from a fading era.
              </p>
            </div>

            {/* Crypto 3 – crypto-blade.png */}
            <div
              style={{
                flex: "1 1 260px",
                maxWidth: "280px",
                backgroundColor: "#11111b",
                borderRadius: "14px",
                padding: "1rem",
                boxShadow: "0 0 25px rgba(0, 0, 0, 0.45)",
                border: "1px solid #26263b",
              }}
            >
              <img
                src="/crypto-blade.png"
                alt="Crypto Blade"
                style={{
                  width: "100%",
                  height: "190px",
                  borderRadius: "10px",
                  objectFit: "cover",
                  marginBottom: "0.75rem",
                }}
              />
              <h3 style={{ fontSize: "1.1rem", marginBottom: "0.25rem" }}>
                Crypto Blade
              </h3>
              <p style={{ fontSize: "0.9rem", opacity: 0.85 }}>
                A razor-sharp emblem of trustless code cutting through legacy rails.
              </p>
            </div>

            {/* Crypto 4 – liquidity-rivers.png */}
            <div
              style={{
                flex: "1 1 260px",
                maxWidth: "280px",
                backgroundColor: "#11111b",
                borderRadius: "14px",
                padding: "1rem",
                boxShadow: "0 0 25px rgba(0, 0, 0, 0.45)",
                border: "1px solid #26263b",
              }}
            >
              <img
                src="/liquidity-rivers.png"
                alt="Liquidity Rivers"
                style={{
                  width: "100%",
                  height: "190px",
                  borderRadius: "10px",
                  objectFit: "cover",
                  marginBottom: "0.75rem",
                }}
              />
              <h3 style={{ fontSize: "1.1rem", marginBottom: "0.25rem" }}>
                Liquidity Rivers
              </h3>
              <p style={{ fontSize: "0.9rem", opacity: 0.85 }}>
                Capital as a living system: branching, converging, and redistributing itself through luminous currents flowing like river deltas in constant motion.
              </p>
            </div>

            {/* Crypto 4 – metaverse-stock-exchange.png */}
            <div
              style={{
                flex: "1 1 260px",
                maxWidth: "280px",
                backgroundColor: "#11111b",
                borderRadius: "14px",
                padding: "1rem",
                boxShadow: "0 0 25px rgba(0, 0, 0, 0.45)",
                border: "1px solid #26263b",
              }}
            >
              <img
                src="/metaverse-stock-exchange.png"
                alt="Metaverse Stock Exchange"
                style={{
                  width: "100%",
                  height: "190px",
                  borderRadius: "10px",
                  objectFit: "cover",
                  marginBottom: "0.75rem",
                }}
              />
              <h3 style={{ fontSize: "1.1rem", marginBottom: "0.25rem" }}>
                Metaverse Stock Exchange
              </h3>
              <p style={{ fontSize: "0.9rem", opacity: 0.85 }}>
                A trading floor built from light—liquidity for worlds that run on code.
              </p>
            </div>

            {/* Crypto 5 – etherium-spirit.png */}
            <div
              style={{
                flex: "1 1 260px",
                maxWidth: "280px",
                backgroundColor: "#11111b",
                borderRadius: "14px",
                padding: "1rem",
                boxShadow: "0 0 25px rgba(0, 0, 0, 0.45)",
                border: "1px solid #26263b",
              }}
            >
              <img
                src="/etherium-spirit.png"
                alt="Ethereum Spirit"
                style={{
                  width: "100%",
                  height: "190px",
                  borderRadius: "10px",
                  objectFit: "cover",
                  marginBottom: "0.75rem",
                }}
              />
              <h3 style={{ fontSize: "1.1rem", marginBottom: "0.25rem" }}>
                Ethereum Spirit
              </h3>
              <p style={{ fontSize: "0.9rem", opacity: 0.85 }}>
                A spectral guardian of the network—secure, omnipresent, composable.
              </p>
            </div>

            {/* Crypto 6 – take-your-medicine.png */}
            <div
              style={{
                flex: "1 1 260px",
                maxWidth: "280px",
                backgroundColor: "#11111b",
                borderRadius: "14px",
                padding: "1rem",
                boxShadow: "0 0 25px rgba(0, 0, 0, 0.45)",
                border: "1px solid #26263b",
              }}
            >
              <img
                src="/take-your-medicine.png"
                alt="Take Your Medicine"
                style={{
                  width: "100%",
                  height: "190px",
                  borderRadius: "10px",
                  objectFit: "cover",
                  marginBottom: "0.75rem",
                }}
              />
              <h3 style={{ fontSize: "1.1rem", marginBottom: "0.25rem" }}>
                Take Your Medicine
              </h3>
              <p style={{ fontSize: "0.9rem", opacity: 0.85 }}>
                A reminder that volatility is the dose for those who seek freedom in finance.
              </p>
            </div>

            {/* Crypto 7 – the-last-bank.png */}
            <div
              style={{
                flex: "1 1 260px",
                maxWidth: "280px",
                backgroundColor: "#11111b",
                borderRadius: "14px",
                padding: "1rem",
                boxShadow: "0 0 25px rgba(0, 0, 0, 0.45)",
                border: "1px solid #26263b",
              }}
            >
              <img
                src="/the-last-bank.png"
                alt="The Last Bank"
                style={{
                  width: "100%",
                  height: "190px",
                  borderRadius: "10px",
                  objectFit: "cover",
                  marginBottom: "0.75rem",
                }}
              />
              <h3 style={{ fontSize: "1.1rem", marginBottom: "0.25rem" }}>
                The Last Bank
              </h3>
              <p style={{ fontSize: "0.9rem", opacity: 0.85 }}>
                A lone vault dissolving into chains—an artifact of the pre-crypto era.
              </p>
            </div>
          </div>
        </section>

        {/* Dataverse category */}
        <section
          id="dataverse"
          style={{
            paddingBottom: "3rem",
            borderTop: "1px solid #1f1f30",
            paddingTop: "2.5rem",
          }}
        >
          <h2 style={{ fontSize: "1.9rem", marginBottom: "1.25rem" }}>
            Dataverse Series
          </h2>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.7,
              maxWidth: "640px",
              color: "#d0d0e0",
              marginBottom: "1.25rem",
            }}
          >
            Explorations of worlds made from data—where information becomes terrain,
            architecture, and atmosphere.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1.5rem",
            }}
          >
            {/* Dataverse 1 – data-waterfall.png */}
            <div
              style={{
                flex: "1 1 260px",
                maxWidth: "280px",
                backgroundColor: "#11111b",
                borderRadius: "14px",
                padding: "1rem",
                boxShadow: "0 0 25px rgba(0, 0, 0, 0.45)",
                border: "1px solid #26263b",
              }}
            >
              <img
                src="/data-waterfall.png"
                alt="Data Waterfall"
                style={{
                  width: "100%",
                  height: "190px",
                  borderRadius: "10px",
                  objectFit: "cover",
                  marginBottom: "0.75rem",
                }}
              />
              <h3 style={{ fontSize: "1.1rem", marginBottom: "0.25rem" }}>
                Data Waterfall
              </h3>
              <p style={{ fontSize: "0.9rem", opacity: 0.85 }}>
                Streams of information cascading into a luminous pool of insight.
              </p>
            </div>

            {/* Dataverse 2 – algorithmic-forest.png */}
            <div
              style={{
                flex: "1 1 260px",
                maxWidth: "280px",
                backgroundColor: "#11111b",
                borderRadius: "14px",
                padding: "1rem",
                boxShadow: "0 0 25px rgba(0, 0, 0, 0.45)",
                border: "1px solid #26263b",
              }}
            >
              <img
                src="/algorithmic-forest.png"
                alt="Algorithmic Forest"
                style={{
                  width: "100%",
                  height: "190px",
                  borderRadius: "10px",
                  objectFit: "cover",
                  marginBottom: "0.75rem",
                }}
              />
              <h3 style={{ fontSize: "1.1rem", marginBottom: "0.25rem" }}>
                Algorithmic Forest
              </h3>
              <p style={{ fontSize: "0.9rem", opacity: 0.85 }}>
                Code-grown trees branching through probabilistic paths and patterns.
              </p>
            </div>

            {/* Dataverse 3 – quantum-data-strings.png */}
            <div
              style={{
                flex: "1 1 260px",
                maxWidth: "280px",
                backgroundColor: "#11111b",
                borderRadius: "14px",
                padding: "1rem",
                boxShadow: "0 0 25px rgba(0, 0, 0, 0.45)",
                border: "1px solid #26263b",
              }}
            >
              <img
                src="/quantum-data-strings.png"
                alt="Quantum Data Strings"
                style={{
                  width: "100%",
                  height: "190px",
                  borderRadius: "10px",
                  objectFit: "cover",
                  marginBottom: "0.75rem",
                }}
              />
              <h3 style={{ fontSize: "1.1rem", marginBottom: "0.25rem" }}>
                Quantum Data Strings
              </h3>
              <p style={{ fontSize: "0.9rem", opacity: 0.85 }}>
                Entangled threads of information vibrating between possibility and signal.
              </p>
            </div>

            {/* Dataverse 4 – origami.png */}
            <div
              style={{
                flex: "1 1 260px",
                maxWidth: "280px",
                backgroundColor: "#11111b",
                borderRadius: "14px",
                padding: "1rem",
                boxShadow: "0 0 25px rgba(0, 0, 0, 0.45)",
                border: "1px solid #26263b",
              }}
            >
              <img
                src="/origami.png"
                alt="Data Origami"
                style={{
                  width: "100%",
                  height: "190px",
                  borderRadius: "10px",
                  objectFit: "cover",
                  marginBottom: "0.75rem",
                }}
              />
              <h3 style={{ fontSize: "1.1rem", marginBottom: "0.25rem" }}>
                Data Origami
              </h3>
              <p style={{ fontSize: "0.9rem", opacity: 0.85 }}>
                Sheets of raw data folded into delicate, precise structures of meaning.
              </p>
            </div>

            {/* Dataverse 5 – hidden-manifold.png */}
            <div
              style={{
                flex: "1 1 260px",
                maxWidth: "280px",
                backgroundColor: "#11111b",
                borderRadius: "14px",
                padding: "1rem",
                boxShadow: "0 0 25px rgba(0, 0, 0, 0.45)",
                border: "1px solid #26263b",
              }}
            >
              <img
                src="/hidden-manifold.png"
                alt="Hidden Manifold"
                style={{
                  width: "100%",
                  height: "190px",
                  borderRadius: "10px",
                  objectFit: "cover",
                  marginBottom: "0.75rem",
                }}
              />
              <h3 style={{ fontSize: "1.1rem", marginBottom: "0.25rem" }}>
                Hidden Manifold
              </h3>
              <p style={{ fontSize: "0.9rem", opacity: 0.85 }}>
                A curved data manifold revealed—where folded structure exposes hidden signal.
              </p>
            </div>

            {/* Dataverse 6 – aggregation-field.png */}
            <div
              style={{
                flex: "1 1 260px",
                maxWidth: "280px",
                backgroundColor: "#11111b",
                borderRadius: "14px",
                padding: "1rem",
                boxShadow: "0 0 25px rgba(0, 0, 0, 0.45)",
                border: "1px solid #26263b",
              }}
            >
              <img
                src="/aggregation-field.png"
                alt="Aggregation Field"
                style={{
                  width: "100%",
                  height: "190px",
                  borderRadius: "10px",
                  objectFit: "cover",
                  marginBottom: "0.75rem",
                }}
              />
              <h3 style={{ fontSize: "1.1rem", marginBottom: "0.25rem" }}>
                Aggregation Field
              </h3>
              <p style={{ fontSize: "0.9rem", opacity: 0.85 }}>
                Data streams coalescing into a dense lattice—information converged into a single coherent flow.
              </p>
            </div>
          </div>
        </section>

        {/* Dimensional Continuum category */}
        <section
          id="dimensional-continuum"
          style={{
            paddingBottom: "3rem",
            borderTop: "1px solid #1f1f30",
            paddingTop: "2.5rem",
          }}
        >
          <h2 style={{ fontSize: "1.9rem", marginBottom: "1.25rem" }}>
            Dimensional Continuum Series
          </h2>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.7,
              maxWidth: "640px",
              color: "#d0d0e0",
              marginBottom: "1.25rem",
            }}
          >
            Exploring layered realities—planes, folds, and liminal spaces where dimensions intersect.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1.5rem",
            }}
          >
            {/* Dimensional Continuum 1 – axis-distortion.png */}
            <div
              style={{
                flex: "1 1 260px",
                maxWidth: "280px",
                backgroundColor: "#11111b",
                borderRadius: "14px",
                padding: "1rem",
                boxShadow: "0 0 25px rgba(0, 0, 0, 0.45)",
                border: "1px solid #26263b",
              }}
            >
              <img
                src="/axis-distortion.png"
                alt="Axis Distortion"
                style={{
                  width: "100%",
                  height: "190px",
                  borderRadius: "10px",
                  objectFit: "cover",
                  marginBottom: "0.75rem",
                }}
              />
              <h3 style={{ fontSize: "1.1rem", marginBottom: "0.25rem" }}>
                Axis Distortion
              </h3>
              <p style={{ fontSize: "0.9rem", opacity: 0.85 }}>
                Reference lines bending under hidden gravity—geometry under strain.
              </p>
            </div>

            {/* Dimensional Continuum 2 – continuum-overlap.png */}
            <div
              style={{
                flex: "1 1 260px",
                maxWidth: "280px",
                backgroundColor: "#11111b",
                borderRadius: "14px",
                padding: "1rem",
                boxShadow: "0 0 25px rgba(0, 0, 0, 0.45)",
                border: "1px solid #26263b",
              }}
            >
              <img
                src="/continuum-overlap.png"
                alt="Continuum Overlap"
                style={{
                  width: "100%",
                  height: "190px",
                  borderRadius: "10px",
                  objectFit: "cover",
                  marginBottom: "0.75rem",
                }}
              />
              <h3 style={{ fontSize: "1.1rem", marginBottom: "0.25rem" }}>
                Continuum Overlap
              </h3>
              <p style={{ fontSize: "0.9rem", opacity: 0.85 }}>
                Two planes of reality sliding across each other—moments doubled, briefly one.
              </p>
            </div>

            {/* Dimensional Continuum 3 – inward-arc.png */}
            <div
              style={{
                flex: "1 1 260px",
                maxWidth: "280px",
                backgroundColor: "#11111b",
                borderRadius: "14px",
                padding: "1rem",
                boxShadow: "0 0 25px rgba(0, 0, 0, 0.45)",
                border: "1px solid #26263b",
              }}
            >
              <img
                src="/inward-arc.png"
                alt="Inward Arc"
                style={{
                  width: "100%",
                  height: "190px",
                  borderRadius: "10px",
                  objectFit: "cover",
                  marginBottom: "0.75rem",
                }}
              />
              <h3 style={{ fontSize: "1.1rem", marginBottom: "0.25rem" }}>
                Inward Arc
              </h3>
              <p style={{ fontSize: "0.9rem", opacity: 0.85 }}>
                Curvature collapsing toward a center—space folding back on itself.
              </p>
            </div>

            {/* Dimensional Continuum 4 – singularity-convergence.png */}
            <div
              style={{
                flex: "1 1 260px",
                maxWidth: "280px",
                backgroundColor: "#11111b",
                borderRadius: "14px",
                padding: "1rem",
                boxShadow: "0 0 25px rgba(0, 0, 0, 0.45)",
                border: "1px solid #26263b",
              }}
            >
              <img
                src="/singularity-convergence.png"
                alt="Singularity Convergence"
                style={{
                  width: "100%",
                  height: "190px",
                  borderRadius: "10px",
                  objectFit: "cover",
                  marginBottom: "0.75rem",
                }}
              />
              <h3 style={{ fontSize: "1.1rem", marginBottom: "0.25rem" }}>
                Singularity Convergence
              </h3>
              <p style={{ fontSize: "0.9rem", opacity: 0.85 }}>
                Every vector pulled to a single point—time, space, and matter tightening together.
              </p>
            </div>

            {/* Dimensional Continuum 5 – terminal-confluence.png */}
            <div
              style={{
                flex: "1 1 260px",
                maxWidth: "280px",
                backgroundColor: "#11111b",
                borderRadius: "14px",
                padding: "1rem",
                boxShadow: "0 0 25px rgba(0, 0, 0, 0.45)",
                border: "1px solid #26263b",
              }}
            >
              <img
                src="/terminal-confluence.png"
                alt="Terminal Confluence"
                style={{
                  width: "100%",
                  height: "190px",
                  borderRadius: "10px",
                  objectFit: "cover",
                  marginBottom: "0.75rem",
                }}
              />
              <h3 style={{ fontSize: "1.1rem", marginBottom: "0.25rem" }}>
                Terminal Confluence
              </h3>
              <p style={{ fontSize: "0.9rem", opacity: 0.85 }}>
                Intersecting paths arriving at a final junction—lines of fate meeting at the edge.
              </p>
            </div>

            {/* Dimensional Continuum 6 – warped-plane.png */}
            <div
              style={{
                flex: "1 1 260px",
                maxWidth: "280px",
                backgroundColor: "#11111b",
                borderRadius: "14px",
                padding: "1rem",
                boxShadow: "0 0 25px rgba(0, 0, 0, 0.45)",
                border: "1px solid #26263b",
              }}
            >
              <img
                src="/warped-plane.png"
                alt="Warped Plane"
                style={{
                  width: "100%",
                  height: "190px",
                  borderRadius: "10px",
                  objectFit: "cover",
                  marginBottom: "0.75rem",
                }}
              />
              <h3 style={{ fontSize: "1.1rem", marginBottom: "0.25rem" }}>
                Warped Plane
              </h3>
              <p style={{ fontSize: "0.9rem", opacity: 0.85 }}>
                A flat world twisted into relief—surface tension reshaping geometry.
              </p>
            </div>
          </div>
        </section>

        {/* Energy category */}
        <section
          id="energy"
          style={{
            paddingBottom: "3rem",
            borderTop: "1px solid #1f1f30",
            paddingTop: "2.5rem",
          }}
        >
          <h2 style={{ fontSize: "1.9rem", marginBottom: "1.25rem" }}>
            Energy Series
          </h2>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.7,
              maxWidth: "640px",
              color: "#d0d0e0",
              marginBottom: "1.25rem",
            }}
          >
            Studies of motion, charge, and flow—capturing the pulse that powers both nature and machines.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1.5rem",
            }}
          >
            {/* Energy 1 – aurora.png */}
            <div
              style={{
                flex: "1 1 260px",
                maxWidth: "280px",
                backgroundColor: "#11111b",
                borderRadius: "14px",
                padding: "1rem",
                boxShadow: "0 0 25px rgba(0, 0, 0, 0.45)",
                border: "1px solid #26263b",
              }}
            >
              <img
                src="/aurora.png"
                alt="Aurora"
                style={{
                  width: "100%",
                  height: "190px",
                  borderRadius: "10px",
                  objectFit: "cover",
                  marginBottom: "0.75rem",
                }}
              />
              <h3 style={{ fontSize: "1.1rem", marginBottom: "0.25rem" }}>
                Aurora
              </h3>
              <p style={{ fontSize: "0.9rem", opacity: 0.85 }}>
                Solar wind painted across the magnetosphere in charged ribbons of light.
              </p>
            </div>

            {/* Energy 2 – concentric-wave.png */}
            <div
              style={{
                flex: "1 1 260px",
                maxWidth: "280px",
                backgroundColor: "#11111b",
                borderRadius: "14px",
                padding: "1rem",
                boxShadow: "0 0 25px rgba(0, 0, 0, 0.45)",
                border: "1px solid #26263b",
              }}
            >
              <img
                src="/concentric-wave.png"
                alt="Concentric Wave"
                style={{
                  width: "100%",
                  height: "190px",
                  borderRadius: "10px",
                  objectFit: "cover",
                  marginBottom: "0.75rem",
                }}
              />
              <h3 style={{ fontSize: "1.1rem", marginBottom: "0.25rem" }}>
                Concentric Wave
              </h3>
              <p style={{ fontSize: "0.9rem", opacity: 0.85 }}>
                Expanding ripples of force—energy radiating evenly from a single impulse.
              </p>
            </div>

            {/* Energy 3 – infinite-ribbons.png */}
            <div
              style={{
                flex: "1 1 260px",
                maxWidth: "280px",
                backgroundColor: "#11111b",
                borderRadius: "14px",
                padding: "1rem",
                boxShadow: "0 0 25px rgba(0, 0, 0, 0.45)",
                border: "1px solid #26263b",
              }}
            >
              <img
                src="/infinte-ribbons.png"
                alt="Infinite Ribbons"
                style={{
                  width: "100%",
                  height: "190px",
                  borderRadius: "10px",
                  objectFit: "cover",
                  marginBottom: "0.75rem",
                }}
              />
              <h3 style={{ fontSize: "1.1rem", marginBottom: "0.25rem" }}>
                Infinite Ribbons
              </h3>
              <p style={{ fontSize: "0.9rem", opacity: 0.85 }}>
                Unbroken loops of current weaving through space—motion without beginning or end.
              </p>
            </div>

            {/* Energy 4 – luminous-pulse.png */}
            <div
              style={{
                flex: "1 1 260px",
                maxWidth: "280px",
                backgroundColor: "#11111b",
                borderRadius: "14px",
                padding: "1rem",
                boxShadow: "0 0 25px rgba(0, 0, 0, 0.45)",
                border: "1px solid #26263b",
              }}
            >
              <img
                src="/luminous-pulse.png"
                alt="Luminous Pulse"
                style={{
                  width: "100%",
                  height: "190px",
                  borderRadius: "10px",
                  objectFit: "cover",
                  marginBottom: "0.75rem",
                }}
              />
              <h3 style={{ fontSize: "1.1rem", marginBottom: "0.25rem" }}>
                Luminous Pulse
              </h3>
              <p style={{ fontSize: "0.9rem", opacity: 0.85 }}>
                Light condensed into beats—each flash a heartbeat of the grid.
              </p>
            </div>

            {/* Energy 6 – neural-strands.png */}
            <div
              style={{
                flex: "1 1 260px",
                maxWidth: "280px",
                backgroundColor: "#11111b",
                borderRadius: "14px",
                padding: "1rem",
                boxShadow: "0 0 25px rgba(0, 0, 0, 0.45)",
                border: "1px solid #26263b",
              }}
            >
              <img
                src="/neural-strands.png"
                alt="Neural Strands"
                style={{
                  width: "100%",
                  height: "190px",
                  borderRadius: "10px",
                  objectFit: "cover",
                  marginBottom: "0.75rem",
                }}
              />
              <h3 style={{ fontSize: "1.1rem", marginBottom: "0.25rem" }}>
                Neural Strands
              </h3>
              <p style={{ fontSize: "0.9rem", opacity: 0.85 }}>
                Synaptic filaments firing in tandem—intelligence as living electricity.
              </p>
            </div>

            {/* Energy 7 – recursive-branching.png */}
            <div
              style={{
                flex: "1 1 260px",
                maxWidth: "280px",
                backgroundColor: "#11111b",
                borderRadius: "14px",
                padding: "1rem",
                boxShadow: "0 0 25px rgba(0, 0, 0, 0.45)",
                border: "1px solid #26263b",
              }}
            >
              <img
                src="/recursive-branching.png"
                alt="Recursive Branching"
                style={{
                  width: "100%",
                  height: "190px",
                  borderRadius: "10px",
                  objectFit: "cover",
                  marginBottom: "0.75rem",
                }}
              />
              <h3 style={{ fontSize: "1.1rem", marginBottom: "0.25rem" }}>
                Recursive Branching
              </h3>
              <p style={{ fontSize: "0.9rem", opacity: 0.85 }}>
                Fractal conduits splitting and rejoining—power distributing through endless paths.
              </p>
            </div>

            {/* Energy 8 – rhythmic-pulse.png */}
            <div
              style={{
                flex: "1 1 260px",
                maxWidth: "280px",
                backgroundColor: "#11111b",
                borderRadius: "14px",
                padding: "1rem",
                boxShadow: "0 0 25px rgba(0, 0, 0, 0.45)",
                border: "1px solid #26263b",
              }}
            >
              <img
                src="/rhythmic-pulse.png"
                alt="Rhythmic Pulse"
                style={{
                  width: "100%",
                  height: "190px",
                  borderRadius: "10px",
                  objectFit: "cover",
                  marginBottom: "0.75rem",
                }}
              />
              <h3 style={{ fontSize: "1.1rem", marginBottom: "0.25rem" }}>
                Rhythmic Pulse
              </h3>
              <p style={{ fontSize: "0.9rem", opacity: 0.85 }}>
                Metered surges of energy—tempo becoming texture across the frame.
              </p>
            </div>

            {/* Energy 9 – volatility-storm.png */}
            <div
              style={{
                flex: "1 1 260px",
                maxWidth: "280px",
                backgroundColor: "#11111b",
                borderRadius: "14px",
                padding: "1rem",
                boxShadow: "0 0 25px rgba(0, 0, 0, 0.45)",
                border: "1px solid #26263b",
              }}
            >
              <img
                src="/volatility-storm.png"
                alt="Volatility Storm"
                style={{
                  width: "100%",
                  height: "190px",
                  borderRadius: "10px",
                  objectFit: "cover",
                  marginBottom: "0.75rem",
                }}
              />
              <h3 style={{ fontSize: "1.1rem", marginBottom: "0.25rem" }}>
                Volatility Storm
              </h3>
              <p style={{ fontSize: "0.9rem", opacity: 0.85 }}>
                Lightning in data form—turbulence captured as charged geometry.
              </p>
            </div>
          </div>
        </section>

        {/* Immutable category */}
        <section
          id="immutable"
          style={{
            paddingBottom: "3rem",
            borderTop: "1px solid #1f1f30",
            paddingTop: "2.5rem",
          }}
        >
          <h2 style={{ fontSize: "1.9rem", marginBottom: "1.25rem" }}>
            Immutable Series
          </h2>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.7,
              maxWidth: "640px",
              color: "#d0d0e0",
              marginBottom: "1.25rem",
            }}
          >
            Permanence rendered in code and stone—works that resist change and anchor the chain.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1.5rem",
            }}
          >
            {/* Immutable 1 – irreversible-form.png */}
            <div
              style={{
                flex: "1 1 260px",
                maxWidth: "280px",
                backgroundColor: "#11111b",
                borderRadius: "14px",
                padding: "1rem",
                boxShadow: "0 0 25px rgba(0, 0, 0, 0.45)",
                border: "1px solid #26263b",
              }}
            >
              <img
                src="/irreversible-form.png"
                alt="Irreversible Form"
                style={{
                  width: "100%",
                  height: "190px",
                  borderRadius: "10px",
                  objectFit: "cover",
                  marginBottom: "0.75rem",
                }}
              />
              <h3 style={{ fontSize: "1.1rem", marginBottom: "0.25rem" }}>
                Irreversible Form
              </h3>
              <p style={{ fontSize: "0.9rem", opacity: 0.85 }}>
                A shape cast once and forever—change recorded as a permanent state.
              </p>
            </div>

            {/* Immutable 2 – locked-recursion.png */}
            <div
              style={{
                flex: "1 1 260px",
                maxWidth: "280px",
                backgroundColor: "#11111b",
                borderRadius: "14px",
                padding: "1rem",
                boxShadow: "0 0 25px rgba(0, 0, 0, 0.45)",
                border: "1px solid #26263b",
              }}
            >
              <img
                src="/locked-recursion.png"
                alt="Locked Recursion"
                style={{
                  width: "100%",
                  height: "190px",
                  borderRadius: "10px",
                  objectFit: "cover",
                  marginBottom: "0.75rem",
                }}
              />
              <h3 style={{ fontSize: "1.1rem", marginBottom: "0.25rem" }}>
                Locked Recursion
              </h3>
              <p style={{ fontSize: "0.9rem", opacity: 0.85 }}>
                A loop sealed in code—each iteration inscribed, none ever rewritten.
              </p>
            </div>

            {/* Immutable 3 – permanent-boundary.png */}
            <div
              style={{
                flex: "1 1 260px",
                maxWidth: "280px",
                backgroundColor: "#11111b",
                borderRadius: "14px",
                padding: "1rem",
                boxShadow: "0 0 25px rgba(0, 0, 0, 0.45)",
                border: "1px solid #26263b",
              }}
            >
              <img
                src="/permanent-boundary.png"
                alt="Permanent Boundary"
                style={{
                  width: "100%",
                  height: "190px",
                  borderRadius: "10px",
                  objectFit: "cover",
                  marginBottom: "0.75rem",
                }}
              />
              <h3 style={{ fontSize: "1.1rem", marginBottom: "0.25rem" }}>
                Permanent Boundary
              </h3>
              <p style={{ fontSize: "0.9rem", opacity: 0.85 }}>
                A line that cannot be crossed—an edge etched into ledger stone.
              </p>
            </div>

            {/* Immutable 4 – settled-symmetry.png */}
            <div
              style={{
                flex: "1 1 260px",
                maxWidth: "280px",
                backgroundColor: "#11111b",
                borderRadius: "14px",
                padding: "1rem",
                boxShadow: "0 0 25px rgba(0, 0, 0, 0.45)",
                border: "1px solid #26263b",
              }}
            >
              <img
                src="/settled-symmetry.png"
                alt="Settled Symmetry"
                style={{
                  width: "100%",
                  height: "190px",
                  borderRadius: "10px",
                  objectFit: "cover",
                  marginBottom: "0.75rem",
                }}
              />
              <h3 style={{ fontSize: "1.1rem", marginBottom: "0.25rem" }}>
                Settled Symmetry
              </h3>
              <p style={{ fontSize: "0.9rem", opacity: 0.85 }}>
                Balance fixed in place—reflection locked and preserved without decay.
              </p>
            </div>

            {/* Immutable 5 – untouched-core.png */}
            <div
              style={{
                flex: "1 1 260px",
                maxWidth: "280px",
                backgroundColor: "#11111b",
                borderRadius: "14px",
                padding: "1rem",
                boxShadow: "0 0 25px rgba(0, 0, 0, 0.45)",
                border: "1px solid #26263b",
              }}
            >
              <img
                src="/untouched-core.png"
                alt="Untouched Core"
                style={{
                  width: "100%",
                  height: "190px",
                  borderRadius: "10px",
                  objectFit: "cover",
                  marginBottom: "0.75rem",
                }}
              />
              <h3 style={{ fontSize: "1.1rem", marginBottom: "0.25rem" }}>
                Untouched Core
              </h3>
              <p style={{ fontSize: "0.9rem", opacity: 0.85 }}>
                A protected center held beyond alteration—truth stored in immutable strata.
              </p>
            </div>
          </div>
        </section>

        {/* Mind Collective category */}
        <section
          id="mind-collective"
          style={{
            paddingBottom: "3rem",
            borderTop: "1px solid #1f1f30",
            paddingTop: "2.5rem",
          }}
        >
          <h2 style={{ fontSize: "1.9rem", marginBottom: "1.25rem" }}>
            Mind Collective Series
          </h2>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.7,
              maxWidth: "640px",
              color: "#d0d0e0",
              marginBottom: "1.25rem",
            }}
          >
            Shared cognition and networked perception—where individual signals sync into one evolving intelligence.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1.5rem",
            }}
          >
            {/* Mind Collective 1 – adaptive-swarm.png */}
            <div
              style={{
                flex: "1 1 260px",
                maxWidth: "280px",
                backgroundColor: "#11111b",
                borderRadius: "14px",
                padding: "1rem",
                boxShadow: "0 0 25px rgba(0, 0, 0, 0.45)",
                border: "1px solid #26263b",
              }}
            >
              <img
                src="/adaptive-swarm.png"
                alt="Adaptive Swarm"
                style={{
                  width: "100%",
                  height: "190px",
                  borderRadius: "10px",
                  objectFit: "cover",
                  marginBottom: "0.75rem",
                }}
              />
              <h3 style={{ fontSize: "1.1rem", marginBottom: "0.25rem" }}>
                Adaptive Swarm
              </h3>
              <p style={{ fontSize: "0.9rem", opacity: 0.85 }}>
                A hive of agents adjusting in real time—collective intent emerging from many minds.
              </p>
            </div>

            {/* Mind Collective 2 – distributed-core.png */}
            <div
              style={{
                flex: "1 1 260px",
                maxWidth: "280px",
                backgroundColor: "#11111b",
                borderRadius: "14px",
                padding: "1rem",
                boxShadow: "0 0 25px rgba(0, 0, 0, 0.45)",
                border: "1px solid #26263b",
              }}
            >
              <img
                src="/distributed-core.png"
                alt="Distributed Core"
                style={{
                  width: "100%",
                  height: "190px",
                  borderRadius: "10px",
                  objectFit: "cover",
                  marginBottom: "0.75rem",
                }}
              />
              <h3 style={{ fontSize: "1.1rem", marginBottom: "0.25rem" }}>
                Distributed Core
              </h3>
              <p style={{ fontSize: "0.9rem", opacity: 0.85 }}>
                A central will diffused across nodes—intelligence with no single point of failure.
              </p>
            </div>

            {/* Mind Collective 3 – layered-consciousness.png */}
            <div
              style={{
                flex: "1 1 260px",
                maxWidth: "280px",
                backgroundColor: "#11111b",
                borderRadius: "14px",
                padding: "1rem",
                boxShadow: "0 0 25px rgba(0, 0, 0, 0.45)",
                border: "1px solid #26263b",
              }}
            >
              <img
                src="/layered-consciousness.png"
                alt="Layered Consciousness"
                style={{
                  width: "100%",
                  height: "190px",
                  borderRadius: "10px",
                  objectFit: "cover",
                  marginBottom: "0.75rem",
                }}
              />
              <h3 style={{ fontSize: "1.1rem", marginBottom: "0.25rem" }}>
                Layered Consciousness
              </h3>
              <p style={{ fontSize: "0.9rem", opacity: 0.85 }}>
                Stacked perceptions flowing upward—each layer refining signal into thought.
              </p>
            </div>

            {/* Mind Collective 4 – resonant-plane.png */}
            <div
              style={{
                flex: "1 1 260px",
                maxWidth: "280px",
                backgroundColor: "#11111b",
                borderRadius: "14px",
                padding: "1rem",
                boxShadow: "0 0 25px rgba(0, 0, 0, 0.45)",
                border: "1px solid #26263b",
              }}
            >
              <img
                src="/resonant-plane.png"
                alt="Resonant Plane"
                style={{
                  width: "100%",
                  height: "190px",
                  borderRadius: "10px",
                  objectFit: "cover",
                  marginBottom: "0.75rem",
                }}
              />
              <h3 style={{ fontSize: "1.1rem", marginBottom: "0.25rem" }}>
                Resonant Plane
              </h3>
              <p style={{ fontSize: "0.9rem", opacity: 0.85 }}>
                A shared surface humming with signals—coherence achieved through resonance.
              </p>
            </div>

            {/* Mind Collective 5 – silent-grid.png */}
            <div
              style={{
                flex: "1 1 260px",
                maxWidth: "280px",
                backgroundColor: "#11111b",
                borderRadius: "14px",
                padding: "1rem",
                boxShadow: "0 0 25px rgba(0, 0, 0, 0.45)",
                border: "1px solid #26263b",
              }}
            >
              <img
                src="/silent-grid.png"
                alt="Silent Grid"
                style={{
                  width: "100%",
                  height: "190px",
                  borderRadius: "10px",
                  objectFit: "cover",
                  marginBottom: "0.75rem",
                }}
              />
              <h3 style={{ fontSize: "1.1rem", marginBottom: "0.25rem" }}>
                Silent Grid
              </h3>
              <p style={{ fontSize: "0.9rem", opacity: 0.85 }}>
                Quiet nodes awaiting activation—potential intelligence held in perfect stillness.
              </p>
            </div>

          </div>
        </section>

        {/* Nature category */}
        <section
          id="nature"
          style={{
            paddingBottom: "3rem",
            borderTop: "1px solid #1f1f30",
            paddingTop: "2.5rem",
          }}
        >
          <h2 style={{ fontSize: "1.9rem", marginBottom: "1.25rem" }}>
            Nature Series
          </h2>

          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.7,
              maxWidth: "640px",
              color: "#d0d0e0",
              marginBottom: "1.25rem",
            }}
          >
            Organic forms and living systems interpreted through a digital lens—growth,
            decay, and renewal rendered in light.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1.5rem",
            }}
          >
            {/* Nature – érosion.png */}
            <div
              style={{
                flex: "1 1 260px",
                maxWidth: "280px",
                backgroundColor: "#11111b",
                borderRadius: "14px",
                padding: "1rem",
                boxShadow: "0 0 25px rgba(0, 0, 0, 0.45)",
                border: "1px solid #26263b",
              }}
            >
              <img
                src="/érosion.png"
                alt="Érosion"
                style={{
                  width: "100%",
                  height: "190px",
                  borderRadius: "10px",
                  objectFit: "cover",
                  marginBottom: "0.75rem",
                }}
              />
              <h3 style={{ fontSize: "1.1rem", marginBottom: "0.25rem" }}>
                Érosion
              </h3>
              <p style={{ fontSize: "0.9rem", opacity: 0.85 }}>
                A restrained study of transition—the precise boundary where solid form yields to time and motion.
              </p>
            </div>

            {/* Nature – poise.png */}
            <div
              style={{
                flex: "1 1 260px",
                maxWidth: "280px",
                backgroundColor: "#11111b",
                borderRadius: "14px",
                padding: "1rem",
                boxShadow: "0 0 25px rgba(0, 0, 0, 0.45)",
                border: "1px solid #26263b",
              }}
            >
              <img
                src="/poise.png"
                alt="Poise"
                style={{
                  width: "100%",
                  height: "190px",
                  borderRadius: "10px",
                  objectFit: "cover",
                  marginBottom: "0.75rem",
                }}
              />
              <h3 style={{ fontSize: "1.1rem", marginBottom: "0.25rem" }}>
                Poise
              </h3>
              <p style={{ fontSize: "0.9rem", opacity: 0.85 }}>
                Suspended motion at the boundary between stillness and release.
              </p>
            </div>

            {/* Nature – veil.png */}
            <div
              style={{
                flex: "1 1 260px",
                maxWidth: "280px",
                backgroundColor: "#11111b",
                borderRadius: "14px",
                padding: "1rem",
                boxShadow: "0 0 25px rgba(0, 0, 0, 0.45)",
                border: "1px solid #26263b",
              }}
            >
              <img
                src="/veil.png"
                alt="Veil"
                style={{
                  width: "100%",
                  height: "190px",
                  borderRadius: "10px",
                  objectFit: "cover",
                  marginBottom: "0.75rem",
                }}
              />
              <h3 style={{ fontSize: "1.1rem", marginBottom: "0.25rem" }}>
                Veil
              </h3>
              <p style={{ fontSize: "0.9rem", opacity: 0.85 }}>
                Quiet agent of transformation, muted rather than concealed.
              </p>
            </div>

            {/* Nature – descent.png */}
            <div
              style={{
                flex: "1 1 260px",
                maxWidth: "280px",
                backgroundColor: "#11111b",
                borderRadius: "14px",
                padding: "1rem",
                boxShadow: "0 0 25px rgba(0, 0, 0, 0.45)",
                border: "1px solid #26263b",
              }}
            >
              <img
                src="/descent.png"
                alt="Descent"
                style={{
                  width: "100%",
                  height: "190px",
                  borderRadius: "10px",
                  objectFit: "cover",
                  marginBottom: "0.75rem",
                }}
              />
              <h3 style={{ fontSize: "1.1rem", marginBottom: "0.25rem" }}>
                Descent
              </h3>
              <p style={{ fontSize: "0.9rem", opacity: 0.85 }}>
                A moment of transition, where brightness begins to withdraw and form yields to tone.
              </p>
            </div>

            {/* Nature – held-horizon.png */}
            <div
              style={{
                flex: "1 1 260px",
                maxWidth: "280px",
                backgroundColor: "#11111b",
                borderRadius: "14px",
                padding: "1rem",
                boxShadow: "0 0 25px rgba(0, 0, 0, 0.45)",
                border: "1px solid #26263b",
              }}
            >
              <img
                src="/held-horizon.png"
                alt="Held Horizon"
                style={{
                  width: "100%",
                  height: "190px",
                  borderRadius: "10px",
                  objectFit: "cover",
                  marginBottom: "0.75rem",
                }}
              />
              <h3 style={{ fontSize: "1.1rem", marginBottom: "0.25rem" }}>
                Held Horizon
              </h3>
              <p style={{ fontSize: "0.9rem", opacity: 0.85 }}>
                A small silhouette, fleeting movement against an expansive field of sky.
              </p>
            </div>
          </div>
        </section>

        {/* About section */}
        <section
          id="about"
          style={{
            paddingBottom: "3rem",
            borderTop: "1px solid #1f1f30",
            paddingTop: "2.5rem",
          }}
        >
          <h2 style={{ fontSize: "1.9rem", marginBottom: "1rem" }}>
            About the Artist
          </h2>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              maxWidth: "700px",
              color: "#d0d0e0",
            }}
          >
            Ramé Delaireaux creates digital art for collectors who live at the
            edge of innovation. His work blends bold visual storytelling with
            the principles that define the crypto world—scarcity,
            transparency, and true digital ownership. Each piece is conceived as
            a verifiable on-chain artwork: original, intentional, and built to
            outlast the platforms that display it.
          </p>
        </section>

        {/* Contact section */}
        <section
          id="contact"
          style={{
            paddingBottom: "2rem",
            borderTop: "1px solid #1f1f30",
            paddingTop: "2.5rem",
          }}
        >
          <h2 style={{ fontSize: "1.9rem", marginBottom: "1rem" }}>
            Contact
          </h2>
          <p
            style={{
              fontSize: "1rem",
              lineHeight: 1.8,
              maxWidth: "700px",
              color: "#d0d0e0",
              marginBottom: "0.75rem",
            }}
          >
            For collaboration inquiries, commissions, or questions about future
            NFT drops, you can reach me at:
          </p>
          <p style={{ fontSize: "1rem" }}>
            Email:{" "}
            <a
              href="mailto:youremail@example.com"
              style={{ color: "#8ab4ff", textDecoration: "none" }}
            >
              youremail@example.com
            </a>
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid #1f1f30",
          padding: "1rem 1.5rem",
          fontSize: "0.85rem",
          textAlign: "center",
          color: "#9a9ab5",
        }}
      >
        © {new Date().getFullYear()} Ramé Delaireaux Art. All rights reserved.
      </footer>
    </div>
  );
}
