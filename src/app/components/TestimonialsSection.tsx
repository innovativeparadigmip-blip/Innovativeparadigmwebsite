import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Quote, Star } from 'lucide-react';

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: 'Dr. Sarah Johnson',
      position: 'Dean, Medical College',
      institution: 'Metropolitan Medical University',
      quote: 'Partnering with Innovative Paradigm has transformed our curriculum. The Lecturio platform has significantly improved our students\' exam performance and engagement.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1659353886114-9aa119aef5aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFscyUyMHN0dWR5aW5nfGVufDF8fHx8MTc3NDczMjg0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Prof. Michael Chen',
      position: 'Director of Medical Education',
      institution: 'Global Healthcare Institute',
      quote: 'The seamless integration and exceptional support from Innovative Paradigm made our transition to digital learning effortless. Our faculty and students are thrilled.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1766297248122-5957c51b1f7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwc3R1ZGVudHMlMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc3NDczMjg0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Dr. Emily Rodriguez',
      position: 'Chief Medical Officer',
      institution: 'Regional Healthcare Network',
      quote: 'The comprehensive content and adaptive learning features have revolutionized our continuing medical education program. Highly recommend!',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1747224317356-6dd1a4a078fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwaW5ub3ZhdGlvbiUyMGZ1dHVyaXN0aWN8ZW58MXx8fHwxNzc0NzMyODQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  const partnerLogos = [
    { name: 'Harvard Medical School', initials: 'HMS' },
    { name: 'Johns Hopkins University', initials: 'JHU' },
    { name: 'Stanford Medicine', initials: 'SM' },
    { name: 'Mayo Clinic', initials: 'MC' },
    { name: 'Cleveland Clinic', initials: 'CC' },
    { name: 'Massachusetts General', initials: 'MGH' },
  ];

  return (
    <section id="testimonials" ref={ref} className="py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#FF6A00] rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-orange-600 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#FF6A00] text-sm font-semibold tracking-wider uppercase mb-4 block">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by Leading Institutions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FF6A00] to-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Hear from our partners about their experience with Innovative Paradigm and Lecturio
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00]/10 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-8 hover:border-[#FF6A00]/50 transition-all duration-300 h-full flex flex-col">
                {/* Quote Icon */}
                <div className="mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FF6A00] to-orange-600 rounded-lg flex items-center justify-center">
                    <Quote className="text-white" size={24} />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-[#FF6A00] fill-[#FF6A00]" size={16} />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-300 leading-relaxed mb-6 flex-grow">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF6A00] to-orange-600 flex items-center justify-center text-white font-bold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.position}</div>
                    <div className="text-[#FF6A00] text-sm">{testimonial.institution}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partner Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white mb-2">Our Partner Institutions</h3>
            <p className="text-gray-400">Collaborating with leading medical institutions worldwide</p>
          </div>

          <div className="bg-gradient-to-r from-black via-gray-900 to-black border border-white/10 rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {partnerLogos.map((logo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  className="flex flex-col items-center justify-center group cursor-pointer"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-gray-800 to-black border border-white/10 rounded-xl flex items-center justify-center mb-3 group-hover:border-[#FF6A00]/50 transition-all group-hover:scale-110">
                    <span className="text-white font-bold text-lg">{logo.initials}</span>
                  </div>
                  <div className="text-gray-400 text-xs text-center group-hover:text-[#FF6A00] transition-colors">
                    {logo.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '4.9/5', label: 'Average Rating' },
            { value: '98%', label: 'Satisfaction Rate' },
            { value: '1000+', label: 'Active Partners' },
            { value: '150+', label: 'Countries' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1.4 + index * 0.1 }}
              className="text-center p-6 bg-gradient-to-br from-black to-gray-900 border border-white/10 rounded-xl hover:border-[#FF6A00]/30 transition-all"
            >
              <div className="text-3xl font-bold text-[#FF6A00] mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
