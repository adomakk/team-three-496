import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/3-stack-logo.png';
import { Nav } from 'react-bootstrap';

function NavbarAGGIE() {
    return (
        <>
        <Navbar className="shadow" expand="lg" sticky="top" bg="primary" data-bs-theme="dark">
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

export default NavbarAGGIE;