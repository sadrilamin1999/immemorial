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
      {/* Photos */}
      <div className="photos absolute top-0 left-0 bottom-0 right-0 z-[1] grid grid-cols-7 grid-rows-5 overflow-hidden">
        <div
          className="photo h-full w-full bg-center bg-cover bg-no-repeat col-span-1 row-span-1 col-start-5 row-start-1"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/10046283/pexels-photo-10046283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          }}
        ></div>
        <div
          className="photo h-full w-full bg-center bg-cover bg-no-repeat col-span-1 row-span-1 col-start-4 row-start-3"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/6577903/pexels-photo-6577903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          }}
        ></div>
        <div
          className="photo h-full w-full bg-center bg-cover bg-no-repeat col-span-1 row-span-1 col-start-1 row-start-2"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/4019766/pexels-photo-4019766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          }}
        ></div>
        <div
          className="photo h-full w-full bg-center bg-cover bg-no-repeat col-span-1 row-span-1 col-start-2 row-start-5"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/7584538/pexels-photo-7584538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          }}
        ></div>
        <div
          className="photo h-full w-full bg-center bg-cover bg-no-repeat col-span-1 row-span-1 col-start-7 row-start-4"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/4836368/pexels-photo-4836368.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          }}
        ></div>
      </div>
    </section>
  );
};

export default Hero;
