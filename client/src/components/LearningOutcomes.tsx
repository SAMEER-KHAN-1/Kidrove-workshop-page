import React from 'react';
import { learningOutcomes } from '../data/workshopData';
import { SectionHeader } from './WorkshopInfo';

function LearningOutcomes() {
  return (
    <section id="outcomes" className="py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader
          tag="Learning Outcomes"
          tagColor="text-green-600 bg-green-50"
          title="What Your Child Will Learn"
          subtitle="Practical, future-ready skills that extend well beyond the workshop."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {learningOutcomes.map((item) => (
            <div
              key={item.title}
              className="bg-white border border-slate-200 rounded-2xl p-6 flex gap-4 items-start hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <div className="w-12 h-12 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1.5">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LearningOutcomes;
