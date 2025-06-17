
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Settings, Eye, Type, Palette, Zap, Smartphone } from "lucide-react";

const ReaderSettings = () => {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Reader Settings</h1>
        <p className="text-xl text-gray-600">
          Customize your reading experience with CaptureRead's comprehensive settings and personalization options.
        </p>
      </div>

      <div className="space-y-8">
        {/* Display Settings */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Eye className="h-6 w-6 text-blue-600" />
              <span>Display Settings</span>
            </CardTitle>
            <CardDescription>
              Adjust visual settings for comfortable reading
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold mb-3 flex items-center">
                  <Palette className="h-5 w-5 mr-2 text-blue-600" />
                  Themes & Colors
                </h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex items-center justify-between">
                    <span>Light Theme</span>
                    <Badge variant="outline">Default</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Dark Theme</span>
                    <Badge variant="outline">Popular</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Sepia Theme</span>
                    <Badge variant="outline">Eye-friendly</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Custom Themes</span>
                    <Badge variant="outline">Premium</Badge>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold mb-3">Brightness & Contrast</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Auto-brightness based on ambient light</li>
                  <li>• Manual brightness slider</li>
                  <li>• Contrast adjustment for PDFs</li>
                  <li>• Blue light filter for evening reading</li>
                  <li>• Invert colors for OLED displays</li>
                </ul>
              </div>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-3">Screen Orientation</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="p-3 bg-white rounded-lg mb-2">
                    <Smartphone className="h-8 w-8 mx-auto text-gray-600" />
                  </div>
                  <div className="font-medium">Portrait</div>
                  <div className="text-sm text-gray-600">Standard reading mode</div>
                </div>
                <div className="text-center">
                  <div className="p-3 bg-white rounded-lg mb-2">
                    <div className="h-8 w-8 mx-auto bg-gray-300 rounded transform rotate-90"></div>
                  </div>
                  <div className="font-medium">Landscape</div>
                  <div className="text-sm text-gray-600">Tablet and desktop</div>
                </div>
                <div className="text-center">
                  <div className="p-3 bg-white rounded-lg mb-2">
                    <div className="h-8 w-8 mx-auto bg-gray-300 rounded"></div>
                  </div>
                  <div className="font-medium">Auto-rotate</div>
                  <div className="text-sm text-gray-600">Follows device orientation</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Typography Settings */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Type className="h-6 w-6 text-green-600" />
              <span>Typography Settings</span>
            </CardTitle>
            <CardDescription>
              Customize fonts and text appearance
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold">Font Options</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="font-serif text-lg mb-1">Serif Fonts</div>
                    <p className="text-sm text-gray-600">Traditional fonts like Georgia, Times New Roman</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="font-sans text-lg mb-1">Sans-serif Fonts</div>
                    <p className="text-sm text-gray-600">Modern fonts like Roboto, Helvetica</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="font-mono text-lg mb-1">Monospace Fonts</div>
                    <p className="text-sm text-gray-600">Fixed-width fonts like Courier</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="text-lg mb-1" style={{fontFamily: 'OpenDyslexic, sans-serif'}}>Dyslexia-Friendly</div>
                    <p className="text-sm text-gray-600">Specialized fonts for improved readability</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-semibold">Text Formatting</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span>Font Size</span>
                    <div className="flex space-x-2">
                      <Badge variant="outline">12px</Badge>
                      <Badge variant="outline">16px</Badge>
                      <Badge variant="outline">24px</Badge>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span>Line Height</span>
                    <div className="flex space-x-2">
                      <Badge variant="outline">1.2x</Badge>
                      <Badge variant="outline">1.5x</Badge>
                      <Badge variant="outline">2.0x</Badge>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span>Paragraph Spacing</span>
                    <div className="flex space-x-2">
                      <Badge variant="outline">Tight</Badge>
                      <Badge variant="outline">Normal</Badge>
                      <Badge variant="outline">Loose</Badge>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span>Text Alignment</span>
                    <div className="flex space-x-2">
                      <Badge variant="outline">Left</Badge>
                      <Badge variant="outline">Justify</Badge>
                      <Badge variant="outline">Center</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation Settings */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Zap className="h-6 w-6 text-purple-600" />
              <span>Navigation Settings</span>
            </CardTitle>
            <CardDescription>
              Configure how you navigate through books
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-purple-50 rounded-lg">
                <h3 className="font-semibold mb-3">Page Turning</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Tap to turn page</span>
                    <Badge variant="outline">Enabled</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Swipe gestures</span>
                    <Badge variant="outline">Enabled</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Volume buttons</span>
                    <Badge variant="outline">Optional</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Page turn animation</span>
                    <Badge variant="outline">Customizable</Badge>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-orange-50 rounded-lg">
                <h3 className="font-semibold mb-3">Scrolling</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Continuous scroll</span>
                    <Badge variant="outline">Available</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Auto-scroll speed</span>
                    <Badge variant="outline">Adjustable</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Smart scroll</span>
                    <Badge variant="outline">AI-powered</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Scroll sensitivity</span>
                    <Badge variant="outline">Configurable</Badge>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-3">Gesture Controls</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Touch Gestures</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Single tap: Turn page or show/hide UI</li>
                    <li>• Double tap: Zoom in/out</li>
                    <li>• Long press: Select text or bookmark</li>
                    <li>• Pinch: Zoom in/out</li>
                    <li>• Two-finger tap: Toggle reading mode</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Swipe Gestures</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Swipe left/right: Next/previous page</li>
                    <li>• Swipe up/down: Scroll or chapter navigation</li>
                    <li>• Diagonal swipe: Custom actions</li>
                    <li>• Edge swipe: Open sidebar or menu</li>
                    <li>• Three-finger swipe: Quick settings</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Advanced Settings */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Settings className="h-6 w-6 text-gray-600" />
              <span>Advanced Settings</span>
            </CardTitle>
            <CardDescription>
              Fine-tune your reading experience
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold mb-2">Performance</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Preload next pages for faster navigation</li>
                  <li>• Adjust cache size for better performance</li>
                  <li>• Enable hardware acceleration</li>
                  <li>• Optimize battery usage</li>
                  <li>• Reduce animations for older devices</li>
                </ul>
              </div>
              
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold mb-2">Accessibility</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Text-to-speech integration</li>
                  <li>• High contrast mode</li>
                  <li>• Large text support</li>
                  <li>• Voice navigation commands</li>
                  <li>• Screen reader compatibility</li>
                </ul>
              </div>
              
              <div className="p-4 bg-yellow-50 rounded-lg">
                <h3 className="font-semibold mb-2">Reading Aids</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Reading ruler/guide line</li>
                  <li>• Focus mode (dim surrounding text)</li>
                  <li>• Speed reading mode</li>
                  <li>• Dictionary lookup integration</li>
                  <li>• Translation support</li>
                </ul>
              </div>
              
              <div className="p-4 bg-purple-50 rounded-lg">
                <h3 className="font-semibold mb-2">Customization</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Custom CSS for advanced styling</li>
                  <li>• Keyboard shortcuts</li>
                  <li>• Toolbar customization</li>
                  <li>• Status bar preferences</li>
                  <li>• Quick action buttons</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ReaderSettings;
