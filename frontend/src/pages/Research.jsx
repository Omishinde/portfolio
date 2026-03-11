import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink } from 'lucide-react';
import { portfolioData } from '../utils/portfolio';
import { containerVariants, itemVariants } from '../utils/animations';

const Research = () => {
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
            Research & Publications
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300"
          >
            My research papers and published work on web technologies and AI.
          </motion.p>
        </div>
      </section>

      {/* Research Papers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {portfolioData.research.map((paper) => (
              <motion.div
                key={paper.id}
                variants={itemVariants}
                className="p-6 rounded-lg bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-700 border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-shadow"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <FileText className="text-primary-600 dark:text-primary-400" size={24} />
                      <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                        {paper.journal} • {paper.year}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {paper.title}
                    </h3>
                  </div>
                </div>

                {/* Authors */}
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <span className="font-semibold">Authors:</span> {paper.authors.join(', ')}
                </p>

                {/* Abstract */}
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {paper.abstract}
                </p>

                {/* Actions */}
                <div className="flex flex-wrap gap-3">
                  {paper.pdfUrl && (
                    <a
                      href={paper.pdfUrl}
                      download
                      className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                    >
                      <Download size={18} />
                      <span>Download PDF</span>
                    </a>
                  )}
                  {paper.link && (
                    <a
                      href={paper.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors"
                    >
                      <ExternalLink size={18} />
                      <span>Read Full Paper</span>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Interested in collaboration?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            I'm open to research partnerships and academic collaborations.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
          >
            Get In Touch
          </a>
        </motion.div>
      </section>
    </main>
  );
};

export default Research;
