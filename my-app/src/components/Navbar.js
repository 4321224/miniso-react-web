import Container from "react-bootstrap/Container";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  return (
    <Navbar bg="light" expand="lg">
      <Container className="flex justify-content-between">
        <Navbar.Brand>
          <img
            onClick={() => navigate("/")}
            src={process.env.PUBLIC_URL + "/assets/Miniso_logo.svg.png"}
            width="40"
            height="auto"
            alt="Logo Miniso"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end align-items-center">
          <Nav className="justify-content-center">
            <Nav.Link href="https://www.miniso.com/">Miniso</Nav.Link>
            <Nav.Link href="https://www.miniso.com/EN/Product">
              Product
            </Nav.Link>
            <Nav.Link href="https://www.miniso.com/EN/News">News</Nav.Link>

            <Nav.Link href="https://www.miniso.com/EN/Product">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
