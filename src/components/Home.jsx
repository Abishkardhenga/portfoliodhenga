import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import aabiskar from "../assets/aabiskar.jpg";
import resumePDF from "../assets/resume.pdf";

const Home = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "AbhiskarCv.pdf";
    link.click();
  };

  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 home"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="small-screen hidden">
          <img
            src={aabiskar}
            alt="profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Web Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I am Abishkar dhenga . I have 1 years of experience building
            websites and desgining software. I love to work on web application
            using technologies like React , ExpressJS, Nodejs and Mongodb. I
            mainly focus on developing and designing products for the web, from
            simple landing pages to full-fledged web apps.
          </p>

          <div className="portfolio-btn">
            <button
              onClick={() => {
                handleDownload();
              }}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Resume{" "}
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>
        <div className="big-screen border border-blue-600   bg-red-300 w-[550px] rounded-bl-[50%] rounded-br-[50%] h-[350px] relative overflow-hidden">
          <img
            src={aabiskar}
            alt="profile"
            className="w-full h-full object-cover rounded-bl-[50%] rounded-br-[50%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
