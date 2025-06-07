import React from "react";

const journey = [
  {
    years: "2025 - Present",
    role: "Full Stack Developer & Designer",
    project: "Food Delivery Website, Chat App",
  },
  {
    years: "2024 - 2025",
    role: "Backend Developer",
    project: "Blogging Website (REST APIs)",
  },
  {
    years: "2023 - 2024",
    role: "Frontend Developer",
    project: "Microsoft Clone , Zentry clone",
  },
];

const Journey = () => {
  return (
    <div className="flex flex-col">
      <h2 className="h-2 mb-8 ">
        Developer <span className="text-accent font-semibold"> Journey</span>
      </h2>
      {journey.map((item, index) => {
        const { project, role, years } = item;
        return (
          <div key={index} className="flex items-center gap-12 w-full">
            <div className="flex flex-col w-max justify-center items-center">
              <div className="w-3 h-3 bg-accent rounded-full"></div>
              <div className="w-[1px] h-[180px] bg-white/10"></div>
            </div>
            <div className="max-w-[500px]">
              <p className="mb-6 text-lg text-white/50">{years}</p>
              <h4 className="h4 mb-2">{role}</h4>
              <p className="text-lg text-white/50">{project}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Journey;
