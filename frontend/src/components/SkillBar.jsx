import React from 'react';
import { motion } from 'framer-motion';

const SkillBar = ({ name, level, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="mb-4"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium text-gray-700 dark:text-gray-300">{name}</span>
        <span className="text-sm text-primary-600 dark:text-primary-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          className="bg-gradient-to-r from-primary-500 to-secondary-600 h-full rounded-full"
        />
      </div>
    </motion.div>
  );
};

export default SkillBar;
