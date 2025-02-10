import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "./Button";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Scroll to the top when the component mounts or the location changes
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <nav className="bg-maroon bg-opacity-90 sticky top-0 w-full z-20 shadow-lg">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <NavLink to="/" className="flex items-center">
          <h2 className="text-xl sm:text-2xl font-semibold text-creme">Urban Sanctuary</h2>
        </NavLink>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <DensityMediumIcon />
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-maroon md:bg-transparent p-4 md:p-0 transition-all duration-300 ease-in-out`}
        >
          <div className="flex flex-col md:flex-row text-white space-y-2 md:space-y-0 md:space-x-6 text-sm sm:text-base">
            <NavLink to="/" className="hover:text-creme font-medium">Home</NavLink>
            <NavLink to="/Room" className="hover:text-creme font-medium">Room</NavLink>
            <NavLink to="/Gallery" className="hover:text-creme font-medium">Gallery</NavLink>
            <NavLink to="/Dining" className="hover:text-creme font-medium">Dining</NavLink>
            <NavLink to="/Events" className="hover:text-creme font-medium">Events</NavLink>
            <NavLink to="/AboutUs" className="hover:text-creme font-medium">About Us</NavLink>
          </div>

          {/* Login / Logout Button */}
          <div className="mt-4 md:mt-0 flex justify-center">
            {isLoggedIn ? (
              <NavLink to="/" onClick={handleLogout}>
                <Button name="Sign Out" padding="small" className="text-xs sm:text-sm" />
              </NavLink>
            ) : (
              <NavLink to="/Login">
                <Button name="Login" padding="small" className="text-xs sm:text-sm" />
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
