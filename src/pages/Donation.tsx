
import { motion } from "framer-motion";
import { CreditCard, Heart, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const DonationOption = ({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white p-6 rounded-lg shadow-lg text-center"
  >
    <Icon className="w-12 h-12 mb-4 mx-auto text-blue-600" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const Donation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Support Our Mission</h1>
          <p className="text-gray-600">Your generous donations help us serve the community better.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          <DonationOption
            icon={Heart}
            title="One-time Donation"
            description="Make a single contribution to support our cause"
          />
          <DonationOption
            icon={CreditCard}
            title="Monthly Giving"
            description="Set up recurring donations to provide sustained support"
          />
          <DonationOption
            icon={Wallet}
            title="Special Projects"
            description="Support specific initiatives and community programs"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">Make a Donation</h2>
          <form className="space-y-6">
            <div>
              <Label htmlFor="amount">Amount (USD)</Label>
              <Input id="amount" type="number" placeholder="Enter amount" />
            </div>
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your name" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Your email" />
            </div>
            <Button className="w-full">Donate Now</Button>
          </form>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Donation;
