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
  }, [location.pathname]); // Trigger the effect when the pathname changes

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    console.log("Is logged in:", loggedIn); // Add this line
    setIsLoggedIn(loggedIn);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  return (
    <nav className="bg-maroon bg-opacity-90 sticky top-0 w-full z-10">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-3">
        <NavLink to="/" className="flex items-center">
          <h2 className="text-2xl font-semibold text-creme">Urban Sanctuary</h2>
        </NavLink>
        <div className="flex items-center md:space-x-4">
          <div className="md:hidden">
            {/* Responsive menu button for small screens */}
            <button
              className="text-white p-2 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <DensityMediumIcon />
            </button>
          </div>
          <div
            className={`${
              isMenuOpen ? "grid grid-cols-1 md:grid-cols-2 gap-4" : "hidden"
            } md:flex md:space-x-8 text-white`}
            id="navbar-links"
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                ` ${isActive && " text-creme font-bold"}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/Room"
              className={({ isActive }) =>
                ` ${isActive && " text-creme font-bold"}`
              }
            >
              Room
            </NavLink>
            <NavLink
              to="/Gallery"
              className={({ isActive }) =>
                ` ${isActive && " text-creme font-bold"}`
              }
            >
              Gallery
            </NavLink>
            <NavLink
              to="/Dining"
              className={({ isActive }) =>
                ` ${isActive && " text-creme font-bold"}`
              }
            >
              Dining
            </NavLink>
            <NavLink
              to="/Events"
              className={({ isActive }) =>
                ` ${isActive && " text-creme font-bold"}`
              }
            >
              Events
            </NavLink>
            <NavLink
              to="/AboutUs"
              className={({ isActive }) =>
                ` ${isActive && " text-creme font-bold"}`
              }
            >
              AboutUs
            </NavLink>
           
            {isLoggedIn ? (
              <NavLink
                to="/"
                onClick={handleLogout}
                activeclassname="active"
                className="p-1"
              >
                <Button name="Signout" padding="small" />{" "}
              </NavLink>
            ) : (
              <NavLink to="/Login" activeclassname="active" className="p-1">
                <Button name="Login" padding="small" />{" "}
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
