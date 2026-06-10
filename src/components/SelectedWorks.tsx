import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import imgFallahTrips from '../assets/fallah-trips.png';
import imgLeadAi from '../assets/lead-ai.png';
import imgErpAi from '../assets/erp-ai.png';
import imgHealthcare from '../assets/healthcare-dashboard.png';
import imgHc1 from '../assets/healthcare-1.png';
import imgHc2 from '../assets/healthcare-2.png';
import imgHc3 from '../assets/healthcare-3.png';
import imgHc4 from '../assets/healthcare-4.png';
import imgHc5 from '../assets/healthcare-5.png';
import imgBankLoan1 from '../assets/bank-loan-1.png';
import imgBankLoan2 from '../assets/bank-loan-2.png';

interface Project {
  title: string;
  category: string;
  image: string;
  hoverImages?: string[];
  link: string;
  techStack: string;
  features: string[];
}

const projects: Project[] = [
  {
    title: "AI Trip Planner",
    category: "AI",
    image: imgFallahTrips,
    link: "https://fallah-trips.vercel.app/",
    techStack: "Python, Groq API, Vercel",
    features: [
      "Personalized travel itinerary generation",
      "Budget-based recommendations",
      "Real-time AI responses",
      "Prompt-engineered travel planning"
    ]
  },
  {
    title: "Lead AI",
    category: "AI",
    image: imgLeadAi,
    link: "https://lead-ai-smoky.vercel.app/#/",
    techStack: "Python, React, LangChain, Groq, Tavily",
    features: [
      "Multi-agent research system",
      "AI-powered lead analysis",
      "Competitor benchmarking",
      "Bulk CSV processing",
      "Automated PDF audit reports",
      "Secure JWT authentication"
    ]
  },
  {
    title: "ERP AI Automation",
    category: "AI",
    image: imgErpAi,
    link: "https://erp-ai-eta.vercel.app/dashboard",
    techStack: "React, Node.js, AI Integration",
    features: [
      "Automated enterprise resource planning",
      "AI-driven predictive analytics",
      "Seamless data synchronization"
    ]
  },
  {
    title: "U.S. Healthcare Dynamics",
    category: "Data Analytics",
    image: imgHealthcare,
    hoverImages: [imgHc1, imgHc2, imgHc3, imgHc4, imgHc5],
    link: "#",
    techStack: "Data Analytics, EDA, Power BI, Python",
    features: [
      "Exploratory Data Analysis (EDA) on US Healthcare",
      "Interactive Power BI Dashboards",
      "Hospital & Patient Performance Metrics",
      "Data processing & visualization"
    ]
  },
  {
    title: "Bank Loan Report",
    category: "Data Analytics",
    image: imgBankLoan1,
    hoverImages: [imgBankLoan1, imgBankLoan2],
    link: "#",
    techStack: "Python, EDA, Power BI, SQL",
    features: [
      "Financial data analytics",
      "Interactive Power BI Dashboard",
      "Loan application & funding tracking",
      "Data processing with Python & SQL"
    ]
  }
];

export const SelectedWorks = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState('All');
  const [stickState, setStickState] = useState<'top' | 'fixed' | 'bottom'>('top');
  const [hoverImageIndex, setHoverImageIndex] = useState(0);
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Handle fixed positioning state to perfectly emulate sticky without CSS bugs
    if (latest <= 0.001) {
      setStickState('top');
    } else if (latest >= 0.999) {
      setStickState('bottom');
    } else {
      setStickState('fixed');
    }

    const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);
    const totalProjects = filteredProjects.length;
    if (totalProjects === 0) return;

    const threshold = 1 / totalProjects;
    const nextIndex = Math.min(
      Math.floor(latest / threshold),
      totalProjects - 1
    );

    if (nextIndex !== currentIndex && nextIndex >= 0) {
      setCurrentIndex(nextIndex);
      setHoverImageIndex(0); // Reset image index when changing project
    }
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const smoothX = useSpring(mouseX, { damping: 50, stiffness: 300 });
  const smoothY = useSpring(mouseY, { damping: 50, stiffness: 300 });

  const xFar = useTransform(smoothX, [-500, 500], [25, -25]);
  const yFar = useTransform(smoothY, [-500, 500], [25, -25]);

  const xNear = useTransform(smoothX, [-500, 500], [60, -60]);
  const yNear = useTransform(smoothY, [-500, 500], [60, -60]);

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);
  const currentProject = filteredProjects[currentIndex] || filteredProjects[0];

  return (
    <section
      id="work"
      ref={containerRef}
      className="bg-bg relative z-20"
      style={{ height: `${filteredProjects.length * 100}vh` }} // Make section tall enough to scroll through all projects
    >
      <div 
        className={`w-full h-[100vh] flex flex-col justify-center py-12 md:py-16 overflow-hidden ${
          stickState === 'fixed' ? 'fixed top-0 left-0 z-40' : 
          stickState === 'bottom' ? 'absolute bottom-0 left-0 w-full' : 
          'absolute top-0 left-0 w-full'
        }`}
      >
        <div className="max-w-[1200px] w-full mx-auto px-6 md:px-10 lg:px-16">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 gap-8"
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-px bg-stroke" />
                <span className="text-xs text-muted uppercase tracking-[0.3em]">Selected Work</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-light text-text-primary mb-4 tracking-tight">
                Featured <span className="font-display italic">projects</span>
              </h2>
              <p className="text-muted max-w-md text-sm md:text-base mb-6">
                Scroll to explore a selection of projects I've worked on, from concept to launch.
              </p>
              
              {/* Filter Buttons */}
              <div className="inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-black/50 p-1.5 gap-1 shadow-lg shadow-black/20">
                {['All', 'Data Analytics', 'AI'].map(cat => (
                  <button
                    key={cat}
                    onClick={() => {
                      setFilter(cat);
                      setCurrentIndex(0);
                      window.scrollTo({ top: containerRef.current?.offsetTop, behavior: 'smooth' });
                    }}
                    className={`text-xs sm:text-sm rounded-full px-4 py-2 transition-all ${
                      filter === cat
                        ? 'bg-white text-black font-medium shadow-sm'
                        : 'text-white/70 hover:text-white hover:bg-white/20'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3">
              {filteredProjects.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1.5 rounded-full transition-all duration-500 ${idx === currentIndex ? 'w-12 bg-gradient-to-r from-[#000000] to-[#4B5563]' : 'w-6 bg-stroke'}`}
                />
              ))}
            </div>
          </motion.div>

          {/* Carousel Content */}
          <div className="relative w-full h-[350px] sm:h-[450px] md:h-[550px]">
            <AnimatePresence>
              <motion.a
                key={currentIndex}
                href={currentProject.link}
                target="_blank"
                rel="noopener noreferrer"
                onMouseMove={handleMouseMove}
                onMouseEnter={() => {}}
                onMouseLeave={() => {
                  handleMouseLeave();
                  if (currentProject.hoverImages) {
                    setHoverImageIndex(prev => (prev + 1) % (currentProject.hoverImages as string[]).length);
                  }
                }}
                initial={{ opacity: 0, y: 40, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -40, scale: 0.98 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 block group w-full h-full bg-gradient-to-b from-surface to-bg border border-stroke rounded-[32px] overflow-hidden cursor-pointer"
              >
                {/* Floating App Window */}
                <div className="absolute inset-0 pt-8 sm:pt-12 px-8 sm:px-12 flex flex-col justify-end">
                  <div className="w-full h-full relative rounded-t-2xl overflow-hidden border border-stroke shadow-2xl transition-all duration-700 group-hover:-translate-y-6 group-hover:scale-[1.02] group-hover:shadow-[0_0_40px_rgba(137,170,204,0.15)] bg-bg">
                    {/* Fake Browser Header */}
                    <div className="h-6 sm:h-8 bg-black border-b border-white/10 flex items-center px-3 sm:px-4 gap-1.5 sm:gap-2 absolute top-0 left-0 right-0 z-10">
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#FF5F56]" />
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#FFBD2E]" />
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#27C93F]" />
                    </div>
                    <div className="absolute inset-0 overflow-hidden bg-[#0A0A0A] flex items-center justify-center">
                      <img
                        src={currentProject.hoverImages ? currentProject.hoverImages[hoverImageIndex] : currentProject.image}
                        alt={currentProject.title}
                        className="absolute top-6 sm:top-8 left-0 w-full h-[calc(100%-1.5rem)] sm:h-[calc(100%-2rem)] object-contain object-center group-hover:scale-[1.03] transition-all duration-700 ease-in-out p-2"
                      />
                    </div>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-between pointer-events-none z-20 bg-[#111111]/95 backdrop-blur-md overflow-hidden rounded-[32px]">

                  {/* 3D Moving Dots Background */}
                  <div className="absolute inset-0 pointer-events-none z-0 mix-blend-screen overflow-hidden rounded-[32px]">
                    {/* Far dots (slow) */}
                    <motion.div
                      style={{
                        x: xFar,
                        y: yFar,
                        backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
                        backgroundSize: "30px 30px"
                      }}
                      className="absolute -inset-20 opacity-20"
                    />
                    {/* Near dots (fast) */}
                    <motion.div
                      style={{
                        x: xNear,
                        y: yNear,
                        backgroundImage: "radial-gradient(circle, #ffffff 2px, transparent 2px)",
                        backgroundSize: "60px 60px"
                      }}
                      className="absolute -inset-20 opacity-10"
                    />
                  </div>

                  <div className="relative z-10 translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-100 flex flex-col p-8 sm:p-12">
                    <h3 className="text-3xl md:text-5xl font-display italic text-white mb-4 drop-shadow-md">{currentProject.title}</h3>

                    {currentProject.techStack && (
                      <div className="mb-6 drop-shadow-sm">
                        <h4 className="text-xs text-white/80 uppercase tracking-widest mb-3">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {currentProject.techStack.split(', ').map(tech => (
                            <span key={tech} className="px-3 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-xs text-white/90">{tech}</span>
                          ))}
                        </div>
                      </div>
                    )}

                    {currentProject.features && (
                      <div className="drop-shadow-sm">
                        <h4 className="text-xs text-white/80 uppercase tracking-widest mb-3">Key Features</h4>
                        <ul className="list-none space-y-2">
                          {currentProject.features.map(feature => (
                            <li key={feature} className="text-white/90 text-sm flex items-center gap-2 font-medium">
                              <div className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* View Button - Bottom Right */}
                  {currentProject.category !== "Data Analytics" && (
                    <div className="relative z-10 self-end translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-200 pointer-events-auto p-8 sm:p-12 pt-0 sm:pt-0">
                      <div className="relative p-[2px] rounded-full overflow-hidden inline-block group/btn shadow-xl">
                        <div className="absolute inset-0 accent-gradient" />
                        <div className="relative bg-white text-black px-6 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 transition-colors group-hover/btn:bg-transparent group-hover/btn:text-white">
                          View Live <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.a>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};
