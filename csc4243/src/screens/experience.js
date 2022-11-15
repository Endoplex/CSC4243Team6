import * as React from 'react';
import { NavigationType, useNavigate } from "react-router-dom";
import '../App.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';

const Page = () => {
    const [values, setValues] = React.useState({
        experience1: '',
        position1: '',
        start1: '',
        end1: '',
        description1: '',
        experience2: '',
        position2: '',
        start2: '',
        end2: '',
        description2: '',
      });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    let navigate = useNavigate();

    return (
        <div className="Experience">
            <div className="Header">
                <h1>Experiences</h1>
            </div>
            <FormControl sx={{ m: 3, width: '35ch' }} variant="standard">
                        <TextField
                            id="standard-textfield"
                            label="Experience 1"
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
            <button onClick={() => {{(navigate('/design'))}}}>Design</button>
        </div>
    );
}

export default Page;