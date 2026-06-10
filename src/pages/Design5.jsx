import { useEffect, useRef } from "react";
import gsap from "gsap";

const Design3 = () => {
  

  return (
    <div
      
      className="relative w-full h-screen bg-white overflow-hidden"
    >
      {/* Nav */}
      <nav className="absolute top-0 left-0 w-full z-[200] px-5 sm:px-8 py-5 sm:py-6">
        <div className="flex items-center justify-between">
          <div >
            <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-zinc-800">
              Quiet
            </p>
            <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-zinc-800">
              But Deadly
            </p>
          </div>
          <div className="text-right" >
            <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-zinc-800">
              Petals
            </p>
            <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-zinc-800">
              Fear The Wind
            </p>
          </div>
        </div>
      </nav>

      
      <div
        
        className="absolute font-[font4] left-0 top-1/2 -translate-y-1/2 rotate-[-90deg] origin-center z-30"
        
      >
        <p className="text-[9px] sm:text-xs uppercase tracking-[0.3em] whitespace-nowrap">
          DESIGNED BY
        </p>
        <p className="text-[9px] sm:text-xs uppercase tracking-[0.3em] whitespace-nowrap">
          Yashu Yadav
        </p>
      </div>

      
      <h1
        
        className="absolute top-[8%] left-1/2 -translate-x-1/2
          text-[22vw] leading-none text-[#6B46C1]
          font-[font7] tracking-wider z-[1] select-none whitespace-nowrap"
      >
        GHOST
      </h1>

      
      <img
        
        src="/bg45.png"
        alt="Grass"
        className="absolute top-0 left-0 w-full z-[20] drop-shadow-[0_0_30px_rgba(0,0,0,0.5)]"
      />

      
      <img
        
        src="/leaf.png"
        alt=""
        className="absolute top-[48vh] left-[10vw] sm:left-[15vw] w-[10vw] sm:w-[8vw] max-w-[80px] z-[25] drop-shadow-[0_0_30px_rgba(0,0,0,0.5)]"
      />
      <img
        
        src="/leaf.png"
        alt=""
        className="absolute top-[30vh] right-[10vw] sm:right-[12vw] w-[12vw] sm:w-[9vw] max-w-[90px] z-[25] drop-shadow-[0_0_30px_rgba(0,0,0,0.5)]"
        style={{ transform: "rotate(90deg)" }}
      />

      
      <img
        
        src="/bg47.png"
        alt="Ghost character"
        className="absolute left-1/2 bottom-0 -translate-x-1/2 z-[10]
          w-[280px] sm:w-[380px] md:w-[460px] lg:w-[520px]
          drop-shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
      />

      
      <h2
        
        className="absolute bottom-[13%] sm:bottom-[10%] left-1/2 -translate-x-1/2
          w-[80vw] sm:w-[55vw] max-w-[560px]
          text-[2.2vw] sm:text-[1vw] text-center leading-relaxed text-white
          font-[font4] tracking-wider z-[100]"
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas nihil delectus
        adipisci nam corporis incidunt eos sint, enim sit aperiam aspernatur provident
        vel ullam ipsa error atque quibusdam ad possimus.
      </h2>

      {/* Bottom left */}
      <div  className="absolute bottom-4 sm:bottom-6 z-[40] left-4 sm:left-8">
        <p className="text-[8px] sm:text-[10px] uppercase tracking-[0.3em] text-white">
          Walking
        </p>
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-white">
          Through Whispers
        </p>
      </div>

      {/* Bottom right */}
      <div  className="absolute bottom-4 sm:bottom-6 z-[40] right-4 sm:right-8 text-right">
        <p className="text-[8px] sm:text-[10px] uppercase tracking-[0.3em] text-white">
          The Wind does
        </p>
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-white">
          Not guide him — it obeys
        </p>
      </div>
    </div>
  );
};

export default Design3;