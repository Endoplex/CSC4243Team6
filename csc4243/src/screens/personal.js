import { NavigationType, useNavigate } from "react-router-dom";

const Page = () => {
    let navigate = useNavigate();

    return (
        <button onClick={() => {{(navigate('/education'))}}}>Education</button>
    );
}

export default Page;