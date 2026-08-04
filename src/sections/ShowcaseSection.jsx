import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const pageWhisperRef = useRef(null);
  const cineNativeRef = useRef(null);
  const sonicRef = useRef(null);

  useGSAP(() => {
    const cards = [pageWhisperRef.current, cineNativeRef.current, sonicRef.current].filter(Boolean);

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.1, ease: "power3.out" }
    );

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          delay: 0.1 * index,
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=120",
          },
        }
      );
    });
  }, []);

  const projects = [
    {
      ref: pageWhisperRef,
      featured: true,
      image: "/images/project-pagewhisper.png",
      alt: "PageWhisper AI SaaS Interface",
      title: "PageWhisper",
      subtitle:
        "An AI SaaS transforming static PDFs into interactive, voice-synthesized personas using real-time RAG.",
      description:
        "Engineered with Next.js, Vapi AI, and MongoDB. Achieved sub-100ms context retrieval and low-latency voice orchestration, featuring a full subscription model with Clerk Billing.",
      links: [
        {
          label: "GitHub",
          href: "https://github.com/salonyranjan/PageWhisper",
          primary: false,
        },
        {
          label: "Live Demo",
          href: "https://page-whisper.vercel.app",
          primary: true,
        },
      ],
      accent: "from-purple-500/20 via-transparent to-cyan-500/15",
      glow1: "bg-purple-500/20",
      glow2: "bg-blue-500/20",
    },
    {
      ref: cineNativeRef,
      featured: false,
      image: "/images/project-cinenative.jpeg",
      alt: "CineNative Mobile Interface",
      title: "CineNative",
      subtitle:
        "A high-performance cinematic mobile discovery app built with React Native & Expo.",
      description:
        "Engineered with a modular atomic design and decoupled API logic. Features real-time TMDB integration, cloud-synced watchlists via Appwrite, and image caching for a seamless native experience.",
      links: [
        {
          label: "GitHub Code",
          href: "https://github.com/salonyranjan/CineNative",
          primary: false,
        },
        {
          label: "Download APK",
          href: "https://github.com/salonyranjan/CineNative/releases",
          primary: true,
        },
      ],
      accent: "from-cyan-500/20 via-transparent to-indigo-500/15",
      glow1: "bg-cyan-500/20",
      glow2: "bg-indigo-500/20",
    },
    {
      ref: sonicRef,
      featured: false,
      image: "/images/project-sonicprep.png",
      alt: "Sonic-Prep Voice Interview Interface",
      title: "Sonic-Prep",
      subtitle:
        "A sub-500ms voice-to-voice AI coaching platform for technical interviews.",
      description:
        "Engineered with a serverless edge architecture utilizing Gemini 1.5 Pro and Vapi.ai. Features a specialized state machine for low-latency interview management and Pinecone-driven RAG for domain-specific technical evaluation.",
      links: [
        {
          label: "GitHub Code",
          href: "https://github.com/salonyranjan/sonic-prep",
          primary: false,
        },
        {
          label: "Live Demo",
          href: "https://sonic-prep.vercel.app",
          primary: true,
        },
      ],
      accent: "from-violet-500/20 via-transparent to-rose-500/15",
      glow1: "bg-violet-500/20",
      glow2: "bg-rose-500/20",
    },
  ];

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.12),transparent_40%),radial-gradient(circle_at_bottom,rgba(59,130,246,0.08),transparent_35%)]" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur">
            Selected Work
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            A polished showcase of products, motion, and engineering.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg">
            Each project is presented with a cleaner layout, stronger hierarchy,
            and a more premium visual rhythm.
          </p>
        </div>

        <div className="space-y-10">
          {projects.map((project) => (
            <article
              key={project.title}
              ref={project.ref}
              className="group relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/20 lg:grid lg:grid-cols-2 lg:gap-8"
            >
              <div className="flex items-center justify-center p-5 sm:p-6 lg:p-8">
                <div className="relative w-full max-w-[520px] overflow-hidden rounded-2xl border border-white/10 bg-[#0b1020] p-3 shadow-2xl">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.accent}`} />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_35%)] opacity-80" />
                  <div
                    className={`absolute -left-6 -top-6 h-24 w-24 rounded-full ${project.glow1} blur-3xl`}
                  />
                  <div
                    className={`absolute -bottom-6 -right-6 h-24 w-24 rounded-full ${project.glow2} blur-3xl`}
                  />
                  <img
                    src={project.image}
                    alt={project.alt}
                    className={`relative z-10 h-auto w-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-[1.02] ${
                      project.title === "CineNative"
                        ? "max-h-[320px]"
                        : project.title === "Sonic-Prep"
                        ? "max-h-[360px]"
                        : "max-h-[420px]"
                    }`}
                  />
                </div>
              </div>

              <div className="flex flex-col justify-center p-5 sm:p-6 lg:p-8">
                <div className="mb-3 flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-purple-400 shadow-[0_0_14px_rgba(168,85,247,0.8)]" />
                  <span className="text-xs font-medium uppercase tracking-[0.24em] text-white/45">
                    {project.featured ? "Featured Project" : "Selected Project"}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white sm:text-3xl">
                  {project.title}
                </h3>

                <p className="mt-3 text-base font-medium leading-relaxed text-purple-300 sm:text-lg">
                  {project.subtitle}
                </p>

                <p className="mt-4 max-w-xl text-sm leading-7 text-white/70 sm:text-base">
                  {project.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black ${
                        link.primary
                          ? "bg-purple-600 text-white shadow-lg shadow-purple-600/20 hover:bg-purple-500"
                          : "border border-white/15 bg-white/5 text-white hover:bg-white hover:text-black"
                      }`}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;