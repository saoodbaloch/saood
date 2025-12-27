import React from "react";
import "../pages/css/About.css";
import cleanFace from "../assets/saudhalfpaint1.png"; 
import geospeak from "../assets/geospeak.png"; 
import SkillsPie from "../components/SkillsPie";
import { FaRocket, FaCode } from "react-icons/fa";


const About = () => {
  return (
    <>
      {/* About Section */}
      <section className="about-section">
        <div className="about-container">
          {/* Left Image */}
          <div className="about-img animate-left">
            <img src={cleanFace} alt="About Me" />
          </div>

          {/* Right Text */}
          <div className="about-text animate-right">
  <h2 className="font-montserrat text-black">about.</h2>
  <h3 className="font-montserrat">
    I'm a Full Stack Developer with 8 months of backend experience and 2 years of frontend experience.
  </h3>
  <p className="font-poppins text-black">
    Currently, I'm learning mobile application development with Flutter.  
    It’s been 2 months since I started, and I’m already working on my first project to build a strong foundation.  
    I’m passionate about creating clean, scalable, and professional applications.
  </p>
</div>
        </div>

        {/* Divider line */}
        <div className="section-divider"></div>
      </section>

      {/* SkillPie Section (separate block) */}
      <SkillsPie />
        {/* Python Project Section */}
      <section className="project-section">
        <div className="project-container">
          {/* Project Image */}
          <div className="project-img animate-left">
            <img src={geospeak} alt="GeoSpeak Project" />
          </div>

          {/* Project Text */}
          <div className="project-text animate-right">
            <h2 className="font-montserrat text-black">project.</h2>
            <h3 className="font-montserrat">
              GeoSpeak – My First Python Project
            </h3>
            <p className="font-poppins text-black">
              This was my very first experience with{" "}
              <span className="font-semibold">Python</span>.  
              During <span className="font-semibold">Techwiz 5</span>, our team was given a task to build a project in Python.  
              Even though I was new to Python and more comfortable with PHP Laravel,  
              we studied documentation and completed it in just 4 days.  
              It was a great learning experience with my team!
            </p>

            {/* Buttons */}
            <div className="project-buttons mb-10">
              <a
                href="https://baloushi.pythonanywhere.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-demo"
              >
                 <FaRocket className="inline-block mr-2" /> Live Demo
              </a>
              <a
                href="https://github.com/saoodbaloch/GeoSpeak.git"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-code"
              >
                 <FaCode className="inline-block mr-2" />  Source Code
              </a>
            </div>
          </div>
        </div>

        {/* Divider line */}
        <div className="section-divider"></div>
      </section>
    </>
  );
};

export default About;
