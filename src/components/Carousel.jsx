import Carousel from 'react-bootstrap/Carousel';
import carrusel1 from '../assets/images/img1.jpg';
import carrusel2 from '../assets/images/img2.jpg';
import carrusel3 from '../assets/images/img3.jpg';
import './MyCarousel.css';

function MyCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carrusel1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carrusel2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carrusel3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;
