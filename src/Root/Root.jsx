import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Root = () => {
  const location = useLocation();

  // Check if the current route is the error page (for wildcard '*' route)
  const hideNavbarFooter =
    location.pathname === "/error" || location.pathname === "*";

  return (
    <div className="mx-auto">
      {/* Conditionally render Navbar and Footer */}
      {!hideNavbarFooter && <Navbar />}
      <div>
        <Outlet />
      </div>
      {!hideNavbarFooter && <Footer />}
    </div>
  );
};

export default Root;
