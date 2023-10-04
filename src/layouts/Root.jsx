import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div className="font-poppins container mx-auto max-w-7xl">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;