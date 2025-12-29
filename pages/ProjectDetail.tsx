
import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export const ProjectDetail: React.FC = () => {
  const { id } = useParams();
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) return <Navigate to="/" />;

  return (
    <div className="max-w-5xl mx-auto px-6 pt-16 pb-24">
      <Link to="/" className="text-sm font-bold text-gray-400 hover:text-primary mb-12 inline-block transition-colors">
        ← Back to Projects
      </Link>

      <header className="mb-16">
        <span className="text-sm font-bold text-accent uppercase tracking-widest block mb-4">
          {project.category} / {project.role}
        </span>
        <h1 className="text-4xl md:text-6xl font-black text-primary mb-8 leading-tight">
          {project.title}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-gray-100 pt-12">
          {project.impactMetrics.map((metric, idx) => (
            <div key={idx}>
              <div className="text-4xl font-black text-primary">{metric.value}</div>
              <div className="text-sm font-bold text-gray-800 uppercase mt-1">{metric.label}</div>
              <div className="text-xs text-gray-400 mt-1">{metric.subtext}</div>
            </div>
          ))}
        </div>
      </header>

      <img
        src={project.thumbnail}
        alt={project.title}
        className="w-full aspect-video object-cover rounded-3xl mb-24 shadow-2xl shadow-gray-200"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
        <div className="lg:col-span-4 space-y-12">
          <div>
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Challenge</h4>
            <p className="text-lg text-gray-700 leading-relaxed">
              {project.challenge}
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Solution</h4>
            <p className="text-lg text-gray-700 leading-relaxed">
              {project.solution}
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">My Role</h4>
            <p className="text-lg text-gray-700">
              {project.role} ({project.contribution}%)
            </p>
          </div>
        </div>

        <div className="lg:col-span-8 bg-secondary rounded-3xl p-8 md:p-12">
          <h4 className="text-xl font-bold text-primary mb-8">성능 지표 개선 추이 (Before vs After)</h4>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={project.results}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#9CA3AF', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#9CA3AF', fontSize: 12}} />
                <Tooltip
                  cursor={{fill: 'rgba(37, 99, 235, 0.05)'}}
                  contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'}}
                />
                <Legend iconType="circle" wrapperStyle={{paddingTop: '20px'}} />
                <Bar name="변경 전" dataKey="before" fill="#D1D5DB" radius={[4, 4, 0, 0]} />
                <Bar name="변경 후" dataKey="after" fill="#2563EB" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-sm text-gray-400 mt-6 text-center italic">
            * 프로젝트 진행 기간 동안 수집된 실제 프로덕션 데이터를 기반으로 합니다.
          </p>
        </div>
      </div>

      <div className="border-t border-gray-100 pt-16 flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-2">이 프로젝트에 대해 더 궁금하신가요?</h3>
          <p className="text-gray-500">상세한 프로세스 문서와 레퍼런스를 공유해 드릴 수 있습니다.</p>
        </div>
        <Link to="/contact" className="px-10 py-4 bg-primary text-white rounded-full font-bold hover:bg-accent transition-colors">
          상담 신청하기
        </Link>
      </div>
    </div>
  );
};
