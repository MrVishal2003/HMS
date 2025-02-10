import { FormGroup, FormControl, Radio } from "@mui/material";
import { yellow } from "@mui/material/colors";
import { Form, Select } from "antd";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BkRoom = () => {
  const { Option } = Select;

  const [roomType, setRoomType] = useState("");
  const [day, setDay] = useState("");
  const [roomQuantity, setRoomQty] = useState("");
  const [adults, setAdults] = useState("");
  const [children, setChildren] = useState("");
  const [selectedValue, setSelectedValue] = useState("Ac");
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!loggedIn) {
      navigate("/Login"); // Redirect to sign-in page if not logged in
    }
  }, [navigate]);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleBooking = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://hms-api-ten.vercel.app/book', {
        day,
        roomType,
        roomQuantity,
        adults,
        children,
        selectedValue,
      });

      if (response.status === 201) {
        console.log("Booking successful");
        navigate("/Room");
      } else {
        console.error("Booking failed");
        alert("Booking failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error booking room. Please try again.");
    }
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "room-type-radio",
    inputProps: { "aria-label": item },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center mb-6">BOOK YOUR STAY</h2>

        <form className="space-y-4" onSubmit={handleBooking}>
          {/* Day Input */}
          <input
            type="text"
            className="border border-gray-300 p-2 w-full rounded-md"
            placeholder="Enter number of days"
            value={day}
            onChange={(e) => setDay(e.target.value)}
            required
          />

          {/* Room & Quantity Selection */}
          <div className="flex flex-col md:flex-row gap-4">
            <Form.Item className="w-full">
              <Select
                placeholder="Select Room Type"
                className="w-full"
                onChange={(value) => setRoomType(value)}
              >
                <Option value="Single Bed">Single Bed</Option>
                <Option value="Twin Room">Twin Room</Option>
                <Option value="Deluxe Room">Deluxe Room</Option>
                <Option value="Villa">Villa</Option>
              </Select>
            </Form.Item>

            <Form.Item className="w-full">
              <Select
                placeholder="Room Quantity"
                className="w-full"
                onChange={(value) => setRoomQty(value)}
              >
                <Option value="1">1</Option>
                <Option value="2">2</Option>
                <Option value="3">3</Option>
                <Option value="4">4</Option>
                <Option value="More">More</Option>
              </Select>
            </Form.Item>
          </div>

          {/* Adults & Children Selection */}
          <div className="flex flex-col md:flex-row gap-4">
            <Form.Item className="w-full">
              <Select
                placeholder="Adults"
                className="w-full"
                onChange={(value) => setAdults(value)}
              >
                <Option value="1">1</Option>
                <Option value="2">2</Option>
                <Option value="3">3</Option>
                <Option value="4">4</Option>
                <Option value="More">More</Option>
              </Select>
            </Form.Item>

            <Form.Item className="w-full">
              <Select
                placeholder="Children"
                className="w-full"
                onChange={(value) => setChildren(value)}
              >
                <Option value="0">0</Option>
                <Option value="1">1</Option>
                <Option value="2">2</Option>
                <Option value="3">3</Option>
                <Option value="More">More</Option>
              </Select>
            </Form.Item>
          </div>

          {/* AC / Non-AC Selection */}
          <FormControl component="fieldset" className="flex justify-center">
            <FormGroup row className="items-center">
              <Radio
                id="Ac"
                {...controlProps("Ac")}
                sx={{
                  color: yellow[800],
                  "&.Mui-checked": {
                    color: yellow[800],
                  },
                }}
              />
              <label htmlFor="Ac" className="cursor-pointer mr-4">
                AC
              </label>

              <Radio
                id="Non Ac"
                {...controlProps("Non Ac")}
                sx={{
                  color: yellow[800],
                  "&.Mui-checked": {
                    color: yellow[800],
                  },
                }}
              />
              <label htmlFor="Non Ac" className="cursor-pointer">
                Non-AC
              </label>
            </FormGroup>
          </FormControl>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white font-semibold py-2 rounded-md transition duration-300 hover:bg-yellow-600"
          >
            BOOK NOW
          </button>
        </form>
      </div>
    </div>
  );
};

export default BkRoom;
