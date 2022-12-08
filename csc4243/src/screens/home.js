import { NavigationType, useNavigate } from "react-router-dom";
import "../components/css/home.css";
import logo from '../images/logo.png';

const Page = () => {
    let navigate = useNavigate();

    return (
        <div className="home">

            <div className="header">
            <   img className='logo' src={logo} alt=""></img>
                <div className="header_text"><h1>Home</h1></div>
            </div>

            <h2>Before we get started, what industry/major do you classify under?</h2>
            <select style={{ width: "175px", height: "60px" }} name="industry" id="industry">
                <option value="" disabled selected>Select Your Option</option>
                <option value="engineering">Engineering</option>
                <option value="sciences">Physical Sciences</option>
                <option value="sciences">Life Sciences</option>
                <option value="humanities">Humanities</option>
                <option value="social">Social Sciences</option>
                <option value="social">Business</option>
            </select>
            <h1>CREATE YOUR RESUME (for new users)</h1>
            <button style={{ width: "175px", height: "60px" }} onClick={() => navigate('/personal')}>Start Resume</button>
            <h1>More Experienced? Create a New CV</h1>
            <button style={{ width: "175px", height: "60px" }} onClick={() => navigate('/personal')}>Start CV</button>
        </div>
    );
}

export default Page;
