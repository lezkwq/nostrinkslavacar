import { useState } from "react";

type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
};

export default function ImageGallery({
  images,
  className = "",
}: {
  images: GalleryImage[];
  className?: string;
}) {
  const [active, setActive] = useState(0);

  return (
    <div className={`image-gallery ${className}`}>
      {images.map((image, index) => (
        <button
          key={image.src}
          type="button"
          className="image-gallery-item"
          data-active={active === index}
          aria-label={image.caption}
          aria-pressed={active === index}
          onPointerEnter={(event) => {
            if (event.pointerType === "mouse") setActive(index);
          }}
          onFocus={() => setActive(index)}
          onClick={() => setActive(index)}
        >
          <img
            src={image.src}
            alt={image.alt}
            width={1200}
            height={1500}
            loading="lazy"
            decoding="async"
          />
          <span className="image-gallery-caption">{image.caption}</span>
        </button>
      ))}
    </div>
  );
}
