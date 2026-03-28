import { motion, useInView, useMotionValue, useTransform, animate } from 'motion/react';
import { useRef, useEffect } from 'react';
import { TrendingUp, Layers, Globe2, HeadphonesIcon } from 'lucide-react';

function AnimatedCounter({ value, duration = 2 }: { value: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(motionValue, value, { duration });
    return controls.stop;
  }, [motionValue, value, duration]);

  useEffect(() => {
    return rounded.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = latest.toString();
      }
    });
  }, [rounded]);

  return <span ref={ref}>0</span>;
}

export function BenefitsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Global Standard Education',
      description: 'Access to internationally recognized medical education content that meets the highest academic standards.',
      stats: { value: 98, label: 'Content Quality Score' },
      color: 'from-[#FF6A00] to-orange-500',
    },
    {
      icon: Layers,
      title: 'Scalable Licensing',
      description: 'Flexible licensing models that grow with your institution, from small cohorts to entire universities.',
      stats: { value: 500, label: 'Institutions Served' },
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Globe2,
      title: 'Institutional Growth',
      description: 'Empower your institution with tools that enhance student outcomes and improve institutional rankings.',
      stats: { value: 95, label: 'Student Success Rate' },
      color: 'from-orange-600 to-[#FF6A00]',
    },
    {
      icon: HeadphonesIcon,
      title: 'Dedicated Support',
      description: 'Round-the-clock technical and academic support to ensure seamless integration and optimal usage.',
      stats: { value: 24, label: 'Hours Support' },
      color: 'from-red-500 to-orange-600',
    },
  ];

  const stats = [
    { value: 500000, suffix: '+', label: 'Active Students', duration: 2.5 },
    { value: 1000, suffix: '+', label: 'Partner Institutions', duration: 2 },
    { value: 150, suffix: '+', label: 'Countries', duration: 1.5 },
    { value: 95, suffix: '%', label: 'Success Rate', duration: 2 },
  ];

  return (
    <section id="benefits" ref={ref} className="py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#FF6A00] rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-orange-600 rounded-full blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#FF6A00] text-sm font-semibold tracking-wider uppercase mb-4 block">Why Choose Us</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Benefits of Partnership
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FF6A00] to-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Partnering with Innovative Paradigm opens doors to world-class medical education 
            resources and transformative institutional growth.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-black via-gray-900 to-black border border-white/10 rounded-2xl p-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="text-center group"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00]/20 to-transparent rounded-lg blur-xl group-hover:blur-2xl transition-all"></div>
                    <div className="relative text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6A00] to-orange-500 mb-2">
                      {isInView && <AnimatedCounter value={stat.value} duration={stat.duration} />}
                      {stat.suffix}
                    </div>
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition-all duration-300`}></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-8 hover:border-[#FF6A00]/50 transition-all duration-300 h-full">
                <div className="flex items-start gap-4 mb-6">
                  <div className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <benefit.icon className="text-white" size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{benefit.title}</h3>
                  </div>
                </div>
                
                <p className="text-gray-400 leading-relaxed mb-6 text-lg">
                  {benefit.description}
                </p>

                <div className="flex items-center gap-3 p-4 bg-black/40 rounded-lg border border-white/10">
                  <div className="flex-1">
                    <div className="text-3xl font-bold text-[#FF6A00]">
                      {benefit.stats.value}{typeof benefit.stats.value === 'number' && benefit.stats.value < 100 ? '%' : '+'}
                    </div>
                    <div className="text-gray-400 text-sm">{benefit.stats.label}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF6A00]/20 via-orange-500/20 to-[#FF6A00]/20 rounded-2xl blur-2xl"></div>
          <div className="relative bg-gradient-to-r from-gray-900 via-black to-gray-900 border border-[#FF6A00]/30 rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Institution?
            </h3>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Join the global network of institutions delivering excellence in medical education
            </p>
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
              Start Your Partnership Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
