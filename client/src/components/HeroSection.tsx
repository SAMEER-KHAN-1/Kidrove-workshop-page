import React from 'react';
import { workshopDetails } from '../data/workshopData';

interface ChipProps {
  icon: string;
  children: React.ReactNode;
  accent?: boolean;
}

function Chip({ icon, children, accent = false }: ChipProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border ${
        accent
          ? 'bg-orange-500/15 border-orange-500/30 text-orange-400'
          : 'bg-white/7 border-white/10 text-white/80'
      }`}
    >
      {icon} {children}
    </span>
  );
}

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
      style={{ background: 'linear-gradient(140deg, #060c1f 0%, #1a1050 55%, #2d1b69 100%)' }}
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative max-w-3xl mx-auto px-6 py-20 text-center w-full">
        {/* Live badge */}
        <div className="inline-flex items-center gap-2 bg-orange-500/12 border border-orange-500/25 px-4 py-1.5 rounded-full mb-8">
          <span className="w-2 h-2 bg-orange-500 rounded-full shadow-[0_0_8px_#f97316]" />
          <span className="text-orange-400 text-xs font-semibold tracking-widest uppercase">
            Enrollments Open · Starts {workshopDetails.startDate}
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-6">
          AI &amp; Robotics
          <br />
          <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
            Summer Workshop
          </span>
        </h1>

        <p className="text-lg md:text-xl text-white/60 max-w-xl mx-auto mb-10 leading-relaxed">
          {workshopDetails.tagline}. A hands-on 4-week online journey
          into AI and robotics for kids aged 8–14.
        </p>

        {/* Info chips */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          <Chip icon="👦">Age {workshopDetails.ageGroup}</Chip>
          <Chip icon="📅">{workshopDetails.duration}</Chip>
          <Chip icon="💻">{workshopDetails.mode}</Chip>
          <Chip accent icon="🏷️">{workshopDetails.fee} Only</Chip>
        </div>

        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#register"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors shadow-lg shadow-orange-500/30"
          >
            Register Now →
          </a>
          <a
            href="#details"
            className="bg-white/7 border border-white/15 hover:bg-white/12 text-white/85 px-8 py-4 rounded-xl text-lg transition-colors"
          >
            Learn More ↓
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
