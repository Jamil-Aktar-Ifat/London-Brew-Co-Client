import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-[#3a2312] text-white text-rancho py-4">
      <div className="flex flex-col md:flex-row items-center justify-center gap-3 ">
        <img
          className="w-16"
          src="../../../public/images/more/logo1.png"
          alt=""
        />
        <h2 className="text-6xl">London Brew Co.</h2>
      </div>
      <div className="flex items-center justify-center gap-2">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/signup">Sign up</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
