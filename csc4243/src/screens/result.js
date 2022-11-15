import { NavigationType, useNavigate } from "react-router-dom";
import resume from '../images/finished_resume.png';

const Page = () => {
    let navigate = useNavigate();

    return (
        <div className = "result">
            <div className="Header">
                <h1>Your Resume</h1>
            </div>
            <img src={resume} alt="" />
            <br />
            <button onClick={() => {{(navigate('/home'))}}}>Home</button>
        </div>
    );
}

export default Page;
