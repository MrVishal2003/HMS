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

      <div className="flex flex-col md:flex-row justify-evenly ml-16 mr-5 mt-52 mb-52">
        <div className="grid mb-4 md:mb-0">
          <h3 className="text-2xl font-semibold">
            About Hotel Urban Sanctuary
          </h3>
          <p>
            The Urban Sanctuary Hotel is a sophisticated and contemporary urban
            retreat offering a luxurious experience in the heart of the city.
            With a large swimming pool, a well-equipped gym, an upscale
            restaurant and bar serving diverse cuisine, a rejuvenating spa,
            secure parking facilities, and a spacious banquet hall, the hotel is
            designed to cater to the needs of both leisure and business
            travelers. Guests can enjoy a refreshing swim, maintain their
            fitness routines, indulge in culinary delights, relax with spa
            treatments, and host events seamlessly in a stylish and convenient
            setting. The hotel aims to provide a perfect balance of modern
            amenities and tranquil surroundings for a memorable and enjoyable
            stay.
          </p>
          <NavLink to="/AboutUs" className="h-2 w-36">
            <Button name="Explore More" />
          </NavLink>
        </div>
        <div className="flex items-end">
          <div className="relative top-0 left-0 ml-10 mr-20 w-[500px]">
            <img
              className="absolute bottom-10 left-10 border border-black h-80 brightness-50"
              src={img2}
              alt=""
            />
            <img
              className="relative top-0 left-0 border border-black h-80 transition-transform hover:scale-105 hover:brightness-100 brightness-90"
              src={img2}
              alt=""
            />
          </div>
        </div>
      </div>

      <Layout1
        name="HAPPNINGS"
        img={img3}
        txt="small"
        txtSmall="Events & Weddings"
      />

      <div className="mt-8 lg:mt-16">
        <div className="flex justify-center mb-16">
          <h3 className="text-xl font-semibold flex text-center lg:text-left">
            Our Gallery
          </h3>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center mb-16">
          <div className="flex flex-col lg:flex-row space-x-3 lg:space-y-0 m-3">
            <div className="flex-1 lg:m-0">
              <img
                src={img4}
                alt=""
                className="border border-black object-cover transition-transform hover:scale-y-110 hover:brightness-100 brightness-90"
              />
            </div>
            <div className="flex-1 lg:m-0">
              <img
                src={img5}
                alt=""
                className=" border border-black object-cover transition-transform hover:scale-y-110 hover:brightness-100 brightness-90"
              />
            </div>
            <div className="flex-1 lg:m-0">
              <img
                src={img6}
                alt=""
                className=" border border-black object-cover transition-transform hover:scale-y-110 hover:brightness-100 brightness-90"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
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
