
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ChevronRight, ChevronDown } from "lucide-react";
import { useState } from "react";

const DocsSidebar = () => {
  const location = useLocation();
  const [expandedSections, setExpandedSections] = useState<string[]>(['guides', 'faq']);

  const toggleSection = (section: string) => {
    setExpandedSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const isActive = (path: string) => location.pathname === path;
  const isExpanded = (section: string) => expandedSections.includes(section);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <nav className="space-y-2">
        <div>
          <button
            onClick={() => toggleSection('guides')}
            className="flex items-center justify-between w-full text-left font-medium text-gray-900 hover:text-blue-600 transition-colors"
          >
            <span>Guides</span>
            {isExpanded('guides') ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </button>
          {isExpanded('guides') && (
            <div className="ml-4 mt-2 space-y-2">
              <Link
                to="/docs/guides/getting-started"
                className={cn(
                  "block text-sm px-3 py-2 rounded transition-colors",
                  isActive("/docs/guides/getting-started")
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                )}
              >
                Getting Started
              </Link>
              <Link
                to="/docs/guides/tracking"
                className={cn(
                  "block text-sm px-3 py-2 rounded transition-colors",
                  isActive("/docs/guides/tracking")
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                )}
              >
                Tracking
              </Link>
              <Link
                to="/docs/guides/troubleshooting"
                className={cn(
                  "block text-sm px-3 py-2 rounded transition-colors",
                  isActive("/docs/guides/troubleshooting")
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                )}
              >
                Troubleshooting
              </Link>
              <Link
                to="/docs/guides/reader-settings"
                className={cn(
                  "block text-sm px-3 py-2 rounded transition-colors",
                  isActive("/docs/guides/reader-settings")
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                )}
              >
                Reader Settings
              </Link>
            </div>
          )}
        </div>

        <div>
          <button
            onClick={() => toggleSection('faq')}
            className="flex items-center justify-between w-full text-left font-medium text-gray-900 hover:text-blue-600 transition-colors"
          >
            <span>FAQ</span>
            {isExpanded('faq') ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </button>
          {isExpanded('faq') && (
            <div className="ml-4 mt-2 space-y-2">
              <Link
                to="/docs/faq/general"
                className={cn(
                  "block text-sm px-3 py-2 rounded transition-colors",
                  isActive("/docs/faq/general")
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                )}
              >
                General
              </Link>
              <Link
                to="/docs/faq/library"
                className={cn(
                  "block text-sm px-3 py-2 rounded transition-colors",
                  isActive("/docs/faq/library")
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                )}
              >
                Library
              </Link>
              <Link
                to="/docs/faq/downloads"
                className={cn(
                  "block text-sm px-3 py-2 rounded transition-colors",
                  isActive("/docs/faq/downloads")
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                )}
              >
                Downloads
              </Link>
              <Link
                to="/docs/faq/reader"
                className={cn(
                  "block text-sm px-3 py-2 rounded transition-colors",
                  isActive("/docs/faq/reader")
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                )}
              >
                Reader
              </Link>
              <Link
                to="/docs/faq/settings"
                className={cn(
                  "block text-sm px-3 py-2 rounded transition-colors",
                  isActive("/docs/faq/settings")
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                )}
              >
                Settings
              </Link>
              <Link
                to="/docs/faq/storage"
                className={cn(
                  "block text-sm px-3 py-2 rounded transition-colors",
                  isActive("/docs/faq/storage")
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                )}
              >
                Storage
              </Link>
            </div>
          )}
        </div>

        <Link
          to="/docs/contribute"
          className={cn(
            "block font-medium px-3 py-2 rounded transition-colors",
            isActive("/docs/contribute")
              ? "bg-blue-50 text-blue-600"
              : "text-gray-900 hover:text-blue-600 hover:bg-gray-50"
          )}
        >
          Contribute
        </Link>
      </nav>
    </div>
  );
};

export default DocsSidebar;
