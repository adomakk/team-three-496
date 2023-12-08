import Carousel from 'react-bootstrap/Carousel';
import photo1 from '../assets/test.jpg';
import photo2 from '../assets/test2.jpg';
import photo3 from '../assets/test3.jpg';
import photo4 from '../assets/test4.jpeg';


// Function that implements the picture slideshow
function CampusIMG() {
  return (
    // Takes the imported pictures from homepage/assets/ folder and includes them into the slideshow
    <Carousel pause="false" fade interval="7000" className='shadow-lg'>
      <Carousel.Item>
        <img src={photo1} alt="placeholder1"/>
      </Carousel.Item>
      <Carousel.Item>
        <img src={photo2} alt="placeholder2"/>
      </Carousel.Item>
      <Carousel.Item>
        <img src={photo3} alt="placeholder3"/>
      </Carousel.Item>
      <Carousel.Item>
        <img src={photo4} alt="placeholder4"/>
      </Carousel.Item>
    </Carousel>
  );
}

// Exports function to the main App.js file
export default CampusIMG;