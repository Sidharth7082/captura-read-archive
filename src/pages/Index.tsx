
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Download, BookOpen, Zap, Shield, Cloud, Smartphone, ArrowRight, Star, Users, Code } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="p-4 bg-blue-600 rounded-2xl shadow-lg">
              <BookOpen className="h-16 w-16 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Capture Your Reading
            <span className="text-blue-600 block">Experience</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            CaptureRead is the ultimate digital reading companion that helps you organize, track, and enhance your reading journey across all your devices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
              <Link to="/download">
                <Download className="mr-2 h-5 w-5" />
                Download Now
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8 py-4 text-lg">
              <Link to="/docs/guides/getting-started">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose CaptureRead?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the features that make CaptureRead the perfect companion for your digital reading journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader>
                <div className="p-3 bg-blue-100 rounded-lg w-fit">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Lightning Fast</CardTitle>
                <CardDescription>
                  Experience blazing-fast reading with our optimized engine that loads content instantly.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader>
                <div className="p-3 bg-green-100 rounded-lg w-fit">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Privacy First</CardTitle>
                <CardDescription>
                  Your reading data stays private and secure with our advanced encryption and local storage options.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader>
                <div className="p-3 bg-purple-100 rounded-lg w-fit">
                  <Cloud className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Cloud Sync</CardTitle>
                <CardDescription>
                  Seamlessly sync your reading progress and library across all your devices.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader>
                <div className="p-3 bg-orange-100 rounded-lg w-fit">
                  <Smartphone className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>Multi-Platform</CardTitle>
                <CardDescription>
                  Available on Android, iOS, Windows, macOS, and Linux. Read anywhere, anytime.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader>
                <div className="p-3 bg-red-100 rounded-lg w-fit">
                  <BookOpen className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle>Smart Library</CardTitle>
                <CardDescription>
                  Organize your books with intelligent categorization and powerful search capabilities.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader>
                <div className="p-3 bg-indigo-100 rounded-lg w-fit">
                  <Code className="h-6 w-6 text-indigo-600" />
                </div>
                <CardTitle>Open Source</CardTitle>
                <CardDescription>
                  Built by the community, for the community. Contribute and help shape the future of reading.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Trusted by Readers Worldwide</h2>
            <p className="text-xl text-gray-300">
              Join millions of readers who have made CaptureRead their go-to reading companion.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Users className="h-12 w-12 text-blue-400" />
              </div>
              <div className="text-4xl font-bold mb-2">2M+</div>
              <div className="text-gray-300">Active Users</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <BookOpen className="h-12 w-12 text-green-400" />
              </div>
              <div className="text-4xl font-bold mb-2">50M+</div>
              <div className="text-gray-300">Books Read</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Star className="h-12 w-12 text-yellow-400" />
              </div>
              <div className="text-4xl font-bold mb-2">4.8/5</div>
              <div className="text-gray-300">User Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Reading?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Download CaptureRead today and discover a better way to read, organize, and track your books.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="px-8 py-4 text-lg">
              <Link to="/download">
                <Download className="mr-2 h-5 w-5" />
                Download Now
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8 py-4 text-lg border-white text-white hover:bg-white hover:text-blue-600">
              <Link to="/docs/guides/getting-started">
                View Documentation
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
