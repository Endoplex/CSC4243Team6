import * as React from 'react';
import { NavigationType, useNavigate } from "react-router-dom";
import "../components/css/home.css";
import '../App.css';

const homeDefaultValues = {
    industry: ''
}

const Page = () => {
    let navigate = useNavigate();

    const [values, setValues] = React.useState(homeDefaultValues);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setValues({ ...values, [name]: e.target.value });
    };

    React.useEffect(() => {
        localStorage.setItem('experienceKey', JSON.stringify(values));
      }, [values]);

    return (
        <div class="home">
            <div className="Header">
                <div className="Logo"><h1>Online Resume Builder</h1></div>
                <div className="Header_text"><h1>Home</h1></div>
            </div>
            <h1>Before we get started, what industry/major do you classify under?</h1>
            <select style={{ width: "175px", height: "50px" }} name="industry" id="industry" onChange={handleChange}>
                <option value="" disabled selected>Select Your Option</option>
                <option value="engineering">Engineering</option>
                <option value="physSciences">Physical Sciences</option>
                <option value="lifeSciences">Life Sciences</option>
                <option value="humanities">Humanities</option>
                <option value="social">Social Sciences</option>
                <option value="business">Business</option>
            </select>
            <h1>CREATE YOUR RESUME (for new users)</h1>
            <button style={{ width: "175px", height: "60px" }} onClick={() => navigate('/personal')}>Start Resume</button>
            <h1>More Experienced? Create a New CV</h1>
            <button style={{ width: "175px", height: "60px" }} onClick={() => navigate('/personal')}>Start CV</button>
        </div>
    );
}

export default Page;
