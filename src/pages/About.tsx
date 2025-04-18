
import { motion } from "framer-motion";
import { FileText, Users, Scroll } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-center mb-12">About Our Church</h1>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <FileText className="w-12 h-12 mb-4 text-blue-600" />
            <h2 className="text-xl font-semibold mb-3">Our Mission</h2>
            <p className="text-gray-600">To spread love, hope, and faith throughout our community and beyond.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <Users className="w-12 h-12 mb-4 text-blue-600" />
            <h2 className="text-xl font-semibold mb-3">Our Community</h2>
            <p className="text-gray-600">A diverse and welcoming family of believers united in faith and service.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <Scroll className="w-12 h-12 mb-4 text-blue-600" />
            <h2 className="text-xl font-semibold mb-3">Our History</h2>
            <p className="text-gray-600">Serving our community with dedication and purpose for over 50 years.</p>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
