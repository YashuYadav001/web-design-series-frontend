import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ModelCanvas from "../components/ModelCanvas";

const Design2 = () => {
  const container = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from(".nav-item", {
        y: -50,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power4.out",
      });

      tl.from(
        ".hero-title",
        {
          x: -100,
          opacity: 0,
          stagger: 0.15,
          duration: 1,
          ease: "power4.out",
        },
        "-=0.4"
      );

      tl.from(
        ".hero-text",
        {
          y: 50,
          opacity: 0,
          duration: 0.8,
        },
        "-=0.4"
      );

      tl.from(
        ".model-box",
        {
          scale: 0.8,
          opacity: 0,
          duration: 1.2,
          ease: "power4.out",
        },
        "-=0.6"
      );

      gsap.to(".glow-circle", {
        scale: 1.2,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: container }
  );

  return (
    <main
      ref={container}
      className="min-h-screen bg-black text-white overflow-hidden"
    >
      {/* BACKGROUND GLOW */}
      <div className="glow-circle absolute top-40 left-20 w-[500px] h-[500px] bg-cyan-500/20 blur-[150px] rounded-full" />

      {/* NAVBAR */}
      <nav className="relative z-50 px-12 py-8 flex justify-between items-center border-b border-cyan-500/20">
        <h1 className="nav-item font-[font1] text-3xl tracking-[0.4em] text-cyan-400">
          RETROX
        </h1>

        <div className="flex gap-12 font-[font3] uppercase text-sm">
          <a className="nav-item hover:text-cyan-400 duration-300" href="#">
            Home
          </a>

          <a className="nav-item hover:text-cyan-400 duration-300" href="#">
            Projects
          </a>

          <a className="nav-item hover:text-cyan-400 duration-300" href="#">
            Archive
          </a>

          <a className="nav-item hover:text-cyan-400 duration-300" href="#">
            Contact
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-[85vh] px-20 py-20">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT */}
          <div>
            <h1 className="hero-title font-[font1] text-[8vw] leading-none">
              RETRO
            </h1>

            <h1 className="hero-title font-[font1] text-[8vw] leading-none text-cyan-400">
              FUTURISM
            </h1>

            <p className="hero-text mt-8 text-zinc-400 text-xl max-w-xl">
              Inspired by synthwave aesthetics, neon skylines and
              futuristic visions. Experience a world where technology
              meets imagination.
            </p>

            <button
              className="
                hero-text
                mt-10
                px-8
                py-4
                rounded-full
                bg-cyan-400
                text-black
                font-bold
                hover:scale-105
                duration-300
              "
            >
              EXPLORE
            </button>
          </div>

          {/* MODEL */}
          <div className="model-box">
            <ModelCanvas />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-20 py-24">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-white/5 border border-cyan-500/20 backdrop-blur-xl">
            <h3 className="font-[font1] text-2xl text-cyan-400 mb-4">
              NEON
            </h3>

            <p className="text-zinc-400">
              Vibrant futuristic visuals inspired by synthwave culture.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white/5 border border-cyan-500/20 backdrop-blur-xl">
            <h3 className="font-[font1] text-2xl text-cyan-400 mb-4">
              CYBER
            </h3>

            <p className="text-zinc-400">
              Advanced technology merged with creative experiences.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white/5 border border-cyan-500/20 backdrop-blur-xl">
            <h3 className="font-[font1] text-2xl text-cyan-400 mb-4">
              FUTURE
            </h3>

            <p className="text-zinc-400">
              A glimpse into tomorrow's digital world.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-cyan-500/20 mt-20">
        <div className="px-20 py-10 flex justify-between items-center">
          <div>
            <h2 className="font-[font1] text-2xl text-cyan-400">
              RETROX
            </h2>

            <p className="text-zinc-500 text-sm mt-2">
              Retro Futurism Experience
            </p>
          </div>

          <div className="text-right">
            <p className="font-[font3] text-zinc-500">
              © 2026 All Rights Reserved
            </p>

            <p className="text-cyan-400 text-sm mt-1">
              Designed by XFLEX
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Design2;
