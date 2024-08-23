import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../assets/images/img1.jpg';

function MyCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ExampleCarouselImage}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ExampleCarouselImage}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ExampleCarouselImage}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;
