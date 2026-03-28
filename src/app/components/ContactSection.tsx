import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    institution: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', institution: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'contact@innovativeparadigm.com',
      link: 'mailto:contact@innovativeparadigm.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '0326-4336333',
      link: 'tel:03264336333',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'House 231 E, Dream Garden, Defiance Road, Lahore',
      link: null,
    },
  ];

  return (
    <section id="contact" ref={ref} className="py-24 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 right-1/4 w-96 h-96 bg-[#FF6A00] rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange-600 rounded-full blur-3xl"
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
          <span className="text-[#FF6A00] text-sm font-semibold tracking-wider uppercase mb-4 block">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Start Your Partnership
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FF6A00] to-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Ready to transform medical education at your institution? Get in touch with our team today.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">Let's Connect</h3>
              <p className="text-gray-400 leading-relaxed text-lg mb-8">
                Whether you're exploring licensing options or ready to partner with us, 
                our team is here to help you every step of the way.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FF6A00]/10 to-transparent rounded-xl blur-xl group-hover:blur-2xl transition-all"></div>
                  <div className="relative bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-xl p-6 hover:border-[#FF6A00]/50 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#FF6A00] to-orange-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <info.icon className="text-white" size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="text-gray-400 text-sm mb-1">{info.title}</div>
                        {info.link ? (
                          <a href={info.link} className="text-white font-semibold hover:text-[#FF6A00] transition-colors">
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-white font-semibold">{info.value}</div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
          
             
              
          
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF6A00]/10 to-transparent rounded-2xl blur-2xl"></div>
            <div className="relative bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-8">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-white mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-black/50 border-white/20 text-white placeholder:text-gray-500 focus:border-[#FF6A00]"
                      placeholder="Dr. John Smith"
                    />
                  </div>

                  <div>
                    <label htmlFor="institution" className="block text-white mb-2">
                      Institution Name *
                    </label>
                    <Input
                      id="institution"
                      name="institution"
                      type="text"
                      required
                      value={formData.institution}
                      onChange={handleChange}
                      className="bg-black/50 border-white/20 text-white placeholder:text-gray-500 focus:border-[#FF6A00]"
                      placeholder="Medical University"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-white mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-black/50 border-white/20 text-white placeholder:text-gray-500 focus:border-[#FF6A00]"
                        placeholder="john@university.edu"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-white mb-2">
                        Phone
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-black/50 border-white/20 text-white placeholder:text-gray-500 focus:border-[#FF6A00]"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="bg-black/50 border-white/20 text-white placeholder:text-gray-500 focus:border-[#FF6A00] resize-none"
                      placeholder="Tell us about your institution and how we can help..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#FF6A00] to-orange-600 hover:from-[#FF8C00] hover:to-orange-700 text-white py-6 text-lg group"
                  >
                    Send Message
                    <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </Button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#FF6A00] to-orange-600 rounded-full mb-6"
                  >
                    <CheckCircle className="text-white" size={40} />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-4">Thank You!</h3>
                  <p className="text-gray-400 text-lg">
                    Your message has been sent successfully. We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}