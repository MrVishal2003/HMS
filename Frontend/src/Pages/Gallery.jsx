import img from "../Images/1Gallery.jpg";
import Footer from "../components/Footer";
import Layout1 from "../components/Layout1";
import Layout5 from "../components/Layout5";
import pic from "../Images/Hall.jpg";
import pic1 from "../Images/Hall2.jpg";
import pic2 from "../Images/gal1.jpg";
import pic3 from "../Images/gal2.jpg";
import pic4 from "../Images/gal3.jpg";
import pic5 from "../Images/room.jpg";
import pic6 from "../Images/gal4.jpg";
import pic7 from "../Images/gal5.jpg";
import pic8 from "../Images/gal6.jpg";
import pic9 from "../Images/gal7.jpg";
import pic10 from "../Images/gal8.jpg";
import pic11 from "../Images/gal9.jpg";
import Navbar from "../components/Navbar";

function Gallery() {
  return (
    <>
      <Navbar />
      <Layout1 name="GALLERY" img={img} />
      
      <div className="flex justify-center px-4 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl">
          <Layout5 img={pic} />
          <Layout5 img={pic1} />
          <Layout5 img={pic2} />
          <Layout5 img={pic3} />
          <Layout5 img={pic4} />
          <Layout5 img={pic5} />
          <Layout5 img={pic6} />
          <Layout5 img={pic7} />
          <Layout5 img={pic8} />
          <Layout5 img={pic9} />
          <Layout5 img={pic10} />
          <Layout5 img={pic11} />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Gallery;
