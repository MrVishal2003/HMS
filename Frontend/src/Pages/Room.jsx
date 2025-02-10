import img from "../Images/1Room.jpg";
import img2 from "../Images/single.jpg";
import img3 from "../Images/twin.jpg";
import img4 from "../Images/double.jpg";
import img5 from "../Images/delux.jpg";
import img6 from "../Images/Villa.jpg";
import Footer from "../components/Footer";
import Layout1 from "../components/Layout1";
import Layout2 from "../components/Layout2";
import Navbar from "../components/Navbar";

function Room() {
  return (
    <>
      <Navbar />

      <Layout1 name="ROOMS AND RATE" img={img} />

      {/* Room Layouts */}
      <div className="flex flex-wrap justify-center gap-6 p-4">
        <Layout2
          img={img2}
          name="Single Bed"
          list1="1 Bathroom"
          list2="1 Bed"
          list3="1 Person"
          price="25,000.00"
        />
        <Layout2
          img={img3}
          name="Twin Room"
          list1="1 Bathroom"
          list2="2 Beds"
          list3="2 Person"
          price="38,000.00"
        />
        <Layout2
          img={img4}
          name="Double Bed"
          list1="1 Bathroom"
          list2="2 Beds"
          list3="2 Person"
          price="50,000.00"
        />
        <Layout2
          img={img5}
          name="Deluxe Room"
          list1="1 Bathroom"
          list2="2 Beds"
          list3="2 Person"
          price="80,000.00"
        />
        <Layout2
          img={img6}
          name="Villa"
          list1="2 Bathrooms"
          list2="1 Hall"
          list3="4 Beds"
          price="100,000.00"
        />
      </div>

      <Footer />
    </>
  );
}

export default Room;
