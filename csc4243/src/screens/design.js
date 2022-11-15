import React from 'react';
import { NavigationType, useNavigate } from "react-router-dom";
import basic from '../images/template_basic.png';
import professional from '../images/template_professional.png';
import green from '../images/template_green.png';
import silicon from '../images/template_silicon.png';
import '../components/css/design.css';

import { FaQuestionCircle, FaArrowLeft } from "react-icons/fa";
import '../App.css';

const DesignScreen = () => {
let navigate = useNavigate();
return (
<div class="design">
    <div className="Header">
            <div class="left-arrow" onClick={() => navigate('/experience')}> <FaArrowLeft /> </div>
            <h1>Design</h1>
    </div>
    <h3>Select a layout for your resume</h3>
    <div className="Design">
            <div layouts>
                <img className="style" src={basic} alt="" tabIndex={1}/>
                <img className="style" src={professional} alt="" tabIndex={1}/>
                <img className="style" src={green} alt="" tabIndex={1}/>
                <img className="style" src={silicon} alt="" tabIndex={1}/>
            </div>
            <br />
            <button onClick={() => {{(navigate('/result'))}}}>Result</button>
        </div>
</div>
);
};

export default DesignScreen;
