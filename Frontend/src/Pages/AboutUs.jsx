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

      {/* Section 1: Hotel Introduction */}
      <div className="flex flex-col md:flex-row items-center justify-evenly m-5 space-y-8 md:space-y-0 md:space-x-5">
        <div className="max-w-lg space-y-5 text-center md:text-left">
          <h2 className="text-2xl font-bold">
            Welcome to Our Hotel: Where Comfort Meets Luxury
          </h2>
          <h3 className="text-xl font-semibold">Exceptional Accommodation</h3>
          <p>
            Discover a haven of relaxation and indulgence at our hotel. Our
            well-appointed rooms and suites provide the perfect blend of comfort
            and elegance. Each room is designed with your utmost relaxation in
            mind, ensuring a peaceful night's sleep.
          </p>
          <h2 className="text-xl font-semibold">Culinary Delights</h2>
          <p>
            Savor exquisite flavors at our in-house restaurants. Our talented
            chefs craft culinary masterpieces using fresh, local ingredients.
            Whether you’re craving international cuisine, local delicacies, or a
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

        {/* Image Section */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <div className="relative w-64 sm:w-80">
            <img
              className="absolute bottom-5 left-5 border border-black h-72 brightness-50"
              src={img1}
              alt="Hotel Happenings"
            />
            <img
              className="relative border border-black h-72 transition-transform hover:scale-105 hover:brightness-100 brightness-90"
              src={img1}
              alt="Hotel Happenings"
            />
          </div>
        </div>
      </div>

      {/* Section 2: Meetings & Modern Amenities */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-evenly m-5 space-y-8 md:space-y-0 md:space-x-5">
        {/* Image Section */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <div className="relative w-64 sm:w-80">
            <img
              className="relative border border-black h-72 brightness-50"
              src={img2}
              alt="Hotel Facilities"
            />
            <img
              className="absolute top-5 left-5 border border-black h-72 transition-transform hover:scale-105 hover:brightness-100 brightness-90"
              src={img2}
              alt="Hotel Facilities"
            />
          </div>
        </div>

        <div className="max-w-lg space-y-5 text-center md:text-left">
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

      <Footer />
    </>
  );
}

export default AboutUs;
