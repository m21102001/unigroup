import { Button } from "react-bootstrap"
import about from "../assets/navbar/About_us.png"
// import Scaling from "../assets/navbar/Scaling.svg"
import "./About.css"
const Aboutus = () => {
  return (
    <div>
        <h2 className="fw-bold">About Us</h2>
        <hr />
        <div className="container text-center">
        <div className="row align-items-start services-section">
          <div className="col-6">
            <p className="Wearehere">LOREM ISUMPI DOLOR SIT AMET SIT AMET</p>
            <span className="loerm pt-5 text-start">Sed ut perspiciatis unde omnis iste natus error sit of the volum
              accusantium loLorem ipsum dolor sit amet, consectetur adcing elit,
              sed do eiusmod tempor incdunt ut labore et dolore magna aliqua.
              totam rem aperiam, eaque ipsa quae ab illo incdunt ut labore et dolore magna aliqua.
              totam rem aperiam, eaque ipsa quae ab illoinvento vatis quasi architecto beatae vitae dicta.</span>
            <div className="pt-4 text-start">
              <Button variant="outlit" className="btn btn-orange">Start New Project</Button>
            </div>
          </div>
          <div className="col-6">
            <div className="row">
              <img src={about} alt="servicestools" />
                {/* <div>{Scaling}</div> */}
              {/* <div className="col-6">col-8</div>
              <div className="col-6">col-4</div> */}
            </div>


          </div>

        </div>
      </div>
    </div>
  )
}

export default Aboutus