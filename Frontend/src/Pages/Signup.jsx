import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import { orange } from "@mui/material/colors";
import Button from "../components/Button";
import axios from "axios";
import Navbar from "../components/Navbar";

function Signup() {
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();
  const [confirmpassword, setConfirmpassword] = useState();
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/signup", {
        firstname,
        lastname,
        email,
        phone,
        password,
        confirmpassword,
      })
      .then((response) => {
        // Check if user is successfully created
        if (response.status === 201) {
          navigate("/Login"); // Navigate to signin page
        } else if (response.status === 400) {
          // User already exists, display error message if needed
          console.error("User already exists");
        } else {
          // Handle other status codes if needed
          console.error("Unexpected response:", response);
        }
      })
      .catch((error) => {
        // Handle error if the POST request fails
        console.error("Error:", error);
      });
  };

  return (
    <>
      <Navbar />
      <div>
        <div className="min-h-screen flex items-center justify-center bg-gray-100 text-maroon">
          <div>
            <div className="bg-maroon text-creme text-center text-2xl p-2">
              Urban Sanctuary
            </div>

            <div className="bg-white p-8 rounded shadow-md w-full sm:w-96 max-w-md">
              <h2 className="text-2xl mb-4 font-semibold flex justify-center">
                Sign up
              </h2>
              <form className="space-y-4" onSubmit={handleSignup}>
                <div className="flex space-x-4">
                  <div className="w-1/2">
                    <label className="block">
                      <input
                        type="text"
                        className="border border-maroon p-2 w-full rounded-md"
                        placeholder="First Name"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                        required
                      />
                    </label>
                  </div>
                  <div className="w-1/2">
                    <label className="block">
                      <input
                        type="text"
                        className="border border-maroon p-2 w-full rounded-md"
                        placeholder="Last Name"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                        required
                      />
                    </label>
                  </div>
                </div>

                <label className="block mb-2">
                  <input
                    type="email"
                    className="border border-maroon p-2 w-full rounded-md"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </label>

                <label className="block mb-2">
                  <input
                    type="number"
                    className="border border-maroon p-2 w-full rounded-md"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </label>

                <label className="block mb-2">
                  <input
                    type="password"
                    className="border border-maroon p-2 w-full rounded-md"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </label>

                <label className="block mb-2">
                  <input
                    type="password"
                    className="border border-maroon p-2 w-full rounded-md"
                    placeholder="Confirm Password"
                    value={confirmpassword}
                    onChange={(e) => setConfirmpassword(e.target.value)}
                    required
                  />
                </label>

                <div className="flex justify-center items-center mb-4">
                  <Checkbox
                    defaultChecked
                    sx={{
                      color: orange[300],
                      "&.Mui-checked": {
                        color: orange[300],
                      },
                    }}
                  />
                  <span>
                    I accept {"\t"}
                    <NavLink to="/Policy" className="underline">
                      Terms & Conditions
                    </NavLink>
                  </span>
                </div>

                <label className="flex justify-center items-center">
                  <p className="m-[10px]">Already have an account?</p>

                  <NavLink to="/Login" className="font-semibold">
                    Sign in
                  </NavLink>
                </label>

                <div className="flex justify-center items-center">
                  <label className="flex justify-center m-[5px] ">
                    <Button type="submit" name="Sign up" />
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
