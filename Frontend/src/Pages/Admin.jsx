import Button from "../components/Button";
import { NavLink } from "react-router-dom";

function Admin() {
  return (
    <div className="text-center p-5">
      <h1 className="text-4xl font-bold mb-6">Admin Panel</h1>

      {/* Buttons Section */}
      <div className="flex flex-wrap justify-center gap-4">
        <NavLink to="/UserData">
          <Button name="User Data" />
        </NavLink>
        <NavLink to="/RoomData">
          <Button name="Room Data" />
        </NavLink>
        <NavLink to="/OrderData">
          <Button name="Order Data" />
        </NavLink>
        <NavLink to="/EventData">
          <Button name="Event Data" />
        </NavLink>
      </div>
    </div>
  );
}

export default Admin;
