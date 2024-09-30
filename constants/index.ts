import { FaYoutube, } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";
import {
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Git",
    image: "git.png",
    width: 100,
    height: 100,
  },
] as const;

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://instagram.com",
  },
  {
    name: "Twitter",
    icon: RxTwitterLogo,
    link: "https://twitter.com",
  },
] as const;

// export const FRONTEND_SKILL = [
//   {
//     skill_name: "HTML",
//     image: "html.png",
//     width: 80,
//     height: 80,
//   },
//   {
//     skill_name: "CSS",
//     image: "css.png",
//     width: 80,
//     height: 80,
//   },
//   {
//     skill_name: "JavaScript",
//     image: "js.png",
//     width: 65,
//     height: 65,
//   },
//   {
//     skill_name: "Tailwind CSS",
//     image: "tailwind.png",
//     width: 80,
//     height: 80,
//   },
//   {
//     skill_name: "React",
//     image: "react.png",
//     width: 80,
//     height: 80,
//   },
//   {
//     skill_name: "Redux",
//     image: "redux.png",
//     width: 80,
//     height: 80,
//   },
//   {
//     skill_name: "TypeScript",
//     image: "ts.png",
//     width: 80,
//     height: 80,
//   },
//   {
//     skill_name: "Next.js 14",
//     image: "next.png",
//     width: 80,
//     height: 80,
//   },
// ] as const;

// export const BACKEND_SKILL = [
//   {
//     skill_name: "Node.js",
//     image: "node.png",
//     width: 80,
//     height: 80,
//   },
//   {
//     skill_name: "Express.js",
//     image: "express.png",
//     width: 80,
//     height: 80,
//   },
//   {
//     skill_name: "MongoDB",
//     image: "mongodb.png",
//     width: 40,
//     height: 40,
//   },
//   {
//     skill_name: "Firebase",
//     image: "firebase.png",
//     width: 55,
//     height: 55,
//   },
//   {
//     skill_name: "MySQL",
//     image: "mysql.png",
//     width: 70,
//     height: 70,
//   },
// ] as const;

export const PROJECTS = [
  {
    title: "ChatBot",
    description:
      'This chat application is a software tool that facilitates real-time communication over the internet, supporting personal, professional, and social interactions. It offers features such as text messaging, audio and video calls, and file sharing, making it versatile for various use cases.',
    image: "/projects/chatbot.jpg",
    link: "https://example.com",
  },
  {
    title: "FyreCommerce",
    description:
      'An e-commerce application integrating Razorpay for secure payments and Firebase for real-time data synchronization. It features two modes—admin and user—utilizing Firebase Authentication for secure access and Firebase Firestore for dynamic data management and synchronization.',
    image: "/projects/FyreCommerce.jpg",
    link: "https://example.com",
  }, {
    "title": "NPM TerraFlow",
    "description": "A versatile npm package designed for developers, offering streamlined functionality and enhanced features. It simplifies common tasks, promotes code reusability, and integrates seamlessly into projects, making development more efficient and enjoyable. Perfect for both beginners and experienced users.",
    "image": "/projects/npmpackage.jpg",
    "link": "https://www.npmjs.com/package/terraflow-lib"
},


] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "https://youtube.com/@ruudariyan?si=LoPqAnYrU_osgi88",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/GauriGupta21",
      },
      {
        name: "Medium",
        icon: FaMedium,
        link: "https://medium.com/@agrahariya21",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://www.instagram.com/brijika__agrahari__/",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://x.com/GauriGupta2131?t=HbHnlyYCsYdwfpT_o8YZDw&s=08 ",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/gauri-gupta-628b7a241/",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Hire Me",
        icon: null,
        link: "agrahariya21@gmail.com",
      },
      {
        name: "Learning about me",
        icon: null,
        link: "https://www.linkedin.com/in/gauri-gupta-628b7a241/",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "agrahariya21@gmail.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

// export const LINKS = {
//   sourceCode: "https://github.com/sanidhyy/space-portfolio",
// };
