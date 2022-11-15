import { NavigationType, useNavigate } from "react-router-dom";
import resume from '../images/finished_resume.png';
import { FaQuestionCircle, FaArrowLeft } from "react-icons/fa";

const Page = () => {
    let navigate = useNavigate();

    return (
        <div className = "result">
            <div className="Header">
            <div class="left-arrow" onClick={() => navigate('/design')}> <FaArrowLeft /> </div>
            <div className="Logo"><h1>Online Resume Builder</h1></div>
            <div className="Header_text"><h1>Your Resume</h1></div>
            </div>
            <img src={resume} alt="" />
            <br />
            <button onClick={() => {{(navigate('/home'))}}}>Home</button>
        </div>
    );
}

export default Page;