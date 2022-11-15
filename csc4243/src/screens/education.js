import * as React from 'react';
import { NavigationType, useNavigate } from "react-router-dom";
import '../components/css/education.css';
import '../App.css';
import { FaQuestionCircle, FaArrowLeft } from "react-icons/fa";
import TextField from '@mui/material/TextField';
import { FormControlLabel, FormControl, FormLabel } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Select from "@mui/material/Select";

const Page = () => {
    let navigate = useNavigate();

    const [values, setValues] = React.useState({
        school: '',
        major: '',
        degree: '',
        GPA: '',
        month: '',
        year: '',
      });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    function majorHelp() {
        var popup = document.getElementById("myPopup");
        popup.classList.toggle("show");
    }

    function degreeHelp() {
        var popup = document.getElementById("degreePopup");
        popup.classList.toggle("show");
    }

    function gpaHelp() {
        var popup = document.getElementById("gpaPopup");
        popup.classList.toggle("show");
    }

    function institutionHelp() {
        var popup = document.getElementById("institutionPopup");
        popup.classList.toggle("show");
    }

    return (
        <div class="education">
            <div className="Header">
                <div class="left-arrow" onClick={() => navigate('/personal')}> <FaArrowLeft /> </div>
                <div className="Logo"><h1>Online Resume Builder</h1></div>
                <div className="Header_text"><h1>Education Information</h1></div>
            </div>
            <h1>Please fill out your up-to-date education information to open your resume!</h1>
            <h1>Education</h1>
            
            <Box sx={{ align: 'center'}}>
            <div>
            <FormControl sx={{ m: 3, width: '35ch' }} variant="standard">
                
                    <div>
                        <TextField
                            id="standard-textfield"
                            label="Institution"
                            values={values.school}
                            onChange={handleChange}
                            variant="standard"
                        />
                        <div class="popup" onClick={() => institutionHelp()}><FaQuestionCircle />
                            <span class="popuptext" id="institutionPopup">Enter your university or institution, wherever you are pursuing current education.</span>
                        </div>
                    </div>
                    <div>
                        <TextField
                            id="standard-textfield"
                            label="Major"
                            values={values.major}
                            onChange={handleChange}
                            variant="standard"
                        />
                        <div class="popup" onClick={() => majorHelp()}><FaQuestionCircle />
                            <span class="popuptext" id="myPopup">Enter your major (unabbreviated)</span>
                        </div>
                    </div>
                    <div>
                        <TextField
                            id="standard-textfield"
                            label="Degree"
                            values={values.degree}
                            onChange={handleChange}
                            variant="standard"
                        />
                        <div class="popup" onClick={() => degreeHelp()}><FaQuestionCircle />
                            <span class="popuptext" id="degreePopup">Enter your degree type (i.e. Bachelor's, Master's, PhD, etc.)</span>
                        </div>
                    </div>
                    <div>
                        <TextField
                            id="standard-textfield"
                            label="GPA"
                            values={values.GPA}
                            onChange={handleChange}
                            variant="standard"
                        />
                        <div class="popup" onClick={() => gpaHelp()}><FaQuestionCircle />
                            <span class="popuptext" id="gpaPopup">Optional: enter your GPA equivalent to a 4.0 scale.</span>
                        </div>
                    </div>
            </FormControl>
            <div>
            <h3>Graduation Date</h3>    
            <TextField
                id="standard-textfield"
                label="Month"
                values={values.month}
                onChange={handleChange}
                variant="standard"
            />
            <TextField
                id="standard-textfield"
                label="Year"
                values={values.year}
                onChange={handleChange}
                variant="standard"
            />
            </div>
            {/* <div id="graduation-container">
                <h2>Graduated?</h2>
                <div class="graduation-radio">
                    <input type="radio" value="Yes" name="graduated" />Yes
                </div>
                <div class="graduation-radio">
                    <input type="radio" value="No" name="graduated" />No
                </div>
            </div>

            <div id="major-container">
                <div class="form-field">
                <input class="info-form" type="text" placeholder="Major" name="major" required />
                    <div class="popup" onClick={() => majorHelp()}><FaQuestionCircle />
                        <span class="popuptext" id="myPopup">Enter your major (unabbreviated)</span>
                    </div>
                </div>
                <div class="form-field">
                <input class="info-form" type="text" placeholder="Degree Type" name="degree" required />
                    <div class="popup" onClick={() => degreeHelp()}><FaQuestionCircle />
                        <span class="popuptext" id="degreePopup">Enter your degree type (i.e. Bachelor's, Master's, PhD, etc.)</span>
                    </div>
                </div>
                <div class="form-field">
                <input class="info-form" type="text" placeholder="GPA (Optional)" name="gpa" />
                    <div class="popup" onClick={() => gpaHelp()}><FaQuestionCircle />
                        <span class="popuptext" id="gpaPopup">Optional: enter your GPA equivalent to a 4.0 scale.</span>
                    </div>
                </div>
                <div class="form-field">
                <input class="info-form" type="text" placeholder="Institution" name="institution" />
                    <div class="popup" onClick={() => institutionHelp()}><FaQuestionCircle />
                        <span class="popuptext" id="institutionPopup">Enter your university or institution, wherever you are pursuing current education.</span>
                    </div>
                </div>
            </div> */}
        </div>
        </Box>
        <button style={{ width: "175px", height: "60px" }} onClick={() => {{(navigate('/experience'))}}}>To Experiences</button>
        </div>
    );
}

export default Page;
