import { useEffect, useState } from "react";
import Button from "../components/Button";
import axios from "axios";
import { NavLink } from "react-router-dom";

function EventData() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get("https://hms-api-ten.vercel.app/bkevent")
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
      });
  }, []);

  const handleDelete = (eventId) => {
    axios
      .delete(`https://hms-api-ten.vercel.app/bkevent/${eventId}`)
      .then(() => {
        console.log("Event deleted successfully");
        setEvents((prevEvents) =>
          prevEvents.filter((event) => event.eventId !== eventId)
        );
      })
      .catch((error) => {
        console.error("Error deleting event:", error);
      });
  };

  return (
    <>
      <div className="text-center p-4">
        <h1 className="text-3xl md:text-4xl font-bold m-4">Admin Panel</h1>

        {/* Navigation Buttons */}
        <div className="flex flex-wrap justify-center gap-4 my-4">
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

        <h2 className="text-2xl font-bold my-6">Event Data</h2>

        {/* Table Container with Horizontal Scrolling */}
        <div className="overflow-x-auto">
          <table className="border border-black w-full min-w-[600px]">
            <thead>
              <tr className="font-bold text-lg bg-gray-200">
                <td className="p-2">Day</td>
                <td className="p-2">Event Type</td>
                <td className="p-2">Adults</td>
                <td className="p-2">Children</td>
                <td className="p-2">Ac</td>
                <td className="p-2">Delete</td>
              </tr>
            </thead>
            <tbody>
              {events.map((event) => (
                <tr key={event._id} className="border-t text-center">
                  <td className="p-2">{event.day}</td>
                  <td className="p-2">{event.eventType}</td>
                  <td className="p-2">{event.adults}</td>
                  <td className="p-2">{event.children}</td>
                  <td className="p-2">{event.selectedValue}</td>
                  <td className="p-2">
                    <Button
                      name="Delete"
                      onClick={() => handleDelete(event.eventId)}
                      className="text-red-600"
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

export default EventData;
