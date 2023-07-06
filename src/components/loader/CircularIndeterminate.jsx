// import * as React from 'react';
// import CircularProgress from '@mui/material/CircularProgress';
// import Box from '@mui/material/Box';
// import "./CircularIndeterminate.css";


// export default function CircularIndeterminate() {
//   let progressBar = document.querySelectorAll(".circular-progress");
// let valueContainer = document.querySelectorAll(".value-container");

// let progressValue = 0;
// let progressEndValue = 100;
// let speed = 30;

// for (let i = 0; i < 1; i++) {
//   // const element = valueContainer[i]
//     let progress = setInterval(() => {
//   progressValue++;
//   valueContainer.textContent = `${progressValue}%`;
//   progressBar[i].style.background = `conic-gradient(
//       rgba(35, 255, 35, 0.742) ${(progressValue * 3.6)*0.25}deg,
//       #1c3d1c ${(progressValue * 3.6)*0.25}deg
//   )`;
//   valueContainer.textContent = `${progressValue}%`;
//   progressBar[i+1].style.background = `conic-gradient(
//       rgba(35, 255, 35, 0.742) ${(progressValue * 3.6)*0.5}deg,
//       #1c3d1c ${(progressValue * 3.6)*0.5}deg
//   )`;
//   valueContainer.textContent = `${progressValue}%`;
//   progressBar[i+2].style.background = `conic-gradient(
//       rgba(35, 255, 35, 0.742) ${(progressValue * 3.6)*0.75}deg,
//       #1c3d1c ${(progressValue * 3.6)*0.75}deg
//   )`;
//   valueContainer.textContent = `${progressValue}%`;

//   progressBar[i+3].style.background = `conic-gradient(
//       rgba(35, 255, 35, 0.742) ${progressValue * 3.6}deg,
//       #1c3d1c ${progressValue * 3.6}deg
//   )`;
  
//   if (progressValue == progressEndValue) {
//     clearInterval(progress);
//   }
// }, speed);
// }

//   return (
//     <Box sx={{ display: 'flex' }}>
//       {/* <CircularProgress /> */}
// <div class="progress-box">
//     <div class="Circular-box">
//       <div class="circular-progress">
//         <div class="value-container">0%</div>
//       </div>
//     </div>
//     <div class="Circular-box ms-5">
//       <div class="circular-progress">
//         <div class="value-container">0%</div>
//       </div>
//     </div>
//     <div class="Circular-box ms-5">
//       <div class="circular-progress">
//         <div class="value-container">0%</div>
//       </div>
//     </div>
//     <div class="Circular-box ms-5">
//       <div class="circular-progress">
//         <div class="value-container">0%</div>
//       </div>
//     </div>
//   </div>
//     </Box>
//   );
// }


import { useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress style={{color:"green" , height:"8rem" ,width:"8rem"}}
        variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography style={{color:"white"}}
        variant="caption" component="div" color="text.secondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};

export default function CircularStatic() {
  const [progress1, setProgress1] = useState(0);
  const [progress2, setProgress2] = useState(0);
  const [progress3, setProgress3] = useState(0);
  const [progress4, setProgress4] = useState(0);


  useEffect(() => {
    const timer1 = setInterval(() => {
      setProgress1((prevProgress) => (prevProgress >= 25 ? 0 : prevProgress + 1));
    }, 100);
    const timer2 = setInterval(() => {
      setProgress2((prevProgress) => (prevProgress >= 50 ? 0 : prevProgress + 1));
    }, 100);
    const timer3 = setInterval(() => {
      setProgress3((prevProgress) => (prevProgress >= 75 ? 0 : prevProgress + 1));
    }, 100);
    const timer4 = setInterval(() => {
      setProgress4((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 1));
    }, 100);
    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
      clearInterval(timer3);
      clearInterval(timer4);
    };
  }, []);

  

  return ( 
    <Container className='d-grid m-3'>
      <Row>
        <Col>
    <Card className=''
     style={{ backgroundColor:'black', opacity: "0.8" }}>
      <Card.Body >
        <Card.Title></Card.Title>
        <Card.Text>
      <CircularProgressWithLabel value={progress1} />
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
        <Col>
    <Card className=''
     style={{ backgroundColor:'black', opacity: "0.8" }}>
      <Card.Body >
        <Card.Title></Card.Title>
        <Card.Text>
      <CircularProgressWithLabel value={progress2} />
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
        <Col>
    <Card className=''
     style={{ backgroundColor:'black', opacity: "0.8" }}>
      <Card.Body >
        <Card.Title></Card.Title>
        <Card.Text>
      <CircularProgressWithLabel value={progress3} />
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
        <Col>
    <Card className=''
     style={{ backgroundColor:'black', opacity: "0.8" }}>
      <Card.Body >
        <Card.Title></Card.Title>
        <Card.Text>
      <CircularProgressWithLabel value={progress4} />
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    
    </Row>
    </Container>
  )
}