import img from "../Images/1Home.jpg";
import img2 from "../Images/Hall.jpg";
import img3 from "../Images/Happnings.jpg";
import img4 from "../Images/reception.jpg";
import img5 from "../Images/room1.jpg";
import img6 from "../Images/dish1.jpg";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Layout1 from "../components/Layout1";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <Layout1 name="A MEMORABLE EXPERIENCE" img={img} button="small" />

      {/* About Section */}
      <div className="container mx-auto px-4 mt-20 mb-20 flex flex-col md:flex-row items-center text-center md:text-left">
        <div className="max-w-lg mb-8 md:mb-0">
          <h3 className="text-2xl font-semibold">About Hotel Urban Sanctuary</h3>
          <p className="text-sm leading-relaxed mt-2">
            The Urban Sanctuary Hotel is a sophisticated and contemporary urban
            retreat offering a luxurious experience in the heart of the city.
            With a large swimming pool, a well-equipped gym, an upscale
            restaurant, and much more, the hotel is designed to cater to both
            leisure and business travelers.
          </p>
          <NavLink to="/AboutUs" className="inline-block mt-4">
            <Button name="Explore More" />
          </NavLink>
        </div>

        {/* Responsive Image Section */}
        <div className="relative w-full max-w-sm mx-auto sm:max-w-md md:max-w-lg">
          <img
            className="absolute bottom-5 left-5 border border-black h-72 sm:h-80 brightness-50"
            src={img2}
            alt="Hall"
          />
          <img
            className="relative top-0 left-0 border border-black h-72 sm:h-80 w-full transition-transform hover:scale-105 hover:brightness-100 brightness-90"
            src={img2}
            alt="Hall"
          />
        </div>
      </div>

      <Layout1 name="HAPPNINGS" img={img3} txt="small" txtSmall="Events & Weddings" />

      {/* Gallery Section */}
      <div className="container mx-auto px-4 mt-8 lg:mt-16">
        <h3 className="text-xl font-semibold text-center mb-8">Our Gallery</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <img
            src={img4}
            alt="Reception"
            className="border border-black object-cover w-full h-48 sm:h-60 transition-transform hover:scale-105 hover:brightness-100 brightness-90"
          />
          <img
            src={img5}
            alt="Room"
            className="border border-black object-cover w-full h-48 sm:h-60 transition-transform hover:scale-105 hover:brightness-100 brightness-90"
          />
          <img
            src={img6}
            alt="Dish"
            className="border border-black object-cover w-full h-48 sm:h-60 transition-transform hover:scale-105 hover:brightness-100 brightness-90"
          />
        </div>

        <div className="flex justify-center mt-8">
          <NavLink to="/Gallery">
            <Button name="Explore More" />
          </NavLink>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
