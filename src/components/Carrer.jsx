import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, ButtonGroup } from "react-bootstrap"
import "./Carrer.css"
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Card from 'react-bootstrap/Card';



function Carrer() {
  return (
    <div>



    <Container>
      <Row>
        <Col><ButtonGroup className="department first-group me-5" aria-label="First group">
        <Button className='buttonGroup' variant='' active>Jobs</Button> 
      </ButtonGroup>
      </Col>
        <Col><ButtonGroup className="department first-group me-5" aria-label="First group">
        <Button className='buttonGroup' variant='' >Internship</Button> 
      </ButtonGroup>
      </Col>
      </Row>
      <Row>
      <Col Column1 col-3><Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Web Developer</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
            <LocationOnIcon /><p className=''>in Office</p>
            <BusinessCenterIcon /><p className=''>Full-time</p>
            <MenuBookIcon /><p className=''>Design</p>
        </Card.Subtitle>
        <Card.Text className='text'>CSS,  HTML, JS, Photoshop, Woo-Commerce, WordPres</Card.Text>
        <ButtonGroup className="department me-5" aria-label="First group">
        <Button className='buttonGroup' variant='' active>More Details</Button> 
      </ButtonGroup>
      </Card.Body>
    </Card></Col>
      <Col className='Column2 col-3'><Card style={{ width: '18rem'  } }>
      <Card.Body>
        <Card.Title>UI/UX Designer</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
            
            <LocationOnIcon /><p className=''>in Office</p>
            <BusinessCenterIcon /><p className=''>Full-time</p>
            <MenuBookIcon /><p className=''>Design</p>
            
        </Card.Subtitle>
        <Card.Text className='text'>CSS,  HTML, JS, Photoshop, Woo-Commerce, WordPres</Card.Text>
        <ButtonGroup className="department me-5" aria-label="First group">
        <Button className='buttonGroup' variant='' active>More Details</Button> 
      </ButtonGroup>
      </Card.Body>
    </Card></Col>
    <Col>
    <div className='vr col-1'></div>
    </Col>
      <Col className='carrer-internship col-4'>
        <h1 className='head'>UI/UX Designer</h1>
        <h2 className='title'>Requirments</h2>
        
        <li className='description'>Lorem ipsum dolor sit amet, consectetur</li> 
        <li className='description'>adipiscing elit, sed do eiusmod tempor </li> 
        <li className='description'>incididunt ut labore et dolore magna.</li>
        <li className='description'>quis nostrud exercitation ullamco laboris</li>
        <li className='description'>ex ea commodo consequat. Duis aute</li>
        <li className='description'>in reprehenderit in voluptate velit esse</li>

        <h2 className='title'>Requirments</h2>
        
        <li className='description'>Lorem ipsum dolor sit amet, consectetur</li> 
        <li className='description'>adipiscing elit, sed do eiusmod tempor </li> 
        <li className='description'>incididunt ut labore et dolore magna</li>
        <li className='description'>quis nostrud exercitation ullamco laboris</li>
        <li className='description'>ex ea commodo consequat. Duis aute</li>
        <li className='description'>in reprehenderit in voluptate velit esse</li>
        
            <h4>Job title:</h4><span>lorem ipsum</span>
            <h4>Job Location:</h4><span>lorem ipsum</span>
            <h4>Skill Required:</h4><span>Adobe Photoshop, Illustrator, sketch, Typography</span>
      </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Carrer;