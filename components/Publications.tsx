'use client';

import { motion } from 'framer-motion';

const publications = [
  {
    title: 'Deep Learning Approaches for Autonomous Vehicle Perception in Urban Environments',
    authors: 'Johnson, M., Smith, R., Chen, L.',
    conference: 'IEEE International Conference on Robotics and Automation (ICRA)',
    year: 2024,
  },
  {
    title: 'Optimization of Traffic Signal Control Using Reinforcement Learning',
    authors: 'Chen, L., Kumar, P., Johnson, M.',
    conference: 'Transportation Research Part C: Emerging Technologies',
    year: 2024,
  },
  {
    title: 'Smart Infrastructure for Connected and Autonomous Vehicles',
    authors: 'Smith, R., Williams, A., Chen, L.',
    conference: 'IEEE Transactions on Intelligent Transportation Systems',
    year: 2023,
  },
  {
    title: 'Predictive Maintenance for Transportation Infrastructure Using IoT and AI',
    authors: 'Kumar, P., Johnson, M., Williams, A.',
    conference: 'ACM/IEEE International Conference on Cyber-Physical Systems',
    year: 2023,
  },
];

export default function Publications() {
  return (
    <section id="publications" className="py-24 px-6 bg-slate-900/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-cyan-500">Recent</span>
            <span className="text-white"> Publications</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Selected papers from our research group
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-6">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 hover:border-violet-500/40 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-3">{pub.title}</h3>
              <p className="text-slate-300 mb-2">{pub.authors}</p>
              <div className="flex justify-between items-center text-sm">
                <p className="text-cyan-400">{pub.conference}</p>
                <p className="text-violet-400 font-semibold">{pub.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
