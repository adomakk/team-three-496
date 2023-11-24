import Carousel from 'react-bootstrap/Carousel';
import photo1 from '../assets/test.jpg';
import photo2 from '../assets/test2.jpg';
import photo3 from '../assets/test3.jpg';
import photo4 from '../assets/test4.jpeg';

function CampusIMG() {
  return (
    <Carousel pause="false" fade interval="7000" className='shadow-lg'>
      <Carousel.Item>
        <img src={photo1} alt="placeholder"/>
      </Carousel.Item>
      <Carousel.Item>
        <img src={photo2} alt="placeholder"/>
      </Carousel.Item>
      <Carousel.Item>
        <img src={photo3} alt="placeholder"/>
      </Carousel.Item>
      <Carousel.Item>
        <img src={photo4} alt="placeholder"/>
      </Carousel.Item>
    </Carousel>
  );
}


export default CampusIMG;