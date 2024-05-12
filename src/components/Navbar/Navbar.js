import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function navbar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Nav className="me-auto">
          <Link
            style={{ fontSize: "25px", color: "white", textDecoration: "none"}}
            to="/"
          >
            {" "}
            Home{" "}
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
export default navbar;
