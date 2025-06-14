"use client";

import React from "react";
import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    category: "Frontend",
    title: "Microsoft Landing Page",
    description: "",
    image: "/assets/work/MicrosoftClone.png",
    link: "https://divilthakur.github.io/Microsoft_Clone/",
    github: "https://github.com/DivilThakur/Microsoft_Clone",
    tech: ["HTML", "Tailwind CSS"],
  },
  {
    id: 2,
    category: "Fullstack",
    title: "Food Delivery Website",
    description: "",
    image: "/assets/work/foodDel.png",
    link: "https://food-delivery-client-chi.vercel.app/",
    github: "https://github.com/DivilThakur/Food-Delivery",
    tech: ["React.js", "Node.js", "Docker", "Redis", "Cloudinary"],
  },
  {
    id: 3,
    category: "UI/UX",
    title: "Zentry Landing Page",
    description: "",
    image: "/assets/work/ZentryClone.png",
    link: "https://zentry-clone-chi.vercel.app",
    github: "https://github.com/DivilThakur/Zentry_Clone",
    tech: ["React", "GSAP", "Tailwind CSS"],
  },
  {
    id: 4,
    category: "Backend",
    title: "Discord Bot",
    description: "",
    image: "/assets/work/DiscordBot.png",
    link: "https://github.com/DivilThakur/DiscordBot",
    github: "https://github.com/DivilThakur/DiscordBot",
    tech: ["HTML", "CSS ", "JavaScript"],
  },
  {
    id: 5,
    category: "Fullstack",
    title: "Text To Image SAAS",
    description: "",
    image: "/assets/work/TextToImg.png",
    link: "https://ai-project-blue.vercel.app/",
    github: "https://github.com/DivilThakur/TextToImage",
    tech: ["React", "Node ", "MongoDB", "Clipdrop API"],
  },
  {
    id: 6,
    category: "Fullstack",
    title: "E-Learnign Platform",
    description: "",
    image: "/assets/work/Examify.png",
    link: "https://examify-eta.vercel.app",
    github: "https://github.com/DivilThakur/Examify",
    tech: ["React", "Node ", "MongoDB"],
  },
  {
    id: 7,
    category: "Fullstack",
    title: "Realtime Chat-App",
    description: "",
    image: "/assets/work/VibeOn.png",
    link: "https://fullstack-chat-app-1-ged8.onrender.com/",
    github: "https://github.com/DivilThakur/Fullstack-Chat-App",
    tech: ["Node", "Socket.IO ", "React"],
  },

  {
    id: 8,
    category: "Frontend",
    title: "Quiz App",
    description: "",
    image: "/assets/work/QuizMania.png",
    link: "https://divilthakur.github.io/Quiz_Game/",
    github: "https://github.com/DivilThakur/Quiz_Game",
    tech: ["HTML", "CSS ", "JavaScript"],
  },
  {
    id: 9,
    category: "Backend",
    title: "Ingestion Api",
    description: "",
    image: "/assets/work/backend.png",
    link: "https://data-ingestion-api-production-da2f.up.railway.app",
    github: "https://github.com/DivilThakur/data-ingestion-api",
    tech: ["Node.js", "Express.js", "UUID", "JEST"],
  },
];

const categories = ["UI/UX", "Fullstack", "Frontend", "Backend"];

const Work = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.2, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-screen flex items-center py-24 xl:py-0"
    >
      <div className="container mx-auto w-full h-full flex flex-col justify-center">
        <h2 className="h2 mb-6 xl:mb-12 max-w-[600px]">
          Featured <span className="text-accent">Projects</span>{" "}
        </h2>

        <Tabs
          defaultValue="UI/UX"
          className={"w-full flex flex-col gap-6 xl:gap-12"}
        >
          <TabsList className="flex flex-wrap justify-center items-center gap-4 h-full mb-4 xl:mb-0">
            {categories.map((category) => {
              return (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="capitalize border border-white/10 data-[state=active]:bg-accent data-[state=active]:border-accent h-[48px] px-6 rounded-full"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>

          <div className="h-[400px] scrollbar scrollbar-thumb-accent scrollbar-track-accent/5 overflow-y-scroll xl:overflow-y-visible">
            {categories.map((category) => {
              return (
                <TabsContent key={category} value={category}>
                  <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    className="h-max xl:h-[460px]"
                  >
                    {projects
                      .filter((project) => project.category === category)
                      .map((project) => {
                        return (
                          <SwiperSlide key={project.id}>
                            <div className=" p-2 flex flex-col xl:flex-row gap-8 xl:gap-12">
                              {/* project info */}
                              <div className="w-full max-w-[380px] flex flex-col gap-6 xl:gap-8 xl:pt-6 order-2 xl:order-none ">
                                <h3 className="h3 ">{project.title}</h3>
                                <div className="xl:mb-4 max-w-[300px] min-h-[130px]">
                                  <p className="mb-4">Technologies Used</p>
                                  <ul className="flex flex-wrap gap-4">
                                    {project.tech.map((item, index) => {
                                      return (
                                        <li
                                          key={index}
                                          className="flex items-center gap-4 bg-[#a883ff]/13 h-[28px] px-[14px] rounded-full "
                                        >
                                          {item}
                                        </li>
                                      );
                                    })}
                                  </ul>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 items-start">
                                  <Link href={project.link}>
                                    <button className="btn btn-sm btn-accent flex gap-2">
                                      <MdArrowOutward className="text-xl" />
                                      <span>Live Project</span>
                                    </button>
                                  </Link>
                                  <Link href={project.github}>
                                    <button className="btn btn-sm btn-white flex gap-2">
                                      <FaGithub className="text-xl" />
                                      <span>Github Repo</span>
                                    </button>
                                  </Link>
                                </div>
                              </div>

                              {/* project img  */}
                              <div className="w-full h-[200px] md:h-[300px] xl:h-[400px] relative bg-pink-50/10 order-1 xl:order-none rounded-lg overflow-hidden ">
                                <Image
                                  src={project.image}
                                  alt=""
                                  fill
                                  className="object-cover"
                                />
                              </div>
                            </div>
                          </SwiperSlide>
                        );
                      })}
                  </Swiper>
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </motion.section>
  );
};

export default Work;
