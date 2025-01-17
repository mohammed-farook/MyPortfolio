import { FaPaintBrush } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { AiFillGithub, AiFillLinkedin} from "react-icons/ai";
import { FaCodeCompare } from "react-icons/fa6";
import { GiIdea } from "react-icons/gi";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import {
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  profile3,
  profile4,
  profile5,
  profile6,
  figma,
  xd,
  css,
  html,
  javascript,
  tailwind,
  bootstrap,
  react,
  java,
  postgresql,
  canva,
  illustrator,
  photoshop,
  framer,
  gsap,
  emailicon,
  messengericon,
  whatsappicon,
} from "./assets";

export const menu = [
  { name: "About" },
  { name: "Services" },
  { name: "Skill" },
  { name: "Projects" },
  { name: "Testimonial" },
  { name: "Contact" },
];

export const services = [
  {
    title: "UI/UX Design",
    icon: <FaPaintBrush />,
    description: `Crafting visually stunning and user-centric designs that ensure seamless user experiences. 
                  From wireframes to high-fidelity prototypes, I focus on creating intuitive interfaces that 
                  blend creativity and functionality, enhancing engagement and usability.`,
  },
  {
    title: "Web Development",
    icon: <FaCodeCompare />,
    color: "blueviolet",
    colorRGB: "138, 43, 226",
    description: `Building responsive, dynamic, and high-performance websites tailored to your needs. 
    Using modern technologies like React, Node.js, and more, I ensure your site is optimized 
    for speed, scalability, and accessibility, delivering a robust online presence.`,
  },
  {
    title: "Web Design",
    icon: <GiIdea />,
    color: "var(--color-success)",
    colorRGB: "var(--color-success-rgb)",
    description: ` Creative and innovative web designer specializing in user-friendly, responsive websites. 
                   Expert in crafting visually stunning designs that align with brand identity, ensuring 
                   seamless user experiences across all devices.`,
  },
];

export const projects = [
  {
    title: "Real Estate Development",
    image: project1,
    category: "Web Applications",
    description: `   A Real Estate web application streamlines property buying, selling, and renting by offering 
                     advanced search features, virtual tours, and detailed property listings. It connects buyers, 
                     sellers, and agents, enabling efficient communication and transactions. The platform may 
                     include market analytics, location insights, and user-friendly interfaces for 
                     enhanced decision-making and convenience.`,
    demoLink: "https://google.com/",
    stacks: [
      {
        name: "figma",
        logo: figma,
      },
      {
        name: "HTML",
        logo: html,
      },
      {
        name: "CSS",
        logo: css,
      },
      {
        name: "Bootstrap",
        logo: bootstrap,
      },
      {
        name: "Javascript",
        logo: javascript,
      },
      {
        name: "GSAP",
        logo: gsap,
      },
    ],
  },
  {
    title: "Animal Blog website",
    image: project2,
    category: "Web Applications",
    description: `An Animal Blog web application is a platform where users can share, explore, and learn about animals. 
                  It features engaging posts, photos, and videos, enabling users to discuss wildlife, pets, and conservation. 
                  With user-friendly design, categories, and commenting features, it fosters a vibrant community passionate 
                  about animal welfare and knowledge.`,
    demoLink: "https://google.com/",
    stacks: [
      {
        name: "HTML",
        logo: html,
      },
      {
        name: "XD",
        logo: xd,
      },
      {
        name: "CSS",
        logo: css,
      },
      {
        name: "JavaScript",
        logo: javascript,
      },
      {
        name: "Bootstrap",
        logo: bootstrap,
      },
      {
        name: "GSAP",
        logo: gsap,
      },
    ],
  },
  {
    title: "Travel and Tourism management",
    image: project3,
    category: "Web Applications",
    description: `A Travel and Tourism Web Application streamlines travel planning by offering features like destination guides, booking 
                  services for flights, accommodations, and tours, and personalized recommendations. It enhances user experience with 
                  real-time updates, interactive maps, and secure payment gateways, making travel convenient, efficient, and 
                  enjoyable for users worldwide.`,
    demoLink: "https://google.com/",
    stacks: [
      {
        name: "ReactJs",
        logo: react,
      },
      {
        name: "Figma",
        logo: figma,
      },
      {
        name: "Tailwind",
        logo: tailwind,
      },
      {
        name: "GSAP",
        logo: gsap,
      },
    ],
  },
  {
    title: "Hired App - Design",
    image: project4,
    category: "UI/UX",
    description: `Hired App Design focuses on creating user-friendly interfaces for job seekers and employers. It emphasizes seamless navigation, 
                  personalized job recommendations, and streamlined application processes. Key features include intuitive search, profile 
                  customization, real-time notifications, and secure communication. The design ensures accessibility, responsiveness, and 
                  an engaging user experience for diverse global users.`,
    demoLink: "https://google.com/",
    stacks: [
      {
        name: "Figma",
        logo: figma,
      },
      {
        name: "Adobe Illustrator",
        logo: illustrator,
      },
      {
        name: "Framer",
        logo: framer,
      },
    ],
  },
  {
    title: "EV Aggregation - App Design",
    image: project5,
    category: "UI/UX",
    description: `EV Aggregation app design integrates electric vehicles into a unified platform, optimizing charging, energy trading, and fleet management. 
                  It emphasizes real-time data analytics, user-friendly interfaces, and smart grid integration. Key features include scheduling, demand 
                  response, and energy cost minimization, supporting sustainability and enhancing user convenience in the EV ecosystem.`,
    demoLink: "https://google.com/",
    stacks: [
      {
        name: "Figma",
        logo: figma,
      },
      {
        name: "Adobe Illustrator",
        logo: illustrator,
      },
    ],
  },
  {
    title: "Food App Development",
    image: project6,
    category: "UI/UX",
    description: `Food app development design focuses on creating an intuitive, user-friendly interface with seamless navigation. 
                  Key features include an appealing menu display, real-time tracking, secure payment integration, and personalized 
                  recommendations. Prioritize responsiveness, efficient backend for data management, and compatibility across 
                  devices to ensure a smooth user experience for customers and vendors alike.`,
    demoLink: "https://google.com/",
    stacks: [
      {
        name: "Adobe illustrated",
        logo: illustrator,
      },
      {
        name: "Figma",
        logo: figma,
      },
      {
        name: "XD",
        logo: xd,
      },
      {
        name: "Adobe photoshop",
        logo: photoshop,
      },
    ],
  },
];

export const skills = [
  {
    title: "UI/UX",
    data: [
      {
        skill: "Figma",
        level: "Experienced",
        logo: figma,
      },
      {
        skill: "canvas",
        level: "Intermediate",
        logo: canva,
      },
      {
        skill: "XD",
        level: "Intermediate",
        logo: xd,
      },
      {
        skill: "Adobe Illustration",
        level: "Intermediate",
        logo: illustrator,
      },
      {
        skill: "Adobe Photoshop",
        level: "Intermediate",
        logo: photoshop,
      },
      {
        skill: "Framer Motion",
        level: "Intermediate",
        logo: framer,
      },
      {
        skill: "GSAP",
        level: "Intermediate",
        logo: gsap,
      },
    ],
  },
  {
    title: "Full Stack Development",
    data: [
      {
        skill: "HTML",
        level: "Experienced",
        logo: html,
      },
      {
        skill: "CSS",
        level: "Experienced",
        logo: css,
      },
      {
        skill: "JavaScript",
        level: "Experienced",
        logo: javascript,
      },
      {
        skill: "Tailwind",
        level: "Intermediate",
        logo: tailwind,
      },
      {
        skill: "Bootstrap",
        level: "Experienced",
        logo: bootstrap,
      },
      {
        skill: "React",
        level: "Experienced",
        logo: react,
      },
      {
        skill: "Java",
        level: "Experienced",
        logo: java,
      },
      {
        skill: "PostgreSQL",
        level: "Experienced",
        logo: postgresql,
      },
    ],
  },
];
export const contactInfo = [
  {
    name: "Email",
    value: "farookimran54134@gmail.com",
    link: "mailto:farookimran54134@gmail.com",
    icon: emailicon,
    btnIcon: <MdOutlineEmail />,
    color: "rgb(56,115,205)",
  },
  {
    name: "Messenger",
    value: "Mohammed Farook Imran",
    link: "http://m.me/profile?id=profile-i",
    icon: messengericon,
    btnIcon: <RiMessengerLine />,
    color: "rgb(139,74,251)",
  },
  {
    name: "WhatsApp",
    value: "+919025544822",
    link: "https://wa.me/919025544822",
    icon: whatsappicon,
    btnIcon: <BsWhatsapp />,
    color: "rgb(38,234,112)",
  },
];
export const socialHandles = [
  {
    name: "WhatsApp",
    icon: <BsWhatsapp />,
    link: "",
  },
  {
    name: "Github",
    icon: <AiFillGithub />,
    link: "https://github.com/mohammed-farook",
  },
  {
    name: "LinkedIn",
    icon: <AiFillLinkedin />,
    link: "https://www.linkedin.com/in/farook-imran-bb88181aa/",
  },
  {
    name: "Telegram",
    icon: <FaTelegramPlane />,
    link: "https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1",
  },
];

export const testimonials = [
  {
    avatar: profile3,
    name: "Samuel Eze",
    review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`,
  },
  {
    avatar: profile4,
    name: "Emmanuel Joseph",
    review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`,
  },
  {
    avatar: profile5,
    name: "Gloria Chiwendu",
    review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`,
  },
  {
    avatar: profile6,
    name: "Precious Stone",
    review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`,
  },
];
