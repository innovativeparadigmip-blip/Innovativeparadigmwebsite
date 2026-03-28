import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { GraduationCap, Building2, Hospital, Users2, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';

interface SolutionDetails {
  icon: any;
  title: string;
  description: string;
  features: string[];
  image: string;
  detailedInfo: {
    overview: string;
    benefits: string[];
    includes: string[];
    idealFor: string[];
  };
}

export function SolutionsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedSolution, setSelectedSolution] = useState<SolutionDetails | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const solutions: SolutionDetails[] = [
    {
      icon: GraduationCap,
      title: 'Medical Colleges',
      description: 'Comprehensive licensing solutions for medical schools and colleges seeking to enhance their curriculum with world-class digital content.',
      features: ['Full curriculum integration', 'Student performance tracking', 'Faculty resources', 'Custom branding options'],
      image: 'https://images.unsplash.com/photo-1632549385513-a738a861d5dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwbWVkaWNhbCUyMGNvbGxlZ2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NzQ3MzI4NDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      detailedInfo: {
        overview: 'Our Medical College licensing package is specifically designed for institutions that want to provide their students with access to premium medical education content. With Lecturio, your college can offer a complete digital learning experience that complements traditional teaching methods.',
        benefits: [
          'Enhanced student engagement and improved exam scores',
          'Standardized curriculum across all batches',
          'Real-time progress monitoring for administrators',
          'Reduced dependency on physical resources',
          'Competitive advantage in institutional rankings',
        ],
        includes: [
          '8,000+ medical video lectures',
          'Comprehensive USMLE and PMDC question banks',
          'AI-powered adaptive learning paths',
          'Performance analytics dashboard',
          'Faculty training and support',
          'Student onboarding materials',
          'Customizable institutional branding',
          '24/7 technical support',
        ],
        idealFor: [
          'Medical colleges with 100-1000+ students',
          'Institutions preparing students for PMDC/USMLE exams',
          'Colleges seeking PMDC accreditation improvements',
          'Schools wanting to modernize their curriculum',
        ],
      },
    },
    {
      icon: Building2,
      title: 'Universities',
      description: 'Enterprise-grade solutions for universities with multiple departments, offering scalable licensing for healthcare programs.',
      features: ['Multi-department access', 'Centralized management', 'Volume licensing', 'Dedicated support'],
      image: '/uni.png',
      detailedInfo: {
        overview: 'University-wide licensing provides comprehensive coverage for all medical and healthcare-related departments. Our enterprise solution offers centralized management, volume discounts, and dedicated support for large-scale implementations across multiple faculties.',
        benefits: [
          'Unified learning platform across all departments',
          'Significant cost savings through volume licensing',
          'Centralized administration and reporting',
          'Consistent quality across all programs',
          'Enhanced inter-departmental collaboration',
        ],
        includes: [
          'Unlimited access for all medical departments',
          'Enterprise admin dashboard',
          'Advanced analytics and reporting',
          'API integration with existing LMS',
          'Dedicated account manager',
          'Priority technical support',
          'Custom content integration',
          'Annual training workshops',
        ],
        idealFor: [
          'Universities with multiple medical faculties',
          'Large institutions with 1000+ medical students',
          'Universities managing multiple campuses',
          'Institutions with diverse healthcare programs',
        ],
      },
    },
    {
      icon: Hospital,
      title: 'Hospitals',
      description: 'Specialized licensing for hospitals and medical centers focusing on continuous medical education and staff training.',
      features: ['CME credits', 'Staff training programs', 'Flexible scheduling', 'Multi-specialty support'],
      image: 'https://images.unsplash.com/photo-1764885517847-79d62138cc58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3NwaXRhbCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzc0NzE0MDM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      detailedInfo: {
        overview: 'Hospitals require ongoing professional development for their medical staff. Our hospital licensing package focuses on continuing medical education (CME), specialty-specific training, and keeping healthcare professionals updated with the latest medical knowledge and practices.',
        benefits: [
          'Maintain high standards of patient care',
          'Fulfill CME requirements efficiently',
          'Reduce training costs and logistical challenges',
          'Flexible learning for busy schedules',
          'Improved staff retention and satisfaction',
        ],
        includes: [
          'Specialty-specific content libraries',
          'CME credit tracking system',
          'Department-wise access control',
          'Case-based learning modules',
          'Latest medical research updates',
          'Mobile app access for on-the-go learning',
          'Custom training programs',
          'Certification management',
        ],
        idealFor: [
          'Teaching hospitals with residency programs',
          'Private hospitals focusing on quality care',
          'Medical centers with multiple specialties',
          'Healthcare facilities seeking accreditation',
        ],
      },
    },
    {
      icon: Users2,
      title: 'Training Institutes',
      description: 'Tailored solutions for professional training institutes and certification programs in healthcare education.',
      features: ['Certification support', 'Exam preparation', 'Progress monitoring', 'Custom content paths'],
      image: 'https://images.unsplash.com/photo-1766297248122-5957c51b1f7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwc3R1ZGVudHMlMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc3NDczMjg0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      detailedInfo: {
        overview: 'Training institutes preparing students for medical entrance exams, USMLE, or professional certifications need focused, exam-oriented content. Our training institute package provides comprehensive preparation tools and resources tailored to specific examination requirements.',
        benefits: [
          'Higher student success rates in exams',
          'Comprehensive exam preparation',
          'Structured learning paths',
          'Competitive edge in the market',
          'Scalable business model',
        ],
        includes: [
          'Complete USMLE Step 1, 2, and 3 preparation',
          'PMDC/NEB exam-focused content',
          'Extensive question banks with explanations',
          'Mock exams and performance analysis',
          'Progress tracking tools',
          'Batch management system',
          'Marketing support materials',
          'Revenue sharing opportunities',
        ],
        idealFor: [
          'USMLE/PMDC preparation centers',
          'Professional certification institutes',
          'Medical entrance coaching centers',
          'Online tutoring platforms',
        ],
      },
    },
  ];

  const handleLearnMore = (solution: SolutionDetails) => {
    setSelectedSolution(solution);
    setIsModalOpen(true);
  };

  return (
    <>
      <section id="solutions" ref={ref} className="py-24 bg-black relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF6A00] rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              opacity: [0.2, 0.1, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600 rounded-full blur-3xl"
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
            <span className="text-[#FF6A00] text-sm font-semibold tracking-wider uppercase mb-4 block">Our Solutions</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Licensing Solutions for Every Institution
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FF6A00] to-orange-500 mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
              Customized licensing packages designed to meet the unique needs of healthcare 
              institutions, from medical colleges to training centers.
            </p>
          </motion.div>

          {/* Solutions Grid */}
          <div className="space-y-12">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group"
              >
                <div className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  {/* Content */}
                  <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00]/5 to-transparent rounded-2xl blur-xl"></div>
                      <div className="relative bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-8 group-hover:border-[#FF6A00]/50 transition-all duration-300">
                        <div className="flex items-start gap-4 mb-6">
                          <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#FF6A00] to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <solution.icon className="text-white" size={32} />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-2">{solution.title}</h3>
                            <div className="w-16 h-1 bg-gradient-to-r from-[#FF6A00] to-transparent"></div>
                          </div>
                        </div>
                        
                        <p className="text-gray-400 leading-relaxed mb-6 text-lg">
                          {solution.description}
                        </p>

                        <div className="space-y-3">
                          <div className="text-white font-semibold mb-3">Key Features:</div>
                          {solution.features.map((feature, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={isInView ? { opacity: 1, x: 0 } : {}}
                              transition={{ delay: index * 0.2 + idx * 0.1 + 0.5 }}
                              className="flex items-center gap-3"
                            >
                              <div className="w-2 h-2 bg-[#FF6A00] rounded-full"></div>
                              <span className="text-gray-300">{feature}</span>
                            </motion.div>
                          ))}
                        </div>

                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleLearnMore(solution)}
                          className="mt-6 bg-[#FF6A00] hover:bg-[#FF8C00] text-white px-6 py-3 rounded-lg transition-colors duration-300 font-semibold"
                        >
                          Learn More
                        </motion.button>
                      </div>
                    </div>
                  </div>

                  {/* Image */}
                  <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                      className="relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00]/30 to-transparent rounded-2xl blur-2xl group-hover:blur-3xl transition-all"></div>
                      <img
                        src={solution.image}
                        alt={solution.title}
                        className="relative rounded-2xl shadow-2xl w-full h-[400px] object-cover border border-white/10 group-hover:border-[#FF6A00]/30 transition-all"
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Dialog */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-900 to-black border border-[#FF6A00]/30 text-white">
          {selectedSolution && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#FF6A00] to-orange-600 rounded-xl flex items-center justify-center">
                    <selectedSolution.icon className="text-white" size={32} />
                  </div>
                  <DialogTitle className="text-3xl font-bold text-white">
                    {selectedSolution.title}
                  </DialogTitle>
                </div>
              </DialogHeader>

              <div className="space-y-6 mt-6">
                {/* Overview */}
                <div>
                  <h4 className="text-xl font-semibold text-[#FF6A00] mb-3">Overview</h4>
                  <p className="text-gray-300 leading-relaxed">{selectedSolution.detailedInfo.overview}</p>
                </div>

                {/* Benefits */}
                <div>
                  <h4 className="text-xl font-semibold text-[#FF6A00] mb-3">Key Benefits</h4>
                  <ul className="space-y-2">
                    {selectedSolution.detailedInfo.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-[#FF6A00] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Includes */}
                <div>
                  <h4 className="text-xl font-semibold text-[#FF6A00] mb-3">Package Includes</h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {selectedSolution.detailedInfo.includes.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 bg-black/40 rounded-lg p-3 border border-white/10">
                        <div className="w-1.5 h-1.5 bg-[#FF6A00] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ideal For */}
                <div>
                  <h4 className="text-xl font-semibold text-[#FF6A00] mb-3">Ideal For</h4>
                  <ul className="space-y-2">
                    {selectedSolution.detailedInfo.idealFor.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="pt-6 border-t border-white/10">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setIsModalOpen(false);
                      const element = document.getElementById('contact');
                      if (element) {
                        const offset = 80;
                        const elementPosition = element.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.scrollY - offset;
                        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                      }
                    }}
                    className="w-full bg-gradient-to-r from-[#FF6A00] to-orange-600 hover:from-[#FF8C00] hover:to-orange-700 text-white px-6 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
                  >
                    Get Started with This Solution
                  </motion.button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
