
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Smartphone, BookOpen, Settings, Zap } from "lucide-react";

const GettingStarted = () => {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Getting Started</h1>
        <p className="text-xl text-gray-600">
          Welcome to CaptureRead! This guide will help you get up and running with your new reading companion in just a few minutes.
        </p>
      </div>

      <div className="space-y-8">
        {/* Installation */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Download className="h-6 w-6 text-blue-600" />
              <span>Installation</span>
            </CardTitle>
            <CardDescription>
              Download and install CaptureRead on your device
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold mb-2 flex items-center">
                  <Smartphone className="h-5 w-5 mr-2 text-blue-600" />
                  Mobile Installation
                </h3>
                <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
                  <li>Download CaptureRead from the Google Play Store or Apple App Store</li>
                  <li>Open the app and grant necessary permissions for file access</li>
                  <li>Create an account or sign in with existing credentials</li>
                  <li>Complete the initial setup wizard</li>
                </ol>
              </div>
              
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold mb-2 flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-green-600" />
                  Desktop Installation
                </h3>
                <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
                  <li>Download the appropriate installer for your operating system</li>
                  <li>Run the installer and follow the setup instructions</li>
                  <li>Launch CaptureRead and sign in to your account</li>
                  <li>Configure your preferred reading settings</li>
                </ol>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* First Steps */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Zap className="h-6 w-6 text-green-600" />
              <span>First Steps</span>
            </CardTitle>
            <CardDescription>
              Get familiar with the basic features and interface
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3">1. Import Your First Book</h3>
                <ul className="space-y-2 text-sm text-gray-700 ml-4">
                  <li>• Tap the "+" button or go to Library → Add Books</li>
                  <li>• Choose from local files, cloud storage, or online sources</li>
                  <li>• Supported formats: EPUB, PDF, MOBI, AZW3, CBZ, CBR</li>
                  <li>• Books will automatically appear in your library</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">2. Customize Your Reading Experience</h3>
                <ul className="space-y-2 text-sm text-gray-700 ml-4">
                  <li>• Access settings through the menu or gear icon</li>
                  <li>• Choose your preferred theme (light, dark, sepia)</li>
                  <li>• Adjust font size, family, and line spacing</li>
                  <li>• Configure page turning animations and gestures</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">3. Explore Key Features</h3>
                <ul className="space-y-2 text-sm text-gray-700 ml-4">
                  <li>• <strong>Bookmarks:</strong> Long-press on any page to bookmark</li>
                  <li>• <strong>Highlights:</strong> Select text and choose highlight color</li>
                  <li>• <strong>Notes:</strong> Add personal notes to any section</li>
                  <li>• <strong>Search:</strong> Find specific content across your library</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Account Setup */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Settings className="h-6 w-6 text-purple-600" />
              <span>Account & Sync Setup</span>
            </CardTitle>
            <CardDescription>
              Enable cloud sync to access your library across devices
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-purple-50 rounded-lg">
                <h3 className="font-semibold mb-2">Creating Your Account</h3>
                <p className="text-sm text-gray-700 mb-3">
                  A CaptureRead account enables cloud sync, backup, and cross-device access to your library.
                </p>
                <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
                  <li>Go to Settings → Account</li>
                  <li>Tap "Create Account" or "Sign In"</li>
                  <li>Enter your email and create a secure password</li>
                  <li>Verify your email address</li>
                  <li>Enable sync for your library and reading progress</li>
                </ol>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium mb-2">What Gets Synced</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Library organization</li>
                    <li>• Reading progress</li>
                    <li>• Bookmarks and highlights</li>
                    <li>• Personal notes</li>
                    <li>• App settings</li>
                  </ul>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium mb-2">Privacy & Security</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• End-to-end encryption</li>
                    <li>• No book content stored</li>
                    <li>• Optional local-only mode</li>
                    <li>• GDPR compliant</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tips for New Users */}
        <Card className="border-0 shadow-sm bg-gradient-to-r from-blue-50 to-purple-50">
          <CardHeader>
            <CardTitle>💡 Tips for New Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div>
                  <Badge variant="outline" className="mb-2">Performance</Badge>
                  <p className="text-sm text-gray-700">
                    For the best experience, keep your library organized with folders and use the search function to quickly find books.
                  </p>
                </div>
                <div>
                  <Badge variant="outline" className="mb-2">Backup</Badge>
                  <p className="text-sm text-gray-700">
                    Regularly backup your library and annotations through Settings → Backup & Restore.
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <Badge variant="outline" className="mb-2">Customization</Badge>
                  <p className="text-sm text-gray-700">
                    Experiment with different themes and font settings to find what works best for your reading style.
                  </p>
                </div>
                <div>
                  <Badge variant="outline" className="mb-2">Gestures</Badge>
                  <p className="text-sm text-gray-700">
                    Learn the gesture controls for faster navigation - swipe, tap, and pinch gestures can be customized.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GettingStarted;
