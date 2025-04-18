
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-xl font-semibold mb-4">Church</h3>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare cursus sed nunc eget dictum. Sed ornare cursus sed nunc eget dictum. Sed ornare cursus sed nunc eget dictum
          </p>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <div className="flex flex-col gap-2">
            <a href="/about" className="text-gray-400 hover:text-white">About</a>
            <a href="/donation" className="text-gray-400 hover:text-white">Donation</a>
            <a href="/subscription" className="text-gray-400 hover:text-white">Subscription</a>
            <a href="/contact" className="text-gray-400 hover:text-white">Contact Us</a>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-4">Subscribe to our Newsletter</h3>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded bg-gray-800 text-white"
            />
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      
      <div className="mt-12 text-center text-gray-400">
        <p>© 2025 church</p>
      </div>
    </footer>
  );
};

export default Footer;
