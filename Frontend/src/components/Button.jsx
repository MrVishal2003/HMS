import PropTypes from "prop-types";
import GoogleIcon from "@mui/icons-material/Google";

function Button({ name, padding = "normal", color, color2, g }) {
  const paddingClass =
    padding === "small" ? `px-2 py-1 text-xs sm:text-sm` : `px-4 py-2 sm:px-6 sm:py-3`;
  
  const colorClass =
    color === "google"
      ? `bg-gray-200 text-black hover:bg-gray-300`
      : `bg-creme text-maroon hover:bg-orange-300`;

  const color2Class =
    color2 === "dark"
      ? `bg-maroon text-orange-200 hover:bg-red-900`
      : `bg-creme text-maroon`;

  return (
    <button
      type="submit"
      className={`w-full sm:w-auto flex items-center justify-center gap-2 rounded-md font-medium ${paddingClass} ${colorClass} ${color2Class}`}
    >
      {g === "yes" && <GoogleIcon className="text-lg" />}
      {name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  padding: PropTypes.string,
  color: PropTypes.string,
  color2: PropTypes.string,
  g: PropTypes.string,
};

export default Button;
