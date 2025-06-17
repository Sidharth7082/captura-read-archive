
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";

const UpcomingUpdatesFAQ = () => {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Updates FAQ</h1>
        <p className="text-xl text-gray-600">
          Learn about planned features and updates coming to CaptureRead.
        </p>
      </div>

      <Card className="border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Clock className="h-6 w-6 text-blue-600" />
            <span>Planned Features & Updates</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="roadmap-overview">
              <AccordionTrigger>What's on the CaptureRead roadmap?</AccordionTrigger>
              <AccordionContent>
                Our development roadmap includes exciting new features:
                <div className="space-y-3 mt-3">
                  <div className="flex items-center space-x-2">
                    <Badge className="bg-green-100 text-green-800">Q2 2024</Badge>
                    <span className="text-sm">AI-powered reading recommendations</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className="bg-blue-100 text-blue-800">Q3 2024</Badge>
                    <span className="text-sm">Enhanced social features and book clubs</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className="bg-purple-100 text-purple-800">Q4 2024</Badge>
                    <span className="text-sm">Advanced annotation tools and collaboration</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge className="bg-orange-100 text-orange-800">Q1 2025</Badge>
                    <span className="text-sm">Offline-first architecture improvements</span>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="ai-features">
              <AccordionTrigger>What AI features are coming?</AccordionTrigger>
              <AccordionContent>
                AI will enhance your reading experience:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>Smart recommendations:</strong> AI-powered book suggestions based on your reading history</li>
                  <li><strong>Reading insights:</strong> Analysis of your reading patterns and preferences</li>
                  <li><strong>Content summarization:</strong> AI-generated summaries of long books</li>
                  <li><strong>Intelligent search:</strong> Natural language search across your entire library</li>
                  <li><strong>Auto-tagging:</strong> Automatic categorization and tagging of books</li>
                  <li><strong>Reading assistant:</strong> AI helper for questions about book content</li>
                  <li><strong>Personalized highlights:</strong> AI suggests important passages to highlight</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="social-features">
              <AccordionTrigger>What social features are planned?</AccordionTrigger>
              <AccordionContent>
                Connect with other readers:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>Book clubs:</strong> Join or create reading groups</li>
                  <li><strong>Discussion forums:</strong> Chapter-by-chapter discussions</li>
                  <li><strong>Reading buddies:</strong> Find reading partners with similar interests</li>
                  <li><strong>Shared annotations:</strong> Collaborate on book annotations</li>
                  <li><strong>Reading challenges:</strong> Community-driven reading challenges</li>
                  <li><strong>Author interactions:</strong> Direct interaction with authors</li>
                  <li><strong>Social reading stats:</strong> Compare reading progress with friends</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="platform-expansion">
              <AccordionTrigger>What new platforms will be supported?</AccordionTrigger>
              <AccordionContent>
                CaptureRead is expanding to new platforms:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>Web app:</strong> Full-featured web version for any browser</li>
                  <li><strong>Chrome OS:</strong> Native Chromebook application</li>
                  <li><strong>Smart TVs:</strong> Reading on large screens via Android TV</li>
                  <li><strong>E-ink devices:</strong> Dedicated e-reader device support</li>
                  <li><strong>Wear OS:</strong> Quick reading controls on smartwatches</li>
                  <li><strong>Voice assistants:</strong> Reading via Alexa and Google Assistant</li>
                  <li><strong>Car integration:</strong> Audiobook playback in vehicles</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="accessibility-improvements">
              <AccordionTrigger>What accessibility improvements are coming?</AccordionTrigger>
              <AccordionContent>
                Making CaptureRead accessible to everyone:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>Enhanced screen reader support:</strong> Better compatibility with assistive technologies</li>
                  <li><strong>Voice navigation:</strong> Complete voice control for hands-free operation</li>
                  <li><strong>Dyslexia-friendly features:</strong> Specialized fonts and reading aids</li>
                  <li><strong>High contrast themes:</strong> Better visibility for users with visual impairments</li>
                  <li><strong>Gesture customization:</strong> Customizable gestures for users with mobility issues</li>
                  <li><strong>Text-to-speech improvements:</strong> More natural-sounding voices and better pronunciation</li>
                  <li><strong>Keyboard navigation:</strong> Complete keyboard-only navigation support</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="performance-improvements">
              <AccordionTrigger>What performance improvements are planned?</AccordionTrigger>
              <AccordionContent>
                Ongoing performance enhancements:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>Faster startup:</strong> Reduce app launch time by 50%</li>
                  <li><strong>Better memory management:</strong> Optimized memory usage for large libraries</li>
                  <li><strong>Improved sync:</strong> Faster and more reliable cloud synchronization</li>
                  <li><strong>Enhanced caching:</strong> Smarter caching for better performance</li>
                  <li><strong>Background processing:</strong> Better handling of background tasks</li>
                  <li><strong>Battery optimization:</strong> Reduced battery usage during reading</li>
                  <li><strong>Network efficiency:</strong> Optimized data usage and offline capabilities</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="beta-testing">
              <AccordionTrigger>How can I test upcoming features?</AccordionTrigger>
              <AccordionContent>
                Join our beta testing program:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>Beta channel:</strong> Sign up for beta releases in the app settings</li>
                  <li><strong>TestFlight (iOS):</strong> Join our TestFlight beta program</li>
                  <li><strong>Google Play Beta (Android):</strong> Opt into beta testing via Google Play</li>
                  <li><strong>Desktop preview:</strong> Download development builds from our website</li>
                  <li><strong>Feedback program:</strong> Provide feedback on new features</li>
                  <li><strong>Bug reporting:</strong> Help us identify and fix issues</li>
                  <li><strong>Feature requests:</strong> Suggest improvements to beta features</li>
                </ul>
                Note: Beta versions may contain bugs and should not be used for important reading sessions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="feature-requests">
              <AccordionTrigger>How can I request new features?</AccordionTrigger>
              <AccordionContent>
                We welcome feature requests from our community:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>Feature request forum:</strong> Submit ideas on our community forum</li>
                  <li><strong>GitHub issues:</strong> Create feature requests on our GitHub repository</li>
                  <li><strong>In-app feedback:</strong> Use the feedback form in Settings → Help & Support</li>
                  <li><strong>Community voting:</strong> Vote on existing feature requests</li>
                  <li><strong>User surveys:</strong> Participate in regular user surveys</li>
                  <li><strong>Social media:</strong> Share ideas on Twitter, Reddit, or Discord</li>
                  <li><strong>Direct email:</strong> Send detailed proposals to features@captureread.com</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="release-schedule">
              <AccordionTrigger>How often are updates released?</AccordionTrigger>
              <AccordionContent>
                Our regular release schedule:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>Major releases:</strong> Every 6 months with significant new features</li>
                  <li><strong>Minor releases:</strong> Monthly releases with improvements and bug fixes</li>
                  <li><strong>Patch releases:</strong> Weekly or as-needed for critical bug fixes</li>
                  <li><strong>Beta releases:</strong> Bi-weekly beta releases for testing new features</li>
                  <li><strong>Hotfixes:</strong> Immediate releases for security or critical issues</li>
                  <li><strong>Platform staggering:</strong> Some platforms may receive updates at different times</li>
                  <li><strong>Announcement timing:</strong> Updates announced 1-2 weeks before release</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

export default UpcomingUpdatesFAQ;
