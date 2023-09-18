import { useRef } from "react";
import { useGsapFooterHeading } from "../hooks/gsap";

const Footer = () => {
  const footerRef = useRef(null);
  const headingRef = useRef(null);
  useGsapFooterHeading(headingRef, footerRef);
  return (
    <section ref={footerRef} className="wrapper  text-center overflow-hidden">
      <h1
        ref={headingRef}
        className=" text-[12vh] font-baijamjuree text-custom-primary"
      >
        bonjour
      </h1>
      <p className="font-baijamjuree">
        © {new Date().getFullYear()} Immemorial. Crafted by yours truly
      </p>
    </section>
  );
};

export default Footer;
