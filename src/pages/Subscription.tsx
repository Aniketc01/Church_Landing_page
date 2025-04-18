
import { motion } from "framer-motion";
import { Bell, Mail, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Subscription = () => {
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
          <h1 className="text-4xl font-bold mb-4">Stay Connected</h1>
          <p className="text-gray-600">Subscribe to receive updates about our church activities and events.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Bell className="w-12 h-12 mb-4 text-blue-600" />
              <h2 className="text-2xl font-semibold mb-4">Why Subscribe?</h2>
              <ul className="space-y-4">
                <li className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span>Weekly newsletters with church updates</span>
                </li>
                <li className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <span>Event notifications and reminders</span>
                </li>
                <li className="flex items-center gap-2">
                  <Bell className="w-5 h-5 text-blue-600" />
                  <span>Important announcements and prayer requests</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-6">Subscribe Now</h2>
            <form className="space-y-6">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Your email" />
              </div>
              <div className="space-y-4">
                <Label>Subscription Preferences</Label>
                <div className="flex items-center gap-2">
                  <Checkbox id="newsletter" />
                  <label htmlFor="newsletter" className="text-sm">Weekly Newsletter</label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="events" />
                  <label htmlFor="events" className="text-sm">Event Updates</label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="prayers" />
                  <label htmlFor="prayers" className="text-sm">Prayer Requests</label>
                </div>
              </div>
              <Button className="w-full">Subscribe</Button>
            </form>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Subscription;
