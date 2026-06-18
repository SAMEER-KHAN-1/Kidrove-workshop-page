import { useState } from 'react';
import { faqs } from '../data/workshopData';
import { SectionHeader } from './WorkshopInfo';

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-2xl mx-auto px-6">
        <SectionHeader
          tag="FAQ"
          tagColor="text-violet-600 bg-violet-50"
          title="Frequently Asked Questions"
          subtitle="Got questions? We've got answers."
        />

        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-slate-200 rounded-2xl overflow-hidden">
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 transition-colors cursor-pointer"
              >
                <span className="font-semibold text-slate-900 pr-4 leading-snug">
                  {faq.question}
                </span>
                <span className="text-slate-400 text-xs flex-shrink-0">
                  {openIndex === index ? '▲' : '▼'}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-5 pb-5 pt-1 border-t border-slate-100">
                  <p className="text-slate-500 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
