// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../assets/navbar/logo.jpg"
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./Navbar.css"
import {NavLink} from 'react-router-dom';

function NavScrollExample() {
    return (
        <Navbar expand="lg">
            <Container fluid>
                <Navbar.Brand href="#"><img src={logo} alt="MYM" className='logo'/></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll"/>
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{maxHeight: '100px'}}
                        navbarScroll
                    >
                        <NavLink
                            to="/"
                            className="nav-item nav-link link-text"
                        >Home
                        </NavLink>
                        <NavLink
                            to="/portfolio"
                            className="nav-item nav-link link-text"
                        >Portfolio
                        </NavLink>
                        <NavLink
                            to="/Services"
                            className="nav-item nav-link link-text"
                        >Services
                        </NavLink>
                        <NavLink
                            to="/About"
                            className="nav-item nav-link link-text"
                        >About Us
                        </NavLink>
                        {/* <Nav.Link href="#services">Services</Nav.Link> */}
                        {/* <Nav.Link href="#aboutus">About Us</Nav.Link> */}
                        <NavLink
                            to="/careers"
                            className="nav-item nav-link link-text"
                        >
                            Careers
                        </NavLink>
                    </Nav>
                    <Stack direction="horizontal" gap={5}>
                        <button className='btn-contactus'>Contact Us</button>
                    </Stack>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScrollExample;