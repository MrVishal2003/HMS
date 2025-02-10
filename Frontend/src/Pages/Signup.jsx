import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import { orange } from "@mui/material/colors";
import Button from "../components/Button";
import axios from "axios";
import Navbar from "../components/Navbar";

function Signup() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    confirmpassword: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value.trim() });
  };

  // Signup Function
  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters.");
      setLoading(false);
      return;
    }

    if (formData.password !== formData.confirmpassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post("https://hms-api-ten.vercel.app/signup", formData);
      if (response.status === 201) {
        navigate("/Login");
      }
    } catch (error) {
      setError(error.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-center mb-4">Sign up</h2>

          {error && <p className="text-red-500 text-center">{error}</p>}

          <form className="space-y-4" onSubmit={handleSignup}>
            {/* Name Fields */}
            <div className="flex flex-col sm:flex-row sm:gap-4">
              <input
                type="text"
                name="firstname"
                className="border border-gray-300 p-2 w-full rounded-md"
                placeholder="First Name"
                value={formData.firstname}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastname"
                className="border border-gray-300 p-2 w-full rounded-md"
                placeholder="Last Name"
                value={formData.lastname}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email & Phone */}
            <input
              type="email"
              name="email"
              className="border border-gray-300 p-2 w-full rounded-md"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="phone"
              className="border border-gray-300 p-2 w-full rounded-md"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            {/* Passwords */}
            <input
              type="password"
              name="password"
              className="border border-gray-300 p-2 w-full rounded-md"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="confirmpassword"
              className="border border-gray-300 p-2 w-full rounded-md"
              placeholder="Confirm Password"
              value={formData.confirmpassword}
              onChange={handleChange}
              required
            />

            {/* Terms & Conditions */}
            <div className="flex items-center justify-center">
              <Checkbox
                defaultChecked
                sx={{
                  color: orange[300],
                  "&.Mui-checked": { color: orange[300] },
                }}
              />
              <span className="text-sm">
                I accept{" "}
                <NavLink to="/Policy" className="underline">
                  Terms & Conditions
                </NavLink>
              </span>
            </div>

            {/* Sign In Link */}
            <div className="text-center text-sm">
              Already have an account?{" "}
              <NavLink to="/Login" className="font-semibold">
                Sign in
              </NavLink>
            </div>

            {/* Signup Button */}
            <div className="flex justify-center">
              <Button type="submit" name={loading ? "Signing up..." : "Sign up"} disabled={loading} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
