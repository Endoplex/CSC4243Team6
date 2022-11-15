import { NavigationType, useNavigate } from "react-router-dom";
import "../components/css/home.css";
import '../App.css';

const Page = () => {
    let navigate = useNavigate();

    return (
        <div class="home">
            <div className="Header">
                <h1>Home</h1>
            </div>
            <h1>Before we get started, what industry does your major classify as?</h1>
            <select style={{ width: "175px", height: "50px" }} name="industry" id="industry">
                <option value="" disabled selected>Select Your Option</option>
                <option value="engineering">Engineering</option>
                <option value="sciences">Physical Sciences</option>
                <option value="sciences">Life Sciences</option>
                <option value="humanities">Humanities</option>
                <option value="social">Social Sciences</option>
                <option value="social">Business</option>
            </select>
            <h1>CREATE YOUR RESUME HERE</h1>
            <button style={{ width: "175px", height: "60px" }} onClick={() => navigate('/personal')}>Start Resume</button>
        </div>
    );
}

export default Page;
