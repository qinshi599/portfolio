import { assets, infoList, toolsData } from "@/assets/assets";
import React from "react";
import Image from "next/image";
import thailwind from "tailwindcss";

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-Ovo">About me</h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full rounded-3xl"
          />
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-Ovo">
          I am a software engineer and web developer based in New Zealand, with
          a passion for creating innovative solutions and delivering exceptional
          user experiences. With a strong foundation in computer science and
          extensive experience in web development, I have honed my skills in
          building scalable and efficient applications.
          </p>

        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
          {infoList.map(({ icon, iconDark, title, description }, index) => (
            <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 shadow-black"  
            key={index}>
              <Image src={icon} alt={title} className="w-7 mt-3"/>
              <h3 className="my-4 font-semibold text-gray-700 ">{title}</h3>
              <p className="text-gray-600 text-sm">{description}</p>
            </li>
          ))}
        </ul>

        <h4 className="my-6 text-gray-700 font-Ovo">Tools I use</h4>
        <ul className="flex items-center gap-3 sm:gap-5">
          {toolsData.map((tool, index) => (
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500" 
            key={index}>
              <Image src={tool} alt="Tool" className="w-5 sm:w-7"/>

            </li>
          ))}
        </ul>
      </div>
      </div>
     
    </div>
  );
};

export default About;
