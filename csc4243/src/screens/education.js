import { NavigationType, useNavigate } from "react-router-dom";

const Page = () => {
    let navigate = useNavigate();

    return (
        <button onClick={() => {{(navigate('/experience'))}}}>Experience</button>
    );
}

export default Page;