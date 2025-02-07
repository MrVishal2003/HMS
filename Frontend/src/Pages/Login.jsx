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
    // Regular expression for email validation
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
      .post('https://hms-api-ten.vercel.app/signin', { email, password })
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem("isLoggedIn", "true");
          // Successful login
          navigate("/", { state: { id: email } });
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

  return (
    <>
      <Navbar />
      <div>
        <div className="min-h-screen flex items-center justify-center  bg-gray-100  text-maroon">
          <div>
            <div className="bg-maroon text-creme text-center text-2xl p-2">
              Urban Sanctuary
            </div>
            <div className="bg-white p-8 rounded shadow-md w-full sm:w-96 max-w-md">
              <h2 className="text-2xl mb-10 font-semibold flex justify-center">
                Sign in
              </h2>
              <form className="space-y-10" onSubmit={handleLogin}>
                <label className="block mb-2 relative">
                  <AlternateEmailIcon className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  <input
                    type="email"
                    className="pl-8 border border-maroon p-2 w-full rounded-md"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </label>
                <label className="block mb-2 relative">
                  <LockIcon className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  <input
                    type="password"
                    className="pl-8 border border-maroon p-2 w-full rounded-md"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </label>
                {error && <p className="text-red-500">{error}</p>}

                <label className="flex items-center">
                  <p className="m-[10px]">Don&apos;t have an account yet?</p>

                  <NavLink to="/Signup" className="font-semibold">
                    Sign up
                  </NavLink>
                </label>
                <label className="flex justify-center m-[5px] ">
                  <Button name="Sign in" />
                </label>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
