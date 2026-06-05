import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Design3 = () => {
  const navRef = useRef(null);
  const heroRef = useRef(null);
  const socialRef = useRef(null);
  const infoRef = useRef(null);
  const videoRef = useRef(null);
  const scrollRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(navRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    })
      .from(
        heroRef.current,
        {
          scale: 0.7,
          opacity: 0,
          duration: 1.5,
          ease: "power4.out",
        },
        "-=0.4"
      )
      .from(infoRef.current, {
        x: 120,
        opacity: 0,
        duration: 1,
      })
      .from(socialRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
      }, "-=0.6")
      .from(videoRef.current, {
        x: 120,
        opacity: 0,
        duration: 1,
      }, "-=0.8");

    gsap.to(heroRef.current, {
      y: -20,
      repeat: -1,
      yoyo: true,
      duration: 3,
      ease: "sine.inOut",
    });

    gsap.to(scrollRef.current, {
      y: 15,
      repeat: -1,
      yoyo: true,
      duration: 1,
    });
  }, []);

  useEffect(() => {
    const move = (e) => {
      const x = (e.clientX - window.innerWidth / 2) * 0.015;
      const y = (e.clientY - window.innerHeight / 2) * 0.015;

      gsap.to(heroRef.current, {
        x,
        y,
        duration: 1,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#d8ddd8]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/background.png')" }}
      />

      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,#000_1px,transparent_1px)] bg-[size:35px_35px]" />
      <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(255,255,255,0.03)_50%)] bg-[length:100%_4px]" />

      <nav
        ref={navRef}
        className="absolute top-0 left-0 w-full z-50 px-6 lg:px-12 py-8 flex items-center justify-between"
      >
        <h1 className="font-[font5] text-3xl lg:text-5xl uppercase">LOGO</h1>

        <div className="hidden md:flex items-center gap-10 font-[font4] uppercase tracking-widest">
          <a href="#" className="flex gap-1">News <span className="text-orange-400">+</span></a>
          <a href="#" className="flex gap-1">Trailer <span className="text-orange-400">+</span></a>
          <a href="#" className="flex gap-1">Actors <span className="text-orange-400">+</span></a>
        </div>

        <div className="flex items-center gap-6">
          <span className="font-[font4]">EN</span>
          <button className="flex flex-col gap-1">
            <span className="w-8 h-[2px] bg-black"></span>
            <span className="w-8 h-[2px] bg-black"></span>
          </button>
        </div>
      </nav>

      <section className="relative h-screen w-full overflow-hidden">
        <div
          ref={heroRef}
          className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
        >
          <img
            src="/character.png"
            alt="Character"
            className="w-[700px] lg:w-[1100px] mt-[15vh] max-w-none object-contain drop-shadow-[0_0_80px_rgba(0,0,0,.45)]"
          />
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center">
          <p className="tracking-[8px] font-[font5] text-white text-xl uppercase">
            Scroll
          </p>
          <span ref={scrollRef} className="w-[2px] h-14 bg-white mt-2"></span>
        </div>

        <div
          ref={socialRef}
          className="absolute bottom-10 left-6 lg:left-12 z-30 flex gap-8 font-[font6]"
        >
          <a href="#" className="relative uppercase tracking-[4px] text-sm lg:text-lg after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[1px] after:bg-black after:transition-all hover:after:w-full">
            Twitter
          </a>
          <a href="#" className="relative uppercase tracking-[4px] text-sm lg:text-lg after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[1px] after:bg-black after:transition-all hover:after:w-full">
            Instagram
          </a>
        </div>

        <div
          ref={infoRef}
          className="absolute right-4 lg:right-20 top-1/2 -translate-y-1/2 z-30 max-w-[280px]"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-px bg-black"></div>
            <span className="text-[9px] uppercase tracking-[3px]">System Data</span>
          </div>

          <p className="text-[10px] leading-[1.8] uppercase tracking-[1px] text-black/70">
            THIS UNIT IS DESIGNED FOR HIGH PERFORMANCE OPERATIONS. ADVANCED
            NEURAL PROCESSING, ADAPTIVE MOVEMENT SYSTEMS, ENHANCED VISION
            MODULES AND AUTONOMOUS RESPONSE CAPABILITIES.
          </p>

          <div className="flex items-center gap-3 mt-6">
            <div className="w-full h-px bg-black/20"></div>
            <div className="w-2 h-2 rounded-full bg-black"></div>
          </div>
        </div>

        <div
          ref={videoRef}
          className="absolute bottom-12 right-4 lg:right-16 z-30 flex items-center cursor-pointer "
        >
          <div className="w-16 h-16 border border-black/20 bg-white/40 backdrop-blur-sm flex items-center justify-center">
            ▶
          </div>

          <div className="relative w-36 h-16 overflow-hidden border border-black/20">
            <img
              src="/video-thumb.png"
              alt="preview"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Design3;
