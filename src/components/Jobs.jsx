import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import {Button, ButtonGroup, Row} from "react-bootstrap";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './jobs.css'

const Jobs = () => {
    return (
        <Row>
            <Col Column1 col-3><Card style={{width: '18rem'}}>
                <Card.Body>
                    <Card.Title>Web Developer</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">

                        <div className='icons'><LocationOnIcon/><p className=''>Office</p></div>
                        <div className='icons'><BusinessCenterIcon/><p className=''>Fulltime</p></div>
                        <div className='icons'><MenuBookIcon/><p className=''>Design</p></div>

                    </Card.Subtitle>
                    <Card.Text className='text text-des'>CSS, HTML, JS, Photoshop, Woo-Commerce, WordPres</Card.Text>
                    <ButtonGroup className="department me-2" aria-label="First group">
                        <Button className='buttonGroup ' variant='' active>More Details</Button>
                    </ButtonGroup>
                </Card.Body>
            </Card></Col>
            <Col className='Column2'><Card style={{width: '18rem'}}>
                <Card.Body>
                    <Card.Title>UI/UX Designer</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">

                        <div className='icons'><LocationOnIcon/><p className=''>Office</p></div>
                        <div className='icons'><BusinessCenterIcon/><p className=''>Fulltime</p></div>
                        <div className='icons'><MenuBookIcon/><p className=''>Design</p></div>

                    </Card.Subtitle>
                    <Card.Text className='text text-des'>CSS, HTML, JS, Photoshop, Woo-Commerce, WordPres</Card.Text>
                    <ButtonGroup className="department me-2" aria-label="First group">
                        <Button className='buttonGroup' variant='' active>More Details</Button>
                    </ButtonGroup>
                </Card.Body>
            </Card></Col>
            {/*<Col>*/}
            {/*    <div className='vr col-1'></div>*/}
            {/*</Col>*/}
            <Col className='carrer-internship'>
                <h1 className='head'>UI/UX Designer</h1>
                <h2 className='title'>Requirments</h2>

                <li className='description'>Lorem ipsum dolor sit amet, consectetur</li>
                <li className='description'>adipiscing elit, sed do eiusmod tempor</li>
                <li className='description'>incididunt ut labore et dolore magna.</li>
                <li className='description'>quis nostrud exercitation ullamco laboris</li>
                <li className='description'>ex ea commodo consequat. Duis aute</li>
                <li className='description'>in reprehenderit in voluptate velit esse</li>

                <h2 className='title'>Requirments</h2>

                <ul className='links-des'>
                    <li className='description'>Lorem ipsum dolor sit amet, consectetur</li>
                    <li className='description'>adipiscing elit, sed do eiusmod tempor</li>
                    <li className='description'>incididunt ut labore et dolore magna</li>
                    <li className='description'>quis nostrud exercitation ullamco laboris</li>
                    <li className='description'>ex ea commodo consequat. Duis aute</li>
                    <li className='description'>in reprehenderit in voluptate velit esse</li>
                </ul>

                <div className='skill-des'><h4>Job title:</h4><span>lorem ipsum</span></div>
                <div className='skill-des'><h4>Job Location:</h4><span>lorem ipsum</span></div>
                <div className='skill-des'><h4>Skill Required:</h4><span>Adobe Photoshop, Illustrator, sketch, Typography</span>
                </div>
            </Col>
        </Row>
    )
}
export default Jobs
