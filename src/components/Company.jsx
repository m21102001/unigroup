import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Employees from "../assets/navbar/Employees.png";
import Internships from "../assets/navbar/Internships.png";
import Parteners from "../assets/navbar/Parteners.png";
import "./Company.css";
import Card from 'react-bootstrap/Card';


function BasicExample() {
  return (
    <div>
    <h2 className='Heading'>Our Company</h2>
    <Container className=' d-flex flex-column justify-content-center align-items-center'>
    <Row  className='row row-company ms-4'>
    <Card style={{ width: '15rem' , margin:"2rem" }}>
        <img src={Internships} alt="" />
      <Card.Body>
        <Card.Title className='num1'>15</Card.Title>
        <Card.Text className ='internship'>Internships</Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '15rem' , margin: "2rem" }}>
        <img src={Employees} alt="" />
      <Card.Body>
        <Card.Title className='num2'>15</Card.Title>
        <Card.Text className ='employee'>Employees</Card.Text>
      </Card.Body>
    </Card>
   
    <Card style={{ width: '15rem' , margin: "2rem" }}>
        <img src={Parteners} alt="" />
      <Card.Body>
        <Card.Title className='num3'>15</Card.Title>
        <Card.Text className='partener'>Parteners</Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '15rem' , margin: "2rem" }}>
        <img src={Employees} alt="" />
      <Card.Body>
        <Card.Title className='num2'>15</Card.Title>
        <Card.Text className='employee'>Tasks</Card.Text>
      </Card.Body>
    </Card>
        </Row>
      </Container>
    </div>
  );
}

export default BasicExample;