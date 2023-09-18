import { useRef } from "react";
import {
  useGsapGalleryCategory,
  useGsapGalleryImage,
  useGsapGalleryTitle,
} from "../hooks/gsap";

const GalleryItem = ({ image, title, category }) => {
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const categoryRef = useRef(null);

  useGsapGalleryImage(imageRef);
  useGsapGalleryTitle(titleRef);
  useGsapGalleryCategory(categoryRef);
  return (
    <div className="gallery-item relative w-1/2">
      <h1
        ref={titleRef}
        className="title absolute top-[10%] left-[-50%] font-baijamjuree text-[8vw] leading-[1.2] uppercase text-custom-lighter z-[1] mix-blend-color-dodge"
      >
        {title}
      </h1>
      <p
        ref={categoryRef}
        className="category absolute left-0 bottom-[-5%] text-custom-lighter tracking-[8px] uppercase z-[1] font-baijamjuree font-[500]"
      >
        {category}
      </p>
      <div
        ref={imageRef}
        className="image bg-center bg-no-repeat bg-cover w-full h-screen"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
    </div>
  );
};

export default GalleryItem;
