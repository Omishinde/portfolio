import React from 'react';
import { motion } from 'framer-motion';
import { Download, Eye } from 'lucide-react';
import { portfolioData } from '../utils/portfolio';

const Resume = () => {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Resume
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300"
          >
            Download my resume or view it online.
          </motion.p>
        </div>
      </section>

      {/* Resume Actions */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex gap-4 justify-center">
          <motion.a
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            href="/resume/resume.pdf"
            download="Omkar_Shinde_Resume.pdf"
            className="inline-flex items-center space-x-2 px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
          >
            <Download size={20} />
            <span>Download Resume</span>
          </motion.a>
          <motion.a
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            href="/resume/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white font-semibold rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            <Eye size={20} />
            <span>View Online</span>
          </motion.a>
        </div>
      </section>

      {/* Resume Preview */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700"
          >
            <iframe
              src="/resume.pdf"
              title="Resume Preview"
              className="w-full h-screen rounded-lg"
            />
          </motion.div>

          {/* PDF not available message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 p-6 bg-blue-50 dark:bg-blue-900 rounded-lg text-center"
          >
            <p className="text-blue-800 dark:text-blue-200">
              📄 PDF preview will be displayed here once resume.pdf is added to the frontend/public/resume/ folder.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resume Content Summary */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Resume Highlights
          </h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="p-6 bg-white dark:bg-gray-700 rounded-lg">
              <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-3">
                Experience
              </h3>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                <li>✓ 5+ years of development experience</li>
                <li>✓ Full stack development expertise</li>
                <li>✓ Remote and team collaboration</li>
                <li>✓ Project leadership</li>
              </ul>
            </div>

            <div className="p-6 bg-white dark:bg-gray-700 rounded-lg">
              <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-3">
                Technical Skills
              </h3>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                <li>✓ React, Node.js, MongoDB</li>
                <li>✓ PostgreSQL, Docker</li>
                <li>✓ AWS, Vercel, Netlify</li>
                <li>✓ API Design & Development</li>
              </ul>
            </div>

            <div className="p-6 bg-white dark:bg-gray-700 rounded-lg">
              <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-3">
                Achievements
              </h3>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                <li>✓ 20+ successful projects</li>
                <li>✓ Published research papers</li>
                <li>✓ Open source contributions</li>
                <li>✓ Technical mentorship</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Resume;
