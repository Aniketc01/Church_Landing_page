
import { Button } from "./ui/button";
import { Calendar, Users } from "lucide-react";

const EventsSection = () => {
  return (
    <div className="relative h-[300px] flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      <div 
        className="absolute inset-0 bg-center bg-cover z-[-1]" 
        style={{ backgroundImage: "url('/lovable-uploads/c4a3ac42-b850-4fd2-99a5-8bc62d471a5f.png')" }}
      ></div>
      
      <div className="z-10 text-center">
        <h1 className="text-5xl mb-8">Today's Events</h1>
        <div className="flex flex-col items-center gap-4">
          <div className="bg-white text-black px-6 py-2 rounded-full flex items-center gap-2">
            30 NOV, 2023 | THURSDAY <span className="ml-2">→</span>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" className="bg-white/10 backdrop-blur-sm">
              <Calendar className="mr-2 h-4 w-4" />
              EVENTS
            </Button>
            <Button variant="outline" className="bg-white/10 backdrop-blur-sm">
              <Users className="mr-2 h-4 w-4" />
              GROUP
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsSection;
