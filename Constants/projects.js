// import project demo images as follows.

import sportcalculator_1 from "../styles/projects/sportcalculator_meal_2.png";
import sportcalculator_2 from "../styles/projects/sportcalculator_followup_2.png";
import sportcalculator_3 from "../styles/projects/sportcalculator_scan_2.png";
import houswift_1 from "../styles/projects/houswift_1.webp";
import houswift_2 from "../styles/projects/houswift_2.webp";
import houswift_3 from "../styles/projects/houswift_3.webp";

// first 3 projects are visible on the homepage while all are visible on the work page.

export const projects = [
  //leave the githublink field blank if it is a private repo or doent exist, alerts will take care of it
  //leave the projectlink field blank if it the project has not been deployed, alerts will take care of it
  {
    name: "Sport Calculator", //project name
    description:
      "Make the most of your training by using this simple diet monitor by scanning ingredient", //project description
    githubLink: "https://github.com/JesonDervin/sportcalculator", //github repo link
    projectLink: "https://sportcalculator.vercel.app", //deployed project link
    tech: ["React", "Next.js", "Gitpod"], //techstack of the project, it is advisavble to mention only upto 3 technologies here to maintain the ui
    photo: [sportcalculator_3, sportcalculator_1, sportcalculator_2], //list of names of images from above imports.
  },
  {
    name: "Houswift",
    description:
      "Creating for Microsoft ImagineCup, HOUSWIFT is a mobile application that allows people to find a place to sleep thanks to other users who can accommodate them. With this solution, they can plan their trip or they can book it at the last minute",
    githubLink: "",
    projectLink: "https://houswift.wixsite.com/project/presentation",
    tech: ["Ionic", ".Net"],
    photo: [houswift_1, houswift_2, houswift_3],
  },
];
