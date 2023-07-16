import { Button } from "react-bootstrap"
import servicestools from "../assets/navbar/services_tools.png"
import "./servivce.css"
const Services = () => {
  return (
    <div className="p-3">
      <h2 className="serivce pt-5">serivce</h2>
      <div className="container ps-5 text-start">
        <div className="row row-services align-items-start services-section">
          <div className="col-md-6">
            <h3 className="whatwedo text-start">WHAT WE DO</h3>
            <p className="Wearehere">We are here to help you develop yourself</p>
            <span className="loerm pt-5">Sed ut perspiciatis unde omnis iste natus error sit of the volum
              accusantium loLorem ipsum dolor sit amet, consectetur adcing elit,
              sed do eiusmod tempor incdunt ut labore et dolore magna aliqua.
              totam rem aperiam, eaque ipsa quae ab illo incdunt ut labore et dolore magna aliqua.
              totam rem aperiam, eaque ipsa quae ab illoinvento vatis quasi architecto beatae vitae dicta.</span>
            <div className="pt-4 text-start">
              <Button variant="outlit" className="btn btn-orange btn-services">Start New Project</Button>
            </div>
          </div>
          <div className="col-md-6 pt-4">
            <div className="row">
              <img src={servicestools} alt="servicestools" />
              {/* <div className="col-6">col-8</div>
              <div className="col-6">col-4</div> */}
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Services
