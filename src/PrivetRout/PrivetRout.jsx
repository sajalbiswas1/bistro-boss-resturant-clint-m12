import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRout = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location)
    
    if(loading){
        return <p>Loading.......</p>
    }
    if(user?.email){
        return children;
    }
    return <Navigate  to={'/login'} state={{ from: location }} replace ></Navigate>
};

export default PrivetRout;