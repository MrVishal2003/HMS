import PropTypes from "prop-types";
import { Card } from "antd";
import Button from "./Button";
import { NavLink } from "react-router-dom";

const Layout4 = (props) => {
  return (
    <div className="w-full sm:w-[30%] flex justify-center m-5">
      <Card
        hoverable
        className="bg-creme w-full sm:w-72"
        cover={
          <img
            alt="example"
            src={props.img}
            className="h-40 sm:h-44 w-full object-cover brightness-90 hover:brightness-100"
          />
        }
      >
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <h2 className="text-lg sm:text-xl font-semibold text-maroon text-center sm:text-left">
            {props.name}
          </h2>
          <NavLink to="/BookOrder">
            <Button name="Order" color2="dark" />
          </NavLink>
        </div>
        <hr className="border-maroon my-2" />
        <p className="text-maroon text-sm sm:text-base text-center sm:text-left">
          {props.description}
        </p>
      </Card>
    </div>
  );
};

Layout4.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  description: PropTypes.string,
};

export default Layout4;
