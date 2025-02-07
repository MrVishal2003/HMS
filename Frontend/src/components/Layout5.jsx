import PropTypes from "prop-types";

const Layout5 = (props) => {
  return (
    <>
      <div className="group">
        <img
          src={props.img}
          alt="Gallery"
          className="w-full h-96 object-cover transition-transform group-hover:scale-105 group-hover:brightness-100 brightness-90 border border-maroon"
        />
      </div>
    </>
  );
};

Layout5.propTypes = {
  img: PropTypes.string,
};

export default Layout5;
