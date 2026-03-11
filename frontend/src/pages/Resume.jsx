import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink } from 'lucide-react';
import { portfolioData } from '../utils/portfolio';
import { fadeIn, slideUp, staggerContainer, itemVariants } from '../utils/animations';

const Resume = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto"
      >
        {/* Header */}
        <motion.div
          variants={slideUp}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <FileText className="text-primary-600 dark:text-primary-400" size={32} />
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
              Resume
            </h1>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Download my resume to learn more about my professional experience and qualifications
          </p>
        </motion.div>

        {/* Resume Card */}
        <motion.div
          variants={itemVariants}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
        >
          <div className="p-8 sm:p-12">
            {/* Personal Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {portfolioData.name}
              </h2>
              <p className="text-lg text-primary-600 dark:text-primary-400 mb-4">
                {portfolioData.title}
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                <span>{portfolioData.email}</span>
                <span>•</span>
                <span>{portfolioData.phone}</span>
                <span>•</span>
                <span>{portfolioData.location}</span>
              </div>
            </div>

            <hr className="my-8 border-gray-200 dark:border-gray-700" />

            {/* Professional Summary */}
            <section className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Professional Summary
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {portfolioData.about.summary}
              </p>
            </section>

            {/* Skills Overview */}
            <section className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Key Skills
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Programming Languages
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {portfolioData.skills.languages.map(skill => (
                      <span
                        key={skill.name}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Frameworks & Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {portfolioData.skills.frameworks.slice(0, 6).map(skill => (
                      <span
                        key={skill.name}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Education */}
            {portfolioData.about.education.length > 0 && (
              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Education
                </h3>
                <div className="space-y-4">
                  {portfolioData.about.education.map((edu, index) => (
                    <div key={index} className="border-l-4 border-primary-500 pl-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {edu.degree}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {edu.school} • {edu.year}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {edu.details}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            <hr className="my-8 border-gray-200 dark:border-gray-700" />

            {/* Download Section */}
            <div className="text-center">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                For a detailed view of all my experience and projects, please download my full resume.
              </p>
              <a
                href={portfolioData.resume.pdfUrl}
                download={portfolioData.resume.downloadName}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors"
              >
                <Download size={20} />
                Download Resume
              </a>
            </div>
          </div>
        </motion.div>

        {/* Additional Resources */}
        <motion.div
          variants={itemVariants}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { title: 'GitHub', desc: 'View my projects and code', icon: '💻' },
            { title: 'LinkedIn', desc: 'Connect with me professionally', icon: '💼' },
            { title: 'Contact', desc: 'Get in touch with me', icon: '📧' },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 text-center hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                {item.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {item.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Resume;
