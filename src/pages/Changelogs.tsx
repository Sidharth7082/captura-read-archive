
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Tag, Bug, Sparkles, Shield, Zap } from "lucide-react";

const Changelogs = () => {
  const releases = [
    {
      version: "2.1.0",
      date: "2024-06-15",
      type: "stable",
      changes: {
        new: [
          "Added dark mode support",
          "Introduced smart reading analytics",
          "New gesture controls for mobile",
          "Enhanced cloud sync performance"
        ],
        improvements: [
          "Faster library loading times",
          "Better memory management",
          "Improved search functionality",
          "Enhanced accessibility features"
        ],
        fixes: [
          "Fixed crash when importing large libraries",
          "Resolved sync issues on slow connections",
          "Fixed reading position not saving correctly",
          "Corrected font rendering on high-DPI displays"
        ]
      }
    },
    {
      version: "2.0.3",
      date: "2024-06-01",
      type: "stable",
      changes: {
        fixes: [
          "Fixed critical security vulnerability",
          "Resolved app crash on Android 14",
          "Fixed pagination issues in EPUB files",
          "Corrected bookmark sync problems"
        ],
        improvements: [
          "Improved stability on older devices",
          "Better error handling for network issues"
        ]
      }
    },
    {
      version: "2.0.2",
      date: "2024-05-20",
      type: "stable",
      changes: {
        new: [
          "Added support for CBZ/CBR formats",
          "Introduced reading streaks feature"
        ],
        improvements: [
          "Enhanced PDF rendering performance",
          "Better text selection in reading mode",
          "Improved battery optimization"
        ],
        fixes: [
          "Fixed issue with custom themes not applying",
          "Resolved problem with large file imports",
          "Fixed annotation export functionality"
        ]
      }
    },
    {
      version: "2.0.1",
      date: "2024-05-10",
      type: "stable",
      changes: {
        fixes: [
          "Fixed startup crash on some devices",
          "Resolved login issues with cloud accounts",
          "Fixed text-to-speech not working properly",
          "Corrected translation errors in multiple languages"
        ],
        improvements: [
          "Better handling of corrupted files",
          "Improved notification system"
        ]
      }
    },
    {
      version: "2.0.0",
      date: "2024-05-01",
      type: "major",
      changes: {
        new: [
          "Complete UI redesign with modern interface",
          "Advanced annotation system with highlighting",
          "Multi-device sync with cloud storage",
          "AI-powered reading recommendations",
          "Customizable reading themes and fonts",
          "Social features for sharing and discussions"
        ],
        improvements: [
          "50% faster app startup time",
          "Redesigned library management",
          "Enhanced search with filters",
          "Better accessibility support",
          "Improved offline reading experience"
        ],
        breaking: [
          "Legacy backup format no longer supported",
          "Minimum Android version increased to 7.0",
          "Some third-party plugins may need updates"
        ]
      }
    }
  ];

  const getChangeIcon = (type: string) => {
    switch (type) {
      case 'new':
        return <Sparkles className="h-4 w-4 text-green-600" />;
      case 'improvements':
        return <Zap className="h-4 w-4 text-blue-600" />;
      case 'fixes':
        return <Bug className="h-4 w-4 text-red-600" />;
      case 'breaking':
        return <Shield className="h-4 w-4 text-orange-600" />;
      default:
        return <Tag className="h-4 w-4 text-gray-600" />;
    }
  };

  const getChangeTitle = (type: string) => {
    switch (type) {
      case 'new':
        return 'New Features';
      case 'improvements':
        return 'Improvements';
      case 'fixes':
        return 'Bug Fixes';
      case 'breaking':
        return 'Breaking Changes';
      default:
        return 'Changes';
    }
  };

  const getVersionBadge = (type: string) => {
    switch (type) {
      case 'major':
        return <Badge className="bg-purple-100 text-purple-800">Major Release</Badge>;
      case 'beta':
        return <Badge variant="outline">Beta</Badge>;
      default:
        return <Badge variant="secondary">Stable</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Changelogs</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay up to date with the latest features, improvements, and bug fixes in CaptureRead.
          </p>
        </div>

        <div className="space-y-8">
          {releases.map((release) => (
            <Card key={release.version} className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center space-x-3">
                      <span className="text-2xl">Version {release.version}</span>
                      {getVersionBadge(release.type)}
                    </CardTitle>
                    <CardDescription className="flex items-center space-x-2 mt-2">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(release.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {Object.entries(release.changes).map(([type, items]) => (
                    <div key={type}>
                      <div className="flex items-center space-x-2 mb-3">
                        {getChangeIcon(type)}
                        <h3 className="font-semibold text-gray-900">{getChangeTitle(type)}</h3>
                      </div>
                      <ul className="space-y-2 ml-6">
                        {items.map((item, index) => (
                          <li key={index} className="text-gray-700 text-sm flex items-start">
                            <span className="text-gray-400 mr-2">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Version History Notice */}
        <Card className="border-0 shadow-lg mt-12 bg-blue-50">
          <CardContent className="p-6">
            <div className="text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Looking for older versions?</h3>
              <p className="text-gray-600">
                Complete version history and legacy releases are available on our GitHub repository.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
};

export default Changelogs;
