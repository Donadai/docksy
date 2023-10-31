import ImageCarousel from './ImageCarousel';

const Home = () => {
  const landingPageImages = [
    { src: '../images/home/landing1.jpg', alt: 'Landing 1' },
    { src: '../images/home/landing2.jpg', alt: 'Landing 2' },
    { src: '../images/home/landing3.jpg', alt: 'Landing 3' },
    { src: '../images/home/landing4.jpg', alt: 'Landing 4' },
    { src: '../images/home/landing5.jpg', alt: 'Landing 5' },
    { src: '../images/home/landing6.jpg', alt: 'Landing 6' },
    { src: '../images/home/landing7.jpg', alt: 'Landing 7' },
    { src: '../images/home/landing8.jpg', alt: 'Landing 8' },
  ];

  return <ImageCarousel images={landingPageImages} />;
};

export default Home;
