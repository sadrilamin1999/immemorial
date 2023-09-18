import { useEffect } from "react";
import { gsap, Expo } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// navbar animation
export const useDownStager = (items, delay = 0) => {
  useEffect(() => {
    const el = items.map((item) => item.current);
    gsap.fromTo(
      el,
      {
        y: "-100%",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        stagger: 0.1,
        ease: Expo.easeIn,
        delay,
      }
    );
  }, []);
};

gsap.registerPlugin(ScrollTrigger);

export const useGsapShutterUnveil = (item, delay = 0, trig) => {
  useEffect(() => {
    const el = item.current;
    gsap.fromTo(
      el,
      {
        height: "100%",
      },
      {
        height: 0,
        duration: 2,
        ease: Expo.easeInOut,
        delay,
        scrollTrigger: {
          trigger: trig.current,
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
};

// Hero photo fall down animation
export const useGsapPhotoDownFall = (items, delay) => {
  useEffect(() => {
    const el = items.map((item) => item.current);
    gsap.fromTo(
      el,
      {
        y: "-100vh",
        scale: 0,
      },
      {
        y: 0,
        scale: 1,
        duration: 2,
        stagger: 0.2,
        delay,
        ease: Expo.easeInOut,
      }
    );
  }, []);
};

// use photo move animation
export const useGsapPhotoMove = (items, trig) => {
  useEffect(() => {
    const el = items.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        y: 0,
      },
      {
        y: "-35%",
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: trig.current,
          scrub: 1,
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
};

// Fetured shutter animation
export const useGsapFeturedShutterLeftUnveil = (item, trig) => {
  useEffect(() => {
    const el = item.current;
    gsap.fromTo(
      el,
      {
        height: "100%",
      },
      {
        height: 0,
        duration: 2,
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: trig.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
};
export const useGsapFeturedShutterRightUnveil = (item, trig) => {
  useEffect(() => {
    const el = item.current;
    gsap.fromTo(
      el,
      {
        width: "100%",
      },
      {
        width: 0,
        duration: 2,
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: trig.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
};

// Gellary aniation
export const useGsapGalleryImage = (item) => {
  useEffect(() => {
    const el = item.current;
    gsap.fromTo(
      el,
      {
        x: 0,
        width: 0,
      },
      {
        x: "30%",
        width: "100%",
        duration: 1,
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: el,
          start: "top center",
          end: "bottom top",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
};
export const useGsapGalleryTitle = (item, trig) => {
  useEffect(() => {
    const el = item.current;
    gsap.fromTo(
      el,
      {
        x: "30%",
      },
      {
        x: 0,
        duration: 1,
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: trig.current,
          start: "top center",
          end: "bottom top",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
};
export const useGsapGalleryCategory = (item, trig) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(
      el,
      {
        x: "-100vw",
      },
      {
        x: 0,
        duration: 1,
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: trig.current,
          start: "top center",
          end: "bottom top",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
};
// footer animation
export const useGsapFooterHeading = (item, trig) => {
  useEffect(() => {
    const el = item.current;
    gsap.fromTo(
      el,
      {
        y: "-150%",
      },
      {
        y: 0,
        duration: 1.5,
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: trig.current,
          toggleActions: "play",
        },
      }
    );
  }, []);
};
// Blog animation
export const useGsapBlogeImage = (item) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(
      el,
      {
        x: "-150%",
      },
      {
        x: 0,
        duration: 1.5,
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: el,
          start: "top center",
          end: "bottom top",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
};
export const useGsapBlogeRight = (item, trig) => {
  useEffect(() => {
    const el = item.current;

    gsap.fromTo(
      el,
      {
        x: "150%",
      },
      {
        x: 0,
        duration: 1.5,
        ease: Expo.easeInOut,
        scrollTrigger: {
          trigger: trig.current,
          start: "top center",
          end: "bottom top",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
};
