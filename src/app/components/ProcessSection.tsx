import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { MessageSquare, Settings, Workflow, Headphones } from 'lucide-react';

export function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      icon: MessageSquare,
      title: 'Consultation',
      description: 'We begin with a comprehensive consultation to understand your institution\'s unique needs, goals, and current infrastructure.',
      details: ['Needs assessment', 'Goal setting', 'Infrastructure review', 'Budget planning'],
      color: 'from-[#FF6A00] to-orange-500',
    },
    {
      icon: Settings,
      title: 'Licensing Customization',
      description: 'Our team crafts a tailored licensing package that aligns perfectly with your requirements and budget constraints.',
      details: ['Custom package design', 'Pricing structure', 'Access levels', 'Feature selection'],
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Workflow,
      title: 'Integration',
      description: 'Seamless integration of Lecturio\'s platform into your existing systems with comprehensive training for administrators and users.',
      details: ['Platform setup', 'System integration', 'User training', 'Content deployment'],
      color: 'from-orange-600 to-[#FF6A00]',
    },
    {
      icon: Headphones,
      title: 'Ongoing Support',
      description: 'Continuous technical and academic support to ensure optimal utilization and address any queries or challenges promptly.',
      details: ['24/7 technical support', 'Regular updates', 'Performance monitoring', 'Optimization guidance'],
      color: 'from-red-500 to-orange-600',
    },
  ];

  return (
    <section id="process" ref={ref} className="py-24 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#FF6A00 1px, transparent 1px), linear-gradient(90deg, #FF6A00 1px, transparent 1px)',
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      {/* Animated Gradient Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 right-0 w-96 h-96 bg-[#FF6A00] rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#FF6A00] text-sm font-semibold tracking-wider uppercase mb-4 block">Our Process</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How It Works
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FF6A00] to-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Our streamlined four-step process ensures a smooth transition to world-class 
            medical education for your institution.
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Vertical Line - Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#FF6A00] via-orange-500 to-[#FF6A00] transform -translate-x-1/2"></div>

          {/* Steps */}
          <div className="space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="relative group">
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition-all duration-300`}></div>
                    <div className="relative bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-8 hover:border-[#FF6A00]/50 transition-all duration-300">
                      <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#FF6A00]/30 to-orange-500/30">
                          {(index + 1).toString().padStart(2, '0')}
                        </div>
                        <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                      </div>
                      
                      <p className="text-gray-400 leading-relaxed mb-6">
                        {step.description}
                      </p>

                      <div className={`space-y-2 ${index % 2 === 0 ? 'md:flex md:flex-col md:items-end' : ''}`}>
                        {step.details.map((detail, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: index * 0.2 + idx * 0.1 + 0.5 }}
                            className="flex items-center gap-2"
                          >
                            {index % 2 === 1 && <div className="w-1.5 h-1.5 bg-[#FF6A00] rounded-full"></div>}
                            <span className="text-gray-300 text-sm">{detail}</span>
                            {index % 2 === 0 && <div className="w-1.5 h-1.5 bg-[#FF6A00] rounded-full"></div>}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center Icon */}
                <div className="relative flex items-center justify-center md:w-2/12">
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                    className="relative group"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} blur-xl group-hover:blur-2xl transition-all`}></div>
                    <div className={`relative w-20 h-20 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-lg shadow-[#FF6A00]/50 group-hover:scale-110 transition-transform`}>
                      <step.icon className="text-white" size={36} />
                    </div>
                  </motion.div>
                </div>

                {/* Spacer for alignment */}
                <div className="hidden md:block md:w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Timeline Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-black via-gray-900 to-black border border-[#FF6A00]/30 rounded-2xl p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Average Implementation Timeline</h3>
              <p className="text-gray-400">From consultation to full deployment</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { phase: 'Consultation', time: '1-2 weeks' },
                { phase: 'Customization', time: '2-3 weeks' },
                { phase: 'Integration', time: '2-4 weeks' },
                { phase: 'Support', time: 'Ongoing' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-[#FF6A00] mb-2">{item.time}</div>
                  <div className="text-gray-400 text-sm">{item.phase}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
