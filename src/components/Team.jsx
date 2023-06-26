import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import "./Team.css";
import team from "../assets/navbar/Team.png";
import linkedin from "../assets/navbar/linkedin.png"
import Github from "../assets/navbar/Github.png"
import Behance from "../assets/navbar/Behance.png"


function Team() {
    return (
        <div>
        <h1 className='heading'>Our Team</h1>
        <ButtonToolbar className='contant-center justify-content-center' aria-label="Toolbar with button groups">
          <ButtonGroup className="department me-5" aria-label="First group">
            <Button className='buttonGroup' variant='' active>All</Button> 
          </ButtonGroup>
          <ButtonGroup className="department me-5" aria-label="Third group">
            <Button className='buttonGroup' variant='outline-dark'>Owner</Button>
          </ButtonGroup>
          <ButtonGroup className="department me-5" aria-label="Third group">
            <Button className='buttonGroup' variant='outline-dark'>UI/UX</Button>
          </ButtonGroup>
          <ButtonGroup className="department me-5" aria-label="Third group">
            <Button className='buttonGroup' variant='outline-dark'>Front-End</Button>
          </ButtonGroup>
          <ButtonGroup className="department me-5" aria-label="Third group">
            <Button className='buttonGroup' variant='outline-dark'>Back-End</Button>
          </ButtonGroup>
          <ButtonGroup className="department me-5" aria-label="Third group">
            <Button className='buttonGroup' variant='outline-dark'>Flutter</Button>
          </ButtonGroup>
        </ButtonToolbar>
        <Container style={{marginLeft: "2rem"}}>
        <Row>
    <Card style={{ width: '15rem' , margin:"2rem" }}>
        <img src={team} alt="" />
      <Card.Body>
        <Card.Title>Mohamed Ali</Card.Title>
        <Card.Text className='text'>Graphic Design</Card.Text>
        <img src={linkedin} alt="" />
        <img src={Github} alt="" />
        <img src={Behance} alt="" />
      </Card.Body>
    </Card>
    <Card style={{ width: '15rem' , margin: "2rem" }}>
        <img src={team} alt="" />
      <Card.Body>
        <Card.Title >Mohamed Ali</Card.Title>
        <Card.Text className='text'>Head of Flutter</Card.Text>
        <img src={linkedin} alt="" />
        <img src={Github} alt="" />
        <img src={Behance} alt="" />
      </Card.Body>
    </Card>
   
    <Card style={{ width: '15rem' , margin: "2rem" }}>
        <img src={team} alt="" />
      <Card.Body>
        <Card.Title>Mohamed Ali</Card.Title>
        <Card.Text className='text'>Head of UI/UX</Card.Text>
        <img src={linkedin} alt="" />
        <img src={Github} alt="" />
        <img src={Behance} alt="" />
      </Card.Body>
    </Card>
    <Card style={{ width: '15rem' , margin: "2rem 2rem" }}>
        <img src={team} alt="" />
      <Card.Body>
        <Card.Title>Mohamed Ali</Card.Title>
        <Card.Text className='text'>Web Development</Card.Text>
        <img src={linkedin} alt="" />
        <img src={Github} alt="" />
        <img src={Behance} alt="" />
      </Card.Body>
    </Card>
    </Row>
    <Row>
    <Card style={{ width: '15rem' , margin: "2rem 2rem" }}>
        <img src={team} alt="" />
      <Card.Body>
        <Card.Title>Mohamed Ali</Card.Title>
        <Card.Text className='text'>UI/UX Designer</Card.Text>
        <img src={linkedin} alt="" />
        <img src={Github} alt="" />
        <img src={Behance} alt="" />
      </Card.Body>
    </Card>
    <Card style={{ width: '15rem' , margin: "2rem 2rem" }}>
        <img src={team} alt="" />
      <Card.Body>
        <Card.Title>Mohamed Ali</Card.Title>
        <Card.Text className='text'>Graphic Design</Card.Text>
        <img src={linkedin} alt="" />
        <img src={Github} alt="" />
        <img src={Behance} alt="" />
      </Card.Body>
    </Card>
    <Card style={{ width: '15rem' , margin: "2rem 2rem" }}>
        <img src={team} alt="" />
      <Card.Body>
        <Card.Title>Mohamed Ali</Card.Title>
        <Card.Text className='text'>Frontend</Card.Text>
        <img src={linkedin} alt="" />
        <img src={Github} alt="" />
        <img src={Behance} alt="" />
      </Card.Body>
    </Card>
    <Card style={{ width: '15rem' , margin: "2rem 2rem" }}>
        <img src={team} alt="" />
      <Card.Body>
        <Card.Title>Mohamed Ali</Card.Title>
        <Card.Text className='text'>Backend</Card.Text>
        <img src={linkedin} alt="" />
        <img src={Github} alt="" />
        <img src={Behance} alt="" />
      </Card.Body>
    </Card>
    </Row>
      </Container>

        </div>
      );
}

export default Team;
