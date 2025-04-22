
const MainSection = ({ title, image }: { title: string; image: string }) => {
  return (
    <div className="relative h-[300px] overflow-hidden rounded-lg">
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <img 
        src={image} 
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <h2 className="text-white text-4xl font-medium">{title}</h2>
      </div>
    </div>
  );
};

const MainSections = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto px-6 my-12">
      <MainSection 
        title="PRAYER" 
        image="/lovable-uploads/d2052ca8-b9c0-4a15-9a3f-1b882de1c523.png"
      />
      <MainSection 
        title="BIBLE" 
        image="/lovable-uploads/1221aaf4-792e-4e65-bd32-07192eb6f8ce.png"
      />
    </div>
  );
};

export default MainSections;
