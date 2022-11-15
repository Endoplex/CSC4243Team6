import React from 'react';
import { NavigationType, useNavigate } from "react-router-dom";

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
    <button onClick={() => {{(navigate('/result'))}}}>Result</button>
</div>
);
};

export default DesignScreen;