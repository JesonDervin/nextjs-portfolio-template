//PLEASE FOLLOW THE FORMAT OF THIS FILE.

import {
  faGithubAlt,
  faLinkedinIn,
  faMediumM,
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
  faBehance,
} from "@fortawesome/free-brands-svg-icons";

export const userinfo = {
  logoText: "Jeson Dervin", //This text is visible on your navbar and footer like your logo.
  contact: {
    email: "jeson.dervin@gmail.com", //It is always a good idea to mention your email on your website. Good platform to communicate.
    phone: "", //Phone number is optional, if you dont want it, consider leaving it blank .
    countrycode: "+33", //It is advisable to add the country code incase you mention your contact number.
  },
  socials: [
    //For aesthetics, it is advisable for you to mention upto 4 social media links only. Fill in the links.
    //more icons are imported above, use as you like them.
    {
      type: "github",
      link: "https://github.com/JesonDervin",
      icon: faGithubAlt,
    },
    {
      type: "linkedin",
      link: "https://www.linkedin.com/in/jeson-d-ba3625110/",
      icon: faLinkedinIn,
    },
  ],
  greeting: {
    //this text goes on your landing page
    title: "Hey there, I am Jeson",
    subtitle:
      "I am passionate full stack developper. Looking forward great and challenging opportunities",
  },
  skills: [
    //this text goes on your home page in table format.
    //For aesthetics, it is advisable for you to mention upto 4 catgeories links only.
    //For aesthetics, it is advisable for you to keep similar number of skills in each category
    {
      category: "Backend", // eg.frontend, backend, devops etc
      skills: [".Net/C#", "SQL Server", "Rust"], //eg. react, html, python etc.
    },
    {
      category: "FrontEnd",
      skills: ["Vue.js", "React", "Next.js"],
    },
    {
      category: "Testing",
      skills: ["MSTest", "Jest", "Playwright"],
    },
    {
      category: "Other",
      skills: ["CI/CD", "Git", "Agile development"],
    },
  ],
  about: {
    //this text goes at the bottom of your home page.
    content:
      "I am a 6 year Full Stack Developer. I am very eager to write clean and efficient code. I have worked with scrum team with high craftmanship culture and positive values. I am autonomous so I can integrate and be efficient in new project very fast.",
    resume:
      "https://drive.google.com/file/d/1ANUZjvb0xMb18XOxUlZ63ztKJoyX9f7Y/view?usp=sharing", //link your resume here. it can be drive link or any other link
  },
  education: {
    visible: true, //set this to false if you want to omit this section
    educationList: [
      {
        time: "2012 - 2017", //timespan
        title: "Engineer", //eg. BTech in Compuster Engineering
        organization:
          "Institut supérieur de l'électronique et du numérique Toulon", //eg. VJTI, Mumbai
        description: "", //eg. secured a cgpa of 9.25 in all sems appeared in so far
      },
      {
        time: "April - Aug 2015",
        title: "Microprogram First Cycle",
        organization: "Sherbrooke University",
        description: "",
      },
    ],
  },
  experience: {
    visible: true, //set this to false if you want to omit this section
    experienceList: [
      {
        company: "Olea Medical", //company name eg.Microsoft
        companylogo:
          "https://www.olea-medical.com/wp-content/themes/olea/assets/img/logo.png", //companylogo
        position: "Ingénieur conception/développement logiciel", //post you held eg.Senior SDE
        time: "November 2019 - November 2022", //timespan
        description:
          "Conception and developpement with.Net Core and Vue.js. Unit test using MSTest, Jest and Cucumber (Playwright). Establish Continuous integration with gitlab CI.", //eg. spearheaded the graphics team in designing SASS product UIs
      },
      {
        company: "Oplead",
        companylogo: "https://www.oplead.com/Content/img/Logo-Oplead.png",
        position: "FullStack Engineer",
        time: "June 2016 - October 2019",
        description:
          "Design and development of lead's managment platform Oplead. Also Data Protection Officer : GDPR compliance",
      },
    ],
  },
  blogs: {
    //set this to false if you want to omit this section
    visible: false,
  },
};

export const headings = {
  //you can customise all the headings here.
  workHomePage: "Work",
  workMainPage: "Side Projects",
  skills: "Technical Skills",
  about: "About Me",
  education: "Education",
  experience: "Professional Experiences",
  blogs: "I write!",
  contact: "Contact Me",
};

export const ctaTexts = {
  //you can customise all the cta texts here.
  landingCTA: "My work",
  workCTA: "View All",
  capabCTA: "Get in Touch",
  educationCTA: "About Me",
  resumeCTA: "Resume",
  submitBTN: "Submit",
};
