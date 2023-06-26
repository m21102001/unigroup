import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Button, ButtonGroup} from "react-bootstrap"
import "./Carrer.css"
// import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import MenuBookIcon from '@mui/icons-material/MenuBook';
// import Card from 'react-bootstrap/Card';
import {useState} from 'react';
import Jobs from "./Jobs.jsx";


function Carrer() {

    const [job, setJob] = useState(true)
    const [activeCard, setActiveCard] = useState(1)
    return (
        <Container>

            <div className="choose-tour-or-flight m-auto mt-5">
                <Button
                    className='buttonGroup mx-5'
                    onClick={() => {
                        setActiveCard(1);
                        setJob(true);
                    }}
                    style={

                        activeCard === 2
                            ? {backgroundColor: "white", color: "black"}
                            : {backgroundColor: "rgb(249 161 58)"}
                    }
                >
                    <div> Jobs</div>
                </Button>
                <Button
                    className='buttonGroup'
                    onClick={() => {
                        setActiveCard(2);
                        setJob(false);
                    }}
                    style={
                        activeCard === 1
                            ? {backgroundColor: "white", color: "black"}
                            : {backgroundColor: "rgb(249 161 58)"}
                    }
                >
                    <div>Internship</div>
                </Button>
            </div>
            {/*<div className='content'>*/}
            {/*    {job === true ? (*/}

            {/*        <h1>Job Openings</h1>*/}

            {/*    ) : (*/}
            {/*        <h1>internship</h1>*/}
            {/*    )}*/}
            {/*</div>*/}
            {
                job === true ? <Jobs/> : 'fff'
            }

        </Container>
    )
}

export default Carrer;