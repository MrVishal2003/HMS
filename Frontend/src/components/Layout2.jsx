import PropTypes from "prop-types";
import Button from "./Button";
import { NavLink } from "react-router-dom";

function Layout2(props) {
  return (
    <>
      <div className="grid grid-cols-3 m-[50px] bg-creme ">
        <div className="flex items-center">
          <img
            src={props.img}
            alt=""
            className="brightness-90 hover:brightness-100 h-80 w-[100%] object-cover"
          />
        </div>
        <div className="flex flex-col justify-evenly items-center">
          <h3 className="text-2xl font-semibold">{props.name}</h3>
          <ul className="list-disc">
            <li>{props.list1}</li>
            <li>{props.list2}</li>
            <li>{props.list3}</li>
          </ul>
          <h3 className="text-2xl font-semibold">₹ {props.price}</h3>
        </div>
        <div className="flex justify-center items-center">
          <NavLink to="/BookRoom">
            <Button name="Book Now" color2="dark" />
          </NavLink>
        </div>
      </div>
    </>
  );
}

Layout2.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  list1: PropTypes.string,
  list2: PropTypes.string,
  list3: PropTypes.string,
  price: PropTypes.string,
};

export default Layout2;
