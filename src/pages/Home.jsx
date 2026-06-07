import { useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Home() {
  const hero = useRef();

  useGSAP(() => {
    gsap.from(".title", {
      y: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: "power4.out",
    });

    gsap.from(".card", {
      y: 80,
      opacity: 0,
      stagger: 0.15,
      delay: 0.5,
      duration: 1,
    });
  });

  return (
    <main className="bg-black text-white min-h-screen">
      
      <section
        ref={hero}
        className="h-screen flex flex-col justify-center px-10"
      >
        <h1 className="title text-8xl md:text-[10rem] font-black">
          WEB
        </h1>

        <h1 className="title text-8xl md:text-[10rem] font-black text-zinc-600">
          DESIGNS
        </h1>

        <p className="title mt-8 text-zinc-400 max-w-xl">
          Collection of premium web experiences crafted using
          React, GSAP and Tailwind.
        </p>
      </section>

      <section className="px-10 py-32">
        <h2 className="text-5xl font-bold mb-20">
          Selected Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <Link to="/design-1">
            <div className="card h-[500px] bg-zinc-900 rounded-3xl overflow-hidden group">
              <img
                src="/design1.jpg"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />
            </div>

            <h3 className="mt-4 text-2xl font-bold">
              DESIGN 1
            </h3>
          </Link>

          <Link to="/design-2">
            <div className="card h-[500px] bg-zinc-900 rounded-3xl overflow-hidden group">
              <img
                src="/design2.jpg"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />
            </div>

            <h3 className="mt-4 text-2xl font-bold">
              DESIGN 2
            </h3>
          </Link>

          <Link to="/design-3">
            <div className="card h-[500px] bg-zinc-900 rounded-3xl overflow-hidden group">
              <img
                src="/design3.jpg"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />
            </div>

            <h3 className="mt-4 text-2xl font-bold">
              DESIGN 3
            </h3>
          </Link>
          <Link to="/design-4">
            <div className="card h-[500px] bg-zinc-900 rounded-3xl overflow-hidden group">
              <img
                src="/design3.jpg"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />
            </div>

            <h3 className="mt-4 text-2xl font-bold">
              DESIGN 4
            </h3>
          </Link>

        </div>
      </section>
    </main>
  );
}