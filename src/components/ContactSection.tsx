import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Globe, Link, Send } from 'lucide-react';
import robotImg from '../assets/3d-robot-transparent.png';

export const ContactSection = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xnjoqleo", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  // Speak the message when success state is reached
  useEffect(() => {
    if (status === 'success' && 'speechSynthesis' in window) {
      // Small delay to match the popup animation timing
      setTimeout(() => {
        const msg = new SpeechSynthesisUtterance("Message is sent! I'll be back to you shortly.");
        msg.pitch = 1.2; // slightly higher pitch for a cute robot voice
        msg.rate = 1.1;  // slightly faster
        window.speechSynthesis.speak(msg);
      }, 500);
    }
  }, [status]);

  return (
    <section id="contact" className="bg-bg py-24 relative z-20 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-16 md:mb-24"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted uppercase tracking-[0.3em]">Contact</span>
          </div>
          <h2 className="text-4xl md:text-7xl font-light text-text-primary mb-6 tracking-tight">
            Let's build <br className="hidden md:block" />
            <span className="font-display italic text-muted">something great</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left Column: Info & Links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col justify-between"
          >
            <div>
              <p className="text-muted text-lg md:text-xl leading-relaxed max-w-md mb-12">
                I'm currently available for freelance projects and full-time opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>

              <div className="space-y-6">
                <a href="mailto:Ayanhabib.28s@gmail.com" className="flex items-center gap-4 text-text-primary hover:text-[#000000] transition-colors group w-fit">
                  <div className="w-12 h-12 rounded-full border border-stroke bg-surface flex items-center justify-center group-hover:border-[#000000] transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-lg font-medium">Ayanhabib.28s@gmail.com</span>
                </a>

                <a href="https://www.linkedin.com/in/ayan0211/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-text-primary hover:text-[#000000] transition-colors group w-fit">
                  <div className="w-12 h-12 rounded-full border border-stroke bg-surface flex items-center justify-center group-hover:border-[#000000] transition-colors">
                    <Link className="w-5 h-5" />
                  </div>
                  <span className="text-lg font-medium">LinkedIn</span>
                </a>

                <a href="https://github.com/ayanbytes" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-text-primary hover:text-[#000000] transition-colors group w-fit">
                  <div className="w-12 h-12 rounded-full border border-stroke bg-surface flex items-center justify-center group-hover:border-[#000000] transition-colors">
                    <Globe className="w-5 h-5" />
                  </div>
                  <span className="text-lg font-medium">GitHub</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[400px] overflow-hidden relative">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="flex flex-col items-center relative z-10"
                >
                  <img 
                    src={robotImg} 
                    alt="3D Robot Thumbs Up" 
                    className="w-56 h-56 md:w-64 md:h-64 object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,0.15)]" 
                  />
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                    className="bg-white border-2 border-stroke border-b-[6px] border-r-[4px] rounded-3xl p-6 mt-4 text-center shadow-xl"
                  >
                    <h3 className="text-2xl font-bold text-text-primary mb-2">Message Sent!</h3>
                    <p className="text-muted font-medium">I'll get back to you shortly.</p>
                    
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-6 w-full bg-black text-white px-6 py-3 rounded-xl font-bold transition-transform hover:-translate-y-1 hover:shadow-lg active:translate-y-0"
                    >
                      Send Another
                    </button>
                  </motion.div>
                </motion.div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                <div className="flex flex-col gap-2 relative group">
                  <label htmlFor="name" className="text-sm font-bold text-text-primary uppercase tracking-widest pl-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Ayan"
                    className="w-full bg-white border-2 border-stroke border-b-[6px] border-r-[4px] rounded-2xl px-6 py-4 text-text-primary placeholder:text-muted focus:outline-none transition-all hover:-translate-y-1 hover:border-b-[8px] hover:shadow-xl focus:border-b-2 focus:border-r-2 focus:translate-y-[4px] focus:translate-x-[2px] focus:border-black focus:shadow-inner"
                  />
                </div>

                <div className="flex flex-col gap-2 relative group">
                  <label htmlFor="email" className="text-sm font-bold text-text-primary uppercase tracking-widest pl-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Ayan@example.com"
                    className="w-full bg-white border-2 border-stroke border-b-[6px] border-r-[4px] rounded-2xl px-6 py-4 text-text-primary placeholder:text-muted focus:outline-none transition-all hover:-translate-y-1 hover:border-b-[8px] hover:shadow-xl focus:border-b-2 focus:border-r-2 focus:translate-y-[4px] focus:translate-x-[2px] focus:border-black focus:shadow-inner"
                  />
                </div>

                <div className="flex flex-col gap-2 relative group">
                  <label htmlFor="message" className="text-sm font-bold text-text-primary uppercase tracking-widest pl-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full bg-white border-2 border-stroke border-b-[6px] border-r-[4px] rounded-2xl px-6 py-4 text-text-primary placeholder:text-muted focus:outline-none transition-all hover:-translate-y-1 hover:border-b-[8px] hover:shadow-xl focus:border-b-2 focus:border-r-2 focus:translate-y-[4px] focus:translate-x-[2px] focus:border-black focus:shadow-inner resize-none"
                  />
                </div>

                {status === 'error' && (
                  <p className="text-[#FF5F56] text-sm font-bold pl-2">Oops! There was a problem submitting your form. Please try again.</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="bg-black text-white border-2 border-black border-b-[6px] border-r-[4px] rounded-2xl px-10 py-4 font-bold tracking-wide flex items-center gap-3 transition-all hover:-translate-y-1 hover:border-b-[8px] hover:shadow-xl active:border-b-2 active:border-r-2 active:translate-y-[4px] active:translate-x-[2px] disabled:opacity-50 disabled:cursor-not-allowed self-start mt-2"
                >
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                  {status !== 'submitting' && <Send className="w-5 h-5" />}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
};
