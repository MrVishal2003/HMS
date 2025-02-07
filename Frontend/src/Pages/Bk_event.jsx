import { FormGroup, FormControl, Radio } from "@mui/material";
import { yellow } from "@mui/material/colors";
import { Form, Select } from "antd";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BkEvent = () => {
  const { Option } = Select;
  // const navigate = useNavigate();

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
    axios
      .post(`${import.meta.env.VITE_API_BASE_URL}/event`, {
        day,
        eventType,
        adults,
        children,
        selectedValue,
      })
      .then((response) => {
        axios.get();
        if (response.status === 201) {
          // Successful login
          console.log("succesful", response.data.message);
          navigate("/Events");
        } else {
          // Handle login failure
          console.error("Login failed:");
          // alert("Data Entered Succesfully");

          // navigate("/Events", { state: { id: eventType } });
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
      <div className="min-h-screen flex items-center justify-center bg-gray-100 text-maroon">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md flex justify-center flex-wrap">
          <h2 className="text-2xl font-semibold flex justify-center mb-8">
            BOOK YOUR DREAM EVENT
          </h2>
          <form className="space-y-4" onSubmit={handleBooking}>
            <input
              min="0"
              max="10"
              type="number"
              className="border border-gray p-2 w-full rounded-md mb-5"
              placeholder="Day"
              value={day}
              onChange={(e) => setDay(e.target.value)}
              required
            />

            <div className="flex justify-center space-x-5">
              <div className="w-52">
                <Form.Item
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Select
                    placeholder="Select Events"
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
                    <Option value="0-50">0-50</Option>
                    <Option value="100-200">100-200</Option>
                    <Option value="200-300">200-300</Option>
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
                    <Option value="10-20">10-20</Option>
                    <Option value="30-40">30-50</Option>
                    <Option value="More">More</Option>
                  </Select>
                </Form.Item>
              </div>
            </div>

            <FormControl
              component="fieldset"
              className="flex justify-center items-center"
            >
              <FormGroup row className="items-center ">
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

export default BkEvent;
