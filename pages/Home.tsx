
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { Category } from '../types';

export const Home: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<Category>(Category.ALL);

  const filteredProjects = useMemo(() => {
    if (activeFilter === Category.ALL) return PROJECTS;
    return PROJECTS.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="max-w-7xl mx-auto px-6 pt-16">
      {/* Intro Hero */}
      <section className="mb-24">
        <h1 className="text-5xl md:text-7xl font-black text-primary leading-tight mb-8">
          숫자로 증명하는 디자인,<br />
          <span className="text-accent">결과로 말하는</span> 개발.
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mb-12">
          심미성을 넘어 비즈니스 임팩트를 창출합니다. 데이터에 기반한 의사결정 과정을 확인하세요. 함께 성장할 준비가 된 4년 차 전문가입니다.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-100 pt-12">
          <div>
            <div className="text-3xl font-bold text-primary">40%</div>
            <div className="text-sm text-gray-400">평균 전환율 향상</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">5+</div>
            <div className="text-sm text-gray-400">년차 경력</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">24+</div>
            <div className="text-sm text-gray-400">완료 프로젝트</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary">100%</div>
            <div className="text-sm text-gray-400">고객 만족도</div>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="flex gap-4 mb-12 overflow-x-auto pb-4 no-scrollbar">
        {Object.values(Category).map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
              activeFilter === cat
                ? 'bg-primary text-white'
                : 'bg-secondary text-gray-500 hover:bg-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {filteredProjects.map((project) => (
          <Link
            key={project.id}
            to={`/projects/${project.id}`}
            className="group block break-inside-avoid overflow-hidden rounded-2xl bg-secondary relative"
          >
            <div className="relative overflow-hidden">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="p-6">
              <span className="text-xs font-bold text-accent uppercase tracking-wider mb-2 block">
                {project.category}
              </span>
              <h3 className="text-xl font-bold text-primary leading-snug group-hover:text-accent transition-colors">
                {project.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
