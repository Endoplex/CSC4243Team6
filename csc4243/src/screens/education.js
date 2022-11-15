import { NavigationType, useNavigate } from "react-router-dom";
import '../components/css/education.css';
import '../App.css';
import { FaQuestionCircle, FaArrowLeft } from "react-icons/fa";

const Page = () => {
    let navigate = useNavigate();

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
                <h1>Education Information</h1>
            </div>
            <h1>Please fill out your up-to-date education information to open your resume!</h1>
            <h1>Education</h1>

            <div id="graduation-container">
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
            </div>

            <button class="submit" onClick={() => {{(navigate('/experience'))}}}>Submit Education Info</button>
        </div>
    );
}

export default Page;
