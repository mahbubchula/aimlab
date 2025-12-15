'use client';

import { motion } from 'framer-motion';

const researchVerticals = [
  {
    title: 'Autonomous Vehicles',
    description: 'Developing AI systems for self-driving cars, perception algorithms, and decision-making frameworks for safe autonomous navigation.',
    icon: '🚗',
  },
  {
    title: 'Smart Infrastructure',
    description: 'Creating intelligent transportation infrastructure using IoT sensors, computer vision, and predictive analytics for smarter cities.',
    icon: '🏙️',
  },
  {
    title: 'Traffic Optimization',
    description: 'Applying machine learning and optimization algorithms to reduce congestion, improve traffic flow, and enhance urban mobility.',
    icon: '🚦',
  },
];

export default function Research() {
  return (
    <section id="research" className="py-24 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-cyan-500">Research</span>
            <span className="text-white"> Verticals</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Our interdisciplinary research spans cutting-edge areas in AI and transportation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchVerticals.map((vertical, index) => (
            <motion.div
              key={vertical.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover:border-violet-500/40 transition-all duration-300"
            >
              <div className="text-6xl mb-4">{vertical.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{vertical.title}</h3>
              <p className="text-slate-300 leading-relaxed">{vertical.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
