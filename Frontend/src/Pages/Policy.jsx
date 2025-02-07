import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SmokeFreeIcon from "@mui/icons-material/SmokeFree";
import PetsIcon from "@mui/icons-material/Pets";
import CancelIcon from "@mui/icons-material/Cancel";
import AddModeratorIcon from "@mui/icons-material/AddModerator";
function Policy() {
  return (
    <>
      <div className="m-[10%]">
        <div className="">
          <div className="flex justify-center m-[20px]">
            <h3 className="text-2xl font-bold ">Policy Detail</h3>
          </div>
          <div className="flex justify-evenly flex-wrap">
            <div className="w-[20%]">
              <h4 className="text-xl font-semibold m-[10px]">House rules</h4>
              <ul>
                <li>
                  <AccessTimeFilledIcon />
                  {"\t"}
                  Check-in time
                </li>
                <li>
                  <AccessTimeIcon /> {"\t"}
                  Check-out time
                </li>
                <li>
                  <SmokeFreeIcon /> {"\t"}
                  No smoking
                </li>
                <li>
                  <PetsIcon /> {"\t"}
                  No pets
                </li>
              </ul>
            </div>
            <div className="w-[20%]">
              <h4 className="text-xl font-semibold m-[10px]">
                Cancellation Policy
              </h4>

              <ul>
                <li>
                  <CancelIcon />
                  {"\t"}
                  Free Cancellation up to 24hrs before checking
                </li>
              </ul>
            </div>
            <div className="w-[20%]">
              <h4 className="text-xl font-semibold m-[10px]">
                Health & Safety
              </h4>

              <ul>
                <li>
                  <AddModeratorIcon />
                  {"\t"}
                  Cleaner in accordance with our COVID safe cleaning policy{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Policy;
