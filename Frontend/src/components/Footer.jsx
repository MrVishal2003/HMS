import Button from "./Button";
import ShareLocationIcon from "@mui/icons-material/ShareLocation";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";

function Footer() {
  return (
    <>
      <footer className="z-2">
        <hr className="border-l" />
        <div className="m-[40px]">
          <div className="flex justify-center m-[20px]">
            <h3 className="text-xl font-semibold ">We also offer:</h3>
          </div>
          <div className="flex justify-evenly flex-wrap">
            <div className="w-full sm:w-[45%] md:w-[30%] lg:w-[15%]">
              <ul className="list-disc">
                <li>Parking</li>
                <li>Free Wi-fi</li>
                <li>Adequate safety/ security</li>
                <li>Laundry services</li>
              </ul>
            </div>
            <div className="w-full sm:w-[45%] md:w-[30%] lg:w-[15%]">
              <ul className="list-disc">
                <li>Delicious meals</li>
                <li>Air cooling in all rooms</li>
                <li>Room services</li>
                <li>Ticket books</li>
              </ul>
            </div>
            <div className="w-full sm:w-[45%%] md:w-[30%] lg:w-[15%]">
              <ul className="list-disc">
                <li>
                  Shuffle/ Private transfers Neccessities for babies and
                  children
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-evenly bg-maroon text-white p-8">
          <div className="grid mb-4 sm:mb-0">
            <h2 className="text-2xl font-semibold text-creme">
              Urban Sanctuary
            </h2>
            <p>
              <ShareLocationIcon />
              Address: SG Highway, Ahmedabad
            </p>
            <p>
              <PhoneInTalkIcon />
              Phone number: +919725771714
            </p>
            <p>
              <MarkEmailReadIcon />
              Email: urban_sanctuary@gmail.com
            </p>
          </div>

          <div className="border-l border-white hidden sm:block"></div>

          <div className="flex flex-col justify-center">
            <div className="text-creme font-semibold text-2xl m-2">
              <h2>Contact Us!</h2>
            </div>
            <br />
            <form className="text-black">
              <div className="grid">
                <div className="flex flex-col sm:flex-row w-full">
                  <input
                    name="F Name"
                    placeholder="First Name"
                    className="m-2 p-2 h-[30px] rounded-sm"
                  />
                  <input
                    name="L Name"
                    placeholder="Last Name"
                    className="m-2 p-2 h-[30px] rounded-sm"
                  />
                </div>

                <input
                  placeholder="Email"
                  className="w-[96%] h-[30px] m-2 p-2 rounded-sm"
                />
                <input
                  placeholder="Message"
                  className="w-[96%] h-[30px] m-2 p-2 rounded-sm"
                />
                <Button name="Register" />
              </div>
            </form>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
