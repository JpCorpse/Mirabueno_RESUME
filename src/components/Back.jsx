/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import Logo from "../assets/patrick.jpg";
import { TypeAnimation } from "react-type-animation";
import { FaTiktok, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Back = () => {
  return (
    <div id="main">
      <img className="w-full h-screen object-cover " src={Logo} alt="/" />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/30">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center">
          <h1 className="sm:text-4xl text-3xl font-bold text-gray-800 text-center">
            I'm John Patrick V. Mirabueno
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I'm a
            <TypeAnimation
              sequence={[
                "Developer",
                2000,
                "Coder",
                2000,
                "Hardworking",
                2000,
                "Happy Person",
                2000,
              ]}
              wrapper="div"
              speed={50}
              style={{
                fontSize: "1em",
                paddingLeft: "5px",
                display: "inline-block",
              }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <FaTiktok className="cursor-pointer" size={20} />
            <FaFacebook className="cursor-pointer" size={20} />
            <FaInstagram className="cursor-pointer" size={20} />
            <FaTwitter className="cursor-pointer" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Back;
