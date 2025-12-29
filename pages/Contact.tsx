
import React, { useState } from 'react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Hire Request',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! (Simulated submission)`);
    setFormData({ name: '', email: '', subject: 'Hire Request', message: '' });
  };

  return (
    <div className="max-w-5xl mx-auto px-6 pt-16 pb-24">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
        <div className="md:col-span-5">
          <h1 className="text-5xl font-black text-primary mb-8">Get in Touch</h1>
          <p className="text-lg text-gray-500 mb-12">
            새로운 프로젝트 의뢰나 채용 제안은 언제나 환영입니다. 24시간 이내에 회신 드리겠습니다.
          </p>
          
          <div className="space-y-8">
            <div>
              <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Email</h4>
              <a href="mailto:contact@impact.com" className="text-xl font-bold hover:text-accent transition-colors">
                contact@impact.com
              </a>
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Social</h4>
              <div className="flex gap-6 mt-4">
                <a href="#" className="w-12 h-12 bg-secondary flex items-center justify-center rounded-xl hover:bg-accent hover:text-white transition-all">
                  In
                </a>
                <a href="#" className="w-12 h-12 bg-secondary flex items-center justify-center rounded-xl hover:bg-accent hover:text-white transition-all">
                  Gh
                </a>
                <a href="#" className="w-12 h-12 bg-secondary flex items-center justify-center rounded-xl hover:bg-accent hover:text-white transition-all">
                  Be
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-7">
          <form onSubmit={handleSubmit} className="bg-secondary p-10 rounded-3xl space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Name</label>
                <input
                  required
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="홍길동"
                  className="w-full px-5 py-4 rounded-xl border-none focus:ring-2 focus:ring-accent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                <input
                  required
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="example@email.com"
                  className="w-full px-5 py-4 rounded-xl border-none focus:ring-2 focus:ring-accent outline-none"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
              <select
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                className="w-full px-5 py-4 rounded-xl border-none focus:ring-2 focus:ring-accent outline-none bg-white"
              >
                <option>Hire Request (이직 제안)</option>
                <option>Project Inquiry (의뢰 문의)</option>
                <option>Coffee Chat (네트워킹)</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                placeholder="문의 내용을 입력해주세요."
                className="w-full px-5 py-4 rounded-xl border-none focus:ring-2 focus:ring-accent outline-none resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-5 bg-primary text-white rounded-xl font-black text-lg hover:bg-accent transition-all shadow-xl shadow-blue-500/10"
            >
              문의 보내기
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
