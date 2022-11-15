import { NavigationType, useNavigate } from "react-router-dom";
import '../App.css';

const Page = () => {
    let navigate = useNavigate();

    return (
        <div className="Experience">
            <div className="Header">
                <h1>Experiences</h1>
            </div>
            <button onClick={() => {{(navigate('/design'))}}}>Design</button>
        </div>
    );
}

export default Page;