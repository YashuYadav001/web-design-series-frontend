import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const AMGDesign = () => {
  const containerRef = useRef(null);
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const navLinksRef = useRef(null);
  const taglineRef = useRef(null);
  const headlineRef = useRef(null);
  const subheadRef = useRef(null);
  const carRef = useRef(null);
  const glowRef = useRef(null);
  const statsRef = useRef(null);
  const badgesRef = useRef(null);
  const overlayRef = useRef(null);
  const accentLineRef = useRef(null);
  const sideCardRef = useRef(null);
  const ctaRef = useRef(null);
  const scanlineRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // ── 0. Initial states ──────────────────────────────────────────
      gsap.set([logoRef.current, navLinksRef.current], { autoAlpha: 0, y: -30 });
      gsap.set(taglineRef.current, { autoAlpha: 0, x: -60 });
      gsap.set(headlineRef.current, { autoAlpha: 0, y: 80, skewY: 4 });
      gsap.set(subheadRef.current, { autoAlpha: 0, y: 30 });
      gsap.set(carRef.current, { autoAlpha: 0, x: 120, scale: 0.88 });
      gsap.set(glowRef.current, { autoAlpha: 0, scale: 0.4 });
      gsap.set(statsRef.current?.children ? [...statsRef.current.children] : [], {
        autoAlpha: 0, y: 40
      });
      gsap.set(badgesRef.current?.children ? [...badgesRef.current.children] : [], {
        autoAlpha: 0, scale: 0.7
      });
      gsap.set(sideCardRef.current, { autoAlpha: 0, x: 60 });
      gsap.set(ctaRef.current, { autoAlpha: 0, y: 20 });
      gsap.set(accentLineRef.current, { scaleX: 0, transformOrigin: "left center" });

      // ── 1. Scanline flash ─────────────────────────────────────────
      tl.to(scanlineRef.current, { autoAlpha: 1, duration: 0.08 })
        .to(scanlineRef.current, { y: "100%", duration: 0.55, ease: "none" })
        .to(scanlineRef.current, { autoAlpha: 0, duration: 0.1 }, "-=0.05")

      // ── 2. Nav ────────────────────────────────────────────────────
        .to(logoRef.current, { autoAlpha: 1, y: 0, duration: 0.6 }, "-=0.2")
        .to(navLinksRef.current, { autoAlpha: 1, y: 0, duration: 0.5 }, "-=0.4")

      // ── 3. Tagline + headline ─────────────────────────────────────
        .to(taglineRef.current, { autoAlpha: 1, x: 0, duration: 0.5 }, "-=0.2")
        .to(headlineRef.current, { autoAlpha: 1, y: 0, skewY: 0, duration: 0.8 }, "-=0.2")
        .to(accentLineRef.current, { scaleX: 1, duration: 0.6, ease: "power2.inOut" }, "-=0.4")
        .to(subheadRef.current, { autoAlpha: 1, y: 0, duration: 0.5 }, "-=0.3")

      // ── 4. Car + glow ─────────────────────────────────────────────
        .to(carRef.current, { autoAlpha: 1, x: 0, scale: 1, duration: 1, ease: "power4.out" }, "-=0.3")
        .to(glowRef.current, { autoAlpha: 1, scale: 1, duration: 0.9, ease: "power2.out" }, "-=0.7")

      // ── 5. Stats stagger ──────────────────────────────────────────
        .to(
          statsRef.current?.children ? [...statsRef.current.children] : [],
          { autoAlpha: 1, y: 0, stagger: 0.12, duration: 0.5 },
          "-=0.5"
        )

      // ── 6. Badges stagger ─────────────────────────────────────────
        .to(
          badgesRef.current?.children ? [...badgesRef.current.children] : [],
          { autoAlpha: 1, scale: 1, stagger: 0.1, duration: 0.4 },
          "-=0.3"
        )

      // ── 7. Side card + CTA ────────────────────────────────────────
        .to(sideCardRef.current, { autoAlpha: 1, x: 0, duration: 0.6 }, "-=0.3")
        .to(ctaRef.current, { autoAlpha: 1, y: 0, duration: 0.4 }, "-=0.2");

      // ── Idle float: car ────────────────────────────────────────────
      gsap.to(carRef.current, {
        y: -14,
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1.8
      });

      // ── Idle pulse: glow ───────────────────────────────────────────
      gsap.to(glowRef.current, {
        opacity: 0.35,
        scaleX: 1.12,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 2
      });

      setLoaded(true);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Hover tilt on car
  const handleMouseMove = (e) => {
    if (!carRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / rect.width;
    const dy = (e.clientY - cy) / rect.height;
    gsap.to(carRef.current, {
      rotateY: dx * 8,
      rotateX: -dy * 4,
      duration: 0.6,
      ease: "power2.out"
    });
  };

  const handleMouseLeave = () => {
    gsap.to(carRef.current, {
      rotateY: 0,
      rotateX: 0,
      duration: 0.8,
      ease: "elastic.out(1, 0.6)"
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden min-h-screen w-full"
      style={{
        background: "#0a0a0a",
        fontFamily: "'Bebas Neue', 'Arial Narrow', sans-serif"
      }}
    >
      {/* Google Font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;600&display=swap');

        * { box-sizing: border-box; }

        .amg-nav-link {
          color: rgba(255,255,255,0.55);
          text-decoration: none;
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          transition: color 0.2s;
          position: relative;
        }
        .amg-nav-link::after {
          content: '';
          position: absolute;
          left: 0; bottom: -4px;
          width: 0; height: 1.5px;
          background: #d9ef43;
          transition: width 0.25s;
        }
        .amg-nav-link:hover { color: #d9ef43; }
        .amg-nav-link:hover::after { width: 100%; }

        .stat-card {
          border: 1px solid rgba(217,239,67,0.18);
          background: rgba(217,239,67,0.04);
          border-radius: 4px;
          padding: 14px 20px;
          position: relative;
          overflow: hidden;
          transition: background 0.2s;
        }
        .stat-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 2px; height: 100%;
          background: #d9ef43;
        }
        .stat-card:hover { background: rgba(217,239,67,0.08); }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 36px;
          background: #d9ef43;
          color: #0a0a0a;
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          border: none;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s;
          clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%);
        }
        .cta-btn:hover { background: #eaff55; transform: translateY(-1px); }

        .cta-ghost {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 36px;
          background: transparent;
          color: rgba(255,255,255,0.7);
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          border: 1px solid rgba(255,255,255,0.2);
          cursor: pointer;
          transition: border-color 0.2s, color 0.2s;
          clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%);
        }
        .cta-ghost:hover { border-color: #d9ef43; color: #d9ef43; }

        .badge {
          padding: 6px 16px;
          border-radius: 100px;
          font-family: 'Inter', sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        /* grid noise texture */
        .noise {
          pointer-events: none;
          position: absolute; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
          background-size: 180px;
          opacity: 0.4;
          mix-blend-mode: overlay;
          z-index: 1;
        }

        @media (max-width: 900px) {
          .hero-headline { font-size: clamp(56px, 14vw, 130px) !important; }
          .hero-layout { flex-direction: column !important; padding: 20px !important; }
          .hero-left { max-width: 100% !important; }
          .car-area { position: relative !important; height: 300px !important; margin-top: 24px; }
          .side-card-wrap { display: none !important; }
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 540px) {
          .hero-headline { font-size: clamp(44px, 18vw, 80px) !important; }
          .stats-grid { grid-template-columns: 1fr !important; }
          .cta-row { flex-direction: column !important; align-items: flex-start !important; }
        }
      `}</style>

      {/* Scanline reveal */}
      <div
        ref={scanlineRef}
        style={{
          position: "fixed",
          inset: 0,
          background: "linear-gradient(180deg, transparent 0%, #d9ef43 50%, transparent 100%)",
          opacity: 0,
          pointerEvents: "none",
          zIndex: 9999,
          mixBlendMode: "overlay"
        }}
      />

      {/* Noise */}
      <div className="noise" />

      {/* Grid lines background */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none",
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
        `,
        backgroundSize: "80px 80px"
      }} />

      {/* Lime radial bloom (top-right) */}
      <div style={{
        position: "absolute", top: "-20%", right: "-10%",
        width: "700px", height: "700px",
        background: "radial-gradient(circle, rgba(217,239,67,0.08) 0%, transparent 65%)",
        pointerEvents: "none", zIndex: 0
      }} />

      {/* ─── NAVBAR ─────────────────────────────────────────────────── */}
      <nav style={{
        position: "absolute", top: 0, left: 0, right: 0,
        zIndex: 100,
        padding: "28px 48px",
        display: "flex", justifyContent: "space-between", alignItems: "center"
      }}>
        <div ref={logoRef} style={{ display: "flex", alignItems: "center", gap: 14 }}>
          {/* Mercedes star mark */}
         <img src="/mercedes-logo.png" alt="" style={{ width: 38, opacity: 0.7 }} />
          <span style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 26, color: "#fff", letterSpacing: "0.15em"
          }}>
            MERCEDES AMG
          </span>
        </div>

        <div ref={navLinksRef} style={{ display: "flex", gap: 40, alignItems: "center" }}>
          {["Racing", "Team", "Drivers", "Performance", "GT3"].map(l => (
            <a key={l} href="#" className="amg-nav-link">{l}</a>
          ))}
          <button className="cta-btn" style={{ padding: "10px 24px", fontSize: 10 }}>
            Configure
          </button>
        </div>
      </nav>

      {/* ─── HERO LAYOUT ──────────────────────────────────────────── */}
      <div
        className="hero-layout"
        style={{
          position: "relative", zIndex: 10,
          minHeight: "100vh",
          display: "flex", alignItems: "center",
          padding: "0 48px",
          gap: 0
        }}
      >
        {/* LEFT: copy + stats */}
        <div className="hero-left" style={{ maxWidth: 560, flexShrink: 0, paddingTop: 80 }}>
          {/* Tagline */}
          <div ref={taglineRef} style={{
            display: "flex", alignItems: "center", gap: 10, marginBottom: 20
          }}>
            <div style={{ width: 32, height: 1.5, background: "#d9ef43" }} />
            <span style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 11, fontWeight: 600,
              letterSpacing: "0.28em", textTransform: "uppercase",
              color: "#d9ef43"
            }}>
              2024 Season · GT3 EVO
            </span>
          </div>

          {/* Headline */}
          <div style={{ overflow: "hidden", marginBottom: 4 }}>
            <h1
              ref={headlineRef}
              className="hero-headline"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(72px, 10vw, 148px)",
                lineHeight: 0.88,
                color: "#fff",
                margin: 0,
                letterSpacing: "0.02em"
              }}
            >
              BORN<br />
              <span style={{ color: "#d9ef43" }}>TO</span><br />
              RACE
            </h1>
          </div>

          {/* Accent line */}
          <div
            ref={accentLineRef}
            style={{
              width: 220, height: 3,
              background: "linear-gradient(90deg, #d9ef43, transparent)",
              margin: "22px 0"
            }}
          />

          {/* Subhead */}
          <p
            ref={subheadRef}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 14, fontWeight: 300,
              lineHeight: 1.7, color: "rgba(255,255,255,0.5)",
              maxWidth: 380, margin: "0 0 36px"
            }}
          >
            The Mercedes-AMG GT3 EVO redefines motorsport excellence — aerodynamically sculpted, technologically supreme, and engineered for one purpose.
          </p>

          {/* Stats */}
          <div
            ref={statsRef}
            className="stats-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 12, marginBottom: 36
            }}
          >
            {[
              { val: "730", unit: "hp", label: "Peak Power" },
              { val: "3.6", unit: "s", label: "0–100 km/h" },
              { val: "320", unit: "km/h", label: "Top Speed" },
            ].map(s => (
              <div key={s.label} className="stat-card">
                <div style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: 36, color: "#fff", lineHeight: 1,
                  letterSpacing: "0.04em"
                }}>
                  {s.val}
                  <span style={{ fontSize: 18, color: "#d9ef43", marginLeft: 3 }}>{s.unit}</span>
                </div>
                <div style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 10, fontWeight: 600,
                  letterSpacing: "0.18em", textTransform: "uppercase",
                  color: "rgba(255,255,255,0.35)",
                  marginTop: 4
                }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* CTA row */}
          <div ref={ctaRef} className="cta-row" style={{ display: "flex", gap: 14, alignItems: "center" }}>
            <button className="cta-btn">
              Explore GT3
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="#0a0a0a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button className="cta-ghost">Watch Film</button>
          </div>

          {/* Badges */}
          <div
            ref={badgesRef}
            style={{ display: "flex", gap: 8, marginTop: 28, flexWrap: "wrap" }}
          >
            {["FIA Approved", "GT World Challenge", "24H Nürburgring"].map(b => (
              <span key={b} className="badge" style={{
                background: "rgba(217,239,67,0.08)",
                border: "1px solid rgba(217,239,67,0.25)",
                color: "#d9ef43"
              }}>{b}</span>
            ))}
          </div>
        </div>

        {/* CENTER / RIGHT: car + glow */}
        <div style={{
          flex: 1, position: "relative",
          display: "flex", alignItems: "center", justifyContent: "center",
          minHeight: 520
        }}>
          {/* Ground glow */}
          <div
            ref={glowRef}
            style={{
              position: "absolute",
              left: "50%", top: "68%",
              transform: "translate(-50%, 0)",
              width: 640, height: 100,
              background: "#d9ef43",
              filter: "blur(72px)",
              opacity: 0.45,
              borderRadius: "50%",
              pointerEvents: "none"
            }}
          />

          {/* Car image */}
          <div
            ref={carRef}
            style={{
              position: "relative", zIndex: 10,
              filter: "drop-shadow(0 50px 60px rgba(0,0,0,0.7))",
              perspective: 800
            }}
          >
            <img
              src="/car.png"
              alt="Mercedes-AMG GT3"
              style={{ width: "min(820px, 54vw)", objectFit: "contain", display: "block" }}
            />
          </div>

          {/* Side card (floating) */}
          <div
            ref={sideCardRef}
            className="side-card-wrap"
            style={{
              position: "absolute",
              right: 20, top: "12%",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 6,
              padding: 12,
              backdropFilter: "blur(12px)"
            }}
          >
            <img
              src="/car-side.png"
              alt=""
              style={{ width: 220, objectFit: "contain", display: "block" }}
            />
            <div style={{
              marginTop: 10,
              fontFamily: "'Inter', sans-serif",
              fontSize: 10, fontWeight: 600,
              letterSpacing: "0.18em", textTransform: "uppercase",
              color: "rgba(255,255,255,0.35)",
              textAlign: "center"
            }}>
              Profile View
            </div>
          </div>

          {/* Vertical spec label */}
          <div style={{
            position: "absolute", left: 16, top: "50%",
            transform: "translateY(-50%) rotate(-90deg)",
            fontFamily: "'Inter', sans-serif",
            fontSize: 9, fontWeight: 600,
            letterSpacing: "0.3em", textTransform: "uppercase",
            color: "rgba(255,255,255,0.2)"
          }}>
            AMG GT3 EVO · 2024 · V8 BITURBO
          </div>
        </div>
      </div>

      {/* ─── BOTTOM BAR ──────────────────────────────────────────── */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        zIndex: 20,
        padding: "18px 48px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        borderTop: "1px solid rgba(255,255,255,0.07)",
        background: "rgba(10,10,10,0.6)",
        backdropFilter: "blur(8px)"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <img src="/mercedes-logo.png" alt="" style={{ width: 28, opacity: 0.7 }} />
          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 10, fontWeight: 600,
            letterSpacing: "0.22em", textTransform: "uppercase",
            color: "rgba(255,255,255,0.3)"
          }}>
            Mercedes-AMG GT3
          </span>
        </div>

        <div style={{ display: "flex", gap: 8 }}>
          {["Mercedes Benz", "AMG GT3", "2024"].map(t => (
            <span key={t} className="badge" style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "rgba(255,255,255,0.45)"
            }}>{t}</span>
          ))}
        </div>

        <div style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 10, color: "rgba(255,255,255,0.25)",
          letterSpacing: "0.12em"
        }}>
          © 2024 Mercedes-AMG GmbH
        </div>
      </div>
    </div>
  );
};

export default AMGDesign;