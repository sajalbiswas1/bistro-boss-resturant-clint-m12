import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import NavBar from "../Pages/Shared/NavBar/NavBar";

const Main = () => {
    const location = useLocation()
    const currentLocation = location.pathname.includes('login');
    return (
        <div>
            {!currentLocation && <NavBar></NavBar>}
            <Outlet></Outlet>
            {!currentLocation && <Footer></Footer>}
            
        </div>
    );
};

export default Main;