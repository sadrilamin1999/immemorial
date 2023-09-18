import SectionTitle from "../utls/SectionTitle";
import GalleryItem from "./GalleryItem";

const images = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/4842487/pexels-photo-4842487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Arcade playtime for 90's kids",
    category: "Arcade Games",
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/3356608/pexels-photo-3356608.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "No signal - no transmission",
    category: "TV",
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/12668238/pexels-photo-12668238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Retro Closures",
    category: "Boombox",
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/12204293/pexels-photo-12204293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Vinyl Loveless Happiness",
    category: "Vinyl Record",
  },
];

const Gallery = () => {
  return (
    <div className="gallery">
      <h2 className="section-title  wrapper pb-[5vh]  pl-[1.6rem] lowercase font-syncopate text-custom-primary text-[1.5rem] font-[700]">
        Gallery
      </h2>
      <div className="gallery-wrapper grid grid-cols-1 justify-items-center gap-[10vw] p-[10vw] bg-custom-primary">
        {images.map((image) => (
          <GalleryItem
            key={image.id}
            image={image.src}
            title={image.title}
            category={image.category}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
