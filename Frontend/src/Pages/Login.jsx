import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LockIcon from "@mui/icons-material/Lock";
import axios from "axios";
import Navbar from "../components/Navbar";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (!password) {
      setError("Please enter your password");
      return;
    }

    axios
      .post("https://hms-api-ten.vercel.app/signin", { email, password })
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem("isLoggedIn", "true");
          navigate("/", { state: { id: email } });
        } else {
          alert("Incorrect email or password. Please try again.");
        }
      })
      .catch((error) => {
        alert("Error logging in. Please try again.");
      });
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-center mb-6">Sign in</h2>

          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email Input */}
            <div className="relative">
              <AlternateEmailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="email"
                className="pl-10 pr-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-maroon"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <LockIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <input
                type="password"
                className="pl-10 pr-3 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-maroon"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Error Message */}
            {error && <p className="text-red-500 text-sm">{error}</p>}

            {/* Sign Up Link */}
            <div className="text-center text-sm">
              <span>Don't have an account? </span>
              <NavLink to="/Signup" className="font-semibold text-maroon">
                Sign up
              </NavLink>
            </div>

            {/* Sign In Button */}
            <div className="flex justify-center">
              <Button name="Sign in" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
