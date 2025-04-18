
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
        image="/lovable-uploads/c4a3ac42-b850-4fd2-99a5-8bc62d471a5f.png"
      />
      <MainSection 
        title="BIBLE" 
        image="/lovable-uploads/c4a3ac42-b850-4fd2-99a5-8bc62d471a5f.png"
      />
    </div>
  );
};

export default MainSections;
