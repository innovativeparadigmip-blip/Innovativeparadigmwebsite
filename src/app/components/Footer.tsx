import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

export function Footer() {
  const footerLinks = {
    company: [
      { label: 'About Us', path: '/about' },
      { label: 'Our Services', path: '/services' },
      { label: 'Contact', path: '/contact' },
    ],
    services: [
      { label: 'Lecturio Education', path: '/lecturio' },
      { label: 'KSA Company Formation', path: '/ksa-formation' },
      { label: 'Medical Colleges', path: '/lecturio' },
      { label: 'Business Setup', path: '/ksa-formation' },
      { label: 'Medical Research Writers Guild', path: '/mrwg' },
      { label: 'MRWG Registration', path: '/mrwg/register' },
    ],
    resources: [
      { label: 'Benefits', path: '/about' },
      { label: 'How It Works', path: '/services' },
      { label: 'Testimonials', path: '/' },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/innovative-paradigm', label: 'LinkedIn' },

    { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61574370458801', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/innovativeparadigmip/', label: 'Instagram' },
  ];

  return (
    <footer className="bg-black border-t border-white/10 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FF6A00]/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
   <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                    <img src="/Logo.png" alt="Innovative Paradigm Logo" className="w-12 h-12" />
                </div>
                <div>
                  <div className="text-white font-bold text-lg leading-tight">Innovative Paradigm</div>
                  <div className="text-[#FF6A00] text-xs leading-tight">Lecturio Partner</div>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Leading licensing and distribution partner for Lecturio, transforming medical 
                education access for healthcare institutions worldwide.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <a href="mailto:contact@innovativeparadigm.com" className="flex items-center gap-3 text-gray-400 hover:text-[#FF6A00] transition-colors group">
                  <Mail size={18} className="flex-shrink-0" />
                  <span className="text-sm">contact@innovativeparadigm.com</span>
                </a>
                <a href="tel:03264336333" className="flex items-center gap-3 text-gray-400 hover:text-[#FF6A00] transition-colors group">
                  <Phone size={18} className="flex-shrink-0" />
                  <span className="text-sm">0326-4336333</span>
                </a>
                <div className="flex items-center gap-3 text-gray-400">
                  <MapPin size={18} className="flex-shrink-0" />
                  <span className="text-sm">House 231 E, Dream Garden, Defence Road, Lahore</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Links Columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-[#FF6A00] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-[#FF6A00] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-[#FF6A00] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Social Links & Bottom Bar */}
        <div className="py-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4"
            >
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-900 border border-white/10 rounded-lg flex items-center justify-center hover:bg-[#FF6A00] hover:border-[#FF6A00] transition-all duration-300 group"
                >
                  <social.icon size={18} className="text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </motion.div>

            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-gray-400 text-sm text-center md:text-right"
            >
              <p>© {new Date().getFullYear()} Innovative Paradigm. All rights reserved.</p>
              <p className="mt-1">
                <button className="hover:text-[#FF6A00] transition-colors">Privacy Policy</button>
                {' · '}
                <button className="hover:text-[#FF6A00] transition-colors">Terms of Service</button>
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#FF6A00] to-transparent"></div>
    </footer>
  );
}
