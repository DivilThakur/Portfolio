import React from "react";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoGithub,
} from "react-icons/bi";

const socials = [
  {
    icon: <BiLogoFacebook />,
    path: "https://www.instagram.com/divil_thakur_07/",
  },
  {
    icon: <BiLogoInstagram />,
    path: "https://www.instagram.com/divil_thakur_07/",
  },
  {
    icon: <BiLogoGithub />,
    path: "https://github.com/DivilThakur",
  },
  {
    icon: <BiLogoLinkedin />,
    path: "https://www.linkedin.com/in/divil-thakur-98627a265/",
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, idx) => {
        return (
          <a
            key={idx}
            target="_blank"
            href={item.path}
            rel="noopener noreferrer"
            className={`${iconStyles} flex items-center justify-center`}
          >
            {item.icon}
          </a>
        );
      })}
    </div>
  );
};

export default Socials;
