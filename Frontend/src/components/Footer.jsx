import Button from "./Button";
import ShareLocationIcon from "@mui/icons-material/ShareLocation";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";

function Footer() {
  return (
    <>
      <footer className="z-2">
        <hr className="border-gray-300" />
        <div className="m-4 sm:m-10">
          <div className="flex justify-center m-4 sm:m-6">
            <h3 className="text-lg sm:text-xl font-semibold text-center">
              We also offer:
            </h3>
          </div>

          <div className="flex flex-wrap justify-center sm:justify-evenly gap-4">
            <div className="w-full sm:w-[45%] md:w-[30%] lg:w-[20%]">
              <ul className="list-disc pl-4">
                <li>Parking</li>
                <li>Free Wi-Fi</li>
                <li>Adequate safety/security</li>
                <li>Laundry services</li>
              </ul>
            </div>
            <div className="w-full sm:w-[45%] md:w-[30%] lg:w-[20%]">
              <ul className="list-disc pl-4">
                <li>Delicious meals</li>
                <li>Air cooling in all rooms</li>
                <li>Room services</li>
                <li>Ticket booking</li>
              </ul>
            </div>
            <div className="w-full sm:w-[45%] md:w-[30%] lg:w-[20%]">
              <ul className="list-disc pl-4">
                <li>Shuttle/Private transfers</li>
                <li>Necessities for babies and children</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col sm:flex-row justify-evenly bg-maroon text-white p-4 sm:p-8">
          {/* Left Section - Contact Details */}
          <div className="grid gap-2 text-center sm:text-left mb-6 sm:mb-0">
            <h2 className="text-xl sm:text-2xl font-semibold text-creme">
              Urban Sanctuary
            </h2>
            <p className="flex items-center gap-2">
              <ShareLocationIcon />
              SG Highway, Ahmedabad
            </p>
            <p className="flex items-center gap-2">
              <PhoneInTalkIcon />
              +91 9725771714
            </p>
            <p className="flex items-center gap-2">
              <MarkEmailReadIcon />
              urban_sanctuary@gmail.com
            </p>
          </div>

          {/* Divider for larger screens */}
          <div className="hidden sm:block border-l border-white"></div>

          {/* Right Section - Contact Form */}
          <div className="flex flex-col justify-center w-full sm:w-auto">
            <h2 className="text-creme font-semibold text-xl sm:text-2xl text-center sm:text-left mb-2">
              Contact Us!
            </h2>

            <form className="text-black">
              <div className="grid gap-2">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    name="F Name"
                    placeholder="First Name"
                    className="w-full sm:w-auto m-1 p-2 h-10 rounded-md"
                  />
                  <input
                    name="L Name"
                    placeholder="Last Name"
                    className="w-full sm:w-auto m-1 p-2 h-10 rounded-md"
                  />
                </div>

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full m-1 p-2 h-10 rounded-md"
                />
                <textarea
                  placeholder="Message"
                  className="w-full m-1 p-2 h-20 rounded-md resize-none"
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
