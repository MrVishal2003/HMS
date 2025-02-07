import PropTypes from "prop-types";
import Button from "./Button";
import { NavLink } from "react-router-dom";

function Layout1(props) {
  const buttonClass =
    props.button == "small" ? (
      <NavLink to="/BookRoom">
        <Button name="Reserve Now" />
      </NavLink>
    ) : (
      ``
    );

  const txtClass =
    props.txt == "small" ? (
      <h4 className="text-xl font-semibold mb-4">{props.txtSmall}</h4>
    ) : (
      ``
    );
  return (
    <>
      <div className="relative h-screen">
        <img
          src={props.img}
          className="object-cover w-full h-full brightness-50 md:brightness-50"
          alt=""
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">{props.name}</h2>
          {txtClass}
          {buttonClass}
        </div>
      </div>
    </>
  );
}

Layout1.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  button: PropTypes.string,
  buttonClass: PropTypes.string,
  txt: PropTypes.string,
  txtClass: PropTypes.string,
  txtSmall: PropTypes.string,
};

export default Layout1;
