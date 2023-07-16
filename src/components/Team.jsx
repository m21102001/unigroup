import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import team from "../assets/navbar/Team.png";
import Axios from 'axios';
import "./Team.css";


function Team() {
  const [interns, setInterns] = useState([])

  useEffect(()=>{
    Axios.get('http://localhost:3000/interns/showInterns')
    .then(res=>{
       console.log("getting from :::",res.data)
       setInterns(res.data)
    })
    .catch(err => console.log(err))
  },[])
      
  const arr= interns.map((data,index)=>{
    return(
      <Card key={index} style={{ width: '15rem', margin: "2rem" }}>
      <img src={team} alt="" />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text className='text'>{data.position}</Card.Text>
        <img src={data.linkidinLink} alt="linked in" />
        <img src={data.githubLink} alt="github" />
        <img src={data.be} alt="behience" />
      </Card.Body>
    </Card>

    )
  })
  return (
    <div>
      <h1 className='heading'>Our Team</h1>
      <ButtonToolbar className='d-flex contant-center justify-content-center' aria-label="Toolbar with button groups">
        <ButtonGroup className="department mb-3" aria-label="First group">
          <Button className='buttonGroup' variant='' active>All</Button>
          <Button className='buttonGroup' variant=''>Owner</Button>
          <Button className='buttonGroup' variant=''>UI/UX</Button>
          <Button className='buttonGroup' variant=''>Front-End</Button>
          <Button className='buttonGroup' variant=''>Back-End</Button>
          <Button className='buttonGroup' variant=''>Flutter</Button>
        </ButtonGroup>
      </ButtonToolbar>
      <Container className=' d-flex flex-column justify-content-center align-items-center'>
        <Row className='row row-team ms-4'>{arr}</Row>
      </Container>
    </div>
  );
}

export default Team;
