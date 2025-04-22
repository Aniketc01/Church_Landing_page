
const UpdateCard = () => (
  <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
    <div className="overflow-hidden">
      <img 
        src="/lovable-uploads/c4a3ac42-b850-4fd2-99a5-8bc62d471a5f.png"
        alt="Church interior" 
        className="w-full h-48 object-cover transition-transform duration-700 hover:scale-110"
      />
    </div>
    <div className="p-6">
      <h3 className="font-semibold text-lg mb-3">The Seven Churches of Revelation</h3>
      <p className="text-gray-600 mb-4 line-clamp-2">
        In The Book Of Revelation In Chapters 2 And 3, Jesus Addresses Seven Letters To Seven Churches...
      </p>
      <button className="text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors">
        Read more →
      </button>
    </div>
  </div>
);

const Updates = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-12 text-center">Daily Updates</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <UpdateCard />
          <UpdateCard />
          <UpdateCard />
          <UpdateCard />
        </div>
      </div>
    </section>
  );
};

export default Updates;
