import { useRef } from "react";
import SectionTitle from "../utls/SectionTitle";
import { useGsapBlogeImage, useGsapBlogeRight } from "../hooks/gsap";

const Blog = () => {
  const imgRef = useRef(null);
  const blogRightRef = useRef(null);

  useGsapBlogeImage(imgRef);
  useGsapBlogeRight(blogRightRef, imgRef);

  return (
    <section className="wrapper ">
      <SectionTitle titleText="Blog" />
      <div className="bolg-wrapper grid grid-cols-[40%_auto] gap-[5vw]">
        <div className="blog-left h-full w-full flex items-center">
          <img
            ref={imgRef}
            src="https://images.pexels.com/photos/16269008/pexels-photo-16269008/free-photo-of-young-woman-in-sunglasses-and-headscarf-leaning-against-coppery-wall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div ref={blogRightRef} className="blog-right flex flex-col gap-10">
          <h2 className="text-[6vw] font-baijamjuree font-[500] tracking-wider text-custom-primary">
            Lorem ipsum.
          </h2>
          <p className="text-[2.5vw] leading-[1.5]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            veniam mollitia perferendis consectetur atque, odio ipsa ullam
            commodi consequatur dolorem quis ipsam, error perspiciatis unde
            dignissimos vel illo. Error, consequuntur?
          </p>
          <p className="text-[2.5vw] leading-[1.5]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            ad necessitatibus pariatur, labore laboriosam officia dignissimos
            excepturi accusamus nulla.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blog;
