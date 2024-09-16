import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then(() => {
        console.log("Signed out successfully");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  return (
    <div className="bg-[#3a2312] text-white text-rancho py-4">
      <div className="flex flex-col md:flex-row items-center justify-center gap-3">
        <img className="w-16" src="/images/more/logo1.png" alt="Logo" />
        <h2 className="text-6xl">London Brew Co.</h2>
      </div>
      <div className="flex items-center justify-center gap-2">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/users">Users</NavLink>
        {user ? (
          <button onClick={handleSignOut}>Sign Out</button>
        ) : (
          <div className="flex gap-2">
            <NavLink to="/signup">Sign Up</NavLink>
            <NavLink to="/signin">Sign In</NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
