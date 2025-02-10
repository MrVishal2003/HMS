import PropTypes from "prop-types";
import Button from "./Button";
import { NavLink } from "react-router-dom";

function Layout2({ img, name, list1, list2, list3, price }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 m-4 sm:m-8 p-4 bg-creme w-full">
      {/* Image Section */}
      <div className="flex items-center justify-center w-full">
        <img
          src={img}
          alt="Room"
          className="brightness-90 hover:brightness-100 h-48 sm:h-64 lg:h-80 w-full object-cover rounded-lg"
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col justify-evenly items-center text-center p-4 sm:p-6">
        <h3 className="text-base sm:text-lg lg:text-2xl font-semibold">{name}</h3>
        <ul className="list-disc text-xs sm:text-sm lg:text-base space-y-1 sm:space-y-2">
          <li>{list1}</li>
          <li>{list2}</li>
          <li>{list3}</li>
        </ul>
        <h3 className="text-base sm:text-lg lg:text-2xl font-semibold">₹ {price}</h3>
      </div>

      {/* Button Section */}
      <div className="flex justify-center items-center w-full p-2 sm:p-4">
        <NavLink to="/BookRoom">
          <Button name="Book Now" color2="dark" className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base" />
        </NavLink>
      </div>
    </div>
  );
}

Layout2.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  list1: PropTypes.string.isRequired,
  list2: PropTypes.string.isRequired,
  list3: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default Layout2;