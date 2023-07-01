import Container from 'react-bootstrap/Container';
import { Button } from "react-bootstrap"
import { useState } from 'react';
import "./Carrer.css"
import RecipeReviewCard from './career/RecipeReviewCard';
import InputWithIcon from './signup/InputWidthIcon';
import Signup from './signup/Signup';
// import { Grid } from '@mui/material';


// function generate(element) {
//   return [0, 1, 2].map((value) =>
//     cloneElement(element, {
//       key: value,
//     }),
//   );
// }

function Carrer() {

  const [jobs, setJobs] = useState(true)
  const [activeCard, setActiveCard] = useState(1)

  return (
    <Container className='pt-5'>
      <div className="choose-tour-or-flight py-3">
        <Button
          className='buttonGroup'
          onClick={() => {
            setActiveCard(1);
            setJobs(true);
          }}
          style={

            activeCard === 2
              ? { backgroundColor: "white", color: "black" }
              : { backgroundColor: "rgb(249 161 58)" }
          }
        >
          <div className='px-2'> Jobs</div>
        </Button>
        <Button
          className='buttonGroup'
          onClick={() => {
            setActiveCard(2);
            setJobs(false);
          }}
          style={
            activeCard === 1
              ? { backgroundColor: "white", color: "black" }
              : { backgroundColor: "rgb(249 161 58)" }
          }
        >
          <div>Internship</div>
        </Button>
      </div>
      <div className='content d-flex'>
        {jobs == true ? (
          <div className=" text-center">
            <div className="row">
              <div className="col-md-3 text-bg-light">
                <RecipeReviewCard />
              </div>
              <div className="col-md-3 text-bg-light">
                <RecipeReviewCard />
              </div>
              <div className="col-md-6 text-bg-light text-start ">
                {/* <RecipeReviewCard /> */}
                <h2 className='text-center'>UI/UX Designer</h2>
                <h4 >Requirements:</h4>
                <ul>
                  <li>Lorem ipsum dolor sit amet, consectetur</li>
                  <li>adipiscing elit, sed do eiusmod tempor</li>
                  <li>adipiscing elit, sed do eiusmod tempor</li>
                </ul>
                <h4 className='text-start'>Requirements:</h4>
                <ul >
                  <li>Lorem ipsum dolor sit amet, consectetur</li>
                  <li>adipiscing elit, sed do eiusmod tempor</li>
                  <li>adipiscing elit, sed do eiusmod tempor</li>
                </ul>
                <h5>Job Type : <span className='fs-6'>Lorem ipsum</span></h5>
                <h5>Job Location: <span className='fs-6'>Lorem ipsum</span></h5>
                <h5>Skills Required: <span className='fs-6'> Adobe Photoshop, Illustrator, sketch, Typography</span></h5>
              <Button
                className='buttonGroup mt-4'
                onClick={() => { }}
                style={
                  {
                    paddingTop:'.2rem',
                    backgroundColor: "rgb(249 161 58)",
                    width: "20%"
                  }
                }
              >
                <div className='px-2'> More...</div>
              </Button>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className=" text-center">
              <div className="row">
                <div className="col-md-3 text-bg-light">
                  <RecipeReviewCard />
                  <RecipeReviewCard />
                </div>
                <div className="col-md-3 text-bg-light">
                  <RecipeReviewCard />
                  <RecipeReviewCard />
                </div>
                <div className="col-md-6 text-bg-light">
                  <Signup />
                  {/* <InputWithIcon/> */}
                </div>
              </div>
            </div>

          </div>

        )}
      </div>

    </Container>
  )
}

export default Carrer;