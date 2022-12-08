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

    function selectionStyle() {
        document.getElementById('layouts').setAttribute("class", "selected");
    }

    //document.querySelector('#image').addEventListener('click', () => {document.querySelector('#selected').classList.add('selected')});
    
    return (
    <div class="design">
        <div className="Header">
                <div class="left-arrow" onClick={() => navigate('/experience')}> <FaArrowLeft /> </div>
                <div className="Logo"><h1>Online Resume Builder</h1></div>
                <div className="Header_text"><h1>Resume Layout</h1></div>
        </div>
        <h3>Select a layout for your resume</h3>
        <div className="Design">
                <div layouts>
                    <input className="style" type="image" src={basic} tabIndex={1} />
                    {/* <img className="style" src={professional} alt="" tabIndex={1}/>
                    <img className="style" src={green} alt="" tabIndex={1}/>
                    <img className="style" src={silicon} alt="" tabIndex={1}/> */}
                </div>
                <br />
                <button style={{ width: "175px", height: "60px" }} onClick={() => {{(navigate('/result'))}}}>To Result</button>
            </div>
    </div>
    );
};

export default DesignScreen;
