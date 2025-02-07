import { Form, Select } from "antd";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BkOrder = () => {
  const { Option } = Select;
  // const navigate = useNavigate();

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
    axios
      .post('https://hms-api-ten.vercel.app/order', {
        orderType,
        colddrink,
        desert,
      })
      .then((response) => {
        axios.get();
        if (response.status === 201) {
          // Successful login
          console.log("succesful", response.data.message);
          navigate("/Dining");
        } else {
          // Handle login failure
          console.error("Login failed:");
          // alert("Data Entered Succesfully");

          // navigate("/Orders", { state: { id: orderType } });
        }
      })
      .catch((error) => {
        // Handle network errors or other exceptions
        console.error("Error logging in:", error);
        alert("Error logging in. Please try again.");
      });
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 text-maroon">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md flex justify-center flex-wrap">
          <h2 className="text-2xl font-semibold flex justify-center mb-8">
            BOOK YOUR ORDER
          </h2>
          <form className="space-y-4" onSubmit={handleBooking}>
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
                    placeholder="Select Your Meal"
                    onChange={(value) => setOrderType(value)}
                  >
                    <Option value="Gujarati">Gujarati</Option>
                    <Option value="Punjabi">Punjabi</Option>
                    <Option value="South-Indian">South-Indian</Option>
                    <Option value="Chienese">Chienese</Option>
                    <Option value="Pizza">Pizza</Option>
                    <Option value="Burger">Burger</Option>
                  </Select>
                </Form.Item>
              </div>
            </div>

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
                    placeholder="Select Cold Drinks"
                    onChange={(value) => setColdDrinkType(value)}
                  >
                    <Option value="Coca cola">Coca cola</Option>
                    <Option value="Mountaindew">Mountaindew</Option>
                    <Option value="Red Bull">Red Bull</Option>
                    <Option value="Thumbs Up">Thumbs Up</Option>
                    <Option value="7 Up">7 Up</Option>
                    <Option value="Mango">Mango</Option>
                  </Select>
                </Form.Item>
              </div>
            </div>

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
                    placeholder="Select Desert"
                    onChange={(value) => setDesertType(value)}
                  >
                    <Option value="American Nuts">American Nuts</Option>
                    <Option value="Venilla">Venilla</Option>
                    <Option value="Chocolate">Chocolate</Option>
                    <Option value="Strawberry">Strawberry</Option>
                    <Option value="Exortica">Exortica</Option>
                    <Option value="Raspbarry">Raspbarry</Option>
                  </Select>
                </Form.Item>
              </div>
            </div>

            <label className="flex justify-center m-[5px]">
              <button
                type="submit"
                className="text-maroon bg-creme font-medium rounded-md text-sm px-3 py-2"
              >
                ORDER
              </button>
            </label>
          </form>
        </div>
      </div>
    </>
  );
};

export default BkOrder;
