import PropTypes from "prop-types";

const Layout5 = (props) => {
  return (
    <div className="group w-full">
      <img
        src={props.img}
        alt="Gallery"
        className="w-full h-60 sm:h-96 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:brightness-100 brightness-90 border border-maroon"
      />
    </div>
  );
};

Layout5.propTypes = {
  img: PropTypes.string.isRequired,
};

export default Layout5;
