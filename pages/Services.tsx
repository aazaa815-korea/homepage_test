
import React from 'react';

export const Services: React.FC = () => {
  const services = [
    {
      title: 'UI/UX Design Strategy',
      description: '사용자 리서치부터 고도화된 프로토타이핑까지, 비즈니스 성장을 위한 핵심 UI/UX를 설계합니다.',
      features: ['사용자 경험 설계', '와이어프레임 & 프로토타입', '디자인 시스템 구축', '사용성 테스트']
    },
    {
      title: 'Frontend Development',
      description: '디자인의 디테일을 완벽하게 구현하며, 성능과 접근성이 최적화된 인터페이스를 개발합니다.',
      features: ['React/Next.js 개발', 'TypeScript 기반 설계', '반응형 인터페이스', '애니메이션 & 인터랙션']
    },
    {
      title: 'Conversion Optimization',
      description: '데이터를 분석하여 이탈 지점을 파악하고, A/B 테스팅을 통해 실제 비즈니스 전환율을 높입니다.',
      features: ['GA4/Mixpanel 분석', 'A/B 테스트 설계', 'UX 라이팅 최적화', '성과 리포트 제공']
    }
  ];

  const steps = [
    { num: '01', title: 'Consultation', text: '프로젝트의 목적과 비즈니스 목표를 명확히 파악합니다.' },
    { num: '02', title: 'Research & Strategy', text: '시장 분석과 유저 리서치를 통해 전략적 접근법을 설정합니다.' },
    { num: '03', title: 'Design & Develop', text: '정의된 전략을 바탕으로 결과물을 반복적으로 다듬어 완성합니다.' },
    { num: '04', title: 'Impact Measure', text: '배포 후 데이터를 추적하여 실제 개선 효과를 측정합니다.' },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 pt-16 pb-24">
      <section className="mb-24 text-center">
        <h1 className="text-5xl font-black text-primary mb-6">Service & Process</h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
          저는 단순한 기능 구현을 넘어, 파트너의 비즈니스 목표를 달성하기 위한 전문 서비스를 제공합니다.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
        {services.map((s, idx) => (
          <div key={idx} className="bg-secondary p-10 rounded-3xl hover:bg-primary hover:text-white transition-all group">
            <h3 className="text-2xl font-bold mb-6 group-hover:text-accent">{s.title}</h3>
            <p className="mb-8 opacity-70 group-hover:opacity-100">{s.description}</p>
            <ul className="space-y-3">
              {s.features.map((f, fidx) => (
                <li key={fidx} className="text-sm font-semibold flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <section>
        <h2 className="text-3xl font-black mb-16 text-center">Working Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative pt-12">
              <span className="absolute top-0 left-0 text-6xl font-black text-secondary -z-10 group-hover:text-accent/10 transition-colors">
                {step.num}
              </span>
              <h4 className="text-xl font-bold mb-4">{step.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-32 bg-primary rounded-3xl p-12 text-center text-white">
        <h3 className="text-3xl font-bold mb-4">함께 성과를 만들어볼까요?</h3>
        <p className="text-gray-400 mb-10">귀사의 제품이 가진 잠재력을 수치로 증명해 드립니다.</p>
        <button className="px-12 py-4 bg-accent text-white rounded-full font-bold hover:bg-white hover:text-primary transition-all">
          무료 상담 신청하기
        </button>
      </div>
    </div>
  );
};
