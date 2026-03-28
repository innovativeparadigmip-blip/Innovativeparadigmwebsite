import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Video, BookOpen, Brain, BarChart, Award, Globe } from 'lucide-react';

export function LecturioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Video,
      title: 'Video Lectures',
      description: '8,000+ high-quality medical video lectures covering all major topics',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: BookOpen,
      title: 'Question Banks',
      description: 'Comprehensive USMLE-style question banks with detailed explanations',
      color: 'from-[#FF6A00] to-orange-500',
    },
    {
      icon: Brain,
      title: 'AI-Powered Learning',
      description: 'Adaptive learning technology that personalizes study paths',
      color: 'from-orange-600 to-yellow-600',
    },
    {
      icon: BarChart,
      title: 'Performance Analytics',
      description: 'Track progress with detailed analytics and performance insights',
      color: 'from-red-500 to-orange-600',
    },
    {
      icon: Award,
      title: 'Exam Preparation',
      description: 'Targeted preparation for USMLE, COMLEX, and international exams',
      color: 'from-[#FF6A00] to-red-500',
    },
    {
      icon: Globe,
      title: 'Global Access',
      description: 'Available 24/7 on any device, accessible from anywhere worldwide',
      color: 'from-orange-500 to-[#FF6A00]',
    },
  ];

  return (
    <section id="lecturio" ref={ref} className="py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #FF6A00 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <span className="text-[#FF6A00] text-sm font-semibold tracking-wider uppercase mb-4 block">Our Platform</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powered by{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6A00] to-orange-500">
                Lecturio
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FF6A00] to-orange-500 mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
              Lecturio is a leading global medical education platform, providing comprehensive 
              digital learning resources trusted by medical students and professionals worldwide.
            </p>
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00]/30 to-transparent rounded-2xl blur-3xl"></div>
            <img
              src="https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZWR1Y2F0aW9uJTIwdGVjaG5vbG9neSUyMGRpZ2l0YWwlMjBsZWFybmluZ3xlbnwxfHx8fDE3NzQ3MzI4NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Medical Education Platform"
              className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover border border-white/10"
            />
            
            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="absolute top-8 left-8 bg-black/80 backdrop-blur-sm border border-[#FF6A00]/30 rounded-xl p-4"
            >
              <div className="text-3xl font-bold text-[#FF6A00]">8,000+</div>
              <div className="text-gray-300 text-sm">Video Lectures</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="absolute bottom-8 right-8 bg-black/80 backdrop-blur-sm border border-[#FF6A00]/30 rounded-xl p-4"
            >
              <div className="text-3xl font-bold text-[#FF6A00]">500K+</div>
              <div className="text-gray-300 text-sm">Active Learners</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 rounded-xl blur-xl transition-all duration-300`}></div>
              <div className="relative bg-gradient-to-br from-black/80 to-gray-900/80 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-[#FF6A00]/50 transition-all duration-300 h-full group-hover:transform group-hover:-translate-y-2">
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="text-white" size={28} />
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">{feature.title}</h4>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-[#FF6A00]/10 via-orange-500/10 to-[#FF6A00]/10 border border-[#FF6A00]/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Transform Your Institution with Lecturio
            </h3>
            <p className="text-gray-400 mb-6">
              Join hundreds of institutions worldwide that trust Lecturio for medical education excellence
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-black/60 rounded-lg px-6 py-3 border border-white/10">
                <div className="text-2xl font-bold text-[#FF6A00]">95%</div>
                <div className="text-gray-400 text-sm">Pass Rate</div>
              </div>
              <div className="bg-black/60 rounded-lg px-6 py-3 border border-white/10">
                <div className="text-2xl font-bold text-[#FF6A00]">4.8/5</div>
                <div className="text-gray-400 text-sm">User Rating</div>
              </div>
              <div className="bg-black/60 rounded-lg px-6 py-3 border border-white/10">
                <div className="text-2xl font-bold text-[#FF6A00]">150+</div>
                <div className="text-gray-400 text-sm">Countries</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
