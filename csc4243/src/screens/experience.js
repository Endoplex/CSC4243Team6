import { NavigationType, useNavigate } from "react-router-dom";
import '../App.css';
import { FaQuestionCircle, FaArrowLeft } from "react-icons/fa";

const Page = () => {
    let navigate = useNavigate();

    return (
        <div className="Experience">
            <div className="Header">
                <div class="left-arrow" onClick={() => navigate('/education')}> <FaArrowLeft /> </div>
                <h1>Experiences</h1>
            </div>
            <button onClick={() => {{(navigate('/design'))}}}>Design</button>
        </div>
    );
}

export default Page;