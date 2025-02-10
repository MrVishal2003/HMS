import { useEffect, useState } from "react";
import Button from "../components/Button";
import axios from "axios";
import { NavLink } from "react-router-dom";

function UserData() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from backend when component mounts
    axios
      .get("https://hms-api-ten.vercel.app/admin/users")
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
      .delete(`https://hms-api-ten.vercel.app/admin/users/${email}`)
      .then(() => {
        console.log("User deleted successfully");
        setUsers((prevUsers) => prevUsers.filter((user) => user.email !== email));
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  };

  return (
    <>
      <div className="text-center px-4">
        {/* Admin Panel Heading */}
        <h1 className="text-3xl md:text-4xl font-bold m-4">Admin Panel</h1>

        {/* Navigation Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
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

        {/* User Data Heading */}
        <h2 className="text-2xl font-bold my-6">User Data</h2>

        {/* Responsive Table */}
        <div className="overflow-x-auto">
          <table className="border border-black w-full max-w-4xl mx-auto text-xs sm:text-base">
            <thead>
              <tr className="font-bold bg-gray-200">
                <th className="p-2">Name</th>
                <th className="p-2">Surname</th>
                <th className="p-2">Email ID</th>
                <th className="p-2">Phone No.</th>
                <th className="p-2">Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id} className="border-t text-center">
                  <td className="p-2">{user.firstname}</td>
                  <td className="p-2">{user.lastname}</td>
                  <td className="p-2">{user.email}</td>
                  <td className="p-2">{user.phone}</td>
                  <td className="p-2">
                    <Button name="Delete" onClick={() => handleDelete(user.email)} />
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
