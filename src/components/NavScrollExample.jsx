import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../assets/navbar/logo.jpg"
import "./Navbar.css"

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
                        <Nav.Link style={{color: "#fff"}} href="#home">Home</Nav.Link>
                        <Nav.Link style={{color: "#fff"}} href="#portfolio">Portfolio</Nav.Link>
                        <Nav.Link style={{color: "#fff"}} href="#services">Services</Nav.Link>
                        <Nav.Link style={{color: "#fff"}} href="#aboutus">About Us</Nav.Link>
                        <Nav.Link style={{color: "#fff"}} href="#Careers">Careers</Nav.Link>
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