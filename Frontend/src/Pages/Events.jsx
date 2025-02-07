import img from "../Images/Hall.jpg";
import Footer from "../components/Footer";
import Layout1 from "../components/Layout1";
import Layout3 from "../components/Layout3";
import Navbar from "../components/Navbar";

function Events() {
  return (
    <>
    <Navbar />

      <Layout1 name="EVENTS" img={img} />
      <Layout3 />

      <Footer />
    </>
  );
}

export default Events;
