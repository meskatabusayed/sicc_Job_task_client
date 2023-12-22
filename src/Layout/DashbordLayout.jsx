import { Outlet } from "react-router-dom";
import Sidebar from "../Dashboard/Sidebar";


const DashbordLayout = () => {
  return (
    <div className="grid grid-cols-12  min-h-screen ">
      <div className="col-span-3 border">
        <Sidebar />
      </div>
      <div className="col-span-9 border md:p-20">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashbordLayout;