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
    axios
      .post("http://localhost:3000/book", {
        day,
        roomType,
        roomQuantity,
        adults,
        children,
        selectedValue,
      })
      .then((response) => {
        axios.get();
        if (response.status === 201) {
          // Successful login
          console.log("succesful");
          navigate("/Room");
        } else {
          // Handle login failure
          console.error("Login failed:", response.data.message);
          alert("Incorrect email or password. Please try again.");
        }
      })
      .catch((error) => {
        // Handle network errors or other exceptions
        console.error("Error logging in:", error);
        alert("Error logging in. Please try again.");
      });
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  return (
    <>
      <div className="min-h-screen flex items-center justify-center text-maroon">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md flex justify-center flex-wrap">
          <h2 className="text-2xl font-semibold flex justify-center mb-8">
            BOOK YOUR STAY
          </h2>
          <form className="space-y-4" onSubmit={handleBooking}>
            <input
              type="text"
              className="border border-gray p-2 w-full rounded-md mb-5"
              placeholder="Day"
              value={day}
              onChange={(e) => setDay(e.target.value)}
              required
            />

            <div className="flex justify-center space-x-5">
              <div className="w-1/2">
                <Form.Item
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Select
                    placeholder="Select Rooms"
                    onChange={(value) => setRoomType(value)}
                  >
                    <Option value="Single Bed">Single Bed</Option>
                    <Option value="Twin Bed">Twin Room</Option>
                    <Option value="Delux">Deluxe Room</Option>
                    <Option value="Villa">Villa</Option>
                  </Select>
                </Form.Item>
              </div>
              <div className="w-1/2">
                <Form.Item
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Select
                    placeholder="Room Qty."
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
            </div>

            <div className="flex justify-center space-x-5">
              <div className="w-1/2">
                <Form.Item
                  rules={[
                    {
                      required: true,
                      message: "Please select a room type",
                    },
                  ]}
                >
                  <Select
                    placeholder="Adults"
                    onChange={(value) => setAdults(value)}
                    className="custom-border-style"
                    required
                  >
                    <Option value="1">1</Option>
                    <Option value="2">2</Option>
                    <Option value="3">3</Option>
                    <Option value="4">4</Option>
                    <Option value="More">More</Option>
                  </Select>
                </Form.Item>
              </div>
              <div className="w-1/2">
                <Form.Item
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Select
                    placeholder="Children"
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
            </div>

            <FormControl
              component="fieldset"
              className="flex justify-center items-center"
            >
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
                <label htmlFor="Ac" className="cursor-pointer">
                  Ac
                </label>

                <Radio
                  {...controlProps("Non Ac")}
                  id="Non Ac"
                  sx={{
                    color: yellow[800],
                    "&.Mui-checked": {
                      color: yellow[800],
                    },
                  }}
                />
                <label htmlFor="Non Ac" className="cursor-pointer">
                  Non Ac
                </label>
              </FormGroup>
            </FormControl>

            <label className="flex justify-center m-[5px]">
              <button
                type="submit"
                className="text-maroon bg-creme font-medium rounded-md text-sm px-3 py-2"
              >
                Book
              </button>
            </label>
          </form>
        </div>
      </div>
    </>
  );
};

export default BkRoom;
