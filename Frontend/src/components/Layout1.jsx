import PropTypes from "prop-types";
import Button from "./Button";
import { NavLink } from "react-router-dom";

function Layout1(props) {
  return (
    <div className="relative h-screen">
      <img
        src={props.img}
        className="object-cover w-full h-full brightness-50"
        alt=""
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white max-w-[90%] sm:max-w-[70%] flex flex-col items-center">
        <h2 className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4">
          {props.name}
        </h2>

        {props.txt === "small" && (
          <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
            {props.txtSmall}
          </h4>
        )}

        {props.button === "small" && (
          <NavLink to="/BookRoom">
            <Button name="Reserve Now" />
          </NavLink>
        )}
      </div>
    </div>
  );
}

Layout1.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  button: PropTypes.string,
  txt: PropTypes.string,
  txtSmall: PropTypes.string,
};

export default Layout1;
