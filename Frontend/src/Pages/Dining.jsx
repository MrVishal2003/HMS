import img from "../Images/1Dining.jpg";
import img2 from "../Images/gujarati.jpg";
import img3 from "../Images/punjabi.jpg";
import img4 from "../Images/chinese.jpg";
import img5 from "../Images/fastfood.jpg";
import img6 from "../Images/desert.jpg";
import img7 from "../Images/colddrinks.jpg";
import Footer from "../components/Footer";
import Layout1 from "../components/Layout1";
import Layout4 from "../components/Layout4";
import Navbar from "../components/Navbar";

function Dining() {
  return (
    <>
      <Navbar />
      <Layout1 name="DINING" img={img} />

      <div className="flex justify-center flex-wrap gap-5 px-4 mt-5">
        <Layout4
          name="Gujarati"
          img={img2}
          description="Gujarati food: Vegetarian, flavorful, and diverse. Signature dishes include dhokla, thepla, and undhiyu. Rich cultural heritage defines this delectable Indian cuisine."
        />
        <Layout4
          name="Punjabi"
          img={img3}
          description="Punjabi cuisine boasts rich, vibrant flavors with staples like sarson da saag and makki di roti. Known for its hearty vegetarian dishes and cultural diversity in taste."
        />
        <Layout4
          name="Chinese"
          img={img4}
          description="Chinese cuisine, a symphony of savory delights, boasts iconic dishes like Chinese Bhel, Manchurian, and aromatic noodles, creating an irresistible fusion of flavors and textures."
        />
        <Layout4
          name="Fastfood"
          img={img5}
          description="Unleash your inner foodie with tastes that elevate your dining experience. The ultimate fast-food feast! Savor cheesy pizzas, burgers, and crispy fries. A paradise for every foodie's cravings!"
        />
        <Layout4
          name="Dessert"
          img={img6}
          description="Dive into the world of delectable desserts! Satisfy your sweet tooth with heavenly treats like creamy cakes, luscious ice creams, and pastries. A delightful haven for dessert enthusiasts!"
        />
        <Layout4
          name="Cold Drinks"
          img={img7}
          description="Cold drinks and mocktails. Experience a symphony of flavors, from fruity concoctions to fizzy delights, delivering the perfect chill for any occasion. Cheers to cool, flavorful indulgence!"
        />
      </div>

      <Footer />
    </>
  );
}

export default Dining;
