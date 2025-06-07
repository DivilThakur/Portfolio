"use client";

import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Blob from "@/components/Blob";
import Image from "next/image";
import avatarImg from "@/public/assets/avatar.png";
import { MdArrowOutward } from "react-icons/md";
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import Socials from "@/components/Socials";
import Pattern from "@/components/Pattern";

const home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.2, duration: 0.4, ease: "easeIn" },
      }}
      className="h-screen flex items-center"
    >
      {/* pattern  */}
      <Pattern />
      <div className="flex flex-col xl:flex-row items-center justify-between w-full">
        <div className="w-full xl:w-[550px] flex flex-col items-center xl:items-start text-center 2xl:text-left">
          <h1 className="h1 flex-1 mb-[28px]">
            Hi! I'm Divil, <br />
            <TypeAnimation
              sequence={[
                "Web Developer",
                2000,
                "Backend Engineer",
                2000,
                "Software Engineer",
                2000,
              ]}
              wrapper="span"
              speed={40}
              className="text-accent "
              repeat={Infinity}
              cursor={false}
            />
          </h1>
          <p className="max-w-[400px] mb-[44px]">
            I Build visually captivating, user-friemdly websites and web pages
            that transform your ideas into seamless, engaging digital
            experiences.
          </p>
          <button className="btn btn-lg btn-accent mb-16">
            <div className="flex items-center gap-3">
              <span>Let's talk.</span>
              <MdArrowOutward className="text-xl" />
            </div>
          </button>

          {/* contacts  */}
          <div className="flex flex-col xl:flex-row xl:items-center gap-4 xl:gap-8 mb-12 xl:mb-0">
            {/* phone  */}
            <div className="flex items-center gap-4 text-lg">
              <span className="text-accent">
                <HiOutlinePhone className="text-xl" />
              </span>
              <span>+40 22 33 44 55</span>
            </div>

            <div className="flex items-center gap-4 text-lg">
              <span className="text-accent">
                <HiOutlineMail className="text-xl" />
              </span>
              <span>divilthkr3@gmail.com</span>
            </div>
          </div>
          {/* socials */}
          <Socials
            containerStyles=" flex 2xl:flex-col gap-6 xl:hidden 2xl:flex 2xl:absolute 2xl:top-1/2 2xl:right-2 2xl:transform 2xl:-translate-x-1/2 2xl:-translate-y-1/2"
            iconStyles="bg-accent text-white hover:bg-accent-hover transition w-[48px] h-[48px] text-[25px] flex item-center justify-center rounded-full cursor-pointer "
          />
        </div>

        <div className="hidden xl:block flex-1 relative z-20">
          <Blob containerStyles="w-[500px] h-[560px]" />
          <Image
            src={avatarImg}
            alt=""
            width={400}
            height={450}
            quality={100}
            className="absolute -top-16 left-[80px]"
          />
          {/* {overlay gradient} */}
          <div className="w-full h-[164px] absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary via-primary/90 to-primary/55"></div>
        </div>
      </div>
    </motion.section>
  );
};

export default home;
