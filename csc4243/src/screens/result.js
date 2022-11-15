import { NavigationType, useNavigate } from "react-router-dom";
import resume from '../images/finished_resume.png';
import { FaQuestionCircle, FaArrowLeft } from "react-icons/fa";

const Page = () => {
    let navigate = useNavigate();

    return (
        <div className = "result">
            <div className="Header">
            <div class="left-arrow" onClick={() => navigate('/design')}> <FaArrowLeft /> </div>
                <h1>Your Resume</h1>
            </div>
            <img src={resume} alt="" />
            <br />
            <button onClick={() => {{(navigate('/home'))}}}>Home</button>
        </div>
    );
}

export default Page;