import Carousel from 'react-bootstrap/Carousel';
import bench from "../assets/bench.jpg"
import kiss from "../assets/kiss.jpg"
import kiss2 from "../assets/kiss2.jpg";


function Rotator() {
  return (
    <Carousel fade data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid mx-auto carousel-image"
          src={bench}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Hey look we're on a bench!</h3>
          <p>And we're holding hands1</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid carousel-image"
          src={kiss}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid carousel-image"
          src={kiss2}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Rotator;