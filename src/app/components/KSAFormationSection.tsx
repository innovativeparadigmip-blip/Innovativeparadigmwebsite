import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Building, FileCheck, Users, Globe, Shield, Briefcase, TrendingUp, Clock } from 'lucide-react';

export function KSAFormationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: FileCheck,
      title: 'Legal Registration',
      description: 'Complete company registration and documentation with Saudi authorities',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Shield,
      title: 'License Acquisition',
      description: 'Secure all necessary business licenses and permits for your industry',
      color: 'from-[#FF6A00] to-orange-500',
    },
    {
      icon: Users,
      title: 'Local Sponsorship',
      description: 'Assistance with local sponsor requirements and partnerships',
      color: 'from-orange-600 to-yellow-600',
    },
    {
      icon: Briefcase,
      title: 'Office Setup',
      description: 'Help with physical office requirements and workspace solutions',
      color: 'from-red-500 to-orange-600',
    },
    {
      icon: Globe,
      title: 'Immigration Support',
      description: 'Visa processing and residency permits for business owners and employees',
      color: 'from-[#FF6A00] to-red-500',
    },
    {
      icon: TrendingUp,
      title: 'Post-Formation',
      description: 'Ongoing compliance, accounting, and business support services',
      color: 'from-orange-500 to-[#FF6A00]',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'Discuss your business goals, industry requirements, and timeline',
    },
    {
      step: '02',
      title: 'Documentation Prep',
      description: 'Gather and prepare all necessary documents for registration',
    },
    {
      step: '03',
      title: 'Registration Filing',
      description: 'Submit applications to Saudi authorities and licensing bodies',
    },
    {
      step: '04',
      title: 'License Issuance',
      description: 'Obtain commercial registration and industry-specific licenses',
    },
    {
      step: '05',
      title: 'Setup Completion',
      description: 'Finalize office setup, banking, and operational requirements',
    },
    {
      step: '06',
      title: 'Ongoing Support',
      description: 'Continued compliance assistance and business advisory',
    },
  ];

  const benefits = [
    'Strategic access to Middle Eastern markets',
    'Tax-friendly business environment',
    'Growing economy with Vision 2030 opportunities',
    'Modern infrastructure and business facilities',
    'Simplified foreign ownership regulations',
    'Gateway to GCC and broader MENA region',
  ];

  return (
    <section id="ksa-formation" ref={ref} className="py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
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
            <span className="text-[#FF6A00] text-sm font-semibold tracking-wider uppercase mb-4 block">Business Solutions</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Company Formation in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6A00] to-orange-500">
                Saudi Arabia
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FF6A00] to-orange-500 mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
              Expert guidance for establishing your business presence in the Kingdom of Saudi Arabia.
              We handle the complexities so you can focus on growth.
            </p>
          </motion.div>
        </motion.div>

        {/* Hero Image with Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00]/30 to-transparent rounded-2xl blur-3xl"></div>
            <img
              src= '/ksa.png'
              alt="Saudi Arabia Business"
              className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover border border-white/10"
            />

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="absolute top-8 left-8 bg-black/80 backdrop-blur-sm border border-[#FF6A00]/30 rounded-xl p-4"
            >
              <div className="text-3xl font-bold text-[#FF6A00]">5-7 Days</div>
              <div className="text-gray-300 text-sm">Average Setup Time</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="absolute bottom-8 right-8 bg-black/80 backdrop-blur-sm border border-[#FF6A00]/30 rounded-xl p-4"
            >
              <div className="text-3xl font-bold text-[#FF6A00]">100%</div>
              <div className="text-gray-300 text-sm">Success Rate</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Why KSA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-[#FF6A00]/10 via-orange-500/10 to-[#FF6A00]/10 border border-[#FF6A00]/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Why Establish Your Business in Saudi Arabia?
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-start gap-3 bg-black/60 rounded-lg p-4 border border-white/10"
                >
                  <div className="w-2 h-2 bg-[#FF6A00] rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
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

        {/* Process Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4 flex items-center justify-center gap-3">
              <Clock className="text-[#FF6A00]" size={32} />
              Our Formation Process
            </h3>
            <p className="text-gray-400">Step-by-step guidance from initial consultation to full operation</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.6 + index * 0.1 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-xl p-6 hover:border-[#FF6A00]/50 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#FF6A00] to-orange-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{item.step}</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>

                {/* Connector Line (not on last row) */}
                {index < process.length - 3 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 w-6 h-0.5 bg-gradient-to-r from-[#FF6A00]/50 to-transparent transform translate-x-full"></div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 2.0 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-[#FF6A00]/10 via-orange-500/10 to-[#FF6A00]/10 border border-[#FF6A00]/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Expand Your Business to Saudi Arabia?
            </h3>
            <p className="text-gray-400 mb-6">
              Let us handle the complexities of company formation while you focus on your business strategy
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-black/60 rounded-lg px-6 py-3 border border-white/10">
                <div className="text-2xl font-bold text-[#FF6A00]">End-to-End</div>
                <div className="text-gray-400 text-sm">Complete Service</div>
              </div>
              <div className="bg-black/60 rounded-lg px-6 py-3 border border-white/10">
                <div className="text-2xl font-bold text-[#FF6A00]">Expert</div>
                <div className="text-gray-400 text-sm">Legal Guidance</div>
              </div>
              <div className="bg-black/60 rounded-lg px-6 py-3 border border-white/10">
                <div className="text-2xl font-bold text-[#FF6A00]">Fast</div>
                <div className="text-gray-400 text-sm">Quick Processing</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
