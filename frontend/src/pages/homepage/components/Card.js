import Carousel from 'react-bootstrap/Carousel';
import photo1 from '../assets/campus.jpg';
import photo2 from '../assets/banner.jpg';
import photo3 from '../assets/four.jpg'

function CampusIMG() {
  return (
    <Carousel pause="false" fade interval="10000">
      <Carousel.Item>
        <img src={photo1} />
      </Carousel.Item>
      <Carousel.Item>
        <img src={photo2} />
      </Carousel.Item>
      <Carousel.Item>
        <img src={photo3} />
      </Carousel.Item>
    </Carousel>
  );
}


export default CampusIMG;