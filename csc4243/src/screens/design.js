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
    <h1>Design page.</h1>
    <div className="Design">
            <img className="style" src={basic} alt="" />
            <img className="style" src={professional} alt="" />
            <img className="style" src={green} alt="" />
            <img className="style" src={silicon} alt="" />
            <br />
            <button onClick={() => {{(navigate('/result'))}}}>Result</button>
        </div>
</div>
);
};

export default DesignScreen;
