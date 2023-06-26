import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, ButtonGroup } from "react-bootstrap"
import "./Carrer.css"
import Card from 'react-bootstrap/Card';



function Carrer() {
  return (
    <div>



    <Container>
      <Row>
        <Col><ButtonGroup className="department me-5" aria-label="First group">
        <Button className='buttonGroup' variant='' active>Jobs</Button> 
      </ButtonGroup>
      </Col>
        <Col><ButtonGroup className="department me-5" aria-label="First group">
        <Button className='buttonGroup' variant='' >Internship</Button> 
      </ButtonGroup>
      </Col>
      </Row>
      <Row>
      <Col aria-colspan={2}><Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Web Developer</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text className='text'>CSS,  HTML, JS, Photoshop, Woo-Commerce, WordPres</Card.Text>
        <ButtonGroup className="department me-5" aria-label="First group">
        <Button className='buttonGroup' variant='' active>More Details</Button> 
      </ButtonGroup>
      </Card.Body>
    </Card></Col>
      {/* <Col>2 of 2</Col> */}
      <Col aria-colspan={2}><Card style={{ width: '18rem'  }}>
      <Card.Body>
        <Card.Title>UI/UX Designer</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text className='text'>CSS,  HTML, JS, Photoshop, Woo-Commerce, WordPres</Card.Text>
        <ButtonGroup className="department me-5" aria-label="First group">
        <Button className='buttonGroup' variant='' active>More Details</Button> 
      </ButtonGroup>
      </Card.Body>
    </Card></Col>
    <Col>
    <div className='vr'></div>
    </Col>
      {/* <Col></Col> */}
      <Col aria-colspan={4}>
        <h1 className='card-head-1'>UI/UX Designer</h1>
        <h2 className='card-title-1'>Requirments</h2>
        <p className='description'>Lorem ipsum dolor sit amet, consectetur 
        adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua.
        quis nostrud exercitation ullamco laboris nisi ut aliquip 
        ex ea commodo consequat. Duis aute irure dolor 
        in reprehenderit in voluptate velit esse cillum dolore eu </p>
        <h2 className='card-title-1'>Requirments</h2>
        <p className='description'>Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua.
            quis nostrud exercitation ullamco laboris nisi ut aliquip 
            ex ea commodo consequat. Duis aute irure dolor 
            in reprehenderit in voluptate velit esse cillum dolore eu </p>
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