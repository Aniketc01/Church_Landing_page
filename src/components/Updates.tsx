
const UpdateCard = () => (
  <div className="bg-white rounded-lg overflow-hidden shadow-lg">
    <img 
      src="/lovable-uploads/c4a3ac42-b850-4fd2-99a5-8bc62d471a5f.png"
      alt="Church interior" 
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="font-semibold mb-2">The Seven Churches of Revelation</h3>
      <p className="text-sm text-gray-600 mb-4">
        In The Book Of Revelation In Chapters 2 And 3, Jesus Addresses Seven Letters To Seven Churches...
      </p>
      <button className="text-blue-600 text-sm hover:underline">
        Read more
      </button>
    </div>
  </div>
);

const Updates = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-8 text-center">Daily Updates</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <UpdateCard />
          <UpdateCard />
          <UpdateCard />
          <UpdateCard />
        </div>
      </div>
    </div>
  );
};

export default Updates;
