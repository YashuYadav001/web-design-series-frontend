import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Design1 = () => {
  useGSAP(() => {
  const tl = gsap.timeline();

  tl.from(".nav-item", {
    opacity: 0,
    y: -30,
    stagger: 0.1,
    duration: 0.8,
  });

  tl.from(".glass-card", {
    opacity: 0,
    x: -50,
    duration: 1,
  });

  tl.from(".title", {
    opacity: 0,
    y: 50,
    stagger: 0.15,
    duration: 1,
  });

  tl.from(".explore-btn", {
    opacity: 0,
    scale: 0.8,
    duration: 0.6,
  });

  tl.add(() => {
    gsap.to(".title", {
      y: -8,
      repeat: -1,
      yoyo: true,
      duration: 2.5,
      ease: "sine.inOut",
    });
  });
});

  return (
    <main className="bg-black text-white overflow-hidden">
      <section className="relative h-screen overflow-hidden">
        {/* VIDEO */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/90" />

        {/* SPOTLIGHT */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,.08),transparent_60%)]" />

        {/* NAVBAR */}
        <nav className="absolute top-0 left-0 w-full z-30 px-12 py-8 flex justify-between items-center">
          <h1 className="nav-item font-[font1] text-3xl tracking-[0.3em]">
            NINJA
          </h1>

          <div className="flex gap-12 font-[font3] text-sm uppercase tracking-widest">
            <a className="nav-item hover:text-red-400 duration-300" href="#">
              Catalog
            </a>

            <a className="nav-item hover:text-red-400 duration-300" href="#">
              News
            </a>

            <a className="nav-item hover:text-red-400 duration-300" href="#">
              History
            </a>
          </div>

          <button className="nav-item text-3xl hover:rotate-90 duration-500">
            ☰
          </button>
        </nav>

        {/* DIAGONAL STRIP */}
        <div
          className="
            diagonal-strip
            absolute
            top-0
            left-[-20%]
            h-full
            w-[140%]
            rotate-[-35deg]
            bg-white/10
            backdrop-blur-sm
          "
        />

        {/* CONTENT */}
        <div className="relative z-20 h-full">
          {/* LEFT CARD */}
          <div className="absolute left-12 top-1/2 -translate-y-1/2">
            <div
              className="
                glass-card
                w-[380px]
                rounded-[30px]
                bg-white/10
                backdrop-blur-xl
                border
                border-white/10
                p-8
                shadow-[0_20px_80px_rgba(0,0,0,.5)]
              "
            >
              <p className="font-[font2] text-lg tracking-wide leading-relaxed">
                Enter a world of shadows, honor and legends.
                Discover breathtaking stories crafted with
                cinematic visuals and immersive experiences.
              </p>
            </div>
          </div>

          {/* TITLE */}
          <div className="absolute right-20 bottom-28 text-right">
            <h1
              className="
                title
                font-[font1]
                text-[11vw]
                leading-none
                uppercase
                drop-shadow-[0_0_40px_rgba(255,255,255,.2)]
              "
            >
              NINJA
            </h1>

            <h1
              className="
                title
                font-[font1]
                text-[11vw]
                leading-none
                uppercase
                text-zinc-400
              "
            >
              VIBES
            </h1>
          </div>

          {/* BOTTOM LEFT */}
          <div className="absolute bottom-10 left-12">
            <p className="font-[font3] text-xs uppercase tracking-[0.4em] text-white/50">
              Available Platforms
            </p>

            <div className="flex gap-4 mt-3">
              <div className="px-4 py-2 bg-white/10 rounded-lg">
                PC
              </div>

              <div className="px-4 py-2 bg-white/10 rounded-lg">
                PS5
              </div>
            </div>
          </div>

          {/* BUTTON */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2">
            <button
              className="
                explore-btn
                px-12
                py-4
                rounded-full
                bg-white
                text-black
                font-bold
                tracking-[0.25em]
                hover:scale-110
                hover:bg-red-500
                hover:text-white
                duration-500
              "
            >
              EXPLORE
            </button>
          </div>

          {/* SCROLL INDICATOR */}
          <div className="absolute right-12 bottom-12 flex flex-col items-center">
            <span className="font-[font3] text-xs tracking-[0.4em] text-white/50">
              SCROLL
            </span>

            <div className="w-[1px] h-20 bg-white/30 mt-4 overflow-hidden">
              <div className="scroll-line w-full h-10 bg-white" />
            </div>
          </div>
        </div>
      </section>

      {/* SECOND SECTION */}
      <section className="relative z-20 -mt-16 bg-[#090909] rounded-t-[50px] min-h-screen px-16 py-32">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-[font1] text-7xl mb-8">
            THE LEGEND BEGINS
          </h2>

          <p className="font-[font2] text-zinc-400 text-xl max-w-3xl leading-relaxed">
            Journey through ancient lands where every battle
            shapes destiny. Explore handcrafted visuals,
            cinematic storytelling and immersive design.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <div className="h-[500px] rounded-[30px] bg-zinc-900 overflow-hidden" />
            <div className="h-[500px] rounded-[30px] bg-zinc-800 overflow-hidden" />
            <div className="h-[500px] rounded-[30px] bg-zinc-900 overflow-hidden" />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-black px-16 py-16">
        <div className="flex justify-between items-center">
          <h2 className="font-[font1] text-4xl">
            NINJA VIBES
          </h2>

          <p className="font-[font3] text-white/40">
            © 2026 All Rights Reserved
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Design1;