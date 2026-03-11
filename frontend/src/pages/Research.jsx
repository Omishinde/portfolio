import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink, Award } from 'lucide-react';
import { portfolioData } from '../utils/portfolio';
import { fadeIn, slideUp, staggerContainer, itemVariants } from '../utils/animations';

const Research = () => {
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
            <Award className="text-primary-600 dark:text-primary-400" size={32} />
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
              Research & Certifications
            </h1>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Academic research, training programs, and professional certifications
          </p>
        </motion.div>

        {/* Research Papers */}
        <div className="space-y-6">
          {portfolioData.research.map((paper, index) => (
            <motion.div
              key={paper.id}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-start gap-3">
                    <FileText className="text-primary-600 dark:text-primary-400 flex-shrink-0 mt-1" size={24} />
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {paper.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-3">
                        {paper.abstract}
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
                        <span className="flex items-center gap-1">
                          <Award size={16} />
                          {paper.journal}
                        </span>
                        <span>{paper.year}</span>
                        {paper.authors.length > 0 && (
                          <span>By: {paper.authors.join(', ')}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 flex-shrink-0">
                  {paper.pdfUrl && (
                    <a
                      href={paper.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 hover:bg-primary-200 dark:hover:bg-primary-800 transition-colors"
                      title="Download PDF"
                    >
                      <Download size={20} />
                    </a>
                  )}
                  {paper.link && paper.link !== '#' && (
                    <a
                      href={paper.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                      title="View more"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {portfolioData.research.length === 0 && (
          <motion.div
            variants={itemVariants}
            className="text-center py-12"
          >
            <p className="text-gray-600 dark:text-gray-400">
              No research papers or certifications to display yet.
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Research;
