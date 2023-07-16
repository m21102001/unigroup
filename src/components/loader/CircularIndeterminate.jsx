import { useState, useEffect } from 'react';
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
      <CircularProgress style={{ color: "green", height: "8rem", width: "8rem" }}
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
        <Typography style={{ color: "white" }}
          variant="caption" component="div" color="text.secondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function CircularStatic() {
  const [progress1, setProgress1] = useState(0);
  const [progress2, setProgress2] = useState(0);
  const [progress3, setProgress3] = useState(0);
  const [progress4, setProgress4] = useState(0);
  
  // const progressdata = [
  //   {
  //     id: '1',
  //     name: 'kjflk',
  //   },
  //   {
  //     id: '2',
  //     name: 'kvkvk',
  //   },
  //   {
  //     id: '3',
  //     name: 'lll',
  //   },
  //   {
  //     id: '4',
  //     name: 'kkk',
  //   },
  // ];

  useEffect(() => {
    setInterval(() => {
      setProgress1((prevProgress) => (prevProgress >= 25 ? 25 : prevProgress + 10));
    }, 400);
    setInterval(() => {
      setProgress2((prevProgress) => (prevProgress >= 50 ? 50 : prevProgress + 10));
    }, 400);
    setInterval(() => {
      setProgress3((prevProgress) => (prevProgress >= 75 ? 75 : prevProgress + 10));
    }, 400);
    setInterval(() => {
      setProgress4((prevProgress) => (prevProgress >= 100 ? 100 : prevProgress + 10));
    }, 400);
    
  }, [progress1 ,progress2 ,progress3,progress4]);


  return (
    <Container className='d-grid m-3'>
      <Row>
       {/* {progressdata.map(persentage => (
        <div key={persentage.id}>{persentage.name}</div>
      ))} */}

        <Col className='py-3'>
          <Card
            style={{ backgroundColor: 'black', opacity: "0.8" }}>
            <Card.Body >
              <Card.Title></Card.Title>
              <Card.Text>
                <CircularProgressWithLabel value={progress1} />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className='py-3'>
          <Card 
            style={{ backgroundColor: 'black', opacity: "0.8" }}>
            <Card.Body >
              <Card.Title></Card.Title>
              <Card.Text>
                <CircularProgressWithLabel value={progress2} />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className='py-3'>
          <Card 
            style={{ backgroundColor: 'black', opacity: "0.8" }}>
            <Card.Body >
              <Card.Title></Card.Title>
              <Card.Text>
                <CircularProgressWithLabel value={progress3} />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className='py-3'>
          <Card 
            style={{ backgroundColor: 'black', opacity: "0.8" }}>
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