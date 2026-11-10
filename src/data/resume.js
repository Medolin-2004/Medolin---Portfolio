// Single source of truth for resume content.
// Edit values here and every section updates automatically.

export const profile = {
  name: "Medolin Christiyana J",
  titles: ["Junior Software Developer", "MERN Stack Developer"],
  email: "medolin2004@gmail.com",
  phone: "8122566849",
  linkedin: "https://www.linkedin.com/in/medolin2004/",
  linkedinLabel: "linkedin.com/in/medolin2004",
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
  Programming: ["JavaScript (ES6+)", "Python"],
  Frontend: ["HTML5", "CSS3", "React.js", "Responsive Web Design"],
  Backend: ["Node.js", "Express.js", "RESTful API Development and Integration"],
  Databases: ["MongoDB", "MySQL"],
  Concepts: ["CRUD", "JWT Authentication", "Protected Routes"],
  "Tools & Version Control": ["Git", "GitHub", "VS Code"],
  Cloud: ["AWS Fundamentals"],
  Deployment: ["Vercel", "Render"],
};

export const experience = [
  {
    role: "MERN Stack Development Intern",
    org: "NoviTech R&D Pvt. Ltd.",
    duration: "July 2025 – October 2025",
    mode: "Remote",
    points: [
      "Developed and enhanced web application features using MongoDB, Express.js, React.js, and Node.js",
      "Built reusable React components and integrated frontend applications with backend REST APIs",
      "Worked with MongoDB collections and application data to support development requirements",
      "Identified and resolved application issues during development",
    ],
  },
  {
    role: "Web Development Intern",
    org: "CodeBinds Technologies",
    duration: "July 2024 – August 2024",
    mode: "On-site",
    points: [
      "Developed responsive web pages using HTML, CSS, and JavaScript",
      "Implemented frontend layouts and interactive elements",
      "Practiced debugging and improving website functionality",
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
      "A full-stack MERN e-commerce application with REST APIs, JWT authentication, role-based access and CRUD operations, plus product management, search, cart, wishlist and order management.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Cloudinary", "Razorpay"],
    features: [
      "REST APIs with CRUD operations",
      "JWT authentication and role-based access",
      "Product management and search",
      "Cart and wishlist",
      "Order management",
      "Cloudinary integration for product images",
      "Razorpay integration for payment processing",
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
      "A MERN stack application for managing bulk email campaigns, with user authentication, campaign management and CSV-based recipient handling.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Nodemailer", "JWT"],
    features: [
      "JWT user authentication",
      "Campaign management",
      "CSV-based recipient handling",
      "Nodemailer for email delivery",
      "MongoDB for storing application data",
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