import Button from "../components/Button";
import { NavLink } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
function Profile() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100  text-maroon">
        <div className="bg-white p-8 rounded shadow-md w-full sm:w-96 max-w-md">
          <h2 className="text-2xl mb-4 font-semibold flex justify-center">
            Profile{" "}
          </h2>
          <div className="flex justify-center m-5">
            <div className="bg-slate-300 rounded-full h-28 w-28 flex justify-center items-center">
              <PersonIcon className="h-32 w-32" style={{ fontSize: "4rem" }} />
            </div>
          </div>
          <form className="space-y-4">
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block">
                  <input
                    type="text"
                    className="border border-maroon p-2 w-full rounded-md"
                    placeholder="First Name"
                  />
                </label>
              </div>
              <div className="w-1/2">
                <label className="block">
                  <input
                    type="text"
                    className="border border-maroon p-2 w-full rounded-md"
                    placeholder="Last Name"
                  />
                </label>
              </div>
            </div>
            <label className="block mb-2">
              <input
                type="text"
                className="border border-maroon p-2 w-full rounded-md"
                placeholder="Email"
              />
            </label>
            <label className="block mb-2">
              <input
                type="text"
                className="border border-maroon p-2 w-full rounded-md"
                placeholder="Phone Number"
              />
            </label>

            <label className="flex justify-center m-[5px] ">
              <Button name="Edit" />
            </label>
          </form>
        </div>
      </div>{" "}
    </>
  );
}

export default Profile;
