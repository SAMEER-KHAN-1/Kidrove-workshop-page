import { workshopDetails } from '../data/workshopData';

const details = [
  { icon: '👦', label: 'Age Group',    value: workshopDetails.ageGroup,  accent: false },
  { icon: '⏱️', label: 'Duration',     value: workshopDetails.duration,  accent: false },
  { icon: '💻', label: 'Mode',         value: workshopDetails.mode,      accent: false },
  { icon: '🏷️', label: 'Workshop Fee', value: workshopDetails.fee,       accent: true  },
  { icon: '🗓️', label: 'Start Date',   value: workshopDetails.startDate, accent: false },
];

interface SectionHeaderProps {
  tag: string;
  tagColor: string;
  title: string;
  subtitle: string;
}

export function SectionHeader({ tag, tagColor, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="text-center mb-14">
      <span className={`inline-block text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4 ${tagColor}`}>
        {tag}
      </span>
      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">{title}</h2>
      <p className="text-slate-500 text-lg max-w-md mx-auto">{subtitle}</p>
    </div>
  );
}

function WorkshopInfo() {
  return (
    <section id="details" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader
          tag="Workshop Details"
          tagColor="text-blue-600 bg-blue-50"
          title="Workshop at a Glance"
          subtitle="Everything you need to know about the AI & Robotics Summer Workshop."
        />

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {details.map((item) => (
            <div
              key={item.label}
              className={`rounded-2xl border p-6 text-center ${
                item.accent ? 'bg-orange-50 border-orange-200' : 'bg-slate-50 border-slate-200'
              }`}
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <p className={`text-xs font-bold uppercase tracking-widest mb-2 ${
                item.accent ? 'text-orange-400' : 'text-slate-400'
              }`}>{item.label}</p>
              <p className={`text-xl font-bold ${item.accent ? 'text-orange-600' : 'text-slate-900'}`}>
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkshopInfo;
