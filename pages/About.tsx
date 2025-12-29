
import React from 'react';
import { EXPERIENCES } from '../constants';

export const About: React.FC = () => {
  const skills = [
    { category: 'Product Design', items: ['Figma', 'Prototyping', 'Design System', 'User Research'] },
    { category: 'Development', items: ['React', 'TypeScript', 'Node.js', 'Next.js', 'Tailwind CSS'] },
    { category: 'Analysis', items: ['Mixpanel', 'Google Analytics', 'SQL', 'A/B Testing'] },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 pt-16 pb-24">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32 items-center">
        <div>
          <h1 className="text-5xl font-black text-primary mb-8 leading-tight">
            저는 심미성과 효율성을<br />
            <span className="text-accent">동시에 설계하는</span><br />
            전문가입니다.
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            3년 이상의 실무 경험을 통해 단순한 시각적 개선을 넘어, 비즈니스의 문제를 해결하고 수치화된 성과를 만들어내는 것에 가치를 둡니다.
            디자인과 개발의 경계를 허물고 사용자 중심의 최적의 솔루션을 제안합니다.
          </p>
          <button className="px-8 py-3 bg-primary text-white rounded-full font-bold hover:shadow-lg transition-all">
            Resume Download
          </button>
        </div>
        <div className="relative">
          <img
            src="https://picsum.photos/seed/profile/800/1000"
            alt="Profile"
            className="rounded-3xl shadow-2xl relative z-10"
          />
          <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-accent rounded-3xl -z-0" />
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
        {/* Experience Timeline */}
        <div className="md:col-span-7">
          <h2 className="text-3xl font-black mb-12">Experience</h2>
          <div className="space-y-12">
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="relative pl-8 border-l-2 border-gray-100">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent border-4 border-white shadow-sm" />
                <div className="mb-2">
                  <span className="text-sm font-bold text-accent">{exp.period}</span>
                </div>
                <h3 className="text-xl font-bold text-primary">{exp.company}</h3>
                <p className="text-gray-500 font-medium mb-4">{exp.position}</p>
                <ul className="space-y-2">
                  {exp.tasks.map((task, tidx) => (
                    <li key={tidx} className="text-gray-600 flex gap-2">
                      <span className="text-accent">•</span> {task}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="md:col-span-5">
          <h2 className="text-3xl font-black mb-12">Core Skills</h2>
          <div className="space-y-8">
            {skills.map((group, idx) => (
              <div key={idx}>
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">
                  {group.category}
                </h4>
                <div className="flex flex-wrap gap-3">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-secondary text-primary text-sm font-bold rounded-xl border border-gray-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
