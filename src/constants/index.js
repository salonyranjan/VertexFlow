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

 const abilities = [
  {
    imgPath: "/images/ai-brain.webp",
    title: "AI Systems Engineering",
    desc: "Designing production-grade RAG, agentic, vision, and voice systems with grounded retrieval and low-latency inference.",
    skills: ["LangChain", "Gemini", "Groq", "Vapi", "Vector Search"],
    proof: "SonicPrep · RxScan AI · ZenithRAG",
  },
  {
    imgPath: "/images/fullstack-layers.webp",
    title: "Full-Stack Product Engineering",
    desc: "Building secure, responsive products from interface to data model, with real-time workflows and production-ready architecture.",
    skills: ["Next.js", "React", "Node.js", "TypeScript", "PostgreSQL"],
    proof: "ResQPlate · PageWhisper · BitFlow",
  },
  {
    imgPath: "/images/logos/three.png",
    title: "Creative & Real-Time Interfaces",
    desc: "Crafting cinematic WebGL experiences, interactive 3D systems, and motion-rich interfaces without sacrificing usability or performance.",
    skills: ["Three.js", "R3F", "WebGL", "GLSL", "GSAP"],
    proof: "VertexFlow · Neural Portfolio",
  },
  {
    imgPath: "/images/data-cloud.webp",
    title: "Data, Cloud & Delivery",
    desc: "Shipping containerized AI and data workloads with automated delivery, resilient storage, and decision-ready analytics.",
    skills: ["AWS", "Docker", "GitHub Actions", "MongoDB", "Power BI"],
    proof: "MediQuery AI · OpenShelf E2E",
  },
];
const techStackGroups = [
  {
    title: "Languages",
    description: "Core languages used across product, data, and systems work.",
    skills: ["TypeScript", "JavaScript", "Python", "SQL", "C++"],
  },
  {
    title: "Frontend & Creative",
    description: "Responsive interfaces, motion systems, and real-time 3D experiences.",
    skills: ["React", "Next.js", "React Native", "Three.js", "React Three Fiber", "Tailwind CSS", "GSAP", "WebGL", "GLSL"],
  },
  {
    title: "Backend & APIs",
    description: "Secure application services and low-latency, event-driven systems.",
    skills: ["Node.js", "Express.js", "FastAPI", "Flask", "REST APIs", "WebSockets", "Server Actions", "JWT", "OAuth 2.0"],
  },
  {
    title: "AI & Machine Learning",
    description: "Production AI workflows spanning retrieval, agents, vision, and voice.",
    skills: ["LangChain", "RAG", "Agentic AI", "MCP", "PyTorch", "scikit-learn", "Pandas", "Gemini", "Groq / Llama", "Vapi", "ElevenLabs"],
  },
  {
    title: "Data & Storage",
    description: "Relational, document, vector, and analytics data platforms.",
    skills: ["PostgreSQL", "MongoDB", "Supabase", "Firebase", "Appwrite", "Prisma", "Pinecone", "FAISS", "ChromaDB", "Power BI"],
  },
  {
    title: "Cloud & Delivery",
    description: "Cloud infrastructure, containers, deployment, and engineering workflow.",
    skills: ["AWS", "EC2", "ECR", "Docker", "GitHub Actions", "Git", "Vercel", "Render", "Streamlit"],
  },
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
    githubLink: "https://github.com/salonyranjan/ResQpla8",
    liveLink: "https://res-q-plate.vercel.app",
  },
  {
    name: "RxScan AI | Clinical Prescription Intelligence",
    tech: "Next.js 15, Groq Llama-4 Vision, NIH RxNav API, TypeScript",
    review:
      "Clinical safety terminal that converts handwritten prescriptions into structured, actionable medical data in under 50ms. Uses OCR-free vision parsing via Llama-4 and cross-references live NIH RxNav data to flag dosage errors and drug interactions in real time.",
    imgPath: "/images/rxscan.png",
    githubLink: "https://github.com/salonyranjan/RxScan-AI",
    liveLink: "https://rx-scan-ai.vercel.app/",
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
    imgPath: "/images/bitflow.png",
    githubLink: "https://github.com/salonyranjan/BitFlow",
    liveLink: "https://bit-flow-two.vercel.app",
  },
  {
    name: "SonicPrep | AI Interview Preparation Platform",
    tech: "React, Vite, Tailwind CSS, Framer Motion",
    review:
      "Fast, focused interview-prep platform built for momentum — near-instant UI transitions and a fluid, distraction-free workflow help candidates drill technical concepts at speed without breaking flow.",
    imgPath: "/images/project-sonicprep.webp",
    githubLink: "https://github.com/salonyranjan/sonic-prep",
    liveLink: "https://sonic-prep.vercel.app",
  },
  {
    name: "Z-Axis Cloud | AI Architectural Visualization",
    tech: "React 19, TypeScript, Puter.js, Generative AI, Tailwind CSS",
    review:
      "AI-powered architectural visualization SaaS that transforms 2D floor plans into photorealistic 3D renders, with a responsive React interface and persistent project metadata.",
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
    liveLink: "https://rewind-pied.vercel.app",
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
    name: "Google Data Analytics Professional Certificate",
    issuer: "Google (via Coursera)",
    date: "February 2026",
    link: "https://coursera.org/share/ec7b0970a78f9e0a2301dd3cf17475f0",
  },
  {
    name: "Introduction to Big Data with Spark and Hadoop",
    issuer: "IBM (via Coursera)",
    date: "February 2026",
    link: "https://coursera.org/share/46b789d4d0c292ae7a1c1b5554cf9162",
  },
  {
    name: "Market Research and Competitive Analysis",
    issuer: "Microsoft (via Coursera)",
    date: "February 2026",
    link: "https://coursera.org/share/bdd827b2de35aae080535d596a48b8d1",
  },
  {
    name: "IT Security: Defense against the Digital Dark Arts",
    issuer: "Google (via Coursera)",
    date: "February 2026",
    link: "https://coursera.org/share/59f5910eca45d6dddfbcbf0689bd95b7",
  },
  {
    name: "AWS Business Intelligence Engineer Nanodegree",
    issuer: "Udacity",
    date: "September 2025",
    link: "https://www.udacity.com/certificate/e/4588e288-8144-11f0-bd4b-0381f4b78c87",
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
  { name: "Edunet Foundation", imgPath: "/images/edunet-logo.jpg" },
  { name: "NIELIT Work-Based Learning", imgPath: "/images/nielit-logo.png" },
  { name: "CodeSpeedy", imgPath: "/images/cs-logo.png" },
  { name: "Infosys Springboard Pragati", imgPath: "/images/logos/company-logo-4.png" },
];

const socialImgs = [
  { name: "GitHub", link: "https://github.com/salonyranjan" },
  { name: "LinkedIn", link: "https://www.linkedin.com/in/salony-ranjan-b63200280" },
];

export {
  words,
  abilities,
  logoIconsList,
  expCards,
  projects,
  certifications,
  socialImgs,
  techStackGroups,
  navLinks,
};
