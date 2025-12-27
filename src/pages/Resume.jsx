import React from "react";
import "../pages/css/Resume.css";
import diplomaThumbnail from "../assets/diploma-thumbnail.png"; 
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaFileDownload } from "react-icons/fa";

const ResumePage = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-20 px-5">
<section className="p-6 sm:p-10 rounded-2xl shadow-lg max-w-4xl mx-auto mt-6 sm:mt-10 bg-white text-black">
  {/* About Me */}
  <h2 className="text-2xl sm:text-3xl font-bold mb-4 border-b-2 border-black inline-block pb-1 font-montserrat">
    about.
  </h2>
  <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-8 font-poppins">
    I am <span className="font-semibold">Saud</span>, a passionate{" "}
    <span className="font-semibold">Full Stack Developer</span> currently
    enhancing my skills in{" "}
    <span className="font-semibold">Flutter mobile application development</span>. 
    I have completed my{" "}
    <span className="font-semibold">Intermediate in Pre-Engineering</span> 
    and a{" "}
    <span className="font-semibold">
      2-year Higher Diploma in Software Engineering (PRO)
    </span>{" "}
    from <span className="font-semibold">Aptech Garden Karachi</span>.
  </p>

  {/* Education */}
  <h2 className="text-2xl sm:text-3xl font-bold mb-4 border-b-2 border-black inline-block pb-1 font-montserrat">
    education.
  </h2>
  <ul className="list-disc list-inside text-sm sm:text-base md:text-lg text-gray-800 mb-10 space-y-2 font-poppins">
    <li>
      <strong>2021 – 2023:</strong> Higher Diploma in Software Engineering
      (Aptech Garden Karachi)
    </li>
    <li>
      <strong>2019 – 2021:</strong> Intermediate (Pre-Engineering)
    </li>
  </ul>

  {/* Diploma */}
  <h2 className="text-2xl sm:text-3xl font-bold mb-4 border-b-2 border-black inline-block pb-1 font-montserrat">
    diploma.
  </h2>
  <div className="flex flex-col items-center font-poppins">
    <img
      src={diplomaThumbnail}
      alt="Diploma Preview"
      className="w-56 sm:w-72 rounded-md shadow-md border border-black"
    />
    <a
      href="/Saud-Diploma.pdf"
      download
      className="mt-5 inline-block px-5 py-2 text-sm sm:px-8 sm:py-3 sm:text-base 
                 bg-black text-white font-semibold rounded-md 
                 hover:bg-white hover:text-black border border-black 
                 transition-all duration-300 font-montserrat"
    >
      <FaFileDownload className="inline-block mr-2" /> Download Diploma
    </a>
  </div>
</section>
{/* Contact Section */}
<section className="p-6 sm:p-10 rounded-2xl shadow-lg max-w-4xl mx-auto mt-6 sm:mt-10 bg-white text-black">
  <h2 className="text-2xl sm:text-3xl font-bold mb-6 border-b-2 border-black inline-block pb-1 font-montserrat">
    contact.
  </h2>
  <div className="space-y-4 text-sm sm:text-base md:text-lg text-gray-700 font-poppins">
    <p className="flex flex-wrap items-center gap-3">
      <FiPhone className="text-xl text-black shrink-0" />
      <span className="font-semibold">Phone:</span> 0307-2264628
    </p>
    <p className="flex flex-wrap items-center gap-3">
      <FiMail className="text-xl text-black shrink-0" />
      <span className="font-semibold">Email:</span>
      <a
        href="mailto:balochsaood88@gmail.com"
        className="text-black hover:underline break-words"
      >
        balochsaood88@gmail.com
      </a>
    </p>
    <p className="flex flex-wrap items-center gap-3">
      <FiMapPin className="text-xl text-black shrink-0" />
      <span className="font-semibold">Address:</span>
      <span className="break-words">
        Bihar Colony, Alfalah Road, Street No. 11, Lyari, Karachi
      </span>
    </p>
  </div>
</section>
    </div>
  );
};

export default ResumePage;
