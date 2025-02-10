import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { IoIosSend } from "react-icons/io";
import ShareLocationIcon from "@mui/icons-material/ShareLocation";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";

function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to send this message?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Send!",
      cancelButtonText: "Cancel",
    });

    if (!confirm.isConfirmed) return;
    setStatus("sending");

    try {
      const templateParams = {
        to_name: formData.name,
        from_name: "Vishal Hadiyal",
        message: formData.message,
        reply_to: formData.email,
      };

      await emailjs.send(
        "service_v17uy49",
        "template_4gx33uw",
        templateParams,
        "_HRDuXNZBmpowrG9Y"
      );

      setFormData({ name: "", email: "", message: "" });
      setStatus("success");
      Swal.fire("Success!", "Message sent successfully!", "success");
    } catch (error) {
      setStatus("error");
      Swal.fire("Error!", "Failed to send message. Please try again.", "error");
    } finally {
      setStatus("");
    }
  };

  return (
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
            <ShareLocationIcon /> SG Highway, Ahmedabad
          </p>
          <p className="flex items-center gap-2">
            <PhoneInTalkIcon /> +91 9725771714
          </p>
          <p className="flex items-center gap-2">
            <MarkEmailReadIcon /> urban_sanctuary@gmail.com
          </p>
        </div>

        {/* Contact Form */}
        <div className="flex flex-col justify-center w-full sm:w-auto">
          <h2 className="text-creme font-semibold text-xl sm:text-2xl text-center sm:text-left mb-2">
            Contact Us!
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              className="w-full bg-white border border-gray-500 rounded-md py-2 px-3 text-black focus:ring-2 focus:ring-white"
              type="text"
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              className="w-full bg-white border border-gray-500 rounded-md py-2 px-3 text-black focus:ring-2 focus:ring-white"
              type="email"
              placeholder="Your Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              className="w-full bg-white border border-gray-500 rounded-md py-2 px-3 text-black focus:ring-2 focus:ring-white"
              placeholder="Your Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
            ></textarea>

            <button
              className="flex items-center bg-creme hover:bg-[#F5E1A4] text-maroon font-semibold py-2 px-6 rounded-lg transition duration-300 ease-in-out border border-maroon"
              type="submit"
              disabled={status === "sending"}
            >
              {status === "sending" ? (
                "Sending..."
              ) : (
                <>
                  <IoIosSend className="h-5 w-5 mr-2" /> Send
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
