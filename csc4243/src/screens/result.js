import { NavigationType, useNavigate } from "react-router-dom";
import resume from '../images/finished_resume.png';

const Page = () => {
    let navigate = useNavigate();

    return (
        <div className = "result">
            <button onClick={() => {{(navigate('/home'))}}}>Home</button>
            <img src={resume} alt="" />
        </div>
    );
}

export default Page;
