import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Link } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';
import {
  Eye,
  Target,
  ClipboardList,
  BookOpen,
  BarChart3,
  GraduationCap,
  Stethoscope,
  School,
  Handshake,
  Lightbulb,
  ShieldCheck,
  Award,
  Copyright,
  ArrowRight,
} from 'lucide-react';

const scopeOfWork = [
  {
    icon: ClipboardList,
    title: 'Research Consultancy',
    items: [
      'Research proposal development',
      'Study design and protocol preparation',
      'Literature review and evidence synthesis',
      'Sample size calculation',
      'Research methodology consultation',
    ],
  },
  {
    icon: BookOpen,
    title: 'Scientific Writing & Publication Support',
    items: [
      'Manuscript writing and editing',
      'Journal selection and submission assistance',
      'Reviewer response preparation',
      'Thesis and dissertation writing support',
      'Systematic reviews and meta-analyses',
      'Case reports and clinical study publications',
      'Conference abstracts and scientific presentations',
      'Poster writing and presentation',
    ],
  },
  {
    icon: BarChart3,
    title: 'Statistical Services',
    items: [
      'Data management and cleaning',
      'Statistical analysis',
      'Interpretation of results',
      'Preparation of tables, graphs, and figures',
      'Advanced biostatistics and predictive modeling',
    ],
  },
  {
    icon: GraduationCap,
    title: 'Training & Capacity Building',
    items: [
      'Research methodology workshops',
      'Scientific writing courses',
      'Biostatistics training',
      'SPSS, R, STATA, and other statistical software training',
      'Good Clinical Practice (GCP) training',
      'Research ethics and publication ethics workshops',
    ],
  },
  {
    icon: Stethoscope,
    title: 'Clinical Research Support',
    items: [
      'Clinical trial planning and coordination',
      'Observational and epidemiological studies',
      'Registry development',
      'Outcome research',
      'Health services research',
      'Quality improvement projects',
    ],
  },
  {
    icon: School,
    title: 'Academic & Educational Services',
    items: [
      'Curriculum development',
      'Faculty development programs',
      'Research mentorship',
      'Student research supervision',
      'Academic editing and proofreading',
    ],
  },
  {
    icon: Handshake,
    title: 'Research Collaboration',
    items: [
      'National and international research partnerships',
      'University-industry collaborations',
      'Multi-center research projects',
      'Institutional research support',
      'Collaborative grant applications',
    ],
  },
  {
    icon: Lightbulb,
    title: 'Healthcare Innovation',
    items: [
      'Artificial intelligence applications in healthcare research',
      'Digital health research',
      'Medical technology evaluation',
      'Health informatics projects',
      'Translational and implementation research',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Quality Assurance & Ethics',
    items: [
      'Research governance',
      'Ethical compliance monitoring',
      'Publication integrity',
      'Plagiarism screening',
      'Data quality assurance',
      'Standard Operating Procedure (SOP) development',
    ],
  },
  {
    icon: Award,
    title: 'Professional Development',
    items: [
      'Certification programs',
      'Continuing Professional Development (CPD) activities',
      'Research networking events',
      'Annual scientific meetings',
      'Awards and recognition programs',
      'Research leadership development',
    ],
  },
  {
    icon: Copyright,
    title: 'Intellectual Property Services',
    items: [
      'Educate researchers on ownership, protection, and commercialization of research outputs',
      'Guidance on copyright protection for publications, educational materials, software, and digital content',
      'Guidance on balancing scientific publication with patent protection',
    ],
  },
];

export function MRWGSection() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: '-100px' });
  const scopeRef = useRef(null);
  const scopeInView = useInView(scopeRef, { once: true, margin: '-100px' });

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#FF6A00] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-orange-600 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-[#FF6A00] text-sm font-semibold tracking-wider uppercase mb-4 block">
              Healthcare Research Unit
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Medical Research Writers Guild
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FF6A00] to-orange-500 mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
              A community of researchers, clinicians, students, and healthcare professionals advancing
              evidence-based medical research and scientific writing.
            </p>
            <div className="mt-10">
              <Link to="/mrwg/register">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF6A00] to-orange-600 hover:from-[#FF8C00] hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg shadow-[#FF6A00]/30"
                >
                  Register Now
                  <ArrowRight size={20} />
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00]/10 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-8 h-full hover:border-[#FF6A00]/50 transition-all duration-300">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#FF6A00] to-orange-600 rounded-xl flex items-center justify-center mb-6">
                  <Eye className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Vision</h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  To be a globally recognized center of excellence in medical research and scientific writing,
                  advancing healthcare through innovation, evidence-based knowledge, and high-quality scholarly
                  publications that improve human health and contribute to global scientific progress.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00]/10 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-8 h-full hover:border-[#FF6A00]/50 transition-all duration-300">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#FF6A00] to-orange-600 rounded-xl flex items-center justify-center mb-6">
                  <Target className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Mission</h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  To empower researchers, clinicians, students, and healthcare professionals by fostering
                  scientific inquiry, critical thinking, and ethical research — enabling inquisitive minds to
                  observe, investigate, analyze, interpret, and disseminate high-quality, evidence-based
                  scientific knowledge through mentorship, collaboration, and capacity building.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scope of Work */}
      <section ref={scopeRef} className="py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF6A00] rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-600 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={scopeInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-[#FF6A00] text-sm font-semibold tracking-wider uppercase mb-4 block">
              What We Offer
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Scope of Work</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#FF6A00] to-orange-500 mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
              From proposal to publication, the Guild supports every stage of the research journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {scopeOfWork.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={scopeInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.07 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00]/10 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-6 h-full hover:border-[#FF6A00]/50 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#FF6A00] to-orange-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <category.icon className="text-white" size={22} />
                    </div>
                    <h3 className="text-lg font-bold text-white leading-tight">{category.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-gray-400 text-sm leading-relaxed">
                        <div className="w-1.5 h-1.5 bg-[#FF6A00] rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={scopeInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative mt-16"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF6A00]/20 via-orange-500/20 to-[#FF6A00]/20 rounded-2xl blur-2xl"></div>
            <div className="relative rounded-2xl overflow-hidden border border-[#FF6A00]/30">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1631556759511-6ce895fbf0ad?auto=format&fit=crop&w=1600&q=80"
                alt="Research team in lab coats reviewing findings together"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70"></div>
              <div className="relative p-12 text-center">
                <h3 className="text-3xl font-bold text-white mb-4">Join the Guild</h3>
                <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                  Become a member of the Medical Research Writers Guild and get access to mentorship,
                  training, and collaboration opportunities.
                </p>
                <Link to="/mrwg/register">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-[#FF6A00] to-orange-600 hover:from-[#FF8C00] hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg shadow-[#FF6A00]/30"
                  >
                    Register Now
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
