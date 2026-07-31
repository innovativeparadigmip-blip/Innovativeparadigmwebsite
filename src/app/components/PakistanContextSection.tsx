import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Shield, Clock, Wifi, BookOpen, AlertCircle, CheckCircle2 } from 'lucide-react';

export function PakistanContextSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const challenges = [
    {
      icon: AlertCircle,
      title: 'Uncertain Conditions',
      description: 'Pakistan faces unpredictable situations including political unrest, security concerns, and natural disasters that can disrupt traditional learning.',
    },
    {
      icon: Shield,
      title: 'Emergency Lockdowns',
      description: 'During crises, institutions must close their physical campuses, leaving students without access to quality education.',
    },
    {
      icon: Clock,
      title: 'Lost Academic Time',
      description: 'Extended closures lead to significant delays in curriculum completion and academic progression.',
    },
  ];

  const solutions = [
    {
      icon: Wifi,
      title: 'Uninterrupted Learning',
      description: 'Lecturio ensures students continue their medical education seamlessly, regardless of physical campus accessibility.',
    },
    {
      icon: BookOpen,
      title: '24/7 Access',
      description: 'Complete curriculum available anytime, anywhere - students never fall behind even during extended lockdowns.',
    },
    {
      icon: CheckCircle2,
      title: 'Academic Continuity',
      description: 'Maintain academic schedules and exam preparations without disruption, ensuring timely graduation and career progression.',
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 left-0 w-96 h-96 bg-[#FF6A00] rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            opacity: [0.15, 0.25, 0.15],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-green-600 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#FF6A00] text-sm font-semibold tracking-wider uppercase mb-4 block">Pakistan Context</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ensuring Education Continuity in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-white to-green-500">
              Pakistan
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FF6A00] to-green-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            In Pakistan, where uncertain conditions and emergency situations can disrupt traditional education, 
            digital learning platforms like Lecturio play a crucial role in maintaining academic excellence.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Challenges */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">The Challenge</h3>
              <p className="text-gray-400 leading-relaxed">
                Pakistani medical institutions frequently face disruptions due to political unrest, security concerns, 
                natural disasters, and public health emergencies. These situations often force sudden campus closures 
                and lockdowns, leaving thousands of medical students unable to access essential educational resources.
              </p>
            </div>

            <div className="space-y-4">
              {challenges.map((challenge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-transparent rounded-xl blur-xl group-hover:blur-2xl transition-all"></div>
                  <div className="relative bg-gradient-to-br from-gray-900 to-black border border-red-500/20 rounded-xl p-6 hover:border-red-500/40 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-lg flex items-center justify-center">
                        <challenge.icon className="text-white" size={24} />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-2">{challenge.title}</h4>
                        <p className="text-gray-400 leading-relaxed">{challenge.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">The Solution</h3>
              <p className="text-gray-400 leading-relaxed">
                Lecturio's e-learning platform provides a resilient and reliable solution, ensuring that medical 
                education continues uninterrupted regardless of external circumstances. With complete digital access, 
                students can maintain their academic progress even during the most challenging times.
              </p>
            </div>

            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent rounded-xl blur-xl group-hover:blur-2xl transition-all"></div>
                  <div className="relative bg-gradient-to-br from-gray-900 to-black border border-green-500/20 rounded-xl p-6 hover:border-green-500/40 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center">
                        <solution.icon className="text-white" size={24} />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-2">{solution.title}</h4>
                        <p className="text-gray-400 leading-relaxed">{solution.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF6A00]/20 via-green-500/20 to-[#FF6A00]/20 rounded-2xl blur-2xl"></div>
            <div className="relative bg-gradient-to-r from-gray-900 via-black to-gray-900 border border-[#FF6A00]/30 rounded-2xl p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Safeguard Your Institution's Academic Future
              </h3>
              <p className="text-gray-400 text-lg mb-6 max-w-3xl mx-auto">
                Don't let external circumstances compromise your students' medical education. 
                Partner with us to ensure uninterrupted access to world-class learning resources.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      const offset = 80;
                      const elementPosition = element.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.scrollY - offset;
                      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                    }
                  }}
                  className="bg-gradient-to-r from-[#FF6A00] to-orange-600 hover:from-[#FF8C00] hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg shadow-[#FF6A00]/30"
                >
                  Secure Your Partnership
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
