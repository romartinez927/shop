import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Link} from "react-router-dom" 

function NavBar() {
  return (
    <Navbar key="lg" expand="lg" className="border">
      <Container fluid>
        <Navbar.Brand>
          <Link to="/">
            Navbar
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-lg`}
          aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3 gap-3">
                <Link to ="/collection/all">
                  all products.
                </Link>
                <Link to ="/collection/basic">
                  basic collection.
                </Link>
                <Link to ="/collection/summer">
                  summer vibes collection.
                </Link>
                <Link to ="/collection/nostalgia">
                  summer nostalgia collection.
                </Link>
                <Link to ="/">
                  <span className="material-icons material-symbols-outlined">
                    search
                  </span>
                </Link>
                <Link to ="/cart">
                  <span className="material-icons material-symbols-outlined">
                    shopping_bag
                  </span>
                </Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavBar;