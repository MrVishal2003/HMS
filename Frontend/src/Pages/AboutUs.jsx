import img from "../Images/1Entertainment.jpg";
import img1 from "../Images/Happnings.jpg";
import img2 from "../Images/abt2.jpg";
import Footer from "../components/Footer";
import Layout1 from "../components/Layout1";
import Navbar from "../components/Navbar";

function AboutUs() {
  return (
    <>
    <Navbar />

      <Layout1 name="ABOUT US" img={img} />
      <div className="flex flex-col md:flex-row justify-evenly m-[40px] space-x-5 space-y-2">
        <div className="space-y-5">
          <h2 className="text-2xl font-bold">
            Welcome to Our Hotel: Where Comfort Meets Luxury
          </h2>
          <h3 className="text-xl font-semibold">Exceptional Accommodation</h3>
          <p>
            Discover a haven of relaxation and indulgence at our hotel. Our
            well-appointed rooms and suites provide the perfect blend of comfort
            and elegance. Each room is designed with your utmost relaxation in
            mind, ensuring a peaceful nights sleep.
          </p>
          <h2 className="text-xl font-semibold">Culinary Delights</h2>
          <p>
            Savor exquisite flavors at our in-house restaurants. Our talented
            chefs craft culinary masterpieces using fresh, local ingredients.
            Whether youre craving international cuisine, local delicacies, or a
            quick snack, our dining options cater to every palate.
          </p>
          <h2 className="text-xl font-semibold">Wellness and Recreation</h2>
          <p>
            Rejuvenate your senses at our spa and wellness center. Unwind with a
            range of therapeutic treatments, massages, and wellness programs
            designed to promote relaxation and balance. Our fitness facilities
            are equipped to keep you energized throughout your stay.
          </p>
        </div>
        <div className="flex items-end mt-28">
          <div className="relative top-0 left-0 mr-14 mb-20 w-[500px]">
            <img
              className="absolute bottom-10 left-10 border border-black h-80 brightness-50"
              src={img1}
              alt=""
            />
            <img
              className="relative top-0 left-0 border border-black h-80 transition-transform hover:scale-105 hover:brightness-100 brightness-90"
              src={img1}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="flex md:flex-row justify-around m-[40px] space-x-5">
        <div className="">
          <div className="relative top-0 left-0 mr-16 mb-20 w-[500px]">
            <img
              className="relative top-0 left-0 border border-black h-80 brightness-50"
              src={img2}
              alt=""
            />
            <img
              className="absolute top-10 left-10 border border-black h-80 transition-transform hover:scale-105 hover:brightness-100 brightness-90"
              src={img2}
              alt=""
            />
          </div>
        </div>
        <div className="space-y-5">
          <h2 className="text-xl font-semibold">Meetings and Events</h2>
          <p>
            Host successful meetings and events in our state-of-the-art
            facilities. Our versatile event spaces can accommodate everything
            from corporate conferences to intimate gatherings. Our dedicated
            event planning team ensures that every detail is executed
            flawlessly.
          </p>
          <h2 className="text-xl font-semibold">Book Your Stay</h2>
          <p>
            Escape to a world of luxury and comfort. Book your stay at our hotel
            and immerse yourself in unparalleled hospitality. We look forward to
            providing you with an unforgettable experience.
          </p>
          <h2 className="text-xl font-semibold">Modern Amenities</h2>
          <p>
            Experience the convenience of modern amenities, including high-speed
            Wi-Fi, flat-screen TVs, and in-room services. Our hotel is designed
            to cater to the needs of both business and leisure travelers,
            ensuring a seamless and enjoyable stay.
          </p>
        </div>
      </div>

      {/* <div className="flex justify-evenly flex-wrap m-[10px]">
        <div className="w-[30%] mx-[30px] my-[10px]">
          <img src={img} alt="" />
          <p className="text-center"> Swimming Pool</p>
        </div>
        <div className="w-[30%] mx-[30px] my-[10px]">
          <img src={img} alt="" />
          <p className="text-center"> Gym</p>
        </div>
        <div className="w-[30%] mx-[30px] my-[10px]">
          <img src={img} alt="" />
          <p className="text-center"> Resturants & Bar</p>
        </div>
        <div className="w-[30%] mx-[30px] my-[10px]">
          <img src={img} alt="" />
          <p className="text-center"> Spa</p>
        </div>
        <div className="w-[30%] mx-[30px] my-[10px]">
          <img src={img} alt="" />
          <p className="text-center"> Game zone</p>
        </div>
        <div className="w-[30%] mx-[30px] my-[10px]">
          <img src={img} alt="" />
          <p className="text-center"> Banquet Hall</p>
        </div>
      </div> */}
      <Footer />
    </>
  );
}

export default AboutUs;
