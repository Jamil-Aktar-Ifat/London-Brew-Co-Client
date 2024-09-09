import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Root = () => {
  return (
    <div className="mx-auto">
      <Navbar></Navbar>
      <div className="max-w-6xl mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
