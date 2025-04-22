
import Header from "@/components/Header";
import EventsSection from "@/components/EventsSection";
import MainSections from "@/components/MainSections";
import ServicesGrid from "@/components/ServicesGrid";
import Updates from "@/components/Updates";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <EventsSection />
        <MainSections />
        <ServicesGrid />
        <Updates />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
