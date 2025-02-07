import PropTypes from "prop-types";
import GoogleIcon from "@mui/icons-material/Google";

function Button(props) {
  const paddingClass =
    props.padding === "small" ? `px-2 py-0.5` : `px-4 py-2 m-2`;
  const colorClass =
    props.color == "google"
      ? `bg-gray-200 text-black hover:bg-gray-300`
      : `bg-creme text-maroon hover:bg-orange-300`;
  const color2Class =
    props.color2 == "dark"
      ? `bg-maroon text-orange-200 hover:bg-red-900`
      : `bg-creme text-maroon`;
  const gClass =
    props.g == "yes" ? <GoogleIcon className="mr-[10px] p-[1%]" /> : ``;
  return (
    <div>
      <button
        type="submit"
        {...props}
        className={`rounded-md font-medium text-sm ${paddingClass} ${colorClass} ${color2Class} `}
      >
        {gClass}
        {props.name}
        
      </button>
    </div>
  );
}

Button.propTypes = {
  name: PropTypes.string,
  paddingClass: PropTypes.string,
  padding: PropTypes.string,
  colorClass: PropTypes.string,
  color: PropTypes.string,
  color2Class: PropTypes.string,
  color2: PropTypes.string,
  gClass: PropTypes.string,
  g: PropTypes.string,
};

export default Button;
