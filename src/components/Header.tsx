
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full py-4 px-6 flex items-center justify-between bg-white/95">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
        </Button>
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl">⛪</span>
          <span className="font-semibold text-xl">CHURCH</span>
        </Link>
      </div>
      
      <nav className="hidden md:flex items-center gap-6">
        <Link to="/" className="hover:text-blue-600">HOME</Link>
        <Link to="/about" className="hover:text-blue-600">ABOUT</Link>
        <Link to="/contact" className="hover:text-blue-600">CONTACT US</Link>
        <Link to="/donation" className="hover:text-blue-600">DONATION</Link>
        <Link to="/subscription" className="hover:text-blue-600">SUBSCRIPTION</Link>
        <Button className="bg-blue-100 text-blue-800 hover:bg-blue-200">
          GO TO ACCOUNT
        </Button>
      </nav>
    </header>
  );
};

export default Header;
