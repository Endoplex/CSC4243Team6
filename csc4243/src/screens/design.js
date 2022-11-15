import { NavigationType, useNavigate } from "react-router-dom";
import basic from '../images/template_basic.png';
import professional from '../images/template_professional.png';
import green from '../images/template_green.png';
import silicon from '../images/template_silicon.png';
import '../components/css/design.css';

const Page = () => {
    let navigate = useNavigate();

    return (
        <div className="Design">
            <div className="Header">
                <h1>Design</h1>
            </div>
            <img className="style" src={basic} alt="" />
            <img className="style" src={professional} alt="" />
            <img className="style" src={green} alt="" />
            <img className="style" src={silicon} alt="" />
            <br />
            <button onClick={() => {{(navigate('/result'))}}}>Result</button>
        </div>
    );
}

export default Page;