import * as React from 'react';
import { NavigationType, useNavigate } from "react-router-dom";
import '../App.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';

import Input from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import { FaQuestionCircle, FaArrowLeft } from "react-icons/fa";
import '../components/css/personal.css';

const personalDefaultValues = {
    name: '',
    personalphone: '',
    email: '',
    streetname: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    extraaddres: '',
    linkedin: ''
};

const Page = () => {



    const [values, setValues] = React.useState(personalDefaultValues);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setValues({ ...values, [name]: e.target.value });
    };

    let navigate = useNavigate();

    return (
        <div className = "personal">
            <div className="Header">
                <div className="left-arrow" onClick={() => navigate('/home')}> <FaArrowLeft /> </div>
                <div className="Logo"><h1>Online Resume Builder</h1></div>
                <div className="Header_text"><h1>Personal Information</h1></div>
            </div>
            <Box sx={{ align: 'center'}}>
                <div>

                    <FormControl sx={{ m: 3, width: '35ch' }} variant="standard">
                        <TextField
                            id="fullNameInput"
                            name = "name"
                            label="Full Name"
                            type = "text"
                            value={values.name}
                            onChange={handleInputChange}
                            variant="standard"
                        />
                        <TextField
                            id="phoneInput"
                            name="personalphone"
                            label="Personal Phone Number"
                            values={values.personalphone}
                            onChange={handleInputChange}
                            variant="standard"
                        />
                        <TextField
                            id="emailInput"
                            name="email"
                            label="Email Address"
                            values={values.email}
                            onChange={handleInputChange}
                            variant="standard"
                        />
                    </FormControl>

                    <FormControl sx={{ m: 3, width: '35ch' }} variant="standard">
                        <TextField
                            id="streetNameInput"
                            name="streetname"
                            label="Street Name"
                            values={values.streetname}
                            onChange={handleInputChange}
                            variant="standard"
                        />
                        <TextField
                            id="cityInput"
                            name="city"
                            label="City"
                            values={values.city}
                            onChange={handleInputChange}
                            variant="standard"
                        />
                        <TextField
                            id="stateInput"
                            name="state"
                            label="State"
                            values={values.state}
                            onChange={handleInputChange}
                            variant="standard"
                        />
                        <TextField
                            id="zipInput"
                            name="zip"
                            label="Zip Code"
                            values={values.zip}
                            onChange={handleInputChange}
                            variant="standard"
                        />
                        <TextField
                            id="countryInput"
                            name="country"
                            label="Country"
                            values={values.country}
                            onChange={handleInputChange}
                            variant="standard"
                        />
                        <TextField
                            id="extraAddInput"
                            name="extraaddres"
                            label="Apt. num, building num, etc"
                            values={values.extraaddres}
                            onChange={handleInputChange}
                            variant="standard"
                        />
                    </FormControl>

                    <FormControl sx={{ m: 3, width: '35ch' }} variant="standard">
                        <TextField 
                            id="linkedInInput" 
                            name="linkedin"
                            label="LinkedIn"
                            values={values.linkedin}
                            onChange={handleInputChange}
                            variant="standard" />
                        <TextField 
                            id="githubInput" 
                            name="github"
                            label="Github" 
                            values={values.github}
                            onChange={handleInputChange}
                            variant="standard" />
                    </FormControl>
                </div>
            </Box>
            
            <button style={{ width: "175px", height: "60px" }} onClick={() => {{(navigate('/education'))}}}>To Education</button>
            {/* <button style={{ width: "175px", height: "60px" }} onClick={console.log(values)}>Test info</button> */}
        </div>
    );
};

export default Page;