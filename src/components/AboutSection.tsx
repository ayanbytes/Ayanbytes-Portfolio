import { motion } from 'framer-motion';
import { BrainCircuit, Database, LineChart } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="about" className="bg-bg py-20 relative z-20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-12 md:mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted uppercase tracking-[0.85em]">About Me</span>
          </div>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Main Typography Block */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:col-span-7"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-text-primary leading-[1.1] tracking-tight mb-8">
              I am a results-driven <br/>
              <span className="font-display italic text-transparent bg-clip-text bg-gradient-to-r from-[#000000] to-[#4B5563]">AI Engineer</span> <br/>
              with 1.5+ years of experience.
            </h2>
            <div className="space-y-6 text-text-primary/80 text-base md:text-lg leading-relaxed max-w-2xl font-light">
              <p>
                I specialize in developing cutting-edge RAG systems, LLM integrations, and automated data pipelines. My goal is to transform complex datasets into actionable business insights and create scalable, intelligent solutions that drive real-world impact.
              </p>
              <p>
                Whether I'm engineering a robust backend pipeline, optimizing SQL queries, or designing interactive Power BI and Tableau dashboards, I focus on bridging the gap between raw data and strategic business value.
              </p>
            </div>
          </motion.div>

          {/* Key Pillars */}
          <div className="lg:col-span-4 lg:col-start-9 flex flex-col gap-6">
             <motion.div 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.6, delay: 0.4 }}
               className="p-6 rounded-3xl bg-surface border border-stroke"
             >
                <BrainCircuit className="w-8 h-8 text-text-primary mb-4 opacity-80" />
                <h3 className="text-lg font-medium text-text-primary mb-2">Generative AI</h3>
                <p className="text-sm text-muted">Building RAG pipelines and custom LLM integrations for intelligent workflows.</p>
             </motion.div>
             
             <motion.div 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.6, delay: 0.5 }}
               className="p-6 rounded-3xl bg-surface border border-stroke"
             >
                <Database className="w-8 h-8 text-text-primary mb-4 opacity-80" />
                <h3 className="text-lg font-medium text-text-primary mb-2">Data Engineering</h3>
                <p className="text-sm text-muted">Designing scalable ETL pipelines and optimizing large-scale SQL architectures.</p>
             </motion.div>

             <motion.div 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.6, delay: 0.6 }}
               className="p-6 rounded-3xl bg-surface border border-stroke"
             >
                <LineChart className="w-8 h-8 text-text-primary mb-4 opacity-80" />
                <h3 className="text-lg font-medium text-text-primary mb-2">Data Analytics</h3>
                <p className="text-sm text-muted">Developing interactive dashboards in Power BI and Tableau for stakeholders.</p>
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
