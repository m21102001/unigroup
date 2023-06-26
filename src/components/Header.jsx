import NavScrollExample from "../components/NavScrollExample";
// import background from "../assets/navbar/Background_img.png";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "./Header.css";


function Header() {
    return (
        <div className='bg-img'>
            <NavScrollExample/>
            <div className='heading-h'>
                <h1>Let’s Work Together</h1>
                <p>Reach out to us & let's transform your business together!</p>
                <button className='btn-contactus'>Start New Project <ArrowForwardIosIcon
                    style={{fontSize: '12px', padding: '1px'}}/>
                </button>
            </div>

        </div>
    )
}

export default Header;


