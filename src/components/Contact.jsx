import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "a58d29d8-823b-4236-b34d-e319838398dd");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="w-full px-4 mt-10 justify-center" id="contact">
      <h1 className="pb-6 text-4xl font-semibold text-gray-800 ml-4">
        ✉ Contact Me
      </h1>
      <div className="flex flex-col md:flex-row gap-8">
        <form
          className="bg-white shadow-lg rounded-lg p-8 md:p-10 w-full md:w-2/3"
          onSubmit={onSubmit}
        >
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <label className="block text-gray-700 text-lg font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="shadow-md border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </motion.div>

          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <label className="block text-gray-700 text-lg font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="shadow-md border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </motion.div>

          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0 }}
          >
            <label className="block text-gray-700 text-lg font-medium mb-2">
              Message
            </label>
            <textarea
              name="message"
              className="shadow-md border border-gray-300 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-yellow-500 h-32 resize-none"
              required
            ></textarea>
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <button
              type="submit"
              className="bg-[#ffdf00] hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300"
            >
              Submit
            </button>
          </motion.div>

          {result && (
            <motion.p
              className={`mt-4 text-center text-lg ${
                result.includes("Success") ? "text-green-600" : "text-red-600"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {result}
            </motion.p>
          )}
        </form>

        
      </div>
    </div>
  );
};

export default Contact;
