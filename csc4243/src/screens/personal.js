import * as React from 'react';
import { NavigationType, useNavigate } from "react-router-dom";
import Header from '../components/Header';
import '../App.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import { FaQuestionCircle, FaArrowLeft } from "react-icons/fa";
import '../components/css/personal.css';

const Page = () => {
    const [values, setValues] = React.useState({
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
      });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    let navigate = useNavigate();

    return (
        <div className = "personal">
            <div className="Header">
                <div class="left-arrow" onClick={() => navigate('/home')}> <FaArrowLeft /> </div>
                <h1 class="center">Personal Information</h1>
            </div>
            <Box sx={{ align: 'center'}}>
                <div>

                    <FormControl sx={{ m: 3, width: '35ch' }} variant="standard">
                        <TextField
                            id="standard-textfield"
                            label="Full Name"
                            values={values.name}
                            onChange={handleChange}
                            variant="standard"
                        />
                        <TextField
                            id="standard-textfield"
                            label="Personal Phone Number"
                            values={values.personalphone}
                            onChange={handleChange}
                            variant="standard"
                        />
                        <TextField
                            id="standard-textfield"
                            label="Email Address"
                            values={values.email}
                            onChange={handleChange}
                            variant="standard"
                        />
                    </FormControl>

                    <FormControl sx={{ m: 3, width: '35ch' }} variant="standard">
                        <TextField
                            id="standard-textfield"
                            label="Street Name"
                            values={values.streetname}
                            onChange={handleChange}
                            variant="standard"
                        />
                        <TextField
                            id="standard-textfield"
                            label="City"
                            values={values.city}
                            onChange={handleChange}
                            variant="standard"
                        />
                        <TextField
                            id="standard-textfield"
                            label="State"
                            values={values.state}
                            onChange={handleChange}
                            variant="standard"
                        />
                        <TextField
                            id="standard-textfield"
                            label="Zip Code"
                            values={values.zip}
                            onChange={handleChange}
                            variant="standard"
                        />
                        <TextField
                            id="standard-textfield"
                            label="Country"
                            values={values.country}
                            onChange={handleChange}
                            variant="standard"
                        />
                        <TextField
                            id="standard-textfield"
                            label="Apt. num, building num, etc"
                            values={values.extraaddres}
                            onChange={handleChange}
                            variant="standard"
                        />
                    </FormControl>

                    <FormControl sx={{ m: 3, width: '35ch' }} variant="standard">
                        <TextField 
                            id="standard-basic" 
                            label="LinkedIn"
                            values={values.linkedin} 
                            variant="standard" />
                        <TextField 
                            id="standard-basic" 
                            label="Github" 
                            values={values.github}
                            onChange={handleChange}
                            variant="standard" />
                    </FormControl>
                </div>
            </Box>
            <button style={{ width: "175px", height: "60px" }} onClick={() => {{(navigate('/education'))}}}>To Education</button>
        </div>
    );
}

export default Page;