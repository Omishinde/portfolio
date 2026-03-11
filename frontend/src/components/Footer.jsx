import React from 'react';
import { Mail, Linkedin, Github, ExternalLink } from 'lucide-react';
import { portfolioData } from '../utils/portfolio';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github size={20} />,
      url: portfolioData.social?.github || '#',
      label: 'GitHub',
    },
    {
      icon: <Linkedin size={20} />,
      url: portfolioData.social?.linkedin || '#',
      label: 'LinkedIn',
    },
    {
      icon: <Mail size={20} />,
      url: `mailto:${portfolioData.social?.email || portfolioData.email}`,
      label: 'Email',
    },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300 dark:text-gray-400 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">About</h3>
            <p className="text-sm leading-relaxed">
              {portfolioData.shortBio}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/about' },
                { label: 'Projects', href: '/projects' },
                { label: 'Contact', href: '/contact' },
              ].map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="hover:text-primary-400 transition-colors flex items-center gap-2"
                  >
                    <ExternalLink size={14} />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map(({ icon, url, label }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-gray-800 hover:bg-primary-600 transition-colors"
                  aria-label={label}
                >
                  {icon}
                </a>
              ))}
            </div>
            <p className="text-xs mt-4">{portfolioData.location}</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-sm">
            © {currentYear} {portfolioData.name}. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Built with React, Tailwind CSS, and ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
