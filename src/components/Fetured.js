import { useRef } from "react";
import SectionTitle from "../utls/SectionTitle";
import { useGsapFeturedShutterLeftUnveil } from "../hooks/gsap";
import { useGsapFeturedShutterRightUnveil } from "../hooks/gsap";
const Fetured = () => {
  const shutterLref = useRef(null);
  const shutterRref = useRef(null);
  const feturesRef = useRef(null);

  useGsapFeturedShutterLeftUnveil(shutterLref, feturesRef);
  useGsapFeturedShutterRightUnveil(shutterRref, feturesRef);
  return (
    <section ref={feturesRef} className="wrapper">
      <SectionTitle titleText="Fetured" />
      <div className="fetures grid grid-cols-[30%_auto] gap-[10rem] items-center gap-[10rem] ">
        <div className="feture-left flex flex-col gap-[1rem] relative">
          <span className=" tracking-[5px] font-[500]">90'S TELEPHONE</span>
          <img
            className="w-full"
            src="https://images.pexels.com/photos/2587464/pexels-photo-2587464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="90'S TELEPHONE"
          />
          <span
            ref={shutterLref}
            className="feture-shutter-l absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-custom-lighter z-[1]"
          ></span>
        </div>
        <div className="feture-right flex flex-col gap-[1rem] relative">
          <span className=" tracking-[5px] font-[500] ">
            90'S CASSETTE PLAYER
          </span>
          <img
            className="w-full"
            src="https://images.pexels.com/photos/6076410/pexels-photo-6076410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="90'S CASSETTE PLAYER"
          />
          <span
            ref={shutterRref}
            className="feture-shutter-r absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-custom-lighter z-[1]"
          ></span>
        </div>
      </div>
    </section>
  );
};

export default Fetured;
