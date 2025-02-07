import { useEffect, useState } from "react";
import Button from "../components/Button";
import axios from "axios";
import { NavLink } from "react-router-dom";

function OrderData() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders from backend when component mounts
    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/bkorder`)
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
      });
  }, []);

  const handleDelete = (orderId) => {
    // Send DELETE request to delete order
    console.log(orderId);
    axios
      .delete(`${import.meta.env.VITE_API_BASE_URL}/bkorder/${orderId}`)
      .then(() => {
        console.log("order deleted successfully");
        // Update the orders state by filtering out the deleted order
        setOrders((prevOrders) =>
          prevOrders.filter((order) => order.orderId !== orderId)
        );
      })
      .catch((error) => {
        console.error("Error deleting order:", error);
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
        <h2 className="text-2xl font-bold m-10">Order Data</h2>

        <div className="flex justify-center items-center">
          <table className="border border-black w-full">
            <thead>
              <tr className="font-bold text-lg">
                <td>Order Type</td>
                <td>Cold Drinks</td>
                <td>Desert</td>
                <td>Delete</td>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order.orderType}</td>
                  <td>{order.colddrink}</td>
                  <td>{order.desert}</td>
                  <td>
                    <Button
                      name="Delete"
                      onClick={() => handleDelete(order.orderId)}
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

export default OrderData;
