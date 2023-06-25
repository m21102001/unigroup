// import React from 'react';
import progress from "../assets/navbar/progress.png"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Progress.css";


const Progress = () => {
  return (
    <div className='Progress'>
    <h5>In Progress</h5>
    <Container>
      <Row>
        <Col><img src={progress} alt="Loading" className="Progress-img" /></Col>
      </Row>
    </Container>
    </div>
  )
}

export default Progress;