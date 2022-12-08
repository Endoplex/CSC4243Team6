import { NavigationType, useNavigate } from "react-router-dom";
import resume from '../images/finished_resume.png';
import { FaQuestionCircle, FaArrowLeft } from "react-icons/fa";
import '../components/css/result.css';

const Page = () => {
    let navigate = useNavigate();

    const personalJson = JSON.parse(localStorage.getItem('personalKey'));
    const experienceJson = JSON.parse(localStorage.getItem('experienceKey'));
    const educationJson = JSON.parse(localStorage.getItem('educationKey'));

    return (
        <div className = "result">
            <div className="Header">
                <div class="left-arrow" onClick={() => navigate('/design')}> <FaArrowLeft /> </div>
                <div className="Logo"><h1>Online Resume Builder</h1></div>
                <div className="Header_text"><h1>Your Resume</h1></div>
            </div>
            {/* <img src={resume} alt="" /> */}

            <div className="personal-box">
                <p>{personalJson.name}</p>
                <p>{personalJson.personalphone}</p>
                <p>{personalJson.email}</p>
                <p>{personalJson.linkedin}</p>
                <p>{personalJson.streetname}</p>
                <p>{personalJson.city}</p>
                <p>{personalJson.state}</p>
                <p>{personalJson.zip}</p>
                <p>{personalJson.country}</p>
                <p>{personalJson.extraaddres}</p>
            </div>

            <div className="education-box">
                <p>{educationJson.school}</p>
                <p>{educationJson.major}</p>
                <p>{educationJson.degree}</p>
                <p>{educationJson.GPA}</p>
                <p>{educationJson.month} {educationJson.year}</p>
            </div>

            <div className="experience-box">
                <p>{experienceJson.experience1}</p>
                <p>{experienceJson.position1}</p>
                {experienceJson.start1 != "" && <p>{experienceJson.start1} to {experienceJson.end1}</p>}
                <p>{experienceJson.description1}</p>
            </div>

            <div className="experience-box">
                <p>{experienceJson.experience2}</p>
                <p>{experienceJson.position2}</p>
                {experienceJson.start2 != "" && <p>{experienceJson.start2} to {experienceJson.end2}</p>}
                <p>{experienceJson.description2}</p>
            </div>

            <div className="experience-box">
                <p>{experienceJson.experience3}</p>
                <p>{experienceJson.position3}</p>
                {experienceJson.start3 != "" && <p>{experienceJson.start3} to {experienceJson.end3}</p>}
                <p>{experienceJson.description3}</p>
            </div>

            <div className="experience-box">
                <p>{experienceJson.experience4}</p>
                <p>{experienceJson.position4}</p>
                {experienceJson.start4 != "" && <p>{experienceJson.start4} to {experienceJson.end4}</p>}
                <p>{experienceJson.description4}</p>
            </div>

            <div className="experience-box">
                <p>{experienceJson.experience5}</p>
                <p>{experienceJson.position5}</p>
                {experienceJson.start5 != "" && <p>{experienceJson.start5} to {experienceJson.end5}</p>}
                <p>{experienceJson.description5}</p>
            </div>

            
            <br />
            <hr></hr>
            <a href="../images/finished_resume.pdf" download>
                <button style={{ width: "175px", height: "60px" }} onClick={() => null }>Download Resume</button>
            </a>
        </div>
    );
}

export default Page;