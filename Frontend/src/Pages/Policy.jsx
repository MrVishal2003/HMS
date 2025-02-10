import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SmokeFreeIcon from "@mui/icons-material/SmokeFree";
import PetsIcon from "@mui/icons-material/Pets";
import CancelIcon from "@mui/icons-material/Cancel";
import AddModeratorIcon from "@mui/icons-material/AddModerator";

function Policy() {
  return (
    <div className="p-6 md:p-10">
      <div className="flex justify-center mb-6">
        <h3 className="text-2xl font-bold">Policy Details</h3>
      </div>

      {/* Responsive Policy Sections */}
      <div className="flex flex-col md:flex-row justify-evenly flex-wrap gap-6">
        {/* House Rules */}
        <div className="w-full md:w-[30%] bg-gray-100 p-4 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold mb-3">House Rules</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <AccessTimeFilledIcon /> Check-in time
            </li>
            <li className="flex items-center gap-2">
              <AccessTimeIcon /> Check-out time
            </li>
            <li className="flex items-center gap-2">
              <SmokeFreeIcon /> No smoking
            </li>
            <li className="flex items-center gap-2">
              <PetsIcon /> No pets
            </li>
          </ul>
        </div>

        {/* Cancellation Policy */}
        <div className="w-full md:w-[30%] bg-gray-100 p-4 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold mb-3">Cancellation Policy</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <CancelIcon /> Free cancellation up to 24hrs before check-in
            </li>
          </ul>
        </div>

        {/* Health & Safety */}
        <div className="w-full md:w-[30%] bg-gray-100 p-4 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold mb-3">Health & Safety</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <AddModeratorIcon /> Cleaning follows our COVID-safe policy
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Policy;
