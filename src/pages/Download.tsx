import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Download as DownloadIcon, Smartphone, Monitor, Github, Apple, Play } from "lucide-react";

const Download = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <img 
              src="/lovable-uploads/e90ee8c8-3768-4c91-acd7-86694f818686.png" 
              alt="CaptureRead App Icon" 
              className="w-24 h-24 rounded-xl shadow-lg"
            />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Download CaptureRead</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get CaptureRead on your preferred platform and start your enhanced reading journey today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Mobile Downloads */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-blue-100 rounded-full">
                  <Smartphone className="h-8 w-8 text-blue-600" />
                </div>
              </div>
              <CardTitle>Mobile Apps</CardTitle>
              <CardDescription>
                Download CaptureRead for your mobile device
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-green-100 rounded">
                    <Play className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-medium">Android</div>
                    <div className="text-sm text-gray-600">Version 1.0</div>
                  </div>
                </div>
                <Button asChild>
                  <a href="https://github.com/Sidharth7082/captureread-app/releases/download/v1.0/app-release.apk" target="_blank" rel="noopener noreferrer">
                    <DownloadIcon className="mr-2 h-4 w-4" />
                    Download APK
                  </a>
                </Button>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg opacity-50">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gray-100 rounded">
                    <Apple className="h-5 w-5 text-gray-600" />
                  </div>
                  <div>
                    <div className="font-medium">iOS</div>
                    <div className="text-sm text-gray-600">Coming Soon</div>
                  </div>
                </div>
                <Button disabled>
                  <DownloadIcon className="mr-2 h-4 w-4" />
                  Coming Soon
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Desktop Downloads */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-purple-100 rounded-full">
                  <Monitor className="h-8 w-8 text-purple-600" />
                </div>
              </div>
              <CardTitle>Desktop Apps</CardTitle>
              <CardDescription>
                Download CaptureRead for your computer
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg opacity-50">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gray-100 rounded">
                    <Monitor className="h-5 w-5 text-gray-600" />
                  </div>
                  <div>
                    <div className="font-medium">Windows</div>
                    <div className="text-sm text-gray-600">Coming Soon</div>
                  </div>
                </div>
                <Button disabled>
                  <DownloadIcon className="mr-2 h-4 w-4" />
                  Coming Soon
                </Button>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg opacity-50">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gray-100 rounded">
                    <Apple className="h-5 w-5 text-gray-600" />
                  </div>
                  <div>
                    <div className="font-medium">macOS</div>
                    <div className="text-sm text-gray-600">Coming Soon</div>
                  </div>
                </div>
                <Button disabled>
                  <DownloadIcon className="mr-2 h-4 w-4" />
                  Coming Soon
                </Button>
              </div>
              
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg opacity-50">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gray-100 rounded">
                    <Monitor className="h-5 w-5 text-gray-600" />
                  </div>
                  <div>
                    <div className="font-medium">Linux</div>
                    <div className="text-sm text-gray-600">Coming Soon</div>
                  </div>
                </div>
                <Button disabled>
                  <DownloadIcon className="mr-2 h-4 w-4" />
                  Coming Soon
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Development Builds */}
        <Card className="border-0 shadow-lg mb-8">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Github className="h-6 w-6 text-gray-600" />
              <CardTitle>Development Builds</CardTitle>
              <Badge variant="outline">Beta</Badge>
            </div>
            <CardDescription>
              Get the latest features and improvements before they're released to the public.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="h-16" asChild>
                <a href="https://github.com/Sidharth7082/captureread-app/releases" target="_blank" rel="noopener noreferrer">
                  <div className="text-center">
                    <div className="font-medium">Latest Release</div>
                    <div className="text-sm text-gray-600">GitHub Releases</div>
                  </div>
                </a>
              </Button>
              <Button variant="outline" className="h-16" disabled>
                <div className="text-center">
                  <div className="font-medium">Beta</div>
                  <div className="text-sm text-gray-600">Pre-release</div>
                </div>
              </Button>
              <Button variant="outline" className="h-16" asChild>
                <a href="https://github.com/Sidharth7082" target="_blank" rel="noopener noreferrer">
                  <div className="text-center">
                    <div className="font-medium">Source Code</div>
                    <div className="text-sm text-gray-600">View on GitHub</div>
                  </div>
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* System Requirements */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle>System Requirements</CardTitle>
            <CardDescription>
              Make sure your device meets these minimum requirements for the best experience.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-4">Mobile</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Android 7.0+ (API level 24)</li>
                  <li>• iOS 12.0+ (Coming Soon)</li>
                  <li>• 2GB RAM minimum</li>
                  <li>• 100MB storage space</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Desktop</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Windows 10+ (Coming Soon)</li>
                  <li>• macOS 10.14+ (Coming Soon)</li>
                  <li>• Linux (Ubuntu 18.04+) (Coming Soon)</li>
                  <li>• 4GB RAM minimum</li>
                  <li>• 200MB storage space</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
};

export default Download;
