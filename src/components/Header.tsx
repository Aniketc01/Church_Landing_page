
import { Menu } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="w-full py-4 px-6 flex items-center justify-between bg-white/95">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
        </Button>
        <a href="/" className="flex items-center gap-2">
          <span className="text-2xl">⛪</span>
          <span className="font-semibold text-xl">CHURCH</span>
        </a>
      </div>
      
      <nav className="hidden md:flex items-center gap-6">
        <a href="/" className="hover:text-blue-600">HOME</a>
        <a href="/about" className="hover:text-blue-600">ABOUT</a>
        <a href="/contact" className="hover:text-blue-600">CONTACT US</a>
        <a href="/donation" className="hover:text-blue-600">DONATION</a>
        <a href="/subscription" className="hover:text-blue-600">SUBSCRIPTION</a>
        <Button className="bg-blue-100 text-blue-800 hover:bg-blue-200">
          GO TO ACCOUNT
        </Button>
      </nav>
    </header>
  );
};

export default Header;
