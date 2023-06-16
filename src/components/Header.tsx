import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
function Header() {
  const { openCart, cartQuantity } = useShoppingCart();
  return (
    <Navbar sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="flex gap-4 text-uppercase fs-2">
          <NavLink to="/" className="text-dark text-decoration-underline">
            Home
          </NavLink>
          <NavLink to="/store" className="text-dark text-decoration-underline">
            Store
          </NavLink>
          <NavLink to="/about" className="text-dark text-decoration-underline">
            About
          </NavLink>
        </Nav>
        <Button
          variant="light"
          className="position-relative flex align-items-center justify-content-center"
          onClick={openCart}
        >
          <span className="material-symbols-outlined">shopping_cart</span>
          <span
            style={{ width: "25px", height: "25px" }}
            className="position-absolute top-0 right-5 bg-danger text-white rounded-circle"
          >
            {cartQuantity}
          </span>
        </Button>
      </Container>
    </Navbar>
  );
}

export default Header;
