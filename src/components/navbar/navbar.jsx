import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navbar.styles.scss";
const NavigationBar = () => {
  return (
    <Navbar className="navigationbar">
      <Container>
        <Navbar.Brand href="/" className="navbrand">
          BMN Bizchat
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Link className="navlink" href="#">
            Login
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
