import Button from "../components/Button";
import { NavLink } from "react-router-dom";

function Admin() {
  

  return (
    <>
      <div className="text-center">
      <div><h1 className="text-4xl font-bold m-4">Admin Panel</h1></div>
      <div className="flex justify-center">
          {" "}
          <NavLink to="/UserData">
            <Button name="UserData" />
          </NavLink>
          <NavLink to="/RoomData">
            <Button name="RoomData" />
          </NavLink>
          <NavLink to="/OrderData">
            <Button name="OrderData" />
          </NavLink>
          <NavLink to="/EventData">
            <Button name="EventData" />
          </NavLink>
        </div>
       
      </div>
    </>
  );
}

export default Admin;
