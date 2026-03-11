import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Wrench, Brain } from 'lucide-react';
import { portfolioData } from '../utils/portfolio';
import SkillBar from '../components/SkillBar';
import { containerVariants, itemVariants } from '../utils/animations';

const Skills = () => {
  const skillCategories = [
    { name: 'Programming Languages', icon: <Code2 size={24} />, skills: portfolioData.skills.languages },
    { name: 'Frameworks & Libraries', icon: <Wrench size={24} />, skills: portfolioData.skills.frameworks },
    { name: 'Tools & Platforms', icon: <Cpu size={24} />, skills: portfolioData.skills.tools },
    { name: 'AI/ML Technologies', icon: <Brain size={24} />, skills: portfolioData.skills.aiml },
  ];

  const [activeCategory, setActiveCategory] = useState(0);

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
            Skills & Expertise
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-300"
          >
            A comprehensive overview of my technical and professional skills.
          </motion.p>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-4 mb-12 justify-center"
          >
            {skillCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeCategory === index
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </motion.div>

          {/* Skills Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            key={activeCategory}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            <div>
              {skillCategories[activeCategory].skills.slice(0, 3).map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  index={index}
                />
              ))}
            </div>
            <div>
              {skillCategories[activeCategory].skills.slice(3).map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  index={index + 3}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* All Skills Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center"
          >
            Complete Skill Set
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                variants={itemVariants}
                className="p-6 rounded-lg bg-white dark:bg-gray-700 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-primary-600 dark:text-primary-400 mb-4">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  {category.name}
                </h3>
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-primary-600 dark:text-primary-400 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-2">
                5+
              </h3>
              <p className="text-blue-800 dark:text-blue-200">
                Years of experience in web development
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 rounded-lg">
              <h3 className="text-2xl font-bold text-purple-900 dark:text-purple-100 mb-2">
                20+
              </h3>
              <p className="text-purple-800 dark:text-purple-200">
                Projects completed successfully
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 rounded-lg">
              <h3 className="text-2xl font-bold text-green-900 dark:text-green-100 mb-2">
                30+
              </h3>
              <p className="text-green-800 dark:text-green-200">
                Technologies and tools mastered
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Skills;
