import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "../../assets/img/img1.avif";
import img2 from "../../assets/img/img2.avif";
import img3 from "../../assets/img/img3.avif";
import Container from "@/components/Container";

const Banner = () => {
  return (
    <Container>
      <Carousel showArrows={true}>
        <div>
          <img src={img1} />
        </div>
        <div>
          <img src={img2} />
        </div>
        <div>
          <img src={img3} />
        </div>
        <div>
          <img src={img1} />
        </div>

        <div>
          <img src={img2} />
        </div>
        <div>
          <img src={img3} />
        </div>
      </Carousel>
    </Container>
  );
};

export default Banner;
