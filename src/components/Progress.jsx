// import React from 'react';
// import progress from "../assets/navbar/progress.png"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Progress.css";
import CircularIndeterminate from "./loader/CircularIndeterminate";


const Progress = () => {
  return (
    <div className='Progress'>
    <p className="heading-progress">In Progress</p>
    <Container>
      <Row className="row row-progress">
        <Col>
          <div className="progress-square">
          {/* <img src={progress} alt="Loading" className="Progress-img" /> */}
          <CircularIndeterminate />
          </div>
        </Col> 
      </Row>
    </Container>
    </div>
  )
}

export default Progress;