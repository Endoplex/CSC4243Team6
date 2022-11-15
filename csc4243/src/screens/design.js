import { NavigationType, useNavigate } from "react-router-dom";

const Page = () => {
    let navigate = useNavigate();

    return (
        <button onClick={() => {{(navigate('/result'))}}}>Result</button>
    );
}

export default Page;