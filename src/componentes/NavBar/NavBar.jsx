import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {Link} from "react-router-dom" 
import { cartContext } from '../../storage/context';
import { useContext } from 'react';
import "./NavBar.css"

function NavBar() {
  const {cartQuantity} = useContext(cartContext)
  
  return (
    <header>
      <Navbar key="lg" expand="lg" className="border">
        <Container fluid>
          <Navbar.Brand>
            <Link className="nav-brand" to="/">
              Shop.
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
                <Link className="nav-item" to="/collection/all">
                  all products.
                </Link>
                <Link className="nav-item" to="/collection/basic">
                  basic collection.
                </Link>
                <Link className="nav-item" to="/collection/summer">
                  summer vibes collection.
                </Link>
                <Link className="nav-item" to="/collection/nostalgia">
                  summer nostalgia collection.
                </Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <Link className="nav-item" to="/">
                  <span className="material-icons material-symbols-outlined">
                    search
                  </span>
                </Link>
                <Link className="nav-item" to="/cart">
                  <i className="fa-solid fa-cart-shopping fs-5"></i>
                  <span className="badge bg-primary">{cartQuantity}</span>
                </Link>
        </Container>
      </Navbar>
    </header>
  );
}

export default NavBar;