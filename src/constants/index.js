const navLinks = [
  { name: "Work", link: "#work" },
  { name: "Experience", link: "#experience" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" }, // Changed from Testimonials
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 2026, suffix: "", label: "Expected Graduation" },
  { value: 8.02, suffix: "", label: "CGPA" },
  { value: 5, suffix: "+", label: "Completed Projects" },
  { value: 3, suffix: "", label: "Professional Internships" }, // Updated to 3 based on resume [cite: 25, 29, 32]
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "AI & Machine Learning",
    desc: "Developing intelligent systems using Python, LLMs, and data analytics to solve complex problems.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Full-Stack Development",
    desc: "Building scalable and responsive web applications using React, Next.js, and Node.js.",
  },
  {
    imgPath: "/images/time.png",
    title: "Continuous Learning",
    desc: "From cryptography to 3D web rendering, always expanding my technical toolkit.",
  },
];

const techStackImgs = [
  { name: "React / Next.js", imgPath: "/images/logos/react.png" },
  { name: "Python / AI", imgPath: "/images/logos/python.svg" },
  { name: "Node.js", imgPath: "/images/logos/node.png" },
  { name: "Interactive 3D", imgPath: "/images/logos/three.png" },
  { name: "Git & Version Control", imgPath: "/images/logos/git.svg" },
];

const techStackIcons = [
  { name: "React", modelPath: "/models/react_logo-transformed.glb", scale: 1, rotation: [0, 0, 0] },
  { name: "Python", modelPath: "/models/python-transformed.glb", scale: 0.8, rotation: [0, 0, 0] },
  { name: "Backend", modelPath: "/models/node-transformed.glb", scale: 5, rotation: [0, -Math.PI / 2, 0] },
  { name: "3D Graphics", modelPath: "/models/three.js-transformed.glb", scale: 0.05, rotation: [0, 0, 0] },
  { name: "Version Control", modelPath: "/models/git-svg-transformed.glb", scale: 0.05, rotation: [0, -Math.PI / 4, 0] },
];

const expCards = [
  {
    review: "Assisted in technical projects and gained practical experience in a government IT environment.",
    imgPath: "/images/exp01.png",
    logoPath: "/images/nielit-logo.png", 
    title: "Work-Based Learning Intern",
    date: "September 2025 - March 2026",
    responsibilities: [
      "Engaging in technical development at NIELIT Bihar, Patna.",
      "Adhered to workplace standards and protocols.",
      "Successfully balanced internship duties with academic responsibilities.",
    ],
  },
  {
    review: "Developed foundational skills in front-end technologies and collaborative web development.",
    imgPath: "/images/exp02.jpg",
    logoPath: "/images/edunet-logo.jpg", 
    title: "Front End Web Dev Intern",
    date: "August 2025 - October 2025",
    responsibilities: [
      "Completed internship with Edunet Foundation in collaboration with AICTE & IBM SkillsBuild. ",
      "Built a front end web project with guidance from mentors using IBM SkillsBuild.",
      "Gained experience through masterclasses and technical sessions.",
    ],
  },
  {
    review: "Built and tested responsive web applications using HTML, CSS, JavaScript, and PHP.",
    imgPath: "/images/exp03.jpg",
    logoPath: "/images/cs-logo.png",
    title: "Web Development Intern",
    date: "February 2025 - May 2025",
    responsibilities: [
      "Delivered high-quality code on time in a remote setup at Codespeedy Technology Pvt. Ltd.",
      "Created clear documentation and tutorials to facilitate team collaboration.",
    ],
  },
];

const projects = [
  {
    name: "MediQuery.ai",
    tech: "LLMs, LangChain, Pinecone, Flask, AWS",
    review: "A robust medical chatbot designed to provide intelligent querying capabilities using advanced natural language processing and vector databases.",
    imgPath: "/images/project-mediquery.png", 
  },
  {
    name: "SkillBridge AI",
    tech: "React, Full-Stack, AI",
    review: "A career development application featuring automated resume analysis, skill gap identification, and AI-powered interview question generation.",
    imgPath: "/images/project-skillbridge.png",
  },
  {
    name: "RoleRadar",
    tech: "AI Agents, MCP",
    review: "An intelligent job discovery tool that provides tailored role recommendations based on context extracted directly from user resumes.",
    imgPath: "/images/project-roleradar.png",
  },
  {
    name: "OpenShelf E2E",
    tech: "Full-Stack, Machine Learning",
    review: "An end-to-end machine learning application built to analyze preferences and deliver highly personalized book recommendations.",
    imgPath: "/images/project-openshelf.png",
  },
  {
    name: "QuickCart",
    tech: "Next.js, React",
    review: "A highly scalable, full-stack e-commerce platform engineered for fast performance and seamless user experiences.",
    imgPath: "/images/project-quickcart.png",
  },
];

const certifications = [
  {
    name: "Machine Learning Specialization",
    issuer: "DeepLearning.AI / Stanford",
    date: "December 2024 [cite: 24]",
  },
  {
    name: "Google Data Analytics Professional Certificate",
    issuer: "Coursera",
    date: "August 2025 [cite: 49]",
  },
  {
    name: "Generative AI with AWS",
    issuer: "Udacity",
    date: "June 2025 [cite: 49]",
  },
  {
    name: "Technology Job Simulation",
    issuer: "Deloitte (via Forage)",
    date: "June 2025 [cite: 50]",
  },
];

const logoIconsList = [
  { imgPath: "/images/logos/company-logo-1.png" },
  { imgPath: "/images/logos/company-logo-2.png" },
  { imgPath: "/images/logos/company-logo-3.png" },
  { imgPath: "/images/logos/company-logo-4.png" },
  { imgPath: "/images/logos/company-logo-5.png" },
  { imgPath: "/images/logos/company-logo-6.png" },
  { imgPath: "/images/logos/company-logo-7.png" },
  { imgPath: "/images/logos/company-logo-8.png" },
  { imgPath: "/images/logos/company-logo-9.png" },
  { imgPath: "/images/logos/company-logo-10.png" },
  { imgPath: "/images/logos/company-logo-11.png" },
];

const expLogos = [
  { name: "logo1", imgPath: "/images/logo1.png" },
  { name: "logo2", imgPath: "/images/logo2.png" },
  { name: "logo3", imgPath: "/images/logo3.png" },
];

const socialImgs = [
  { name: "insta", imgPath: "/images/insta.png" },
  { name: "fb", imgPath: "/images/fb.png" },
  { name: "x", imgPath: "/images/x.png" },
  { name: "linkedin", imgPath: "/images/linkedin.png" },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  projects,
  certifications,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};