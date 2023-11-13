import { Link } from "react-router-dom";

const ErrorElement = () => {
    return (
        <div>
            <p className="btn btn-error my-10 ">404 Not Found Page</p> <br />
            <Link to={'/'}><button className="btn btn-primary"> Go back Home</button></Link>
        </div>
    );
};

export default ErrorElement;