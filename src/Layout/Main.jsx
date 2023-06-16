import { Outlet } from "react-router-dom";
import Footer from "../Component/Shared/Footer";
import Navbar from "../Component/Shared/Navbar";


const Main = () => {
    return (
        <div className="bg-slate-800">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;