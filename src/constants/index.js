const navLinks = [
  { name: "Work", link: "#work" },
  { name: "Experience", link: "#experience" },
  { name: "Skills", link: "#skills" },
  { name: "Certifications", link: "#certifications" },
  { name: "Projects", link: "#projects" }, 
  
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
  { value: 8.2, suffix: "", label: "CGPA, B.Tech- Computer Science & Business System (Netaji Subhash Engineering College, Kolkata)" },
  { value: 87, suffix: "%", label: "MARKS, XII BD Public School, Patna" },
  { value: 74, suffix: "%", label: "MARKS, X St Joseph’s Convent High School, Patna" },
  { value: 3, suffix: "", label: "Professional Internships" }, // Updated to 3 based on resume [cite: 25, 29, 32]
];
 const abilities = [
  {
    imgPath: "/images/ai-brain.png",
    title: "Generative AI & RAG",
    desc: "Designing low-latency AI agents and retrieval-augmented systems with Gemini 2.5 Flash, LangChain, and vector databases like Pinecone.",
  },
  {
    imgPath: "/images/fullstack-layers.png",
    title: "Full-Stack Engineering",
    desc: "Building production-ready applications with the MERN stack, Next.js 15, and secure JWT and OAuth 2.0-based architectures.",
  },
  {
    imgPath: "/images/data-cloud.png",
    title: "Data & Cloud Architecture",
    desc: "Creating scalable BI pipelines and distributed systems using AWS, Apache Spark, and Hadoop to turn large datasets into actionable insights.",
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
    imgPath: "/images/exp01.jpg",
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
    name: "Sonic-Prep",
    tech: "React, Vite, Tailwind CSS, Framer Motion",
    review: "Engineered a high-performance interview preparation platform designed for speed and efficiency. Focused on low-latency UI transitions and a 'Sonic' fast user experience to help candidates master technical concepts quickly.",
    imgPath: "/images/project-sonicprep.png", 
    githubLink: "https://github.com/salonyranjan/sonic-prep",
    liveLink: "https://sonic-prep.vercel.app", // Adjust if your live URL is different
  },
  {
    name: "Z-Axis Cloud",
    tech: "Cloud Infrastructure, DevOps, Docker, Virtualization",
    review: "Designed a scalable cloud infrastructure framework optimized for high-performance computing. Focused on container orchestration and virtualized environment management to support the deployment of resource-heavy AI models and microservices.",
    imgPath: "/images/project-zaxis.png", 
    githubLink: "https://github.com/salonyranjan/Z-Axis-Cloud",
    liveLink: "https://z-axis-cloud.vercel.app", // Update if you have a dashboard URL
  },
  {
    name: "Rewind",
    tech: "MERN Stack, Redux, JWT, Material-UI",
    review: "Architected a full-stack social ecosystem for archiving digital footprints. Engineered a decoupled client-server architecture with JWT-based authentication and Redux for global state management, focusing on a minimalist, cinematic interface for documenting life events.",
    imgPath: "/images/project-rewind.png", 
    githubLink: "https://github.com/salonyranjan/Rewind",
    liveLink: "https://rewind-memories.vercel.app", // Adjust if your live URL is different
  },
  {
    name: "MediQuery.ai",
    tech: "LLMs, LangChain, Pinecone, AWS",
    review: "Architected a RAG-based medical chatbot. Leveraged vector databases and advanced NLP to parse complex queries and retrieve highly accurate, context-aware healthcare information.",
    imgPath: "/images/project-mediquery.png", 
    githubLink: "https://github.com/salonyranjan/MediQuery.ai", // Add your repo link here
    liveLink: "https://13.60.62.104:8080",   // Add live demo link here
  },
  {
    name: "SkillBridge AI",
    tech: "React, Node.js, GenAI",
    review: "Engineered a full-stack AI career coach. Features automated resume parsing, dynamic skill-gap analysis, and real-time generation of tailored interview questions to accelerate job readiness.",
    imgPath: "/images/project01.png",
    githubLink: "https://github.com/salonyranjan/SkillBridge-AI",
    liveLink: "https://skill-bridge-ai-orpin.vercel.app",
  },
  {
    name: "RoleRadar",
    tech: "AI Agents, MCP, Python",
    review: "Developed an agentic job discovery platform. Utilizes autonomous AI agents to deeply analyze resume context and intelligently map candidate profiles to hyper-relevant market opportunities.",
    imgPath: "/images/project-roleradar.png",
    githubLink: "https://github.com/salonyranjan/RoleRadar",
    liveLink: "https://roleradarz.streamlit.app/",
  },
  {
    name: "OpenShelf E2E",
    tech: "Full-Stack, Collaborative Filtering",
    review: "Deployed an end-to-end machine learning recommendation engine. Processes user preference data through collaborative filtering algorithms to deliver highly personalized reading queues.",
    imgPath: "/images/project-openshelf.png",
    githubLink: "https://github.com/salonyranjan/OpenShelf-E2E",
    liveLink: "https://16.171.41.72:8501",
  },
  {
    name: "QuickCart",
    tech: "Next.js, React, Tailwind",
    review: "Built a high-performance e-commerce architecture. Optimized for speed and SEO using server-side rendering (SSR), featuring a seamless checkout flow and scalable state management.",
    imgPath: "/images/project-quickcart.png",
    githubLink: "https://github.com/salonyranjan/QuickCart",
    liveLink: "https://quick-cart-blush-alpha.vercel.app",
  },
  {
    name: "ZenithRag",
    tech: "Python, LangChain, Vector DB, LLMs",
    review: "Architected an advanced Retrieval-Augmented Generation (RAG) system. Engineered a high-throughput pipeline integrating document parsing, semantic search, and LLM synthesis to deliver precise, context-aware answers from custom knowledge bases.",
    imgPath: "/images/project-zenithrag.png", 
    githubLink: "https://github.com/salonyranjan/ZenithRAG", 
    liveLink: "https://13.60.233.173:8080", 
  },
];
const certifications = [
  {
    name: "AWS Business Intelligence Engineer Nanodegree",
    issuer: "Udacity",
    date: "September 2025",
    link: "https://www.udacity.com/certificate/e/4588e288-8144-11f0-bd4b-0381f4b78c87",
  },
  {
    name: "Google Data Analytics Professional Certificate",
    issuer: "Google (via Coursera)",
    date: "August 2025", 
    link: "https://www.credly.com/badges/f2f9bf2b-8078-43b2-8deb-d37dc51856e3/print",
  },
  {
    name: "Big Data with Spark and Hadoop Essentials",
    issuer: "IBM",
    date: "July 2025",
    link: "https://www.credly.com/badges/dd2c182a-da81-4866-8c7a-5bab9f8532fe",
  },
  {
    name: "Generative AI with AWS",
    issuer: "Udacity",
    date: "June 2025", 
    link: "https://www.udacity.com/certificate/e/f4d2a62e-3e33-11f0-b016-5335f13fd6b5",
  },
  {
    name: "Technology Job Simulation",
    issuer: "Deloitte (via Forage)",
    date: "June 2025", 
    link: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_EL2GD8h4cdD8jp3Rn_1751207904140_completion_certificate.pdf",
  },
  {
    name: "Machine Learning Specialization",
    issuer: "DeepLearning.AI / Stanford",
    date: "December 2024",
    link: "https://www.coursera.org/account/accomplishments/specialization/B4IO9L50FAKB",
  },
];
const logoIconsList = [
  { imgPath: "/images/logos/company-logo-1.jpg" },
  { imgPath: "/images/logos/company-logo-2.png" },
  { imgPath: "/images/logos/company-logo-3.png" },
  { imgPath: "/images/logos/company-logo-4.png" },
];
const expLogos = [
  { name: "logo1", imgPath: "/images/nielit-logo.png" },
  { name: "logo2", imgPath: "/images/edunet-logo.jpg" },
  { name: "logo3", imgPath: "/images/cs-logo.png" },
];

const socialImgs = [
  { name: "github",link: "https://github.com/salonyranjan", imgPath: "/images/github.png" },
  { name: "linkedin",link: "https://www.linkedin.com/in/salony-ranjan-b63200280", imgPath: "/images/linkedin.png" },
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