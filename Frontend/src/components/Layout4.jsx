import PropTypes from "prop-types";
import { Card } from "antd";
import Button from "./Button";
import { NavLink } from "react-router-dom";

const Layout4 = (props) => {
  return (
    <>
      <div className="w-[30%] flex justify-center m-5">
        <Card
          hoverable
          className="bg-creme"
          style={{ width: 300 }}
          cover={
            <img
              alt="example"
              src={props.img}
              className="h-44 brightness-90 hover:brightness-100 "
            />
          }
        >
          <div className="flex justify-around items-center">
            <h2 className="text-xl font-semibold text-maroon">{props.name}</h2>
            <NavLink to="/BookOrder">
              <Button name="Order" color2="dark" />
            </NavLink>
          </div>
          <hr className=" border-maroon mb-1" />
          <p className="text-maroon">{props.description}</p>
        </Card>
      </div>
    </>
  );
};

Layout4.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  description: PropTypes.string,
};

export default Layout4;
