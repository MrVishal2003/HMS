import Button from "../components/Button";
import { NavLink } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";

function Profile() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-maroon p-4">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-md w-full max-w-md">
        {/* Profile Header */}
        <h2 className="text-2xl mb-4 font-semibold flex justify-center">Profile</h2>

        {/* Profile Icon */}
        <div className="flex justify-center mb-5">
          <div className="bg-slate-300 rounded-full h-24 w-24 md:h-28 md:w-28 flex justify-center items-center">
            <PersonIcon className="h-20 w-20 md:h-24 md:w-24" />
          </div>
        </div>

        {/* Profile Form */}
        <form className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* First Name */}
            <div className="w-full md:w-1/2">
              <label className="block">
                <input
                  type="text"
                  className="border border-maroon p-2 w-full rounded-md"
                  placeholder="First Name"
                />
              </label>
            </div>

            {/* Last Name */}
            <div className="w-full md:w-1/2">
              <label className="block">
                <input
                  type="text"
                  className="border border-maroon p-2 w-full rounded-md"
                  placeholder="Last Name"
                />
              </label>
            </div>
          </div>

          {/* Email */}
          <label className="block">
            <input
              type="text"
              className="border border-maroon p-2 w-full rounded-md"
              placeholder="Email"
            />
          </label>

          {/* Phone Number */}
          <label className="block">
            <input
              type="text"
              className="border border-maroon p-2 w-full rounded-md"
              placeholder="Phone Number"
            />
          </label>

          {/* Edit Button */}
          <div className="flex justify-center">
            <Button name="Edit" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Profile;
