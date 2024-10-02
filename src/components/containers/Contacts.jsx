import React, { useState } from "react";
import { FaEnvelope, FaHome, FaPhone } from "react-icons/fa";
import emailjs from "emailjs-com";

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_USER_ID")
      .then((result) => {
        console.log("Email successfully sent:", result.text);
      })
      .catch((error) => {
        console.log("Error sending email:", error.text);
      });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="bg-slate-800 textmdl py-8 px-4" id="contact">
      <p className="text-2xl font-bold text-center mb-8">Contact Us</p>
      <div className="flex flex-col lg:flex-row lg:space-x-8 items-center justify-center w-full max-w-6xl mx-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-900 text-white p-8 rounded-lg shadow-lg w-full lg:w-2/3"
        >
          <p className="text-center mb-4">
            You can contact us through the following form:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full bg-transparent border border-slate-800 rounded-lg outline-none px-4 py-2"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full bg-transparent border border-slate-800 rounded-lg outline-none px-4 py-2"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleInputChange}
              className="w-full bg-transparent border border-slate-800 rounded-lg outline-none px-4 py-2"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full bg-transparent border border-slate-800 rounded-lg outline-none px-4 py-2 h-32"
              rows="6"
              required
            />
          </div>
          <button
            type="submit"
            className="mt-4 bg-slate-800 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded-lg w-full"
          >
            Submit
          </button>
        </form>
        <div className="bg-gray-800 text-slate-800 p-8 rounded-lg shadow-lg mt-8 lg:mt-0 w-full lg:w-1/3">
          <p className="text-2xl font-semibold mb-4 text-center">
            Contact Details
          </p>
          <div className="space-y-4 text-sm">
            <div className="flex items-center space-x-2">
              <FaHome />
              <p>
                <b>Address</b>: PMB 249, Post Office Building, Dunkwa, Ghana
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope />
              <p>
                <b>Email</b>: easinglife95@gmail.com
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <FaPhone />
              <p>
                <b>Phone</b>: +233240095360, +233508842204
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
