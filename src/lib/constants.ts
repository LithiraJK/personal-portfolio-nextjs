// Personal Info
export const personalInfo = {
  name: "Lithira Jayanaka",
  title: "Full-Stack Developer",
  email: "lithira.jayanaka.official@gmail.com",
  phone: "+94 769270053",
  location: "Galle, Sri Lanka",
  linkedin: "https://www.linkedin.com/in/lithira-jayanaka",
  github: "https://github.com/LithiraJK",
  availability: "Available for work",
  profileSummary:
    "Full-Stack Developer and Software Engineering undergraduate specializing in scalable web and cross-platform mobile application development. Technically proficient in Java (Spring Boot), the MERN Stack (MongoDB, Express.js, React.js, Node.js), React Native, and Python. Experienced in designing RESTful APIs, secure JWT authentication, payment gateway integration, and real-time communication systems. Adept at logical problem-solving and streamlined deployments using Docker and Vercel. A quick learner seeking a Junior Software Engineer role or Internship to leverage technical expertise in delivering innovative solutions.",
};

// Skills (from CV)
export const skills = [
  { name: "Java", level: "Advanced" },
  { name: "JavaScript", level: "Advanced" },
  { name: "TypeScript", level: "Intermediate" },
  { name: "Python", level: "Intermediate" },
  { name: "Spring Boot", level: "Advanced" },
  { name: "Jakarta EE", level: "Intermediate" },
  { name: "RESTful APIs", level: "Advanced" },
  { name: "JWT Authentication", level: "Advanced" },
  { name: "OAuth 2.0", level: "Intermediate" },
  { name: "Express.js", level: "Advanced" },
  { name: "React.js", level: "Advanced" },
  { name: "React Native", level: "Advanced" },
  { name: "JSP", level: "Intermediate" },
  { name: "Responsive Web Design", level: "Advanced" },
  { name: "MongoDB", level: "Advanced" },
  { name: "MySQL", level: "Intermediate" },
  { name: "Git/GitHub", level: "Advanced" },
  { name: "Maven", level: "Intermediate" },
  { name: "Postman", level: "Advanced" },
  { name: "Full-Stack Development", level: "Advanced" },
  { name: "API Integration", level: "Advanced" },
  { name: "Microservices Architecture", level: "Intermediate" },
  { name: "Database Design", level: "Advanced" },
  { name: "MVC Pattern", level: "Advanced" },
  { name: "Layered Pattern", level: "Advanced" },
  { name: "Agile Methodologies", level: "Intermediate" },
  { name: "Team Leadership", level: "Advanced" },
  { name: "Problem Solving", level: "Advanced" },
  { name: "Project Management", level: "Intermediate" },
  { name: "Fast Learner", level: "Advanced" },
  { name: "Adaptability", level: "Advanced" },
  { name: "Linux", level: "Intermediate" },
  { name: "Windows", level: "Advanced" },
];

// Projects
export const projects = [
  {
    title: "Tripvisito - AI Trip Management System",
    description:
      "Developed a production-ready travel booking platform using the MERN stack. Designed secure JWT-based authentication with role-based authorization and implemented booking lifecycle management alongside an admin dashboard. Integrated the Stripe API for secure online payment processing and deployed frontend and backend applications on Vercel.",
    tech: ["MERN Stack", "Stripe API", "Vercel", "JWT"],
    links: {
      frontend: "https://github.com/LithiraJK/tripvisito-frontend",
      backend: "https://github.com/LithiraJK/tripvisito-backend",
      live: "https://tripvisito.vercel.app",
    },
    image: "/images/tripvisito.png",
  },
  {
    title: "Skill Worker - Freelance Marketplace Platform",
    description:
      "Designed and developed a full-stack freelance marketplace tailored for Sri Lanka. Built RESTful APIs and containerized backend services using Docker. Implemented secure authentication using JWT and Google OAuth, integrated the PayHere payment gateway for subscription management, and developed real-time chat functionality using WebSocket.",
    tech: ["Spring Boot", "Hibernate", "Docker", "JWT", "WebSocket", "PayHere"],
    links: {
      frontend: "https://github.com/LithiraJK/skillworker-frontend",
      backend: "https://github.com/LithiraJK/skillworker-backend",
    },
    image: "/images/skillworker.png",
  },
  {
    title: "HabitFlux - Habit Tracking Mobile Application",
    description:
      "Developed a cross-platform habit tracking mobile application for Android and iOS. Implemented Firebase Authentication with Google Sign-In, built Firestore-based real-time data synchronization, and used Zustand for scalable state management. Generated production-ready APK builds using EAS.",
    tech: ["React Native", "Firebase", "Firestore", "Zustand", "EAS"],
    links: {
      source: "https://github.com/LithiraJK/habitflux",
    },
    image: "/images/habitflux.svg",
  },
  {
    title: "GourmetGuru - Food Ordering and Delivery System",
    description:
      "Developed a cross-platform habit tracking mobile application for Android and iOS. Implemented Firebase Authentication with Google Sign-In, built Firestore-based real-time data synchronization, and used Zustand for scalable state management. Generated production-ready APK builds using EAS.",
    tech: ["React Native", "Firebase", "Firestore", "Zustand", "EAS"],
    links: {
      source: "https://github.com/LithiraJK/habitflux",
    },
    image: "/images/habitflux.svg",
  },
];

// Education
export const education = [
  {
    institution: "IUSE (Institute of Software Engineering)",
    degree: "Graduate Diploma in Software Engineering (GDSE)",
    period: "2023 - Present",
  },
  {
    institution: "St. Aloysius' College",
    degree: "G.C.E Advanced Level - Mathematics Stream",
    period: "2022",
  },
];

// Leadership Activities
export const leadership = [
  {
    role: "Coordinator & Member - IUSE Student Committee",
    description:
      "Coordinated student activities and events. Managed communication between students and academic staff.",
  },
  {
    role: "Team Leader - Data Science Project (Code Pandas)",
    description:
      "Led a 4-member team in the 'Strategic Patient Risk Stratification & Predictive Modeling' project.",
  },
];

// References
export const references = [
  {
    name: "Mr. Shamodha Sahan",
    title: "Senior Software Engineer | Lecturer at IUSE",
    email: "shamodha7@gmail.com",
    phone: "+94 76 262 2427",
  },
  {
    name: "Mr. Udara San",
    title: "CEO at Sans Technologies | Senior Lecturer at IUSE",
    email: "udarasan@sans-technologies.com",
    phone: "+94 788409788",
  },
];

// Testimonials (not included in CV — placeholders you can replace anytime)
export const testimonials = [
  {
    quote:
      "Lithira is highly dependable and consistently delivers clean, scalable solutions. He communicates clearly and takes ownership of features end-to-end.",
    name: "Engineering Mentor",
    title: "Software Engineering",
  },
  {
    quote:
      "Strong problem-solving skills and great attention to detail. Lithira quickly adapts to new tools and contributes effectively in a team environment.",
    name: "Project Supervisor",
    title: "Full-Stack Development",
  },
  {
    quote:
      "Excellent work ethic and fast learning curve. Lithira’s ability to break down complex requirements into a clear implementation plan is impressive.",
    name: "Team Lead",
    title: "Product Engineering",
  },
];

