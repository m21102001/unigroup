import Carrer from "../components/Carrer"
import Footer from "../components/Footer"
import NavScrollExample from "../components/NavScrollExample"
import {useState} from "react";

const Careers = () => {
    const [isShowMore, setIsShowMore] = useState(false);

    const toggleReadMoreLess = () => {
        setIsShowMore(!isShowMore);
    };
    return (
        <div id="Careers">
            <div className='bg-careers'>
                <NavScrollExample/>
                <div className='heading-c'>
                    <h1>We’re Hiring!</h1>
                    <p>We’re looking for the best talent and we’re offering a special {isShowMore && (
                        <>
                            benefits package in return.
                            If you think you got what it takes to be the best, apply now...
                        </>
                    )}</p>

                    <span onClick={toggleReadMoreLess}>{isShowMore ? "Read Less" : "Read More"}</span>
                </div>
            </div>
            <Carrer/>
            <Footer/>
        </div>
    )
}

export default Careers