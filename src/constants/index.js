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
  { 
    value: 600, 
    suffix: "ms", 
    label: "Sub-600ms latency achieved in SonicPrep AI using Gemini 2.5 Pro & WebRTC" 
  }, 
  { 
    value: 8, 
    suffix: "", 
    label: "Infosys Pragati Cohort 8 selection recognizing elite technical aptitude" 
  }, 
  { 
    value: 3, 
    suffix: "", 
    label: "Professional Internships including NIELIT Bihar & Edunet Foundation" 
  }, 
  { 
    value: 10, 
    suffix: "+", 
    label: "Production-ready AI & Full-Stack Projects (RAG, Agents, & Cloud Ops)" 
  }, 
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
    name: "ResQPlate | AI-Powered Food Rescue Platform",
    tech: "MERN Stack, Groq LPU, Gemini 1.5, Socket.io, GSAP, Leaflet",
    review:
      "Full-stack logistics platform tackling food waste with geolocation-based donor-NGO matching, scoring 99/100 on PageSpeed. Powers sub-200ms AI food-matching via Groq LPU inference, automates surplus identification with Vision AI, and secures every handoff with OTP verification and live GPS tracking over Socket.io.",
    imgPath: "/images/project-resqplate.png",
    githubLink: "https://github.com/salonyranjan/frontend-ResQplate-",
    liveLink: "https://res-q-plate.vercel.app",
  },
  {
    name: "RxScan AI | Clinical Prescription Intelligence",
    tech: "Next.js 15, Groq Llama-4 Vision, NIH RxNav API, TypeScript",
    review:
      "Clinical safety terminal that converts handwritten prescriptions into structured, actionable medical data in under 50ms. Uses OCR-free vision parsing via Llama-4 and cross-references live NIH RxNav data to flag dosage errors and drug interactions in real time.",
    imgPath: "/images/project-rxscan.png",
    githubLink: "https://github.com/salonyranjan/RxScan-AI",
    liveLink: "",
  },
  {
    name: "Neural Map | 3D Force-Directed Knowledge Graph",
    tech: "React, Three.js, React Three Fiber, Next.js, Python, AWS",
    review:
      "Reimagines the portfolio format as an explorable 3D universe — a physics-driven, force-directed graph rendered with custom Three.js shaders. A modular data engine pulls live GitHub activity to auto-generate and connect project nodes in real time.",
    imgPath: "/images/neural.gif",
    githubLink: "https://github.com/salonyranjan/neural-portfolio",
    liveLink: "https://neural-portfolio.vercel.app",
  },
  {
    name: "BitFlow | Real-Time Crypto Intelligence Terminal",
    tech: "Next.js, WebSockets, TypeScript, Tailwind CSS",
    review:
      "High-frequency trading-style dashboard streaming live market data with ultra-low-latency WebSocket telemetry. Engineered for continuous data flow and instant price updates rather than static, polling-based charts.",
    imgPath: "/images/project-bitflow.png",
    githubLink: "https://github.com/salonyranjan/BitFlow",
    liveLink: "https://bit-flow-two.vercel.app",
  },
  {
    name: "SonicPrep | AI Interview Preparation Platform",
    tech: "React, Vite, Tailwind CSS, Framer Motion",
    review:
      "Fast, focused interview-prep platform built for momentum — near-instant UI transitions and a fluid, distraction-free workflow help candidates drill technical concepts at speed without breaking flow.",
    imgPath: "/images/project-sonicprep.png",
    githubLink: "https://github.com/salonyranjan/sonic-prep",
    liveLink: "https://sonic-prep.vercel.app",
  },
  {
    name: "Z-Axis Cloud | Scalable Infrastructure Framework",
    tech: "Docker, Container Orchestration, DevOps, Virtualization",
    review:
      "Cloud infrastructure framework built for high-performance computing workloads — orchestrates containerized, virtualized environments to reliably deploy resource-intensive AI models and microservices at scale.",
    imgPath: "/images/project-zaxis.png",
    githubLink: "https://github.com/salonyranjan/Z-Axis-Cloud",
    liveLink: "https://z-axis-cloud.vercel.app",
  },
  {
    name: "Rewind | Full-Stack Social Memory Archive",
    tech: "MERN Stack, Redux, JWT Authentication, Material-UI",
    review:
      "Full-stack social platform for archiving life's digital footprint, built on a decoupled client-server architecture with JWT-secured auth and Redux-managed global state. Designed around a minimalist, cinematic UI for documenting memories.",
    imgPath: "/images/project-rewind.png",
    githubLink: "https://github.com/salonyranjan/Rewind",
    liveLink: "https://rewind-memories.vercel.app",
  },
  {
    name: "MediQuery.ai | RAG-Based Medical Assistant",
    tech: "LLMs, LangChain, Pinecone, AWS",
    review:
      "Retrieval-augmented medical chatbot combining vector search with advanced NLP to parse complex clinical queries and surface accurate, context-aware healthcare answers grounded in real source data.",
    imgPath: "/images/project-mediquery.png",
    githubLink: "https://github.com/salonyranjan/MediQuery.ai",
    liveLink: "https://mediquery-ai.streamlit.app/",
  },
  {
    name: "SkillBridge AI | GenAI Career Coach",
    tech: "React, Node.js, Generative AI",
    review:
      "Full-stack AI career coach that parses resumes automatically, runs dynamic skill-gap analysis against target roles, and generates tailored interview questions on the fly to accelerate job readiness.",
    imgPath: "/images/project01.png",
    githubLink: "https://github.com/salonyranjan/SkillBridge-AI",
    liveLink: "https://skill-bridge-ai-orpin.vercel.app",
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
