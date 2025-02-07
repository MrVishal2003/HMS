import { useEffect, useState } from "react";
import Button from "../components/Button";
import axios from "axios";
import { NavLink } from "react-router-dom";

function RoomData() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    // Fetch rooms from backend when component mounts
    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/bkrooms`)
      .then((response) => {
        setRooms(response.data);
      })
      .catch((error) => {
        console.error("Error fetching rooms:", error);
      });
  }, []);

  const handleDelete = (roomId) => {
    // Send DELETE request to delete room
    console.log(roomId);
    axios
      .delete(`http://localhost:3000/bkrooms/${roomId}`)
      .then(() => {
        console.log("room deleted successfully");
        // Update the rooms state by filtering out the deleted room
        setRooms((prevRooms) =>
          prevRooms.filter((room) => room.roomId !== roomId)
        );
      })
      .catch((error) => {
        console.error("Error deleting room:", error);
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
        <h2 className="text-2xl font-bold m-10">Rooms Data</h2>

        <div className="flex justify-center items-center">
          <table className="border border-black w-full">
            <thead>
              <tr className="font-bold text-lg">
                <td>Day</td>
                <td>Room Type</td>
                <td>Room Qty.</td>
                <td>Adult</td>
                <td>Children</td>
                <td>Ac</td>
                <td>Delete</td>
              </tr>
            </thead>
            <tbody>
              {rooms.map((room) => (
                <tr key={room._id}>
                  <td>{room.day}</td>
                  <td>{room.roomType}</td>
                  <td>{room.roomQuantity}</td>
                  <td>{room.adults}</td>
                  <td>{room.children}</td>
                  <td>{room.selectedValue}</td>
                  <td>
                    <Button
                      name="Delete"
                      onClick={() => handleDelete(room.roomId)}
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

export default RoomData;
