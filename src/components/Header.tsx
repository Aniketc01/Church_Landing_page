
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="w-full py-4 px-6 border-b bg-white/95 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-2 transition-transform hover:scale-105"
        >
          <span className="text-2xl">⛪</span>
          <span className="font-semibold text-xl tracking-wide">CHURCH</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="hover:text-blue-600 transition-colors">HOME</Link>
          <Link to="/about" className="hover:text-blue-600 transition-colors">ABOUT</Link>
          <Link to="/contact" className="hover:text-blue-600 transition-colors">CONTACT US</Link>
          <Link to="/donation" className="hover:text-blue-600 transition-colors">DONATION</Link>
          <Link to="/subscription" className="hover:text-blue-600 transition-colors">SUBSCRIPTION</Link>
          <Button 
            variant="outline"
            className="bg-blue-100 text-blue-800 hover:bg-blue-200 border-blue-200"
          >
            GO TO ACCOUNT
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
