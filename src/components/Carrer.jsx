
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, ButtonGroup } from "react-bootstrap"
import "./Carrer.css"
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Signup from './signup/Signup';



function Carrer() {

  const [jobs,setJobs] =useState(true)
  const [activeCard ,setActiveCard] =useState(1)
  return (
    <Container>
<div className="choose-tour-or-flight">
          <Button
          className='buttonGroup'
            onClick={() => {
              setActiveCard(1);
              setJobs(true);
            }}
            style={
              
              activeCard === 2
              ? { backgroundColor: "white" ,color:"black" }
              : { backgroundColor: "rgb(249 161 58)" }
            }
          >
            <div> Jobs</div>
          </Button>
          <Button
          className='buttonGroup'
            onClick={() => {
              setActiveCard(2);
              setJobs(false);
            }}
            style={
              activeCard === 1
                ? { backgroundColor: "white" ,color:"black" }
                : { backgroundColor: "rgb(249 161 58)" }
            }
          >
            <div>Internship</div>
          </Button>
        </div>
      {/* <Row>
        <Col><ButtonGroup className="department first-group me-5" aria-label="First group">
        <Button className='buttonGroup' variant='' active>Jobs</Button> 
      </ButtonGroup>
      </Col>
        <Col><ButtonGroup className="department first-group me-5" aria-label="First group">
        <Button className='buttonGroup' variant='' >Internship</Button> 
      </ButtonGroup>
      </Col>
      </Row> */}
      <div className='content'>
        {jobs == true? (
          
            <h1>Job Openings</h1>
            
            ):(
              <div>
                <h1>internship</h1>
                <Signup/>
              </div>
              
            )}
      </div>
      <Row>
      <Col Column1 col-3><Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Web Developer</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">

            <div className='icons'><LocationOnIcon /><p className=''>Office</p></div>
            <div className='icons'><BusinessCenterIcon /><p className=''>Fulltime</p></div>
            <div className='icons'><MenuBookIcon /><p className=''>Design</p></div>
        
        </Card.Subtitle>
        <Card.Text className='text text-des'>CSS,  HTML, JS, Photoshop, Woo-Commerce, WordPres</Card.Text>
        <ButtonGroup className="department me-2" aria-label="First group">
        <Button className='buttonGroup ' variant='' active>More Details</Button> 
      </ButtonGroup>
      </Card.Body>
    </Card></Col>
      <Col className='Column2 col-3'><Card style={{ width: '18rem'  } }>
      <Card.Body>
        <Card.Title>UI/UX Designer</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
            
            <div className='icons'><LocationOnIcon /><p className=''>Office</p></div>
            <div className='icons'><BusinessCenterIcon /><p className=''>Fulltime</p></div>
            <div className='icons'><MenuBookIcon /><p className=''>Design</p></div>
            
        </Card.Subtitle>
        <Card.Text className='text text-des'>CSS,  HTML, JS, Photoshop, Woo-Commerce, WordPres</Card.Text>
        <ButtonGroup className="department me-2" aria-label="First group">
        <Button className='buttonGroup' variant='' active>More Details</Button> 
      </ButtonGroup>
      </Card.Body>
    </Card></Col>
    <Col>
    <div className='vr col-1'></div>
    </Col>
      <Col className='carrer-internship col-5'>
        <h1 className='head'>UI/UX Designer</h1>
        <h2 className='title'>Requirments</h2>
        
        <li className='description'>Lorem ipsum dolor sit amet, consectetur</li> 
        <li className='description'>adipiscing elit, sed do eiusmod tempor </li> 
        <li className='description'>incididunt ut labore et dolore magna.</li>
        <li className='description'>quis nostrud exercitation ullamco laboris</li>
        <li className='description'>ex ea commodo consequat. Duis aute</li>
        <li className='description'>in reprehenderit in voluptate velit esse</li>

        <h2 className='title'>Requirments</h2>
        
        <ul className='links-des'>
        <li className='description'>Lorem ipsum dolor sit amet, consectetur</li> 
        <li className='description'>adipiscing elit, sed do eiusmod tempor </li> 
        <li className='description'>incididunt ut labore et dolore magna</li>
        <li className='description'>quis nostrud exercitation ullamco laboris</li>
        <li className='description'>ex ea commodo consequat. Duis aute</li>
        <li className='description'>in reprehenderit in voluptate velit esse</li>
        </ul>
        
            <div className='skill-des'><h4>Job title:</h4><span>lorem ipsum</span></div>
            <div className='skill-des'><h4>Job Location:</h4><span>lorem ipsum</span></div>
            <div className='skill-des'><h4>Skill Required:</h4><span>Adobe Photoshop, Illustrator, sketch, Typography</span></div>
      </Col>
      </Row>
    </Container>
  )
}

export default Carrer;