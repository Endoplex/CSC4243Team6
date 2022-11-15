import { NavigationType, useNavigate } from "react-router-dom";

const Page = () => {
    let navigate = useNavigate();

    return (
        <button onClick={() => {{(navigate('/personal'))}}}>Personal</button>
    );
}

export default Page;