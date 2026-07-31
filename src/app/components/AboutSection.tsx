import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Target, Eye, Award, Users } from 'lucide-react';

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To democratize access to world-class medical education by bridging the gap between leading digital platforms and healthcare institutions worldwide.',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      description: 'Creating a future where every medical institution has access to cutting-edge educational resources, empowering healthcare professionals globally.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Partnering with Lecturio, we deliver premium medical education content trusted by institutions across continents.',
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'Building long-term relationships with institutions, understanding unique needs, and providing tailored licensing solutions.',
    },
  ];

  return (
    <section id="about" ref={ref} className="py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#FF6A00] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-orange-600 rounded-full blur-3xl"></div>
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
            className="inline-block"
          >
            <span className="text-[#FF6A00] text-sm font-semibold tracking-wider uppercase mb-4 block">About Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Innovative Paradigm
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FF6A00] to-orange-500 mx-auto"></div>
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00]/30 to-transparent rounded-2xl blur-2xl"></div>
              <img
                src="https://images.unsplash.com/photo-1659353886114-9aa119aef5aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFscyUyMHN0dWR5aW5nfGVufDF8fHx8MTc3NDczMjg0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Healthcare Professionals"
                className="relative rounded-2xl shadow-2xl w-full h-[400px] object-cover border border-white/10"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white">
              Multi-Service{' '}
              <span className="text-[#FF6A00]">Enterprise Solutions</span>
            </h3>
            <p className="text-gray-400 leading-relaxed text-lg">
              Innovative Paradigm is a forward-thinking enterprise delivering premium services across two key domains:
              medical education technology and business formation solutions. We bridge the gap between global
              opportunities and institutional excellence.
            </p>
            <p className="text-gray-400 leading-relaxed text-lg">
              From providing healthcare institutions with access to world-class digital learning platforms to
              facilitating seamless company formation in Saudi Arabia, our expertise spans diverse sectors.
              We pride ourselves on delivering tailored solutions that drive success and growth.
            </p>
            <div className="pt-4">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#FF6A00] to-orange-600 rounded-lg flex items-center justify-center">
                  <Award className="text-white" size={32} />
                </div>
                <div>
                  <div className="text-white font-semibold text-lg">Trusted Global Partner</div>
                  <div className="text-gray-400">Serving education & business worldwide</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00]/10 to-transparent rounded-xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative bg-black/60 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-[#FF6A00]/50 transition-all duration-300 h-full">
                <div className="w-12 h-12 bg-gradient-to-br from-[#FF6A00] to-orange-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="text-white" size={24} />
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">{feature.title}</h4>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
