import * as React from 'react';
import { NavigationType, useNavigate } from "react-router-dom";
import '../components/css/experience.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { FaQuestionCircle, FaArrowLeft } from "react-icons/fa";
import "../components/css/experience.css";
import logo from '../images/logo.png';

const expDefaultValues = {
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
}
const Page = () => {

    const [values, setValues] = React.useState(expDefaultValues);

    const [count, setCount] = React.useState(0);

    const increase = () => {
        setCount(count => count + 1);
      };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setValues({ ...values, [name]: e.target.value });
    };

    let navigate = useNavigate();

    console.log(localStorage.getItem('experienceKey'));

    React.useEffect(() => {
        localStorage.setItem('experienceKey', JSON.stringify(values));
    }, [values]);

    function exp1Help() {
        var popup = document.getElementById("exp1Popup");
        popup.classList.toggle("show");
    }

    function desc1Help() {
        var popup = document.getElementById("desc1Popup");
        popup.classList.toggle("show");
    }

    function exp2Help() {
        var popup = document.getElementById("exp2Popup");
        popup.classList.toggle("show");
    }

    function desc2Help() {
        var popup = document.getElementById("desc2Popup");
        popup.classList.toggle("show");
    }

    function exp3Help() {
        var popup = document.getElementById("exp3Popup");
        popup.classList.toggle("show");
    }

    function desc3Help() {
        var popup = document.getElementById("desc3Popup");
        popup.classList.toggle("show");
    }

    let addbutton;
    let extraExper1;
    let extraExper2;

    if(count >= 1) {
        extraExper1 = <div className='selection_box'>
        <Box sx={{ align: 'center' }}>
        <FormControl sx={{ m: 3, width: '75ch' }} variant="standard">
            <div>
                <TextField
                    id="exp2"
                    name="experience2"
                    label="Experience 2"
                    values={values.experience2}
                    onChange={handleChange}
                    variant="standard"
                />
                <div class="popup" onClick={() => exp2Help()}><FaQuestionCircle />
                    <span class="popuptext" id="exp2Popup">For the second experience, this could be either the next most interesting, or the next most recent</span>
                </div>
            </div>
            <TextField
                id="pos2"
                name="position2"
                label="Position/Title if applicable"
                values={values.position2}
                onChange={handleChange}
                variant="standard"
            />
            <TextField
                id="start2"
                name="start2"
                label="Start Ex: Jan 2022"
                values={values.start2}
                onChange={handleChange}
                variant="standard"
            />
            <TextField
                id="end2"
                name="end2"
                label="End Ex: Dec 2022 or Present"
                values={values.end2}
                onChange={handleChange}
                variant="standard"
            />
            <div>
                <TextField
                    id="description2"
                    name="description2"
                    label="Description"
                    values={values.description2}
                    multiline
                    onChange={handleChange}
                    variant="standard"
                />
                <div class="popup" onClick={() => desc2Help()}><FaQuestionCircle />
                    <span class="popuptext" id="desc2Popup">Here, you should go into detail about the experience. Don't be afraid to brag if you think a particular aspect of the experience was interesting</span>
                </div>
            </div>
        </FormControl>
        </Box>
    </div>
    }

    if(count >= 2) {
        extraExper2 = <div className='selection_box'>
        <Box sx={{ align: 'center'}}>
        <FormControl sx={{ m: 3, width: '75ch' }} variant="standard">
            <div>
                <TextField
                    id="exp3"
                    name="experience3"
                    label="Experience 3"
                    values={values.experience3}
                    onChange={handleChange}
                    variant="standard"
                />
                <div class="popup" onClick={() => exp3Help()}><FaQuestionCircle />
                    <span class="popuptext" id="exp3Popup">Make sure to stay in chronological order; if you have any more experiences, show them off!</span>
                </div>
            </div>
            <TextField
                id="pos3"
                name="position3"
                label="Position/Title if applicable"
                values={values.position3}
                onChange={handleChange}
                variant="standard"
            />
            <TextField
                id="start3"
                name="start3"
                label="Start Ex: Jan 2022"
                values={values.start3}
                onChange={handleChange}
                variant="standard"
            />
            <TextField
                id="end3"
                name="end3"
                label="End Ex: Dec 2022 or Present"
                values={values.end3}
                onChange={handleChange}
                variant="standard"
            />
            <div>
                <TextField
                    id="description3"
                    name="description3"
                    label="Description"
                    values={values.description3}
                    multiline
                    onChange={handleChange}
                    variant="standard"
                />
                <div class="popup" onClick={() => desc3Help()}><FaQuestionCircle />
                    <span class="popuptext" id="desc3Popup">Here, you should go into detail about the experience. Don't be afraid to brag if you think a particular aspect of the experience was interesting</span>
                </div>
            </div>
        </FormControl>
        </Box>
    </div>
    }

    if(count < 2) {
        addbutton = <button className="control__btn" onClick={increase}>+</button>
    }


    return (
        <div className="experience">
            <div className="header">
                <img className='logo' src={logo} alt=""></img>
                <div className="header_text"><h1>Experience</h1></div>
            </div>

            <div><h1></h1></div>
            {localStorage.getItem('experienceKey', JSON.stringify) == '{"industry":"engineering"}' && <div><strong>This is where you input past work experience. Since you selected the Engineering discipline, we suggest adding projects or research you participated in as well!</strong></div>}
            {localStorage.getItem('experienceKey', JSON.stringify) == '{"industry":"physSciences"}' && <div><strong>This is where you input past work experience. Since you selected the Physical Sciences discipline, we suggest adding lab experiences or research you participated in as well!</strong></div>}
            {localStorage.getItem('experienceKey', JSON.stringify) == '{"industry":"lifeSciences"}' && <div><strong>This is where you input past work experience. Since you selected the Life Sciences discipline, we suggest adding lab research or paper publications you participated in as well!</strong></div>}
            {localStorage.getItem('experienceKey', JSON.stringify) == '{"industry":"humanities"}' && <div><strong>This is where you input past work experience. Since you selected the Humanities discipline, we suggest adding papers or media you're proud of that you've done as well!</strong></div>}
            {localStorage.getItem('experienceKey', JSON.stringify) == '{"industry":"social"}' && <div><strong>This is where you input past work experience. Since you selected the Social Sciences discipline, we suggest adding volunteering or service learning you participated in as well!</strong></div>}
            {localStorage.getItem('experienceKey', JSON.stringify) == '{"industry":"business"}' && <div><strong>This is where you input past work experience. Since you selected the Business discipline, we suggest adding networking and communication skills you have as well!</strong></div>}
        <div className='selection_box'>
            <Box sx={{ align: 'center'}}>
            <FormControl sx={{ m: 3, width: '75ch' }} variant="standard">
                <div>
                    <TextField
                        id="exp1"
                        name="experience1"
                        label="Experience 1"
                        values={values.experience1}
                        onChange={handleChange}
                        variant="standard"
                    />
                    <div class="popup" onClick={() => exp1Help()}><FaQuestionCircle />
                        <span class="popuptext" id="exp1Popup">Your first experience should be the name of what you want to show off the most. This could be a company you worked at, interesting project, or research.</span>
                    </div>
                </div>
                <TextField
                    id="pos1"
                    name="position1"
                    label="Position/Title if applicable"
                    values={values.position1}
                    onChange={handleChange}
                    variant="standard"
                />
                <TextField
                    id="start1"
                    name="start1"
                    label="Start Ex: Jan 2022"
                    values={values.start1}
                    onChange={handleChange}
                    variant="standard"
                />
                <TextField
                    id="end1"
                    name="end1"
                    label="End Ex: Dec 2022 or Present"
                    values={values.end1}
                    onChange={handleChange}
                    variant="standard"
                />
                <div>
                    <TextField
                        id="description1"
                        name="description1"
                        label="Description"
                        values={values.description1}
                        multiline
                        onChange={handleChange}
                        variant="standard"
                    />
                    <div class="popup" onClick={() => desc1Help()}><FaQuestionCircle />
                        <span class="popuptext" id="desc1Popup">Go into detail about the experience. Don't be afraid to brag if you think a particular aspect of the experience was interesting</span>
                    </div>
                </div>
            </FormControl>
            </Box>      
        </div>
        <div><h1></h1></div>
        
        {extraExper1}
        <div><h1></h1></div>

        {extraExper2}
        <div><h1></h1></div>

        <div>{addbutton}</div>
        <div><h1></h1></div>
        <button style={{ width: "175px", height: "60px" }} onClick={() => {{(navigate('/design'))}}}>Design</button>
            {/* <button style={{ width: "175px", height: "60px" }} onClick={console.log(values)}>Test info</button> */}

            <div><h1></h1></div>
        </div>
    );
}

export default Page;
