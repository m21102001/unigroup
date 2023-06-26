import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../assets/navbar/logo.jpg"
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./Navbar.css"
import { NavLink } from 'react-router-dom';
function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#"><img src={logo} alt="MYM" className='logo' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink 
            to="/"
            className="nav-item nav-link"
            >Home
            </NavLink>
            <NavLink 
            to="/portfolio"
            className="nav-item nav-link"
            >Portfolio
            </NavLink>
            <NavLink 
            to="/Services"
            className="nav-item nav-link"
            >Services
            </NavLink>
            <NavLink 
            to="/About"
            className="nav-item nav-link"
            >About Us
            </NavLink>
            {/* <Nav.Link href="#services">Services</Nav.Link> */}
            {/* <Nav.Link href="#aboutus">About Us</Nav.Link> */}
            <NavLink
            to="/careers"
            className="nav-item nav-link"
            >
               Careers
            </NavLink>
          </Nav>
          <Stack direction="horizontal" gap={5}>

            <Button variant ="outline-dark">Arabic<img src={logo} alt="language" className='egypt' /></Button>
            <Button variant="outline-warning">Search</Button>
          </Stack>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;