import { useEffect, useState } from "react";
import Button from "../components/Button";
import axios from "axios";
import { NavLink } from "react-router-dom";

function UserData() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from backend when component mounts
    axios
      .get("http://localhost:3000/admin/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  const handleDelete = (email) => {
    // Send DELETE request to delete user
    console.log(email);
    axios
      .delete(`http://localhost:3000/admin/users/${email}`)
      .then(() => {
        console.log("User deleted successfully");
        // Update the users state by filtering out the deleted user
        setUsers((prevUsers) =>
          prevUsers.filter((user) => user.email !== email)
        );
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  };

  return (
    <>
      <div className="text-center">
        <div>
          <h1 className="text-4xl font-bold m-4">Admin Panel</h1>
        </div>

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
        <h2 className="text-2xl font-bold m-10">User Data</h2>
        <div className="flex justify-center items-center">
          <table className="border border-black w-full">
            <thead>
              <tr className="font-bold text-lg">
                <td>Name</td>
                <td>Surname</td>
                <td>Email id.</td>
                <td>Phone no.</td>
                <td>Delete</td>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>{user.firstname}</td>
                  <td>{user.lastname}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>
                    <Button
                      name="Delete"
                      onClick={() => handleDelete(user.email)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default UserData;
