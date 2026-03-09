"use client";

import { useEffect, useMemo, useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

const galleryNav = [
  { id: "cosmic", label: "Cosmic" },
  { id: "blockchain", label: "Crypto" },
  { id: "dataverse", label: "Dataverse" },
  { id: "dimensional-continuum", label: "Dimensional Continuum" },
  { id: "energy", label: "Energy" },
  { id: "immutable", label: "Immutable" },
  { id: "mind-collective", label: "Mind Collective" },
  { id: "nature", label: "Nature" },
];

const galleryData = [
  {
    id: "cosmic",
    title: "Cosmic Series",
    intro:
      "Light, gravity, and spacetime rendered as projections from the edge of the observable universe.",
    pieces: [
      {
        title: "Holographic Principle",
        image: "/hologram1.png",
        description:
          "A visual meditation on the idea that our three-dimensional reality may be encoded on a distant two-dimensional boundary.",
      },
      {
        title: "Event Horizon",
        image: "/horizon.png",
        description:
          "The last visible edge before no information escapes—a boundary between what can be known and what can only be imagined.",
      },
      {
        title: "Cosmic Horizon",
        image: "/cosmic-horizon.png",
        description:
          "Where the observable universe fades into the unknown—light, distance, and time compressed into a single frame.",
      },
      {
        title: "Black Hole Complementarity",
        image: "/complientarity.png",
        description:
          "Two seemingly incompatible perspectives on the same reality, fused into a single visual paradox at the edge of a black hole.",
      },
      {
        title: "Symphony of Dark Matter",
        image: "/symphony-of-dark-matter.png",
        description:
          "An unseen orchestra shaping galaxies, rendered as ripples of hidden mass.",
      },
      {
        title: "Invisible Force",
        image: "/invisible-force.png",
        description:
          "Dark energy accelerating the cosmos—an unseen pressure stretching space itself.",
      },
      {
        title: "Cosmic Genesis",
        image: "/cosmic-genesis.png",
        description:
          "The birth of everything—an explosion of color, energy, and possibility.",
      },
    ],
  },
  {
    id: "blockchain",
    title: "Crypto Series",
    intro:
      "Signals from decentralized finance—code, liquidity, and cryptography visualized as living systems.",
    pieces: [
      {
        title: "Blockchain Sun",
        image: "/blockchain-future.png",
        description:
          "A glowing metaphor for decentralized infrastructure—radiating outward, powering a new kind of digital gravity.",
      },
      {
        title: "Fiat Currency Museum",
        image: "/fiat-currency.png",
        description:
          "Fiat money displayed behind glass like an artifact—an exhibit from a fading era.",
      },
      {
        title: "Crypto Blade",
        image: "/crypto-blade.png",
        description:
          "A razor-sharp emblem of trustless code cutting through legacy rails.",
      },
      {
        title: "Liquidity Rivers",
        image: "/liquidity-rivers.png",
        description:
          "Capital as a living system: branching, converging, and redistributing itself through luminous currents flowing like river deltas in constant motion.",
      },
      {
        title: "Metaverse Stock Exchange",
        image: "/metaverse-stock-exchange.png",
        description:
          "A trading floor built from light—liquidity for worlds that run on code.",
      },
      {
        title: "Ethereum Spirit",
        image: "/etherium-spirit.png",
        description:
          "A spectral guardian of the network—secure, omnipresent, composable.",
      },
      {
        title: "Take Your Medicine",
        image: "/take-your-medicine.png",
        description:
          "A reminder that volatility is the dose for those who seek freedom in finance.",
      },
      {
        title: "The Last Bank",
        image: "/the-last-bank.png",
        description:
          "A lone vault dissolving into chains—an artifact of the pre-crypto era.",
      },
    ],
  },
  {
    id: "dataverse",
    title: "Dataverse Series",
    intro:
      "Explorations of worlds made from data—where information becomes terrain, architecture, and atmosphere.",
    pieces: [
      {
        title: "Data Waterfall",
        image: "/data-waterfall.png",
        description:
          "Streams of information cascading into a luminous pool of insight.",
      },
      {
        title: "Algorithmic Forest",
        image: "/algorithmic-forest.png",
        description:
          "Code-grown trees branching through probabilistic paths and patterns.",
      },
      {
        title: "Quantum Data Strings",
        image: "/quantum-data-strings.png",
        description:
          "Entangled threads of information vibrating between possibility and signal.",
      },
      {
        title: "Data Origami",
        image: "/origami.png",
        description:
          "Sheets of raw data folded into delicate, precise structures of meaning.",
      },
      {
        title: "Hidden Manifold",
        image: "/hidden-manifold.png",
        description:
          "A curved data manifold revealed—where folded structure exposes hidden signal.",
      },
      {
        title: "Aggregation Field",
        image: "/aggregation-field.png",
        description:
          "Data streams coalescing into a dense lattice—information converged into a single coherent flow.",
      },
    ],
  },
  {
    id: "dimensional-continuum",
    title: "Dimensional Continuum Series",
    intro:
      "Exploring layered realities—planes, folds, and liminal spaces where dimensions intersect.",
    pieces: [
      {
        title: "Axis Distortion",
        image: "/axis-distortion.png",
        description:
          "Reference lines bending under hidden gravity—geometry under strain.",
      },
      {
        title: "Continuum Overlap",
        image: "/continuum-overlap.png",
        description:
          "Two planes of reality sliding across each other—moments doubled, briefly one.",
      },
      {
        title: "Inward Arc",
        image: "/inward-arc.png",
        description:
          "Curvature collapsing toward a center—space folding back on itself.",
      },
      {
        title: "Singularity Convergence",
        image: "/singularity-convergence.png",
        description:
          "Every vector pulled to a single point—time, space, and matter tightening together.",
      },
      {
        title: "Terminal Confluence",
        image: "/terminal-confluence.png",
        description:
          "Intersecting paths arriving at a final junction—lines of fate meeting at the edge.",
      },
      {
        title: "Warped Plane",
        image: "/warped-plane.png",
        description:
          "A flat world twisted into relief—surface tension reshaping geometry.",
      },
    ],
  },
  {
    id: "energy",
    title: "Energy Series",
    intro:
      "Studies of motion, charge, and flow—capturing the pulse that powers both nature and machines.",
    pieces: [
      {
        title: "Aurora",
        image: "/aurora.png",
        description:
          "Solar wind painted across the magnetosphere in charged ribbons of light.",
      },
      {
        title: "Concentric Wave",
        image: "/concentric-wave.png",
        description:
          "Expanding ripples of force—energy radiating evenly from a single impulse.",
      },
      {
        title: "Infinite Ribbons",
        image: "/infinte-ribbons.png",
        description:
          "Unbroken loops of current weaving through space—motion without beginning or end.",
      },
      {
        title: "Luminous Pulse",
        image: "/luminous-pulse.png",
        description:
          "Light condensed into beats—each flash a heartbeat of the grid.",
      },
      {
        title: "Neural Strands",
        image: "/neural-strands.png",
        description:
          "Synaptic filaments firing in tandem—intelligence as living electricity.",
      },
      {
        title: "Recursive Branching",
        image: "/recursive-branching.png",
        description:
          "Fractal conduits splitting and rejoining—power distributing through endless paths.",
      },
      {
        title: "Rhythmic Pulse",
        image: "/rhythmic-pulse.png",
        description:
          "Metered surges of energy—tempo becoming texture across the frame.",
      },
      {
        title: "Volatility Storm",
        image: "/volatility-storm.png",
        description:
          "Lightning in data form—turbulence captured as charged geometry.",
      },
    ],
  },
  {
    id: "immutable",
    title: "Immutable Series",
    intro:
      "Permanence rendered in code and stone—works that resist change and anchor the chain.",
    pieces: [
      {
        title: "Irreversible Form",
        image: "/irreversible-form.png",
        description:
          "A shape cast once and forever—change recorded as a permanent state.",
      },
      {
        title: "Locked Recursion",
        image: "/locked-recursion.png",
        description:
          "A loop sealed in code—each iteration inscribed, none ever rewritten.",
      },
      {
        title: "Permanent Boundary",
        image: "/permanent-boundary.png",
        description:
          "A line that cannot be crossed—an edge etched into ledger stone.",
      },
      {
        title: "Settled Symmetry",
        image: "/settled-symmetry.png",
        description:
          "Balance fixed in place—reflection locked and preserved without decay.",
      },
      {
        title: "Untouched Core",
        image: "/untouched-core.png",
        description:
          "A protected center held beyond alteration—truth stored in immutable strata.",
      },
    ],
  },
  {
    id: "mind-collective",
    title: "Mind Collective Series",
    intro:
      "Shared cognition and networked perception—where individual signals sync into one evolving intelligence.",
    pieces: [
      {
        title: "Adaptive Swarm",
        image: "/adaptive-swarm.png",
        description:
          "A hive of agents adjusting in real time—collective intent emerging from many minds.",
      },
      {
        title: "Distributed Core",
        image: "/distributed-core.png",
        description:
          "A central will diffused across nodes—intelligence with no single point of failure.",
      },
      {
        title: "Layered Consciousness",
        image: "/layered-consciousness.png",
        description:
          "Stacked perceptions flowing upward—each layer refining signal into thought.",
      },
      {
        title: "Resonant Plane",
        image: "/resonant-plane.png",
        description:
          "A shared surface humming with signals—coherence achieved through resonance.",
      },
      {
        title: "Silent Grid",
        image: "/silent-grid.png",
        description:
          "Quiet nodes awaiting activation—potential intelligence held in perfect stillness.",
      },
    ],
  },
  {
    id: "nature",
    title: "Nature Series",
    intro:
      "Organic forms and living systems interpreted through a digital lens—growth, decay, and renewal rendered in light.",
    pieces: [
      {
        title: "Érosion",
        image: "/érosion.png",
        description:
          "A restrained study of transition—the precise boundary where solid form yields to time and motion.",
      },
      {
        title: "Poise",
        image: "/poise.png",
        description:
          "Suspended motion at the boundary between stillness and release.",
      },
      {
        title: "Veil",
        image: "/veil.png",
        description:
          "Quiet agent of transformation, muted rather than concealed.",
      },
      {
        title: "Descent",
        image: "/descent.png",
        description:
          "A moment of transition, where brightness begins to withdraw and form yields to tone.",
      },
      {
        title: "Held Horizon",
        image: "/held-horizon.png",
        description:
          "A small silhouette, fleeting movement against an expansive field of sky.",
      },
    ],
  },
];

const buttonBase = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.35rem",
  padding: "0.6rem 0.9rem",
  borderRadius: "999px",
  border: "1px solid #26263b",
  background: "#1b1b28",
  color: "white",
  fontSize: "0.9rem",
  cursor: "pointer",
  transition: "opacity 120ms ease, transform 120ms ease",
};

export default function Home() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isGallerySectionHovered, setIsGallerySectionHovered] = useState(false);
  const [comingSoonPiece, setComingSoonPiece] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { address, isConnected } = useAccount();

  const formatAddress = (addr) =>
    addr ? `${addr.slice(0, 6)}...${addr.slice(-4)}` : "";

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setComingSoonPiece(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop;
      setShowScrollTop(y > 320);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = useMemo(
    () => galleryNav.map((link) => ({ ...link, href: `#${link.id}` })),
    []
  );

  const renderCard = (piece) => (
    <div
      key={piece.title}
      className="art-card"
      onMouseEnter={() => setHoveredCard(piece.title)}
      onMouseLeave={() => setHoveredCard(null)}
      style={{
        position: "relative",
        flex: "1 1 260px",
        maxWidth: "280px",
        background:
          "linear-gradient(150deg, rgba(24,24,38,0.96), rgba(17,17,27,0.96))",
        borderRadius: "14px",
        padding: "1rem",
        boxShadow:
          hoveredCard === piece.title
            ? "0 24px 60px rgba(0,0,0,0.6), 0 0 60px rgba(120,120,255,0.25)"
            : "0 16px 45px rgba(0,0,0,0.55), 0 0 50px rgba(120,120,255,0.18)",
        border:
          hoveredCard === piece.title
            ? "1px solid #5b55f0"
            : "1px solid #26263b",
        display: "flex",
        flexDirection: "column",
        gap: "0.6rem",
        transition:
          "transform 160ms ease, box-shadow 160ms ease, border 160ms ease",
        transform:
          hoveredCard === piece.title ? "translateY(-4px)" : "translateY(0)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: "1px",
          borderRadius: "12px",
          background:
            "radial-gradient(circle at 20% 20%, rgba(95,88,240,0.08), transparent 45%), radial-gradient(circle at 80% 10%, rgba(255,255,255,0.04), transparent 40%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "0.6rem",
        }}
      >
        <div className="art-image-container">
          <img
            className="art-card__img"
            src={piece.image}
            alt={piece.title}
            style={{
              width: "100%",
              height: "190px",
              borderRadius: "10px",
              objectFit: "cover",
              boxShadow:
                "0 20px 60px rgba(0,0,0,0.6), 0 0 60px rgba(120,120,255,0.15)",
            }}
          />
        </div>
        <div className="art-card-body" style={{ display: "flex", flexDirection: "column", gap: "0.45rem" }}>
          <h3 className="art-card__title" style={{ fontSize: "1.1rem", margin: 0 }}>
            {piece.title}
          </h3>
          <p className="art-card__desc" style={{ fontSize: "0.9rem", opacity: 0.85, margin: 0 }}>
            {piece.description}
          </p>
        <div
          className="cta-stack"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.45rem",
            marginTop: "auto",
            }}
          >
            <button
              type="button"
              onClick={() => setComingSoonPiece(piece.title)}
              style={{
                ...buttonBase,
                background: "#4f46e5",
                border: "1px solid #5b55f0",
                boxShadow: "0 10px 25px rgba(79,70,229,0.35)",
              }}
            >
              Mint (Coming Soon)
            </button>
          <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap" }}>
            {["OpenSea", "Etherscan"].map((platform) => (
              <button
                key={platform}
                className="secondary-links"
                type="button"
                aria-disabled="true"
                title={`${platform} link coming soon`}
                style={{
                  ...buttonBase,
                    cursor: "not-allowed",
                    opacity: 0.55,
                    background: "#0f0f18",
                  }}
                >
                  View on {platform} (Coming Soon)
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCategorySection = (category, withBorder = true) => (
    <section
      key={category.id}
      id={category.id}
      style={{
        paddingBottom: "3rem",
        borderTop: withBorder ? "1px solid #1f1f30" : "none",
        paddingTop: withBorder ? "2.5rem" : "0rem",
      }}
    >
      <h2 style={{ fontSize: "1.9rem", marginBottom: "1.25rem" }}>
        {category.title}
      </h2>
      {category.intro && (
        <p
          style={{
            fontSize: "1rem",
            lineHeight: 1.7,
            maxWidth: "640px",
            color: "#d0d0e0",
            marginBottom: "1.25rem",
          }}
        >
          {category.intro}
        </p>
      )}
      <div
        className="cards-grid"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1.5rem",
        }}
      >
        {category.pieces.map(renderCard)}
      </div>
    </section>
  );

  const DropsSection = () => (
    <section
      id="drops"
      style={{
        padding: "2rem 0 3rem",
        borderTop: "1px solid #1f1f30",
        marginTop: "-0.5rem",
      }}
    >
      <h2 style={{ fontSize: "1.9rem", marginBottom: "1rem" }}>
        Drops / Minting
      </h2>
      <p
        style={{
          fontSize: "1rem",
          lineHeight: 1.7,
          maxWidth: "640px",
          color: "#d0d0e0",
          marginBottom: "1rem",
        }}
      >
        Minting is coming soon. Connect your wallet to be ready; we’ll add the
        contract and mint flow here when it’s live.
      </p>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.75rem",
          alignItems: "center",
        }}
      >
        <button
          type="button"
          aria-disabled="true"
          style={{
            ...buttonBase,
            cursor: "not-allowed",
            opacity: 0.6,
            background: "#1b1b28",
          }}
        >
          Mint (Coming Soon)
        </button>
        {!isConnected && (
          <span style={{ color: "#b5b5c9", fontSize: "0.95rem" }}>
            Tip: connect your wallet above so you’re ready on launch day.
          </span>
        )}
      </div>
    </section>
  );

  const Modal = () =>
    comingSoonPiece ? (
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Mint coming soon"
        tabIndex={-1}
        onClick={() => setComingSoonPiece(null)}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.65)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1rem",
          zIndex: 200,
        }}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            background: "#0e0e16",
            border: "1px solid #26263b",
            borderRadius: "14px",
            maxWidth: "420px",
            width: "100%",
            padding: "1.25rem",
            boxShadow: "0 20px 40px rgba(0,0,0,0.45)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "0.75rem",
              gap: "0.75rem",
            }}
          >
            <h3 style={{ margin: 0, fontSize: "1.1rem" }}>
              Mint Coming Soon
            </h3>
            <button
              type="button"
              onClick={() => setComingSoonPiece(null)}
              style={{
                ...buttonBase,
                padding: "0.35rem 0.6rem",
                borderRadius: "8px",
                background: "#1b1b28",
              }}
            >
              Close
            </button>
          </div>
          <p style={{ margin: "0 0 0.5rem 0", color: "#d0d0e0" }}>
            “{comingSoonPiece}” will be available to mint soon. Connect your
            wallet and stay tuned for the drop.
          </p>
          <p style={{ margin: 0, color: "#9a9ab5", fontSize: "0.95rem" }}>
            When the contract is live, you’ll be able to mint directly here and
            view the piece on marketplaces and explorers.
          </p>
        </div>
      </div>
    ) : null;

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at 20% 20%, rgba(79,70,229,0.18), transparent 25%), radial-gradient(circle at 80% 0%, rgba(15,179,255,0.18), transparent 22%), linear-gradient(180deg, #050509 0%, #050509 40%, #050509 100%)",
        color: "white",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <Modal />

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
          className="header-inner"
          style={{
            maxWidth: "960px",
            margin: "0 auto",
            padding: "1rem 1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <div style={{ fontWeight: 600, letterSpacing: "0.05em" }}>
            Ramé Delaireaux Art
          </div>

          <nav
            className="top-nav"
            style={{
              display: "flex",
              gap: "1.5rem",
              fontSize: "0.95rem",
              opacity: 0.9,
              alignItems: "center",
              flexWrap: "wrap",
              justifyContent: "flex-end",
            }}
          >
            <a
              href="#hero"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Home
            </a>
            <div
              style={{ position: "relative" }}
              onMouseEnter={() => setIsGalleryOpen(true)}
              onMouseLeave={() => setIsGalleryOpen(false)}
              onFocus={() => setIsGalleryOpen(true)}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget)) {
                  setIsGalleryOpen(false);
                }
              }}
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
                    minWidth: "200px",
                    padding: "0.4rem 0",
                    zIndex: 20,
                  }}
                >
                  {navLinks.map((link) => (
                    <a
                      key={link.id}
                      className="dropdown-link"
                      href={link.href}
                      style={{
                        display: "block",
                        padding: "0.5rem 0.9rem",
                        textDecoration: "none",
                        color: "white",
                        fontSize: "0.9rem",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <a
              href="#drops"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Drops
            </a>
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
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.6rem",
                paddingLeft: "0.75rem",
                borderLeft: "1px solid #26263b",
              }}
            >
              <ConnectButton chainStatus="icon" showBalance={false} label="Connect" />
              {isConnected && (
                <span style={{ fontSize: "0.85rem", color: "#b5b5c9" }}>
                  {formatAddress(address)}
                </span>
              )}
            </div>
          </nav>
        </div>
      </header>

      <main
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "2rem 1.5rem 4rem",
        }}
      >
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

        <section
          id="gallery"
          style={{ paddingBottom: "2rem" }}
          onMouseEnter={() => setIsGallerySectionHovered(true)}
          onMouseLeave={() => setIsGallerySectionHovered(false)}
          onFocus={() => setIsGallerySectionHovered(true)}
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget)) {
              setIsGallerySectionHovered(false);
            }
          }}
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
              className="gallery-chips"
              style={{
                display: "flex",
                gap: "0.4rem",
                flexWrap: "wrap",
                opacity: 1,
                transform: "none",
                transition: "opacity 180ms ease, transform 180ms ease",
              }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  className="chip-link gallery-chip"
                  href={link.href}
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
                  {link.label}
                </a>
              ))}
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
            Browse each series below, or click on a category to jump directly
            to a series: Cosmic, Crypto, Dataverse, Dimensional Continuum,
            Energy, Immutable, Mind Collective, and Nature.
          </p>
        </section>

        <DropsSection />

        {galleryData.map((category, idx) =>
          renderCategorySection(category, idx !== 0)
        )}

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
              href="mailto:inquiries@delaireauxart.com"
              style={{ color: "#8ab4ff", textDecoration: "none" }}
            >
              inquiries@delaireauxart.com
            </a>
          </p>
        </section>
      </main>

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

      {showScrollTop && (
        <button
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="scroll-top-btn"
        >
          ↑ Top
        </button>
      )}

      <style jsx global>{`
        /* Gallery chips (body section) */
        .gallery-chip {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(86,86,130,0.18), rgba(120,118,255,0.25)) !important;
          border: 1px solid rgba(120, 118, 255, 0.35) !important;
          box-shadow: 0 8px 18px rgba(0, 0, 0, 0.35), 0 0 18px rgba(120, 118, 255, 0.28) !important;
          color: #f5f5ff !important;
          font-weight: 600 !important;
          letter-spacing: 0.01em;
          padding: 0.45rem 0.85rem !important;
          transition: transform 140ms ease, box-shadow 140ms ease, opacity 140ms ease;
        }
        .gallery-chips {
          opacity: 1 !important;
          transform: none !important;
          flex-wrap: wrap;
          gap: 0.45rem;
        }
        .gallery-chip:hover,
        .gallery-chip:focus-visible {
          transform: translateY(-1px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.45), 0 0 22px rgba(120, 118, 255, 0.36) !important;
          outline: none;
        }

        @media (max-width: 768px) {
          .header-inner {
            max-width: 100%;
            padding-left: 16px;
            padding-right: 16px;
            padding-top: 0.9rem;
            padding-bottom: 0.9rem;
          }
          .top-nav {
            gap: 0.9rem;
            font-size: 0.9rem;
            width: 100%;
            justify-content: space-between;
          }
          main {
            max-width: 100%;
            padding-left: 16px !important;
            padding-right: 16px !important;
            padding-top: 1.5rem !important;
            padding-bottom: 3rem !important;
          }
          section#hero h1 {
            font-size: 2.2rem;
          }
          section#hero p {
            font-size: 1rem;
          }
          section#gallery .chip-link {
            font-size: 0.85rem;
            padding: 0.35rem 0.6rem;
          }
          .gallery-chips {
            opacity: 1 !important;
            transform: none !important;
            flex-wrap: wrap;
            display: grid !important;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 0.45rem;
            width: 100%;
          }
          .gallery-chip {
            width: 100%;
            text-align: center;
          }
          .dropdown-link {
            padding: 0.55rem 0.85rem;
            font-size: 0.9rem;
          }
          .art-card {
            flex: 1 1 100% !important;
            max-width: 100%;
            height: auto;
            gap: 0.3rem;
            margin-bottom: 28px;
            min-height: auto;
            padding-bottom: 12px !important;
          }
          .cards-grid {
            justify-content: center;
          }
          .art-card button {
            padding: 8px 14px;
            font-size: 8px;
          }
          .art-card__title {
            font-size: 12px;
          }
          .art-card__desc {
            font-size: 10px;
          }
          .art-image-container {
            width: 100%;
            aspect-ratio: 1 / 1;
            flex: 0 0 auto;
            overflow: hidden;
          }
          .art-image-container .art-card__img {
            width: 100% !important;
            height: 100% !important;
            object-fit: cover;
            border-radius: 12px;
          }
          .art-card-body {
            flex: 0 0 auto;
            min-height: 0;
            padding: 6px 0 8px 0;
            gap: 4px !important;
            overflow: visible;
          }
          .cta-stack {
            margin-top: 0 !important;
          }
          .secondary-links {
            display: none !important;
          }
          .art-card__img {
            height: 220px;
          }
        }

        @media (max-width: 540px) {
          .top-nav {
            gap: 0.65rem;
          }
          section#hero h1 {
            font-size: 2rem;
          }
          .art-card__img {
            height: 190px;
          }
        }
        .scroll-top-btn {
          position: fixed;
          right: 16px;
          bottom: 18px;
          z-index: 999;
          padding: 10px 12px;
          border-radius: 12px;
          border: 1px solid rgba(120, 118, 255, 0.4);
          background: rgba(20, 20, 32, 0.92);
          color: #f5f5ff;
          font-weight: 600;
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.45), 0 0 18px rgba(120, 118, 255, 0.3);
          cursor: pointer;
          transition: transform 140ms ease, box-shadow 140ms ease;
        }
        .scroll-top-btn:hover,
        .scroll-top-btn:focus-visible {
          transform: translateY(-1px);
          box-shadow: 0 16px 32px rgba(0, 0, 0, 0.5), 0 0 22px rgba(120, 118, 255, 0.38);
          outline: none;
        }
        .scroll-top-btn:active {
          transform: translateY(0);
        }
        @media (min-width: 1024px) {
          .scroll-top-btn {
            top: 50%;
            right: 26px;
            bottom: auto;
            transform: translateY(-50%);
            padding: 12px 16px;
            font-size: 15px;
            letter-spacing: 0.03em;
            box-shadow: 0 16px 34px rgba(0, 0, 0, 0.5), 0 0 26px rgba(120, 118, 255, 0.32);
          }
          .scroll-top-btn:hover,
          .scroll-top-btn:focus-visible {
            transform: translateY(-50%) translateX(-1px);
          }
          .scroll-top-btn:active {
            transform: translateY(-50%) translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
