import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

const Home = () => {
  const [typingStatus, setTypingStatus] = useState("human1");

  return (
    <div className="relative flex items-center gap-[100px] h-screen flex-col lg:flex-row">
      <img
        src="/orbital.png"
        alt=""
        className="orbital absolute bottom-0 left-0 opacity-5 animate-rotateOrbital -z-10"
      />

      {/* Left Section */}
      <div className="flex-1 flex flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-[128px] bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent lg:text-[64px]">
          Chat GPT
        </h1>
        <h2 className="text-2xl font-semibold">
          Supercharge your creativity and productivity
        </h2>
        <h3 className="font-light max-w-[70%] lg:max-w-full">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat sint
          dolorem doloribus, architecto dolor.
        </h3>
        <Link
          to="/dashboard"
          className="px-6 py-3 bg-blue-500 text-white rounded-2xl mt-5 hover:bg-purple-500 hover:text-white"
        >
          Get Started
        </Link>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex items-center justify-center h-full">
        <div className="relative w-[80%] h-[50%] bg-[#140e2d] flex items-center justify-center rounded-[50px]">
          <div className="absolute inset-0 overflow-hidden rounded-[50px]">
            <div className="w-[200%] h-full bg-[url('/bg.png')] opacity-20 bg-contain animate-slideBg"></div>
          </div>
          <img
            src="/bot.png"
            alt="bot"
            className="w-full h-full object-contain animate-botAnimate"
          />
          <div className="absolute bottom-[-30px] right-[-50px] flex items-center gap-2 p-5 bg-[#2c2937] rounded-lg lg:flex">
            <img
              src={
                typingStatus === "human1"
                  ? "/human1.jpeg"
                  : typingStatus === "human2"
                  ? "/human2.jpeg"
                  : "bot.png"
              }
              alt=""
              className="w-8 h-8 rounded-full object-cover"
            />
            <TypeAnimation
              sequence={[
                "Human:We produce food for Mice",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "Bot:We produce food for Hamsters",
                2000,
                () => {
                  setTypingStatus("human2");
                },
                "Human2:We produce food for Guinea Pigs",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "Bot:We produce food for Chinchillas",
                2000,
                () => {
                  setTypingStatus("human1");
                },
              ]}
              wrapper="span"
              repeat={Infinity}
              cursor={true}
              omitDeletionAnimation={true}
            />
          </div>
        </div>
      </div>

      {/* Terms Section */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-5">
        <img src="/logo.png" alt="logo" className="w-4 h-4" />
        <div className="flex gap-2 text-xs text-gray-500">
          <Link to="/">Terms of Service</Link>
          <span>|</span>
          <Link to="/">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
