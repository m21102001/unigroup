import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import team from "../assets/navbar/Team.png";
import axios from 'axios';
import "./Team.css";


function Team() {
  const url_api="http://localhost:3000/interns/showInterns"
  const [teams ,setTeams]=useState([])
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [interns, setInterns] = useState([])

  useEffect(()=>{
    axios.get(url_api)
    .then(res=>{
       console.log("getting from :::",res.data)
       setInterns(res.data)
    })
    .catch(err => console.log(err))
  },[])
      
    useEffect(()=>{
      axios.get(url_api)
      .then((res)=>{
          setTeams(res.data)
      })
      .catch((err)=>{
          console.log(err)
      })
  })

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
  };

  const filteredTeams =
  selectedCategory === "all"
    ? teams
    : teams.filter((team) => team.category === selectedCategory);


    const arr= interns.map((data,index)=>{
    return(
      <>
      <Card key={index} style={{ width: '15rem', margin: "2rem" }}>
        <img src={team} alt="" />
        <Card.Body>
          <Card.Title>{data.name}</Card.Title>
          <Card.Text className='text'>{data.InternshipName}</Card.Text>
          <img src={data.linkidinLink} alt="linked in" />
          <img src={data.githubLink} alt="github" />
          <img src={data.be} alt="behience" />
        </Card.Body>
      </Card>
      </>

    )
  })
  return (
    <div>
      <h1 className='heading'>Our Team</h1>
      <ButtonToolbar className='d-flex contant-center justify-content-center' aria-label="Toolbar with button groups">
        <ButtonGroup className="department mb-3" aria-label="First group">
          <Button className='buttonGroup' 
          onClick={() => handleCategoryFilter("all")} 
          style={{backgroundColor:"OrangeRed",color:"White", border: "1px solid #F47B29" }} active>All</Button>
          <Button className='buttonGroup' 
          onClick={() => handleCategoryFilter("UI/UX")} 
          style={{backgroundColor:"White",color:"#9D9D9D", border: "1px solid #F47B29" }}>UI/UX</Button>
          <Button className='buttonGroup' 
          onClick={() => handleCategoryFilter("Front-End")} 
          style={{backgroundColor:"White",color:"#9D9D9D", border: "1px solid #F47B29" }}>Front-End</Button>
          <Button className='buttonGroup' 
          onClick={() => handleCategoryFilter("Back-End")}
          style={{backgroundColor:"White",color:"#9D9D9D", border: "1px solid #F47B29" }}>Back-End</Button>
          <Button className='buttonGroup' 
          onClick={() => handleCategoryFilter("Flutter")}
          style={{backgroundColor:"White",color:"#9D9D9D", border: "1px solid #F47B29" }}>Flutter</Button>
        </ButtonGroup>
      </ButtonToolbar>
      <Container className=' d-flex flex-column justify-content-center align-items-center'>
        <Row className='row row-team ms-4'>
        {filteredTeams.map((data) => {
            return (
              <div className="team-data d-flex" key={data.id}>
                  {arr}{arr}
              </div>
            );
          })}
          </Row>
      </Container>
    </div>
  );
}

export default Team;
