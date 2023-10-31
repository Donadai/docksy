import './ImageCarousel.scss';

import { useEffect, useState } from 'react';

interface ImageCarouselProps {
  images: {
    src: string;
    alt: string;
  }[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every x seconds (adjust as needed)

    return () => {
      clearInterval(interval);
    };
  }, [images]);

  return (
    <div className="carousel-container">
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          style={{ display: index === currentImageIndex ? 'block' : 'none' }}
        />
      ))}
    </div>
  );
};

export default ImageCarousel;
