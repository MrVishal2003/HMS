import { FormGroup, FormControl, Radio } from "@mui/material";
import { yellow } from "@mui/material/colors";
import { Form, Select } from "antd";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BkEvent = () => {
  const { Option } = Select;
  const [eventType, setEventType] = useState("");
  const [day, setDay] = useState("");
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
      const response = await axios.post('https://hms-api-ten.vercel.app/event', {
        day,
        eventType,
        adults,
        children,
        selectedValue,
      });

      if (response.status === 201) {
        console.log("Booking successful", response.data.message);
        navigate("/Events");
      } else {
        console.error("Booking failed:");
        alert("Booking failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error. Please try again.");
    }
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "room-type",
    inputProps: { "aria-label": item },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center mb-6">
          BOOK YOUR DREAM EVENT
        </h2>
        
        <form className="space-y-4" onSubmit={handleBooking}>
          <input
            type="number"
            min="1"
            className="border border-gray-300 p-2 w-full rounded-md"
            placeholder="Enter Days"
            value={day}
            onChange={(e) => setDay(e.target.value)}
            required
          />

          <div className="flex flex-col md:flex-row md:space-x-4">
            <Form.Item className="w-full">
              <Select
                placeholder="Select Event Type"
                className="w-full"
                onChange={(value) => setEventType(value)}
              >
                <Option value="Wedding">Wedding</Option>
                <Option value="Birthday">Birthday</Option>
                <Option value="Anniversary">Anniversary</Option>
                <Option value="Cultural">Cultural</Option>
                <Option value="Festival">Festival</Option>
                <Option value="Gathering">Gathering</Option>
              </Select>
            </Form.Item>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-4">
            <Form.Item className="w-full">
              <Select
                placeholder="Number of Adults"
                className="w-full"
                onChange={(value) => setAdults(value)}
              >
                <Option value="0-50">0-50</Option>
                <Option value="100-200">100-200</Option>
                <Option value="200-300">200-300</Option>
                <Option value="More">More</Option>
              </Select>
            </Form.Item>

            <Form.Item className="w-full">
              <Select
                placeholder="Number of Children"
                className="w-full"
                onChange={(value) => setChildren(value)}
              >
                <Option value="0">0</Option>
                <Option value="10-20">10-20</Option>
                <Option value="30-50">30-50</Option>
                <Option value="More">More</Option>
              </Select>
            </Form.Item>
          </div>

          <div className="flex justify-center space-x-6">
            <FormControl component="fieldset">
              <FormGroup row className="items-center">
                <Radio
                  id="Ac"
                  {...controlProps("Ac")}
                  sx={{
                    color: yellow[800],
                    "&.Mui-checked": { color: yellow[800] },
                  }}
                />
                <label htmlFor="Ac" className="cursor-pointer">
                  AC
                </label>

                <Radio
                  id="NonAc"
                  {...controlProps("Non Ac")}
                  sx={{
                    color: yellow[800],
                    "&.Mui-checked": { color: yellow[800] },
                  }}
                />
                <label htmlFor="NonAc" className="cursor-pointer">
                  Non AC
                </label>
              </FormGroup>
            </FormControl>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-white font-semibold py-2 rounded-md transition duration-300 hover:bg-yellow-600"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default BkEvent;
