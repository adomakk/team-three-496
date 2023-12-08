import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/3-stack-logo.png';
import { Nav } from 'react-bootstrap';

// Function that implements the navigation bar component
function NavbarAGGIE() {
    return (
        <
          /* Navbar brand references an image of the NCAT logo and upon clicking on it, sends the user to the main website
           * The Navbar also contains three links to the different pages of the website: Transfer Credits, Meetings, Deadlines.
          */
        >
        <Navbar id='nav-slide' sticky="top" className="shadow-lg" data-bs-theme="dark" expand="lg" style={{backgroundColor: '#0000b3' }}>
        <Container>
          <Navbar.Brand href="https://www.ncat.edu/index.php" className="justify-content-start">
            <img
              alt=""
              src={logo}
              width="300"
            />
          </Navbar.Brand>
          <Nav className="justify-content-start">
            <Nav.Link href="/transfer">Transfer Credits</Nav.Link>
            <Nav.Link href="/meetings">Meetings</Nav.Link>
            <Nav.Link href="/deadline">Deadlines</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
    );
}

// Exports function to the main App.js file
export default NavbarAGGIE;