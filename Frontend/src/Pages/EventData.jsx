import { useEffect, useState } from "react";
import Button from "../components/Button";
import axios from "axios";
import { NavLink } from "react-router-dom";

function EventData() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch rooms from backend when component mounts
    axios
      .get('https://hms-api-ten.vercel.app/bkevent')
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
      });
  }, []);

  const handleDelete = (eventId) => {
    // Send DELETE request to delete room
    console.log(eventId);
    axios
      .delete('https://hms-api-ten.vercel.app/bkevent/${eventId}')
      .then(() => {
        console.log("event deleted successfully");
        // Update the rooms state by filtering out the deleted room
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
        <h2 className="text-2xl font-bold m-10">Event Data</h2>

        <div className="flex justify-center items-center">
          <table className="border border-black w-full">
            <thead>
              <tr className="font-bold text-lg">
                <td>Day</td>
                <td>Event Type</td>
                <td>Adult</td>
                <td>Children</td>
                <td>Ac</td>
                <td>Delete</td>
              </tr>
            </thead>
            <tbody>
              {events.map((event) => (
                <tr key={event._id}>
                  <td>{event.day}</td>
                  <td>{event.eventType}</td>
                  <td>{event.adults}</td>
                  <td>{event.children}</td>
                  <td>{event.selectedValue}</td>
                  <td>
                    <Button
                      name="Delete"
                      onClick={() => handleDelete(event.eventId)}
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
