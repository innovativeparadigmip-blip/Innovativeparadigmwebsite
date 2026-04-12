import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';

export function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#FF6A00] rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-orange-600 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* 404 Number */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8"
          >
            <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6A00] to-orange-500">
              404
            </h1>
          </motion.div>

          {/* Message */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-4xl font-bold text-white mb-4"
          >
            Page Not Found
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-xl text-gray-400 mb-12"
          >
            The page you're looking for doesn't exist or has been moved.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/">
              <Button className="bg-[#FF6A00] hover:bg-[#FF8C00] text-white px-8 py-6 text-lg group">
                <Home className="mr-2" size={20} />
                Go to Homepage
              </Button>
            </Link>
            <Button
              onClick={() => window.history.back()}
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg group"
            >
              <ArrowLeft className="mr-2" size={20} />
              Go Back
            </Button>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="mt-16"
          >
            <p className="text-gray-500 mb-4">Quick Links</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/about" className="text-[#FF6A00] hover:text-orange-500 transition-colors">
                About
              </Link>
              <span className="text-gray-600">•</span>
              <Link to="/services" className="text-[#FF6A00] hover:text-orange-500 transition-colors">
                Services
              </Link>
              <span className="text-gray-600">•</span>
              <Link to="/lecturio" className="text-[#FF6A00] hover:text-orange-500 transition-colors">
                Lecturio
              </Link>
              <span className="text-gray-600">•</span>
              <Link to="/ksa-formation" className="text-[#FF6A00] hover:text-orange-500 transition-colors">
                KSA Formation
              </Link>
              <span className="text-gray-600">•</span>
              <Link to="/contact" className="text-[#FF6A00] hover:text-orange-500 transition-colors">
                Contact
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
