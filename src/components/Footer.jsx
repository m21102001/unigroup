import logo from "../assets/navbar/logo.jpg"
import "./Footer.css"
import PlaceIcon from '@mui/icons-material/Place';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
const Footer = () => {
  return (
    <div  className="footer">

<div className="container">
  <footer className="pt-5">
    <div className="row">
    <div className="col mb-3">
      <a href="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">
        <img src={logo} alt="MYM" className="logo" />
      </a>
      <ul className="list-unstyled d-flex flex-column justify-content-center align-items-start align-self-start flex-fill flex-wra">
        <li className="ms-3"><a className="link-dark link-offset-2 link-underline link-underline-opacity-0" href="#"><PlaceIcon/> Nasr City, Cairo</a></li>
        <li className="ms-3"><a className="link-dark link-offset-2 link-underline link-underline-opacity-0" href="#"><LocalPhoneIcon/> 01282806994</a></li>
        <li className="ms-3"><a className="link-dark link-offset-2 link-underline link-underline-opacity-0" href="#"><EmailIcon/>support@msp.com</a></li>
      </ul>
    </div>
      <div className="col-6 col-md-2 mb-3">
        <h5 className="text-start">Service</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2 text-start"><a href="#" className="nav-link p-0 text-muted">UI UX Design</a></li>
          <li className="nav-item mb-2 text-start"><a href="#" className="nav-link p-0 text-muted">Mobile Development</a></li>
          <li className="nav-item mb-2 text-start"><a href="#" className="nav-link p-0 text-muted">Motion Graphic</a></li>
          <li className="nav-item mb-2 text-start"><a href="#" className="nav-link p-0 text-muted">Web Development</a></li>
          <li className="nav-item mb-2 text-start"><a href="#" className="nav-link p-0 text-muted">Digital Marketing</a></li>
        </ul>
      </div>

      <div className="col-6 col-md-2 mb-3">
        <h5 className="text-start">Company</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2 text-start"><a href="#" className="nav-link p-0 text-muted">Service</a></li>
          <li className="nav-item mb-2 text-start"><a href="#" className="nav-link p-0 text-muted">Our Team</a></li>
          <li className="nav-item mb-2 text-start"><a href="#" className="nav-link p-0 text-muted">Portfolio</a></li>
          <li className="nav-item mb-2 text-start"><a href="#" className="nav-link p-0 text-muted">Our trusted partner</a></li>
        </ul>
      </div>

      <div className="col-6 col-md-2 mb-3">
        <h5 className="text-start">Supports</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2 text-start"><a href="#" className="nav-link p-0 text-muted">Help center</a></li>
          <li className="nav-item mb-2 text-start"><a href="#" className="nav-link p-0 text-muted">Feedbcak</a></li>
          <li className="nav-item mb-2 text-start"><a href="#" className="nav-link p-0 text-muted">Contact us</a></li>
          <li className="nav-item mb-2 text-start"><a href="#" className="nav-link p-0 text-muted">Terms conditins</a></li>
        </ul>
      </div>
      <div className="col-6 col-md-2 mb-3">
        <h5 className="text-start">Our Social Media</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2 text-start"><a href="#" className="nav-link p-0 text-muted">Facebook</a></li>
          <li className="nav-item mb-2 text-start"><a href="#" className="nav-link p-0 text-muted">Linkedin</a></li>
          <li className="nav-item mb-2 text-start"><a href="#" className="nav-link p-0 text-muted">Instagram</a></li>
          <li className="nav-item mb-2 text-start"><a href="#" className="nav-link p-0 text-muted">YouTube</a></li>
        </ul>
      </div>

    </div>

    <div className="d-flex flex-column flex-sm-row justify-content-between pt-4 mt-4 border-top">
      <p>&copy; 2022 Company, Inc. All rights reserved.</p>
      <ul className="list-unstyled d-flex">
        <li className="ms-3"><a className="link-dark link-offset-2 link-underline link-underline-opacity-0" href="#">Privacy</a></li>
        <li className="ms-3"><a className="link-dark link-offset-2 link-underline link-underline-opacity-0" href="#">Security</a></li>
        <li className="ms-3"><a className="link-dark link-offset-2 link-underline link-underline-opacity-0" href="#">Terms</a></li>
      </ul>
    </div>
  </footer>
</div>
    </div>
  )
}

export default Footer