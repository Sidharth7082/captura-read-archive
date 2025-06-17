
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Heart, Users, Code, Bug, Lightbulb, MessageSquare } from "lucide-react";

const Contribute = () => {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contribute to CaptureRead</h1>
        <p className="text-xl text-gray-600">
          Help make CaptureRead better for everyone! There are many ways to contribute to our open-source project.
        </p>
      </div>

      <div className="space-y-8">
        {/* Ways to Contribute */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-red-600" />
              <span>Ways to Contribute</span>
            </CardTitle>
            <CardDescription>
              Everyone can contribute, regardless of their technical expertise
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center space-x-2 mb-3">
                  <Code className="h-5 w-5 text-blue-600" />
                  <h3 className="font-semibold">Code Contributions</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Fix bugs and improve performance</li>
                  <li>• Add new features and enhancements</li>
                  <li>• Improve user interface and experience</li>
                  <li>• Write and improve tests</li>
                  <li>• Optimize for different platforms</li>
                </ul>
              </div>
              
              <div className="p-4 bg-green-50 rounded-lg">
                <div className="flex items-center space-x-2 mb-3">
                  <Bug className="h-5 w-5 text-green-600" />
                  <h3 className="font-semibold">Bug Reports</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Report issues you encounter</li>
                  <li>• Provide detailed reproduction steps</li>
                  <li>• Test beta versions and prereleases</li>
                  <li>• Verify and triage existing issues</li>
                  <li>• Help categorize and prioritize bugs</li>
                </ul>
              </div>
              
              <div className="p-4 bg-purple-50 rounded-lg">
                <div className="flex items-center space-x-2 mb-3">
                  <Lightbulb className="h-5 w-5 text-purple-600" />
                  <h3 className="font-semibold">Feature Requests</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Suggest new features and improvements</li>
                  <li>• Participate in feature discussions</li>
                  <li>• Create mockups and design concepts</li>
                  <li>• Vote on community proposals</li>
                  <li>• Share your use cases and needs</li>
                </ul>
              </div>
              
              <div className="p-4 bg-orange-50 rounded-lg">
                <div className="flex items-center space-x-2 mb-3">
                  <MessageSquare className="h-5 w-5 text-orange-600" />
                  <h3 className="font-semibold">Documentation</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Improve existing documentation</li>
                  <li>• Write tutorials and guides</li>
                  <li>• Translate content to other languages</li>
                  <li>• Create video tutorials</li>
                  <li>• Answer questions in forums</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Getting Started */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Github className="h-6 w-6 text-gray-900" />
              <span>Getting Started</span>
            </CardTitle>
            <CardDescription>
              Steps to start contributing to CaptureRead
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold mb-3">1. Set Up Your Development Environment</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>Before you start contributing, you'll need to set up your development environment:</p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Fork the CaptureRead repository on GitHub</li>
                    <li>Clone your fork to your local machine</li>
                    <li>Install dependencies (Node.js, React Native CLI, etc.)</li>
                    <li>Set up the development database and configuration</li>
                    <li>Run the project locally to ensure everything works</li>
                  </ul>
                </div>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold mb-3">2. Find Something to Work On</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <p>Look for issues labeled as good for beginners:</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="outline">good first issue</Badge>
                    <Badge variant="outline">help wanted</Badge>
                    <Badge variant="outline">documentation</Badge>
                    <Badge variant="outline">bug</Badge>
                    <Badge variant="outline">enhancement</Badge>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold mb-3">3. Make Your Contribution</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Create a new branch for your changes</li>
                    <li>Make your changes following our coding standards</li>
                    <li>Write tests for new functionality</li>
                    <li>Ensure all tests pass</li>
                    <li>Update documentation if needed</li>
                  </ul>
                </div>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold mb-3">4. Submit Your Pull Request</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Push your changes to your fork</li>
                    <li>Create a pull request with a clear description</li>
                    <li>Reference any related issues</li>
                    <li>Wait for code review and address feedback</li>
                    <li>Celebrate when your contribution is merged! 🎉</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Development Guidelines */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle>Development Guidelines</CardTitle>
            <CardDescription>
              Follow these guidelines to ensure your contributions are accepted
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Code Style</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Follow the existing code style and conventions</li>
                  <li>• Use meaningful variable and function names</li>
                  <li>• Write clear and concise comments</li>
                  <li>• Keep functions small and focused</li>
                  <li>• Use TypeScript for type safety</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Testing</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Write unit tests for new functionality</li>
                  <li>• Ensure all existing tests still pass</li>
                  <li>• Test on multiple platforms when possible</li>
                  <li>• Include integration tests for complex features</li>
                  <li>• Document test scenarios and edge cases</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Documentation</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Update README files when needed</li>
                  <li>• Add inline code documentation</li>
                  <li>• Include examples for new features</li>
                  <li>• Update API documentation</li>
                  <li>• Write clear commit messages</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3">Performance</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Consider performance implications</li>
                  <li>• Optimize for mobile devices</li>
                  <li>• Minimize memory usage</li>
                  <li>• Use efficient algorithms and data structures</li>
                  <li>• Profile code when making performance changes</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Community */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="h-6 w-6 text-blue-600" />
              <span>Join Our Community</span>
            </CardTitle>
            <CardDescription>
              Connect with other contributors and users
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button variant="outline" className="h-16 justify-start">
                <div className="text-left">
                  <div className="font-medium">Discord Server</div>
                  <div className="text-sm text-gray-600">Real-time chat and support</div>
                </div>
              </Button>
              
              <Button variant="outline" className="h-16 justify-start">
                <div className="text-left">
                  <div className="font-medium">GitHub Discussions</div>
                  <div className="text-sm text-gray-600">Feature requests and Q&A</div>
                </div>
              </Button>
              
              <Button variant="outline" className="h-16 justify-start">
                <div className="text-left">
                  <div className="font-medium">Reddit Community</div>
                  <div className="text-sm text-gray-600">News and discussions</div>
                </div>
              </Button>
              
              <Button variant="outline" className="h-16 justify-start">
                <div className="text-left">
                  <div className="font-medium">Twitter</div>
                  <div className="text-sm text-gray-600">Updates and announcements</div>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contribute;
