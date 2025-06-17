
import { Link } from "react-router-dom";
import { BookOpen, Github, Instagram, X, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-6 w-6 text-blue-400" />
              <span className="text-lg font-bold">CaptureRead</span>
            </div>
            <p className="text-gray-400 text-sm">
              The ultimate reading companion for capturing and organizing your digital reading experience.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Documentation</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/docs/guides/getting-started" className="text-gray-400 hover:text-white transition-colors">Getting Started</Link></li>
              <li><Link to="/docs/guides/tracking" className="text-gray-400 hover:text-white transition-colors">Tracking</Link></li>
              <li><Link to="/docs/guides/troubleshooting" className="text-gray-400 hover:text-white transition-colors">Troubleshooting</Link></li>
              <li><Link to="/docs/guides/reader-settings" className="text-gray-400 hover:text-white transition-colors">Reader Settings</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">FAQ</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/docs/faq/general" className="text-gray-400 hover:text-white transition-colors">General</Link></li>
              <li><Link to="/docs/faq/library" className="text-gray-400 hover:text-white transition-colors">Library</Link></li>
              <li><Link to="/docs/faq/downloads" className="text-gray-400 hover:text-white transition-colors">Downloads</Link></li>
              <li><Link to="/docs/faq/reader" className="text-gray-400 hover:text-white transition-colors">Reader</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/download" className="text-gray-400 hover:text-white transition-colors">Download</Link></li>
              <li><Link to="/changelogs" className="text-gray-400 hover:text-white transition-colors">Changelogs</Link></li>
              <li><Link to="/docs/contribute" className="text-gray-400 hover:text-white transition-colors">Contribute</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm flex items-center">
            Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> by the CaptureRead team
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://github.com/Sidharth7082" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.instagram.com/captureordie/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://x.com/captureordie04" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <X className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
