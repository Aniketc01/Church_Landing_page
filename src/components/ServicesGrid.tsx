
import { Book, Calendar, CreditCard, Users, Heart, Mail } from "lucide-react";

const ServiceButton = ({ icon: Icon, text }: { icon: any; text: string }) => (
  <button className="flex items-center gap-3 px-6 py-4 bg-gray-800/90 text-white rounded-lg hover:bg-gray-900/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
    <Icon className="h-5 w-5" />
    <span className="font-medium">{text}</span>
  </button>
);

const ServicesGrid = () => {
  return (
    <section className="py-12 px-6 bg-gray-50">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
        <ServiceButton icon={Heart} text="Matrimony" />
        <ServiceButton icon={Calendar} text="Stays" />
        <ServiceButton icon={Mail} text="Business" />
        <ServiceButton icon={Book} text="Pilgrimage" />
        <ServiceButton icon={Users} text="Parishioners" />
        <ServiceButton icon={CreditCard} text="Payment History" />
      </div>
    </section>
  );
};

export default ServicesGrid;
