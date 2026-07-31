import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Link } from 'react-router';
import { GraduationCap, Building, ArrowRight } from 'lucide-react';

export function ServicesOverviewSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      id: 'lecturio',
      icon: GraduationCap,
      tag: 'Licensed Product',
      title: 'Lecturio Medical Education',
      description: 'Premier licensing and distribution partner for Lecturio, connecting healthcare institutions with world-class digital learning resources.',
      highlights: [
        '8,000+ video lectures',
        'AI-powered learning paths',
        'Comprehensive question banks',
        'Performance analytics',
        'Global accessibility 24/7',
      ],
      image: 'https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZWR1Y2F0aW9uJTIwdGVjaG5vbG9neSUyMGRpZ2l0YWwlMjBsZWFybmluZ3xlbnwxfHx8fDE3NzQ3MzI4NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      pageLink: '/lecturio',
    },
    {
      id: 'ksa-formation',
      icon: Building,
      tag: 'Business Solutions',
      title: 'KSA Company Formation',
      description: 'End-to-end company formation and business setup services in Saudi Arabia, guiding you through every step of establishing your presence in the Middle East.',
      highlights: [
        'Complete legal registration',
        'License & permit acquisition',
        'Local sponsorship support',
        'Office setup assistance',
        'Post-formation compliance',
      ],
      image: '/ksa.png',
      pageLink: '/ksa-formation',
    },
  ];

  return (
    <section id="services-overview" ref={ref} className="py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF6A00] rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-600 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#FF6A00] text-sm font-semibold tracking-wider uppercase mb-4 block">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Products &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6A00] to-orange-500">
              Services
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FF6A00] to-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Innovative Paradigm offers two core service lines designed to empower institutions and businesses globally
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group"
            >
              {/* Card Container */}
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00]/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl overflow-hidden group-hover:border-[#FF6A00]/50 transition-all duration-300 h-full flex flex-col">

                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

                    {/* Tag */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-block bg-[#FF6A00]/90 backdrop-blur-sm text-white text-xs font-semibold px-4 py-2 rounded-full">
                        {service.tag}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="absolute bottom-4 right-4 w-16 h-16 bg-gradient-to-br from-[#FF6A00] to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <service.icon className="text-white" size={32} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {service.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2 mb-6">
                      {service.highlights.map((highlight, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: index * 0.2 + idx * 0.1 + 0.5 }}
                          className="flex items-center gap-3"
                        >
                          <div className="w-1.5 h-1.5 bg-[#FF6A00] rounded-full"></div>
                          <span className="text-gray-300 text-sm">{highlight}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Button */}
                    <Link to={service.pageLink} className="mt-auto">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-[#FF6A00] to-orange-600 hover:from-[#FF8C00] hover:to-orange-700 text-white px-6 py-3 rounded-lg transition-all duration-300 font-semibold flex items-center justify-center gap-2 group"
                      >
                        Learn More
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
