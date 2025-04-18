
import { Book, Calendar, CreditCard, Users, Heart, Mail } from "lucide-react";

const ServiceButton = ({ icon: Icon, text }: { icon: any; text: string }) => (
  <button className="flex items-center gap-3 px-6 py-3 bg-gray-600/90 text-white rounded-lg hover:bg-gray-700/90 transition-colors">
    <Icon className="h-5 w-5" />
    <span>{text}</span>
  </button>
);

const ServicesGrid = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto px-6 my-8">
      <ServiceButton icon={Heart} text="Matrimony" />
      <ServiceButton icon={Calendar} text="Stays" />
      <ServiceButton icon={Mail} text="Business" />
      <ServiceButton icon={Book} text="Pilgrimage" />
      <ServiceButton icon={Users} text="Parishioners" />
      <ServiceButton icon={CreditCard} text="Payment History" />
    </div>
  );
};

export default ServicesGrid;
