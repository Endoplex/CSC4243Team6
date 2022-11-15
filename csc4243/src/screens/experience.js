import * as React from 'react';
import { NavigationType, useNavigate } from "react-router-dom";
import '../App.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { FaQuestionCircle, FaArrowLeft } from "react-icons/fa";

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
        experience3: '',
        position3: '',
        start3: '',
        end3: '',
        description3: ''
      });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    let navigate = useNavigate();

    return (
        <div className="Experience">
            <div className="Header">
                <div class="left-arrow" onClick={() => navigate('/education')}> <FaArrowLeft /> </div>
                <div className="Logo"><h1>Online Resume Builder</h1></div>
                <div className="Header_text"><h1>Experiences</h1></div>
            </div>
            <div>This is where you input past work experience. Since you selected the Engineering discipline, we suggest adding projects or research you participated in as well!</div>
            <Box sx={{ align: 'center'}}>
            <div>
            <FormControl sx={{ m: 3, width: '35ch' }} variant="standard">
                        <TextField
                            id="standard-textfield"
                            label="Experience 1"
                            values={values.experience1}
                            onChange={handleChange}
                            variant="standard"
                        />
                        <TextField
                            id="standard-textfield"
                            label="Position/Title if applicable"
                            values={values.position1}
                            onChange={handleChange}
                            variant="standard"
                        />
                        <TextField
                            id="standard-textfield"
                            label="Start Ex: Jan 2022"
                            values={values.start1}
                            onChange={handleChange}
                            variant="standard"
                        />
                        <TextField
                            id="standard-textfield"
                            label="End Ex: Dec 2022 or Present"
                            values={values.end1}
                            onChange={handleChange}
                            variant="standard"
                        />
                        <TextField
                            id="standard-textfield"
                            label="Description"
                            values={values.description1}
                            multiline
                            onChange={handleChange}
                            variant="standard"
                        />
                    </FormControl>
                    
            

            <FormControl sx={{ m: 3, width: '35ch' }} variant="standard">
                <TextField
                    id="standard-textfield"
                    label="Experience 2"
                    values={values.experience2}
                    onChange={handleChange}
                    variant="standard"
                />
                <TextField
                    id="standard-textfield"
                    label="Position/Title if applicable"
                    values={values.position2}
                    onChange={handleChange}
                    variant="standard"
                />
                <TextField
                    id="standard-textfield"
                    label="Start Ex: Jan 2022"
                    values={values.start2}
                    onChange={handleChange}
                    variant="standard"
                />
                <TextField
                    id="standard-textfield"
                    label="End Ex: Dec 2022 or Present"
                    values={values.end2}
                    onChange={handleChange}
                    variant="standard"
                />
                <TextField
                    id="standard-textfield"
                    label="Description"
                    values={values.description2}
                    multiline
                    onChange={handleChange}
                    variant="standard"
                />
            </FormControl>

            <FormControl sx={{ m: 3, width: '35ch' }} variant="standard">
                <TextField
                    id="standard-textfield"
                    label="Experience 3"
                    values={values.experience3}
                    onChange={handleChange}
                    variant="standard"
                />
                <TextField
                    id="standard-textfield"
                    label="Position/Title if applicable"
                    values={values.position3}
                    onChange={handleChange}
                    variant="standard"
                />
                <TextField
                    id="standard-textfield"
                    label="Start Ex: Jan 2022"
                    values={values.start3}
                    onChange={handleChange}
                    variant="standard"
                />
                <TextField
                    id="standard-textfield"
                    label="End Ex: Dec 2022 or Present"
                    values={values.end3}
                    onChange={handleChange}
                    variant="standard"
                />
                <TextField
                    id="standard-textfield"
                    label="Description"
                    values={values.description3}
                    multiline
                    onChange={handleChange}
                    variant="standard"
                />
            </FormControl>
            </div>
                </Box>
            <button style={{ width: "175px", height: "60px" }} onClick={() => {{(navigate('/design'))}}}>Design</button>
        </div>
    );
}

export default Page;