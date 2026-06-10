import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    role: "Junior AI Engineer",
    company: "Affy Cloud IT Solutions",
    date: "Nov 2024 – Present",
    achievements: [
      "Designed and deployed enterprise-grade RAG pipelines",
      "Integrated LLMs into business workflows",
      "Built automated ETL pipelines",
      "Developed Power BI and Tableau dashboards",
      "Optimized large-scale SQL queries",
      "Delivered AI-driven insights to stakeholders"
    ]
  },
  {
    role: "Freelance AI & Data Consultant",
    company: "Self-Employed",
    date: "2023 – Present",
    achievements: [
      "Consulted with startups to build tailored AI solutions",
      "Automated business processes using Generative AI",
      "Developed custom analytics dashboards for clients",
      "Created scalable data architectures"
    ]
  }
];

const FloatingSkill = ({ iconUrl, altText, className, delay }: { iconUrl: string, altText: string, className: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className={`absolute flex ${className} z-0 pointer-events-auto`}
  >
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 4 + (delay % 2), repeat: Infinity, ease: "easeInOut", delay: delay }}
      className="group relative w-10 h-10 md:w-14 md:h-14 xl:w-16 xl:h-16 rounded-full bg-white border border-gray-200 shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all cursor-default"
    >
      <img src={iconUrl} alt={altText} className="w-6 h-6 md:w-8 md:h-8 xl:w-10 xl:h-10 object-contain" />

      {/* Custom Tooltip */}
      <div className="absolute top-full mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-3 py-1.5 bg-black/90 backdrop-blur-md text-white text-xs font-medium rounded-lg pointer-events-none whitespace-nowrap shadow-xl z-[100] -translate-y-2 group-hover:translate-y-0">
        {altText}
      </div>
    </motion.div>
  </motion.div>
);

export const ExperienceSection = () => {
  return (
    <section id="experience" className="bg-white py-20 relative z-20 overflow-hidden">
      {/* Floating Skills (Left) */}
      <FloatingSkill altText="Python" iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" delay={0.2} className="top-[15%] left-[5%]" />
      <FloatingSkill altText="Pandas" iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" delay={0.4} className="top-[28%] left-[12%]" />
      <FloatingSkill altText="NumPy" iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" delay={0.3} className="top-[40%] left-[3%]" />
      <FloatingSkill altText="Power BI" iconUrl="https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" delay={0.5} className="top-[55%] left-[9%]" />
      <FloatingSkill altText="Git" iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" delay={0.4} className="top-[70%] left-[2%]" />
      <FloatingSkill altText="Jupyter" iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg" delay={0.6} className="top-[85%] left-[10%]" />

      {/* Floating Skills (Right) */}
      <FloatingSkill altText="PostgreSQL" iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" delay={0.2} className="top-[12%] right-[8%]" />
      <FloatingSkill altText="Scikit-learn" iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" delay={0.4} className="top-[25%] right-[3%]" />
      <FloatingSkill altText="Tableau" iconUrl="https://upload.wikimedia.org/wikipedia/commons/4/4b/Tableau_Logo.png" delay={0.5} className="top-[42%] right-[11%]" />
      <FloatingSkill altText="Excel" iconUrl="https://img.icons8.com/color/144/microsoft-excel-2019--v1.png" delay={0.3} className="top-[58%] right-[4%]" />
      <FloatingSkill altText="VS Code" iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" delay={0.6} className="top-[72%] right-[9%]" />
      <FloatingSkill altText="GitHub" iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" delay={0.4} className="top-[88%] right-[3%]" />

      <div className="max-w-[1000px] mx-auto px-6 md:px-10 lg:px-16 relative z-10 pointer-events-none">
        <div className="pointer-events-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-16 md:mb-24"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-gray-300" />
              <span className="text-xs text-gray-600 uppercase tracking-[0.3em]">Professional Experience</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-light text-black mb-6 tracking-tight">
              My <span className="font-display italic">journey</span>
            </h2>
            <p className="text-gray-600 max-w-xl text-sm md:text-base leading-relaxed">
              A timeline of my professional work and consulting experience. I specialize in building AI-powered applications, engineering scalable data pipelines, and delivering data-driven business insights.
            </p>
          </motion.div>

          {/* Timeline Container */}
          <div className="relative pl-6 md:pl-10">

            {/* Timeline Vertical Line */}
            <div className="absolute left-[11px] md:left-[19px] top-4 bottom-0 w-[2px] bg-gray-300 overflow-hidden">
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="w-full bg-text-primary"
              />
            </div>

            {/* Experience Items */}
            {experiences.map((exp, expIdx) => (
              <motion.div
                key={expIdx}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
                className="relative pb-16 group"
              >
                {/* Glowing Dot */}
                <div className="absolute -left-[30px] md:-left-[43px] top-[14px] w-6 h-6 rounded-full bg-white border-4 border-gray-200 flex items-center justify-center z-10 transition-transform duration-500 group-hover:scale-125 group-hover:border-black/10">
                  <div className="w-2.5 h-2.5 rounded-full accent-gradient shadow-[0_0_15px_rgba(137,170,204,1)] animate-pulse" />
                </div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative bg-gray-50 border border-gray-200 rounded-3xl p-6 md:p-10 transition-colors hover:border-gray-300 overflow-hidden cursor-pointer"
                >
                  {/* Subtle Animated Background Gradient */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                    <div className="absolute inset-0 accent-gradient opacity-10 mix-blend-screen" />
                    <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black/5 to-transparent" />
                  </div>

                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-display italic text-black mb-2 drop-shadow-md">
                          {exp.role}
                        </h3>
                        <div className="text-lg font-medium text-black/80">
                          {exp.company}
                        </div>
                      </div>

                      <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-gray-200 bg-white/50 text-xs md:text-sm text-gray-600 whitespace-nowrap h-fit shadow-inner group-hover:text-black group-hover:border-black/10 transition-all">
                        {exp.date}
                      </div>
                    </div>

                    {/* Achievements Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                      {exp.achievements.map((item, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          whileHover={{ x: 10 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.3 + (idx * 0.1) }}
                          className="flex items-start gap-3 group/item"
                        >
                          <CheckCircle2 className="w-5 h-5 text-black/40 shrink-0 mt-0.5 group-hover/item:text-black transition-colors duration-300" />
                          <span className="text-gray-600 leading-relaxed text-sm md:text-base group-hover/item:text-black transition-colors duration-300">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};
