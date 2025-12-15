'use client';

import { motion } from 'framer-motion';

const professors = [
  {
    name: 'Dr. Michael Johnson',
    title: 'Principal Investigator',
    expertise: 'Autonomous Systems, Computer Vision',
    email: 'm.johnson@aimlab.edu',
  },
  {
    name: 'Dr. Lisa Chen',
    title: 'Associate Professor',
    expertise: 'Machine Learning, Traffic Optimization',
    email: 'l.chen@aimlab.edu',
  },
];

const phdStudents = [
  {
    name: 'Robert Smith',
    research: 'Smart Infrastructure & IoT',
    year: 'PhD Candidate (4th Year)',
  },
  {
    name: 'Priya Kumar',
    research: 'Reinforcement Learning for Traffic Control',
    year: 'PhD Student (3rd Year)',
  },
  {
    name: 'Amanda Williams',
    research: 'V2X Communication Systems',
    year: 'PhD Student (2nd Year)',
  },
  {
    name: 'David Lee',
    research: 'Perception for Autonomous Vehicles',
    year: 'PhD Student (1st Year)',
  },
];

export default function Team() {
  return (
    <section id="people" className="py-24 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-cyan-500">Our</span>
            <span className="text-white"> Team</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Meet the researchers advancing AI in mobility
          </p>
        </motion.div>

        {/* Professors */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-violet-400 mb-8 text-center">Faculty</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {professors.map((prof, index) => (
              <motion.div
                key={prof.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-cyan-500/10 to-violet-500/10 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-8 hover:border-violet-500/50 transition-all duration-300"
              >
                <h4 className="text-2xl font-bold text-white mb-2">{prof.name}</h4>
                <p className="text-cyan-400 font-semibold mb-3">{prof.title}</p>
                <p className="text-slate-300 mb-3">{prof.expertise}</p>
                <a href={`mailto:${prof.email}`} className="text-violet-400 hover:text-violet-300 transition-colors">
                  {prof.email}
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* PhD Students */}
        <div>
          <h3 className="text-3xl font-bold text-violet-400 mb-8 text-center">PhD Students</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {phdStudents.map((student, index) => (
              <motion.div
                key={student.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 hover:border-violet-500/40 transition-all duration-300"
              >
                <h4 className="text-xl font-bold text-white mb-2">{student.name}</h4>
                <p className="text-slate-300 text-sm mb-2">{student.research}</p>
                <p className="text-cyan-400 text-xs font-semibold">{student.year}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
