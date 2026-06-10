import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Bot, BarChart3, Database, Sparkles, ArrowRight } from 'lucide-react';

interface Service {
  icon: React.ReactElement<{ className?: string }>;
  title: string;
  description: string;
  tags: string[];
  span: string;
  visual?: React.ReactNode;
}

const services: Service[] = [
  {
    icon: <Bot className="w-6 h-6" />,
    title: "Freelance AI Solutions",
    description: "As an independent AI consultant, I partner with businesses to integrate custom LLMs and automate complex workflows. From concept to deployment, I deliver tailored AI solutions that drive real ROI.",
    tags: ["OpenAI API", "LangChain", "Consulting"],
    span: "col-span-1 md:col-span-2 lg:col-span-2 row-span-1",
    visual: (
      <div className="mt-4 w-full max-w-xl mx-auto rounded-xl border border-white/10 bg-[#050505] overflow-hidden flex flex-col shadow-2xl relative">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/5">
          <div className="flex gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
          </div>
          <span className="text-xs text-white/40 ml-3 font-mono">workflow-agent.ts</span>
        </div>
        <div className="p-4 flex flex-col gap-2 font-mono text-[11px] sm:text-xs">
          <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="text-cyan-400">
            $ initialize_agent --mode=autonomous --verbose
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.8 }} className="text-white/60">
            [System]: Connecting to primary LLM cluster... <span className="text-green-400">OK</span>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.4 }} className="text-white/60">
            [System]: Initializing LangChain core memory... <span className="text-green-400">Allocated</span>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 2.0 }} className="text-white/60">
            [Data]: Ingesting enterprise documents... <span className="text-green-400">14,203 vectors embedded</span>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 2.6 }} className="text-white/60">
            [Agent]: Compiling decision tree routing matrix... <span className="text-yellow-400">Processing</span>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 3.2 }} className="text-white/60">
            [Network]: Secure DB websocket connection... <span className="text-green-400">Established</span>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 3.8 }} className="text-white/60 flex items-center gap-2">
            [Agent]: Workflow automation matrix deployed and ready. <span className="w-2.5 h-5 bg-cyan-400 animate-pulse inline-block" />
          </motion.div>
        </div>
      </div>
    )
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Custom RAG Systems",
    description: "I build secure, enterprise-grade Retrieval-Augmented Generation (RAG) applications that allow your team to chat directly with your proprietary data and internal documents.",
    tags: ["Vector DBs", "Embeddings", "Custom AI"],
    span: "col-span-1 md:col-span-2 lg:col-span-1 row-span-1"
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Data Analytics & BI",
    description: "I help clients transform scattered data into clear, actionable insights by developing interactive dashboards and predictive models that inform strategic decisions.",
    tags: ["Tableau", "PowerBI", "Python"],
    span: "col-span-1 md:col-span-2 lg:col-span-1 row-span-1"
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Scalable Data Pipelines",
    description: "Offering end-to-end data engineering services. I design and maintain robust ETL pipelines to ensure your business data is always clean, synchronized, and ready for analysis.",
    tags: ["ETL", "SQL", "Automation"],
    span: "col-span-1 md:col-span-2 lg:col-span-2 row-span-1"
  }
];

const ServiceCard = ({ service, index }: { service: Service, index: number }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
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

  const smoothX = useSpring(mouseX, { damping: 20, stiffness: 100 });
  const smoothY = useSpring(mouseY, { damping: 20, stiffness: 100 });
  const translateX1 = useTransform(smoothX, [-200, 200], [-10, 10]);
  const translateY1 = useTransform(smoothY, [-200, 200], [-10, 10]);
  const translateX2 = useTransform(smoothX, [-200, 200], [-25, 25]);
  const translateY2 = useTransform(smoothY, [-200, 200], [-25, 25]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
      className={`cursor-pointer group relative overflow-hidden rounded-[32px] bg-[#0A0A0A] border border-white/5 p-6 lg:p-8 flex flex-col justify-between hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-black/20 min-h-[320px] ${service.span}`}
    >
      {/* Dot Pattern Background */}
      <motion.div 
        className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at center, white 1.5px, transparent 1.5px)',
          backgroundSize: '24px 24px',
          x: translateX1,
          y: translateY1
        }}
      />
      <motion.div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at center, white 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          opacity: 0.02,
          x: translateX2,
          y: translateY2
        }}
      />

      {/* Hover Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />

      <div className="relative z-10 flex-grow flex flex-col">
        <div className="mb-6 text-cyan-400 group-hover:text-cyan-300 transform group-hover:scale-110 group-hover:-translate-y-1 origin-left transition-all duration-500">
          {React.cloneElement(service.icon, { className: "w-8 h-8" })}
        </div>
        <h3 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-500 mb-3 tracking-tight pb-1">
          {service.title}
        </h3>
        <p className="text-white/80 text-sm md:text-base leading-relaxed mb-6 group-hover:text-white transition-colors duration-500">
          {service.description}
        </p>

        {service.visual && (
          <div className="w-full mb-6 flex-grow flex flex-col justify-start">
            {service.visual}
          </div>
        )}
      </div>

      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 mt-auto pt-4 border-t border-white/5">
        <div className="flex flex-wrap gap-2">
          {service.tags.map((tag: string, i: number) => (
            <span key={i} className="px-4 py-1.5 text-xs font-medium uppercase tracking-wider rounded-full bg-white/10 border border-white/20 text-white shadow-sm">
              {tag}
            </span>
          ))}
        </div>
        <div className="w-10 h-10 rounded-full bg-zinc-800 text-white flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 hover:bg-white hover:text-black">
          <ArrowRight className="w-5 h-5" />
        </div>
      </div>
    </motion.div>
  );
};

export const ServicesSection = () => {
  return (
    <section id="services" className="bg-bg py-24 relative z-20 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-16 md:mb-24 flex flex-col gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-[2px] bg-black" />
            <span className="text-sm font-semibold uppercase tracking-[0.4em] text-black">Expertise</span>
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-text-primary tracking-tighter leading-none">
            Services.
          </h2>
          <p className="text-black/60 text-lg md:text-xl max-w-2xl mt-4 font-light">
            Providing high-quality freelance consulting services to help startups and enterprises leverage AI architectures and automated data pipelines.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-6 auto-rows-auto">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}

        </div>

      </div>
    </section>
  );
};
