import { useEffect, useState } from "react";
import Button from "../components/Button";
import axios from "axios";
import { NavLink } from "react-router-dom";

function OrderData() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("https://hms-api-ten.vercel.app/bkorder")
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
      });
  }, []);

  const handleDelete = (orderId) => {
    axios
      .delete(`https://hms-api-ten.vercel.app/bkorder/${orderId}`)
      .then(() => {
        setOrders((prevOrders) =>
          prevOrders.filter((order) => order._id !== orderId)
        );
      })
      .catch((error) => {
        console.error("Error deleting order:", error);
      });
  };

  return (
    <div className="text-center p-4">
      <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>

      {/* Navigation Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
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

      <h2 className="text-2xl font-semibold mb-6">Order Data</h2>

      {/* Responsive Table Wrapper */}
      <div className="overflow-x-auto">
        <table className="w-full border border-black min-w-[600px]">
          <thead>
            <tr className="bg-gray-200 text-black text-lg">
              <th className="p-2 border">Order Type</th>
              <th className="p-2 border">Cold Drinks</th>
              <th className="p-2 border">Desert</th>
              <th className="p-2 border">Delete</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr key={order._id} className="text-center border">
                  <td className="p-2 border">{order.orderType}</td>
                  <td className="p-2 border">{order.colddrink}</td>
                  <td className="p-2 border">{order.desert}</td>
                  <td className="p-2 border">
                    <Button name="Delete" onClick={() => handleDelete(order._id)} />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="p-4 text-gray-500">
                  No orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrderData;
