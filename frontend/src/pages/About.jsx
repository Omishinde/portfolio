import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Target } from 'lucide-react';
import { portfolioData } from '../utils/portfolio';
import { containerVariants, itemVariants } from '../utils/animations';

const About = () => {
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
            About Me
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300"
          >
            Get to know my professional journey, education, and aspirations.
          </motion.p>
        </div>
      </section>

      {/* Summary */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="prose dark:prose-invert max-w-none"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {portfolioData.about.summary}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 dark:text-white mb-12 flex items-center"
          >
            <GraduationCap className="mr-3 text-primary-600" />
            Education
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {portfolioData.about.education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {edu.degree}
                  </h3>
                  <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                    {edu.year}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  {edu.school}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  {edu.details}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Career Objectives */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center"
          >
            <Target className="mr-3 text-primary-600" />
            Career Objectives
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {portfolioData.about.objectives}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Highlights */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 dark:text-white mb-12"
          >
            Key Competencies
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <motion.div variants={itemVariants} className="p-6 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900 dark:to-primary-800 rounded-lg">
              <h3 className="font-bold text-primary-900 dark:text-primary-100 mb-3">Technical</h3>
              <ul className="text-sm text-primary-800 dark:text-primary-200 space-y-2">
                <li>✓ Full Stack Web Development</li>
                <li>✓ Database Design & Optimization</li>
                <li>✓ RESTful API Development</li>
                <li>✓ Cloud Deployment</li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="p-6 bg-gradient-to-br from-secondary-50 to-secondary-100 dark:from-secondary-900 dark:to-secondary-800 rounded-lg">
              <h3 className="font-bold text-secondary-900 dark:text-secondary-100 mb-3">Professional</h3>
              <ul className="text-sm text-secondary-800 dark:text-secondary-200 space-y-2">
                <li>✓ Problem Solving</li>
                <li>✓ Team Collaboration</li>
                <li>✓ Project Management</li>
                <li>✓ Continuous Learning</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default About;
