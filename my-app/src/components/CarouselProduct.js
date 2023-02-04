import Carousel from "react-bootstrap/Carousel";

function CarouselProduct() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.miniso.com/UploadFiles/Images/%E8%A3%B8%E7%86%8A%E5%AE%98%E7%BD%91banner(1)-01.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.miniso.com/UploadFiles/Images/banner3(1).jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.miniso.com/UploadFiles/Images/usaonline.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselProduct;
