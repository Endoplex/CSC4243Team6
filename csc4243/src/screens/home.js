<<<<<<< HEAD
const React = require('react');
=======
import { NavigationType, useNavigate } from "react-router-dom";
>>>>>>> 5fe970c13f03b533199f46590f4fae5f7f8d02ab

<<<<<<< HEAD
class Home extends React.Component {
    constructor(props) {
        super(props)
        this.props
    }
}
=======
const Page = () => {
    let navigate = useNavigate();

    return (
        <button onClick={() => {{(navigate('/personal'))}}}>Personal</button>
    );
}

export default Page;
>>>>>>> 5fe970c13f03b533199f46590f4fae5f7f8d02ab