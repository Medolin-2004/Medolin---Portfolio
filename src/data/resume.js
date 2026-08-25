// Single source of truth for resume content.
// Edit values here and every section updates automatically.

export const profile = {
  name: "Medolin Christiyana J",
  titles: ["Software Developer", "MERN Stack Developer", "Frontend Developer"],
  email: "medolin2004@gmail.com",
  phone: "8122566849",
  linkedin: "https://linkedin.com/in/Medolin",
  linkedinLabel: "linkedin.com/in/Medolin",
  github: "https://github.com/Medolin-2004",
  githubLabel: "github.com/Medolin-2004",
  resumeFile: "/resume/Medolin_Christiyana_Resume.pdf",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const education = {
  degree: "B.Tech — Information Technology",
  institution: "St. Xavier's Catholic College of Engineering, Chunkankadai",
  duration: "2022 – 2026",
  cgpa: "8.5 / 10",
};

export const skills = {
  Frontend: ["HTML5", "CSS3", "JavaScript", "React.js", "Responsive Web Design"],
  Backend: ["Node.js", "Express.js", "REST APIs"],
  Database: ["MongoDB", "MySQL (Basics)"],
  Tools: ["Git", "GitHub", "VS Code"],
};

export const experience = [
  {
    role: "MERN Stack Development Intern",
    org: "NoviTech R&D Pvt. Ltd.",
    duration: "July 2025 – October 2025",
    mode: "Remote",
    points: [
      "Engineered full-stack features and multiple functional modules",
      "Used MongoDB, Express.js, React.js and Node.js",
      "Built reusable React components",
      "Designed and integrated REST APIs",
      "Structured and managed MongoDB collections",
    ],
  },
  {
    role: "Web Development Intern",
    org: "CodeBinds Technologies",
    duration: "July 2024",
    mode: "Offline",
    points: [
      "Developed responsive web pages using HTML, CSS and JavaScript",
      "Applied responsive design principles",
      "Improved usability across mobile and desktop breakpoints",
    ],
  },
];

export const certifications = [
  {
    title: "Inplant Training in Web Development",
    org: "CodeBinds Technologies",
    description:
      "Practical exposure to core web development concepts and technologies through hands-on inplant training.",
  },
  {
    title: "MERN Stack Internship",
    org: "NoviTech R&D Private Limited",
    description:
      "Three-month MERN Stack internship covering MongoDB, Express.js, React.js and Node.js.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
  },
];

export const projects = [
  {
    id: "shopkart",
    featured: false,
    name: "ShopKart – E-Commerce Platform",
    category: "MERN Stack",
    fileName: "shopkart.js",
    description:
      "A full-stack MERN e-commerce platform with product browsing, authentication, shopping cart, wishlist, checkout, order management, and an admin dashboard.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT"],
    features: [
      "User authentication and authorization",
      "Product search, filtering and categories",
      "Shopping cart and wishlist",
      "Checkout and order management",
      "Admin dashboard and product management",
      "Responsive user interface",
    ],
    github: "https://github.com/Medolin-2004/ShopKart-MERN-E-commerce.git",
    demo: "https://shop-kart-mern-e-commerce.vercel.app/",
  },
  {
    id: "bulk-email",
    featured: true,
    name: "Bulk Email Campaign Manager",
    category: "MERN Stack",
    fileName: "campaignManager.js",
    description:
      "A full-stack MERN application for managing personalized bulk email campaigns at scale.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Nodemailer", "JWT"],
    features: [
      "CSV recipient upload",
      "Personalized bulk email campaigns",
      "Nodemailer email delivery",
      "JWT authentication",
      "MongoDB campaign tracking",
      "Delivery status tracking",
      "React dashboard",
      "Real-time campaign monitoring",
    ],
    github: "https://github.com/Medolin-2004/Bulk-Mail-App.git",
    demo: "https://bulk-mail-app-jet.vercel.app/",
  },
  {
    id: "inteleye",
    featured: false,
    name: "INTELEYE — Smart Surveillance for Weapon and Criminal Detection",
    category: "Final Year Project",
    fileName: "inteleye.py",
    description:
      "An AI-powered surveillance system designed for real-time weapon detection and offender identification.",
    tech: ["YOLOv8", "DeepFace", "FaceNet", "Python", "Flask"],
    features: [
      "Real-time weapon detection",
      "Facial identification",
      "Visual alerts",
      "Email notifications",
      "Timestamped incident logs",
      "Flask web portal",
    ],
    github: "https://github.com/Medolin-2004",
    demo: "#",
  },
  {
    id: "bus-booking",
    featured: false,
    name: "Online Bus Booking System",
    category: "Web Application",
    fileName: "busBooking.js",
    description:
      "A responsive bus ticket booking interface with interactive seat selection and a guided booking workflow.",
    tech: ["HTML", "CSS", "JavaScript"],
    features: [
      "Interactive seat selection",
      "Booking workflow",
      "Form validation",
      "Responsive UI",
      "Mobile / tablet / desktop support",
    ],
    github: "https://github.com/Medolin-2004/busbooking.git",
    demo: "https://bus-medolindev.netlify.app/",
  },
];
