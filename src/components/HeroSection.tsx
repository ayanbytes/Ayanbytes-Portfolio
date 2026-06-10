import React, { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';
import { gsap } from 'gsap';
import { Mail } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import profile1 from '../assets/profile1.jpg';
import profile2 from '../assets/profile2.jpg';

const roles = ["Junior AI Engineer", "Data Analyst", "Generative AI Developer"];

export const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);

  // 3D Hover Effect Hooks
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const smoothX = useSpring(mouseX, { damping: 20, stiffness: 100 });
  const smoothY = useSpring(mouseY, { damping: 20, stiffness: 100 });
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-15, 15]);

  // Handle HLS Video
  useEffect(() => {
    const video = videoRef.current;
    const videoSrc = "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

    if (video) {
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(videoSrc);
        hls.attachMedia(video);
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = videoSrc;
      }
    }
  }, []);

  // Handle Role cycle
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Handle Entrance Animations
  useEffect(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(".name-reveal",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2 },
      0.1
    );

    tl.fromTo(".blur-in",
      { opacity: 0, filter: "blur(10px)", y: 20 },
      { opacity: 1, filter: "blur(0px)", y: 0, duration: 1, stagger: 0.1 },
      0.3
    );

  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-screen overflow-hidden bg-bg">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="min-w-full min-h-full object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 w-full h-full flex flex-col items-center justify-center text-center px-4">

        {/* Floating Left Image Box */}
        <motion.div
          className="blur-in relative lg:absolute mb-8 lg:mb-0 lg:left-20 xl:left-24 lg:top-[30%] lg:-translate-y-1/2 w-[180px] sm:w-[220px] lg:w-[280px] xl:w-[360px] aspect-[4/5] rounded-3xl lg:rounded-[2rem] overflow-hidden border border-stroke bg-surface shadow-2xl z-20 group"
          style={{ rotateX, rotateY, transformPerspective: 1000 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="absolute inset-0 group-hover:bg-transparent transition-colors duration-500 z-30 pointer-events-none" />

          {/* Default Image */}
          <img
            src={profile2}
            alt="Ayan Profile"
            className="absolute inset-0 w-full h-full object-cover transition-all duration-[1s] ease-in-out group-hover:opacity-0 group-hover:scale-105"
          />

          {/* Hover Image */}
          <img
            src={profile1}
            alt="Ayan Profile Alt"
            className="absolute inset-0 w-full h-full object-cover opacity-0 scale-105 transition-all duration-[1s] ease-in-out group-hover:opacity-100 group-hover:scale-100"
          />
        </motion.div>
        <p className="blur-in text-xs text-white/70 uppercase tracking-[0.3em] mb-8">
          PORTFOLIO '26
        </p>

        <h1 className="name-reveal font-display italic leading-[0.9] tracking-tight text-white mb-6" style={{ fontSize: "clamp(4rem, 12vw, 10rem)" }}>
          Ayan
        </h1>

        <div className="blur-in text-lg md:text-2xl lg:text-3xl font-light text-white/90 mb-8 flex items-center gap-2">
          A <span key={roleIndex} className="font-display italic text-white animate-role-fade-in inline-block font-semibold mx-1 text-2xl md:text-4xl">{roles[roleIndex]}</span> based in Bhopal.
        </div>

        <p className="blur-in text-sm md:text-base text-white/80 max-w-lg mb-12 leading-relaxed">
          Results-driven AI Engineer with 1.5+ years of experience building AI-powered applications, RAG systems, LLM integrations, automated data pipelines, and analytics dashboards.
        </p>

        <div className="blur-in flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative rounded-full cursor-pointer"
          >
            <span className="absolute -inset-[2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative bg-white text-black group-hover:bg-black group-hover:text-white px-7 py-3.5 rounded-full text-sm font-medium transition-all group-hover:scale-105 duration-300">
              See Works
            </div>
          </a>

          <a href="mailto:Ayanhabib.28s@gmail.com" target="_blank" rel="noopener noreferrer" className="group relative rounded-full">
            <span className="absolute -inset-[2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative border-2 border-white/20 bg-transparent text-white hover:bg-white hover:text-black px-7 py-3.5 rounded-full text-sm font-medium transition-all group-hover:scale-105 duration-300 flex items-center gap-2">
              Reach out <Mail className="w-4 h-4" />
            </div>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4">
        <span className="text-[10px] text-white/50 uppercase tracking-[0.2em]">SCROLL</span>
        <div className="w-px h-10 bg-white/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-scroll-down" />
        </div>
      </div>
    </section>
  );
};
