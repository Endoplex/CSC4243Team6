import { NavigationType, useNavigate } from "react-router-dom";

const Page = () => {
    let navigate = useNavigate();

    return (
        <button onClick={() => {{(navigate('/design'))}}}>Design</button>
    );
}

export default Page;