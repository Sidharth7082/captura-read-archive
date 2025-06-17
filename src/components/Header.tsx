
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, Download, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">CaptureRead</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/docs/guides/getting-started" className="text-gray-700 hover:text-blue-600 transition-colors">
              Docs
            </Link>
            <Link to="/download" className="text-gray-700 hover:text-blue-600 transition-colors">
              Download
            </Link>
            <Link to="/changelogs" className="text-gray-700 hover:text-blue-600 transition-colors">
              Changelogs
            </Link>
            <Link to="/docs/contribute" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contribute
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleMenu}
            className="md:hidden"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-2">
              <Link 
                to="/docs/guides/getting-started" 
                className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Docs
              </Link>
              <Link 
                to="/download" 
                className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Download
              </Link>
              <Link 
                to="/changelogs" 
                className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Changelogs
              </Link>
              <Link 
                to="/docs/contribute" 
                className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contribute
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
