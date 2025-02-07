import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from "./Pages/Home";
import Room from "./Pages/Room";
import Gallery from "./Pages/Gallery";
import AboutUs from "./Pages/AboutUs";
import Dining from "./Pages/Dining";
import Events from "./Pages/Events";
import Policy from "./Pages/Policy";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import BkRoom from "./Pages/Bk_room";
import BkEvent from "./Pages/Bk_event";
import Admin from "./Pages/Admin";
import Profile from "./Pages/Profile";
import BkOrder from "./Pages/Bk_order";
import RoomData from "./Pages/RoomData";
import UserData from "./Pages/UserData";
import EventData from "./Pages/EventData";
import OrderData from "./Pages/OrderData";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Room" element={<Room />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Dining" element={<Dining />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Policy" element={<Policy />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/BookRoom" element={<BkRoom />} />
          <Route path="/BookEvent" element={<BkEvent />} />
          <Route path="/BookOrder" element={<BkOrder />} />
          <Route path="/AdminPage" element={<Admin />} />
          <Route path="/RoomData" element={<RoomData />} />
          <Route path="/UserData" element={<UserData />} />
          <Route path="/EventData" element={<EventData />} />
          <Route path="/OrderData" element={<OrderData/>} />

          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
