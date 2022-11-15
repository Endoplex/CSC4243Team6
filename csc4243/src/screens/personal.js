import { NavigationType, useNavigate } from "react-router-dom";
import Header from '../components/Header';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Page = () => {
    let navigate = useNavigate();

    return (
        <div className = "personal">
            <Header />
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <div>
                <TextField id="standard-basic" label="Full Name" variant="standard" />
                <TextField id="standard-basic" label="Personal Phone Number" variant="standard" />
                <TextField id="standard-basic" label="Home Phone Number" variant="standard" />
                <TextField id="standard-basic" label="Email Address" variant="standard" />
                <TextField id="standard-basic" label="Street Name" variant="standard" />
                <TextField id="standard-basic" label="City" variant="standard" />
                <TextField id="standard-basic" label="State" variant="standard" />
                <TextField id="standard-basic" label="Zip Code" variant="standard" />
                <TextField id="standard-basic" label="Country" variant="standard" />
                <TextField id="standard-basic" label="Apt. num, building num, etc" variant="standard" />
                <TextField id="standard-basic" label="Personal Notes" variant="standard" />
            </div>
            </Box>
            <button onClick={() => {{(navigate('/education'))}}}>Education</button>
        </div>
    );
}

export default Page;