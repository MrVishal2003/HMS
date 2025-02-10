import img from "../Images/Hall.jpg";
import Footer from "../components/Footer";
import Layout1 from "../components/Layout1";
import Layout3 from "../components/Layout3";
import Navbar from "../components/Navbar";

function Events() {
  return (
    <>
      <Navbar />
      
      {/* Event Header */}
      <div className="w-full">
        <Layout1 name="EVENTS" img={img} />
      </div>

      {/* Event Content */}
      <div className="container mx-auto px-4">
        <Layout3 />
      </div>

      <Footer />
    </>
  );
}

export default Events;
