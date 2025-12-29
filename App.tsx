
import React from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';
import { ProjectDetail } from './pages/ProjectDetail';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';

const Navbar = () => {
  const { pathname } = useLocation();

  const navLinks = [
    { name: 'Projects', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-black tracking-tighter text-primary">
          IMPACT<span className="text-accent">.</span>
        </Link>
        <div className="flex gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.path || (link.path === '/' && pathname.startsWith('/projects'));
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  isActive ? 'text-accent' : 'text-gray-500 hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-secondary mt-20 py-12 px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-gray-400 text-sm">
        © 2024 Impact Portfolio. All rights reserved.
      </div>
      <div className="flex gap-6">
        <a href="#" className="text-sm text-gray-500 hover:text-primary transition-colors">LinkedIn</a>
        <a href="#" className="text-sm text-gray-500 hover:text-primary transition-colors">GitHub</a>
        <a href="#" className="text-sm text-gray-500 hover:text-primary transition-colors">Behance</a>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
