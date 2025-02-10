import { useEffect, useState } from "react";
import Button from "../components/Button";
import axios from "axios";
import { NavLink } from "react-router-dom";

function RoomData() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    // Fetch rooms from backend when component mounts
    axios
      .get("https://hms-api-ten.vercel.app/bkrooms")
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
      .delete(`https://hms-api-ten.vercel.app/bkrooms/${roomId}`)
      .then(() => {
        console.log("Room deleted successfully");
        // Update the rooms state by filtering out the deleted room
        setRooms((prevRooms) => prevRooms.filter((room) => room.roomId !== roomId));
      })
      .catch((error) => {
        console.error("Error deleting room:", error);
      });
  };

  return (
    <div className="text-center p-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Admin Panel</h1>

      {/* Navigation Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
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

      <h2 className="text-2xl font-bold mb-6">Rooms Data</h2>

      {/* Responsive Table */}
      <div className="overflow-x-auto">
        <table className="border border-black w-full min-w-[600px] text-sm">
          <thead>
            <tr className="bg-gray-200 font-bold">
              <td className="px-2 py-1">Day</td>
              <td className="px-2 py-1">Room Type</td>
              <td className="px-2 py-1">Room Qty.</td>
              <td className="px-2 py-1">Adult</td>
              <td className="px-2 py-1">Children</td>
              <td className="px-2 py-1">Ac</td>
              <td className="px-2 py-1">Delete</td>
            </tr>
          </thead>
          <tbody>
            {rooms.map((room) => (
              <tr key={room._id} className="border-t">
                <td className="px-2 py-1">{room.day}</td>
                <td className="px-2 py-1">{room.roomType}</td>
                <td className="px-2 py-1">{room.roomQuantity}</td>
                <td className="px-2 py-1">{room.adults}</td>
                <td className="px-2 py-1">{room.children}</td>
                <td className="px-2 py-1">{room.selectedValue}</td>
                <td className="px-2 py-1">
                  <Button name="Delete" onClick={() => handleDelete(room.roomId)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RoomData;
