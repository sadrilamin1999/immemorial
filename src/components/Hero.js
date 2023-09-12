import { useRef } from "react";
import { useGsapShutterUnveil } from "../hooks/gsap";

const Hero = () => {
  const heroRef = useRef(null);
  const shutter1 = useRef(null);
  const shutter2 = useRef(null);

  useGsapShutterUnveil(shutter1, 0, heroRef);
  useGsapShutterUnveil(shutter2, 0.2, heroRef);

  return (
    <section
      ref={heroRef}
      className="hero wrapper font-baijamjuree text-[15vw] uppercase text-center font-[700] leading-[1.2] text-custom-darker min-h-screen flex flex-col justify-center items-center relative"
    >
      <h1 className="ethereal relative">
        Ethereal
        <span
          ref={shutter1}
          className="absolute top-0 left-0 right-0 bottom-0 bg-custom-lighter w-full h-full"
        ></span>
      </h1>
      <h1 className="canvas relative">
        Canvas
        <span
          ref={shutter2}
          className=" absolute top-0 left-0 right-0 bottom-0 bg-custom-lighter w-full h-full"
        ></span>
      </h1>
    </section>
  );
};

export default Hero;
