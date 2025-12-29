
import { Category, Project, Experience } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'E-commerce Redesign for 40% Conversion Growth',
    category: Category.UIUX,
    thumbnail: 'https://picsum.photos/seed/ui1/800/1000',
    description: 'A comprehensive overhaul of a leading retail platform focusing on checkout friction reduction.',
    role: 'Lead Product Designer',
    contribution: 80,
    challenge: 'High drop-off rates at the payment stage and confusing navigation for mobile users.',
    solution: 'Simplified the 5-step checkout to a single-page reactive form and implemented a sticky mobile navigation.',
    results: [
      { month: 'Jan', before: 2.1, after: 2.2 },
      { month: 'Feb', before: 2.2, after: 2.5 },
      { month: 'Mar', before: 2.1, after: 2.9 },
      { month: 'Apr', before: 2.3, after: 3.4 },
      { month: 'May', before: 2.2, after: 3.8 },
    ],
    impactMetrics: [
      { label: '전환율 향상', value: '+40%', subtext: '기존 대비 대폭 상승' },
      { label: '이탈률 감소', value: '-15%', subtext: '결제 페이지 이탈 기준' },
      { label: 'MAU 증가', value: '1.2M', subtext: '월간 활성 사용자' }
    ]
  },
  {
    id: '2',
    title: 'Scalable Fintech Dashboard Architecture',
    category: Category.DEV,
    thumbnail: 'https://picsum.photos/seed/dev1/800/600',
    description: 'Built a high-performance React dashboard with real-time data streaming and complex data visualization.',
    role: 'Senior Frontend Engineer',
    contribution: 90,
    challenge: 'Rendering over 10,000 data points in real-time caused UI freezing and lag.',
    solution: 'Implemented virtualization for lists, optimized canvas rendering for charts, and moved heavy data processing to Web Workers.',
    results: [
      { month: 'Jan', before: 450, after: 120 },
      { month: 'Feb', before: 480, after: 115 },
      { month: 'Mar', before: 510, after: 110 },
      { month: 'Apr', before: 490, after: 105 },
      { month: 'May', before: 520, after: 98 },
    ],
    impactMetrics: [
      { label: '로딩 속도 개선', value: '75%', subtext: 'TBT 기준 단축' },
      { label: '서버 비용 절감', value: '30%', subtext: '데이터 요청 최적화' },
      { label: '동시 접속자', value: '50k', subtext: '부하 테스트 완료' }
    ]
  },
  {
    id: '3',
    title: 'Tech Startup Brand Identity System',
    category: Category.BRANDING,
    thumbnail: 'https://picsum.photos/seed/brand1/800/800',
    description: 'Developed a cohesive visual language and design system for a Series B AI startup.',
    role: 'Art Director',
    contribution: 100,
    challenge: 'Lack of brand consistency across different marketing channels leading to poor brand recognition.',
    solution: 'Created a modular design system that defines typography, color hierarchy, and illustrative patterns.',
    results: [
      { month: 'Jan', before: 15, after: 18 },
      { month: 'Feb', before: 14, after: 25 },
      { month: 'Mar', before: 16, after: 38 },
      { month: 'Apr', before: 15, after: 52 },
      { month: 'May', before: 17, after: 68 },
    ],
    impactMetrics: [
      { label: '브랜드 인지도', value: '3.5x', subtext: '설문 조사 결과' },
      { label: '디자인 생산성', value: '50%', subtext: '컴포넌트 재사용률' },
      { label: '협업 효율', value: 'High', subtext: '개발-디자인 싱크 완료' }
    ]
  },
  {
    id: '4',
    title: 'Next-Gen Mobile Social Platform UI',
    category: Category.UIUX,
    thumbnail: 'https://picsum.photos/seed/ui2/800/1100',
    description: 'Design of a Gen-Z focused social platform with emphasis on micro-interactions.',
    role: 'UI Designer',
    contribution: 70,
    challenge: 'Existing apps felt "static". Users wanted more dynamic feedback during interaction.',
    solution: 'Designed 50+ unique Lottie animations and context-aware haptic feedback triggers.',
    results: [
      { month: 'Jan', before: 8, after: 10 },
      { month: 'Feb', before: 9, after: 15 },
      { month: 'Mar', before: 8, after: 22 },
      { month: 'Apr', before: 10, after: 31 },
      { month: 'May', before: 11, after: 45 },
    ],
    impactMetrics: [
      { label: '체류 시간', value: '+120%', subtext: '평균 대비' },
      { label: '공유 횟수', value: '2.4x', subtext: '업데이트 이후' },
      { label: '앱스토어 평점', value: '4.9', subtext: '리뷰 1.2만 개' }
    ]
  },
  {
    id: '5',
    title: 'Global Logistics Tracking System',
    category: Category.DEV,
    thumbnail: 'https://picsum.photos/seed/dev2/800/700',
    description: 'Internal tool for real-time fleet management across 15 countries.',
    role: 'Fullstack Engineer',
    contribution: 60,
    challenge: 'Delayed data sync between satellite GPS and the central management console.',
    solution: 'Built a custom WebSocket gateway with local-first optimistic updates to minimize perceived latency.',
    results: [
      { month: 'Jan', before: 3000, after: 200 },
      { month: 'Feb', before: 2800, after: 180 },
      { month: 'Mar', before: 3100, after: 150 },
      { month: 'Apr', before: 2950, after: 120 },
      { month: 'May', before: 3050, after: 90 },
    ],
    impactMetrics: [
      { label: '동기화 지연', value: '-95%', subtext: '평균 레이턴시' },
      { label: '오차 범위', value: '< 1m', subtext: 'GPS 추적 정밀도' },
      { label: '운영 비용', value: '20%', subtext: '물류 효율 최적화' }
    ]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'Pixel Perfect Agency',
    position: 'Senior Product Designer',
    period: '2021.05 - Present',
    tasks: [
      'Led design system development for 3 enterprise clients.',
      'Managed a team of 4 junior designers.',
      'Reduced average project delivery time by 20% through workflow optimization.'
    ]
  },
  {
    company: 'TechFlow Solutions',
    position: 'Full-stack Developer',
    period: '2019.03 - 2021.04',
    tasks: [
      'Architected a cloud-native SaaS platform using React and Node.js.',
      'Implemented automated testing reaching 85% code coverage.',
      'Optimized database queries reducing AWS costs by $500/month.'
    ]
  }
];
