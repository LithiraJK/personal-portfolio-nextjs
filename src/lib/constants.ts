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
    "I’m Lithira Jayanaka, a passionate Full-Stack Developer from Sri Lanka with experience in MERN stack, Java, and RESTful APIs. I enjoy building scalable, user-friendly applications and solving real-world problems through code. I’m continuously learning new technologies and improving my skills, aiming to grow as a developer while contributing to meaningful and impactful projects in the tech industry."
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
    image: "/images/habitflux-habit-tracking-app.png",
  },
  {
    title: "Crystal Sandes Hotel - Responsive Web Design",
    description:
      "Developed a responsive web design for Crystal Sandes Hotel, ensuring a seamless user experience across all devices. Implemented modern UI/UX principles and optimized the site for performance and accessibility.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    links: {
      source: "https://github.com/LithiraJK/habitflux",
    },
    image: "/images/crystal-sands-hotel-web-site.png",
  },
  {
    title: "CeylonXplorer - Sri Lanka Travel Blog",
    description:
      "Built a responsive, mobile-first travel blog website focused on Sri Lanka using HTML5, Vanilla CSS3, and JavaScript. Showcases top destinations, practical travel tips, local culture and traditions, adventure activities, and nature and wildlife highlights. The project was deployed on Firebase Hosting and strengthened hands-on skills in clean web design, responsive layouts, and frontend best practices.",
    tech: [
      "HTML5",
      "Vanilla CSS3",
      "JavaScript",
      "Responsive Design",
      "Mobile-First",
      "Firebase Hosting",
    ],
    links: {
      source: "https://github.com/LithiraJK/ceylonxplorer-htmlcss",
      live: "https://ceylonxplorer-dabb5.web.app/",
    },
    image: "/images/ceylonXplorer.png",
  },
  {
    title: "Tic Tac Toe - JavaFX AI Game",
    description:
      "Built a modern Tic Tac Toe desktop game using JavaFX 21 and JFoenix with a clean material-style UI. Implemented Human vs AI gameplay with two difficulty levels: Easy mode with random moves and Hard mode powered by Minimax + Backtracking for unbeatable decisions. Structured the application with MVC architecture (Model, FXML/CSS View, Controller), added JUnit 5 tests, and packaged a Windows .exe with bundled JRE for plug-and-play installation.",
    tech: [
      "Java 21",
      "JavaFX 21",
      "JFoenix",
      "Minimax",
      "Backtracking",
      "Windows .exe",
    ],
    links: {
      source: "https://github.com/LithiraJK/tic-tac-toe-javafx-minimax",
      live: "https://drive.google.com/file/d/12DvnAJklWPJ-U1t4SMqWraH_JShtMsIf/view",
    },
    image: "/images/tic-tac-toe.png",
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
    period: "2023 - Present",
    description:
      "Coordinated student activities and events. Managed communication between students and academic staff.",
  },
  {
    role: "Team Leader - Data Science Project (Code Pandas)",
    period: "2026",
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

