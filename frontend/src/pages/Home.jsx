import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Zap, Target } from 'lucide-react';
import { portfolioData } from '../utils/portfolio';
import { fadeIn, slideUp, staggerContainer, itemVariants } from '../utils/animations';

const Home = () => {
  const features = [
    {
      icon: <Code2 size={24} />,
      title: 'Full Stack Development',
      desc: 'Building scalable web applications with modern technologies'
    },
    {
      icon: <Zap size={24} />,
      title: 'Performance Optimized',
      desc: 'Fast loading, smooth interactions, and efficient code'
    },
    {
      icon: <Target size={24} />,
      title: 'User-Centric Design',
      desc: 'Creating intuitive and accessible digital experiences'
    },
  ];

  return (
    <main className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Greeting */}
          <motion.p
            variants={fadeIn}
            className="text-primary-600 dark:text-primary-400 font-semibold text-lg mb-4"
          >
            👋 Welcome to my portfolio
          </motion.p>

          {/* Main Title */}
          <motion.h1
            variants={slideUp}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
          >
            Hi, I'm {portfolioData.name}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={slideUp}
            className="text-2xl sm:text-3xl text-gray-600 dark:text-gray-300 mb-8 font-light"
          >
            {portfolioData.title}
          </motion.p>

          {/* Description */}
          <motion.p
            variants={slideUp}
            className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            {portfolioData.shortBio}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={slideUp}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
          >
            <Link
              to="/projects"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors"
            >
              View My Projects
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white font-semibold rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              Get In Touch
            </Link>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex justify-center text-gray-400"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16"
          >
            What I Do
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-8 rounded-lg bg-gray-50 dark:bg-gray-700 hover:shadow-lg transition-shadow"
              >
                <div className="text-primary-600 dark:text-primary-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Recent Projects Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-between items-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Recent Projects
            </h2>
            <Link
              to="/projects"
              className="text-primary-600 dark:text-primary-400 font-semibold hover:underline flex items-center"
            >
              View All
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {portfolioData.projects.slice(0, 3).map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="group rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="h-40 bg-gray-200 dark:bg-gray-700 overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-600 dark:bg-primary-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to work together?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Let's create something amazing. Get in touch today!
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Start a Conversation
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </motion.div>
      </section>
    </main>
  );
};

export default Home;
