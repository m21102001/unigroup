import Carrer from "../components/Carrer"
import Footer from "../components/Footer"
import NavScrollExample from "../components/NavScrollExample"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos.js";


const Careers = () => {
    return (
        <div id="Careers">
            <div className='bg-careers'>
                <NavScrollExample/>
                <div className='heading-c'>
                    <h1>We’re Hiring!</h1>
                    <p>We’re looking for the best talent and we’re offering a special benefits package in return.
                        If you think you got what it takes to be the best, apply now...</p>
                </div>
            </div>
            <Carrer/>
            <Footer/>
        </div>
    )
}

export default Careers