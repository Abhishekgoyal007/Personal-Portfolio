import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/FrameWorks";
import ImageCarousel from "../components/ImageCarousel";

const About = () => {
  const grid2Container = useRef();
  
  // Add your gallery images here
  const galleryImages = [
    "assets/gallery/image1.jpg",
    "assets/gallery/image2.jpg",
    "assets/gallery/image3.jpg",
    "assets/gallery/image4.jpg",
    "assets/gallery/image5.jpg",
    "assets/gallery/image6.jpg",
  ];
  
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      
      {/* Image Gallery - Full Width at Top */}
      <div className="grid-default-color rounded-2xl mt-8 mb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full p-6 md:p-8">
          {/* Left side - Text content */}
          <div className="flex flex-col justify-center z-10">
            <p className="headtext">My Journey</p>
            <p className="subtext mb-4">
              From winning international Web3 hackathons to leading 300+ students as IETE Chairperson, 
              my journey has been driven by a passion for innovation and community impact.
            </p>
            <p className="subtext mb-4">
              I've built real-time multiplayer blockchain games, optimized ERP systems reducing bugs by 30%, 
              and created full-stack applications that solve real-world problems.
            </p>
            <p className="subtext">
              When I'm not coding, you'll find me organizing tech workshops, contributing to open-source, 
              or exploring the latest in Web3 and cloud technologies.
            </p>
          </div>
          {/* Right side - Image carousel */}
          <div className="relative overflow-hidden rounded-xl h-full min-h-[250px]">
            <ImageCarousel images={galleryImages} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem]">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            alt="Coding perspective"
            className="absolute scale-[1.75] -right-20 -top-4 md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Abhishek Goyal</p>
            <p className="subtext">
              Full-stack developer with 2+ years of experience building scalable web applications 
              and real-time multiplayer systems. Passionate about MERN stack, Web3 technologies, AI integration
              and creating solutions that make a real impact.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-linear-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-4xl md:text-5xl text-gray-500 font-bold">
              CODE IS CRAFT
            </p>
            <Card
              style={{ rotate: "15deg", top: "15%", left: "10%" }}
              image="assets/logos/react.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-25deg", top: "60%", left: "8%" }}
              image="assets/logos/nodejs.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "40%" }}
              image="assets/logos/mongodb.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-20deg", top: "25%", left: "45%" }}
              image="assets/logos/express.svg"
              className='brightness-0 invert'
              containerRef={grid2Container}
            />
            
            {/* Differentiators - What makes you stand out */}
            <Card
              style={{ rotate: "45deg", top: "10%", left: "75%" }}
              text="Socket.io"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-35deg", top: "55%", left: "70%" }}
              text="Web3"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "25deg", bottom: "15%", left: "65%" }}
              image="assets/logos/mysql.jpeg"
              containerRef={grid2Container}
            />
            
            {/* Additional valuable skills */}
            <Card
              style={{ rotate: "-15deg", top: "40%", left: "35%" }}
              text="REST APIs"
              containerRef={grid2Container}
            />
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Location & Availability</p>
            <p className="subtext">
              Based in Mumbai, India (IST • GMT+5:30)
            </p>
            <p className="subtext mt-2">
              Open to remote opportunities worldwide
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headText mt-15">Tech Stack</p>
            <p className="subtext mt-4">
              Specializing in MERN stack, Web3 technologies, and modern tools 
              to build scalable, production-ready applications
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;