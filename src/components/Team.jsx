// import Button from 'react-bootstrap/Button';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import "./Team.css";
import team from "../assets/navbar/Team.png";
import linkedin from "../assets/navbar/linkedin.png"
import Github from "../assets/navbar/Github.png"
import Behance from "../assets/navbar/Behance.png"
import { useEffect, useState } from 'react';
import Employee from './Employee';
// import axios from "axios";


function Team() {

  const api_url = "http://localhost:3000/employees/showEmployees";
  const [employees,setEmployees] = useState([]);
  // const [categories,setCategories] = useState([]);
  const getemployees = () => {
      fetch(api_url)
      .then((res) => res.json())
      .then((data) => setEmployees(data));
  }
  // const getcategories = () => {
  //     fetch(`${api_url}/categories`)
  //     .then((res) => res.json())
  //     .then((data) => setCategories(data));
  // }
  // const getemployeesIncategory = (catName) => {
  //     console.log(catName);
  //     fetch(`${api_url}/category/${catName}`)
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // }

  useEffect(() => {
      getemployees();
      // getcategories();
  },[])


  // const [interns,setInterns] = useState([]);
  // const api_url = "http://localhost:3000/jobs/showJobs";
  // useEffect(() => {
  //   axios.get(api_url)
  //   .then((res) => {
  //     console.log(setInterns(res.data));
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   })
  // })
  // const data=axios.get('http://localhost:3000/jobs/showJobs').then(res=>console.log(res.data))
  
  return (
        <div>
        <h1 className='heading'>Our Team</h1>
        {/* <ButtonToolbar className='contant-center justify-content-center' aria-label="Toolbar with button groups">
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
        </ButtonToolbar> */}
        <button onClick={() => {
                        getproducts();
                    }} className='btn btn-info'>All</button>
        {/* {
                categories.map((cat) => {
                    return <button key={cat} onClick={() => {
                        getemployeesIncategory(cat);
                    }}  className='btn btn-info'>{cat}</button>
                })
            } */}
        <Container className=' d-flex flex-column justify-content-center align-items-center'>
        <Row  className='row row-team ms-4'>
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
    <Card style={{ width: '15rem' , margin:"2rem" }}>
      <Card.Body>
        {/* <Card.Title>Mohamed Ali</Card.Title>
        <Card.Text className='text'></Card.Text> */}
        <div className="row">

        {employees.map((employees) => {
            return (
            <div className='col-3' key={employees.id}>
                <Employee Employee={employees}/>
            </div>
            );
        })}
        </div>
      </Card.Body>
    </Card>

    {/* <Card style={{ width: '15rem' , margin: "2rem" }}>
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
    <Row  className='row row-team ms-4'>
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
    </Card> */}
    </Row>
      </Container>

    </div>
  );
}

export default Team;
