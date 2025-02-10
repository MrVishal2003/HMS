import { Form, Select } from "antd";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BkOrder = () => {
  const { Option } = Select;
  const [orderType, setOrderType] = useState("");
  const [colddrink, setColdDrinkType] = useState("");
  const [desert, setDesertType] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!loggedIn) {
      navigate("/Login"); // Redirect to sign-in page if not logged in
    }
  }, [navigate]);

  const handleBooking = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://hms-api-ten.vercel.app/order', {
        orderType,
        colddrink,
        desert,
      });

      if (response.status === 201) {
        console.log("Order successful", response.data.message);
        navigate("/Dining");
      } else {
        console.error("Order failed");
        alert("Order failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error placing order. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center mb-6">BOOK YOUR ORDER</h2>

        <form className="space-y-4" onSubmit={handleBooking}>
          {/* Meal Selection */}
          <Form.Item className="w-full">
            <Select
              placeholder="Select Your Meal"
              className="w-full"
              onChange={(value) => setOrderType(value)}
            >
              <Option value="Gujarati">Gujarati</Option>
              <Option value="Punjabi">Punjabi</Option>
              <Option value="South-Indian">South-Indian</Option>
              <Option value="Chinese">Chinese</Option>
              <Option value="Pizza">Pizza</Option>
              <Option value="Burger">Burger</Option>
            </Select>
          </Form.Item>

          {/* Cold Drinks Selection */}
          <Form.Item className="w-full">
            <Select
              placeholder="Select Cold Drink"
              className="w-full"
              onChange={(value) => setColdDrinkType(value)}
            >
              <Option value="Coca Cola">Coca Cola</Option>
              <Option value="Mountain Dew">Mountain Dew</Option>
              <Option value="Red Bull">Red Bull</Option>
              <Option value="Thumbs Up">Thumbs Up</Option>
              <Option value="7 Up">7 Up</Option>
              <Option value="Mango Juice">Mango Juice</Option>
            </Select>
          </Form.Item>

          {/* Dessert Selection */}
          <Form.Item className="w-full">
            <Select
              placeholder="Select Dessert"
              className="w-full"
              onChange={(value) => setDesertType(value)}
            >
              <Option value="American Nuts">American Nuts</Option>
              <Option value="Vanilla">Vanilla</Option>
              <Option value="Chocolate">Chocolate</Option>
              <Option value="Strawberry">Strawberry</Option>
              <Option value="Exotica">Exotica</Option>
              <Option value="Raspberry">Raspberry</Option>
            </Select>
          </Form.Item>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white font-semibold py-2 rounded-md transition duration-300 hover:bg-yellow-600"
          >
            ORDER NOW
          </button>
        </form>
      </div>
    </div>
  );
};

export default BkOrder;
