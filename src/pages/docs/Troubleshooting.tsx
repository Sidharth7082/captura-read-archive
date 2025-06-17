
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Wrench, Smartphone, Monitor, Wifi, Database } from "lucide-react";

const Troubleshooting = () => {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Troubleshooting</h1>
        <p className="text-xl text-gray-600">
          Solve common issues and get CaptureRead working smoothly on your device.
        </p>
      </div>

      <div className="space-y-8">
        {/* Quick Fixes */}
        <Alert>
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            <strong>Quick Fix:</strong> Many issues can be resolved by restarting the app or your device. Try this first before following the detailed troubleshooting steps below.
          </AlertDescription>
        </Alert>

        {/* Common Issues */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Wrench className="h-6 w-6 text-blue-600" />
              <span>Common Issues</span>
            </CardTitle>
            <CardDescription>
              Solutions for the most frequently reported problems
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="p-4 bg-red-50 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Badge variant="destructive">Critical</Badge>
                  <h3 className="font-semibold">App Crashes on Startup</h3>
                </div>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><strong>Symptoms:</strong> App closes immediately after opening, freezes on splash screen</p>
                  <p><strong>Solutions:</strong></p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Force close the app completely and restart</li>
                    <li>Check if your device has sufficient storage space (at least 1GB free)</li>
                    <li>Update to the latest version of CaptureRead</li>
                    <li>Restart your device to clear memory</li>
                    <li>If on Android, clear app cache in Settings → Apps → CaptureRead → Storage</li>
                    <li>Reinstall the app as a last resort (your cloud data will be preserved)</li>
                  </ul>
                </div>
              </div>
              
              <div className="p-4 bg-yellow-50 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Badge variant="outline">Sync</Badge>
                  <h3 className="font-semibold">Sync Not Working</h3>
                </div>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><strong>Symptoms:</strong> Reading progress not syncing, books missing on other devices</p>
                  <p><strong>Solutions:</strong></p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Check your internet connection</li>
                    <li>Verify you're logged into the same account on all devices</li>
                    <li>Go to Settings → Sync → Force Sync</li>
                    <li>Check if sync is enabled for the specific content (progress, bookmarks, etc.)</li>
                    <li>Try logging out and logging back in</li>
                    <li>Check if your account has reached storage limits</li>
                  </ul>
                </div>
              </div>
              
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Badge variant="outline">Import</Badge>
                  <h3 className="font-semibold">Can't Import Books</h3>
                </div>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><strong>Symptoms:</strong> Books don't appear after import, import fails with error</p>
                  <p><strong>Solutions:</strong></p>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Check if the file format is supported (EPUB, PDF, MOBI, etc.)</li>
                    <li>Verify the file isn't corrupted by opening it in another app</li>
                    <li>Ensure you have permission to access the file location</li>
                    <li>Try importing one book at a time if bulk import fails</li>
                    <li>Check available storage space on your device</li>
                    <li>For DRM-protected files, remove DRM first (if legally allowed)</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Platform-Specific Issues */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle>Platform-Specific Issues</CardTitle>
            <CardDescription>
              Troubleshooting steps for specific platforms
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Smartphone className="h-5 w-5 text-green-600" />
                  <h3 className="font-semibold">Android Issues</h3>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <h4 className="font-medium mb-1">Battery Optimization</h4>
                    <p className="text-sm text-gray-600">
                      Disable battery optimization for CaptureRead to prevent sync issues.
                      Go to Settings → Battery → Battery Optimization → CaptureRead → Don't optimize.
                    </p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <h4 className="font-medium mb-1">File Permissions</h4>
                    <p className="text-sm text-gray-600">
                      Grant storage permissions in Settings → Apps → CaptureRead → Permissions.
                      Enable "Files and media" and "Storage" permissions.
                    </p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <h4 className="font-medium mb-1">Notification Issues</h4>
                    <p className="text-sm text-gray-600">
                      Enable notifications for reading reminders and sync status.
                      Check Settings → Apps → CaptureRead → Notifications.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Monitor className="h-5 w-5 text-blue-600" />
                  <h3 className="font-semibold">Desktop Issues</h3>
                </div>
                <div className="space-y-3">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <h4 className="font-medium mb-1">Firewall/Antivirus</h4>
                    <p className="text-sm text-gray-600">
                      Add CaptureRead to your firewall and antivirus exceptions.
                      Some security software may block sync functionality.
                    </p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <h4 className="font-medium mb-1">Display Issues</h4>
                    <p className="text-sm text-gray-600">
                      For high-DPI displays, try adjusting the display scaling in
                      Settings → Display → Advanced display settings.
                    </p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <h4 className="font-medium mb-1">Performance</h4>
                    <p className="text-sm text-gray-600">
                      Close other applications to free up RAM. CaptureRead works best
                      with at least 4GB of available memory.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Advanced Troubleshooting */}
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Database className="h-6 w-6 text-purple-600" />
              <span>Advanced Troubleshooting</span>
            </CardTitle>
            <CardDescription>
              Advanced solutions for persistent issues
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="font-semibold mb-2">Reset App Data</h3>
              <p className="text-sm text-gray-700 mb-2">
                If you're experiencing persistent issues, you can reset the app data:
              </p>
              <ol className="list-decimal list-inside text-sm text-gray-700 space-y-1">
                <li>Go to Settings → Advanced → Reset App Data</li>
                <li>Choose what to reset (cache, settings, or everything)</li>
                <li>Confirm the reset action</li>
                <li>Restart the app and reconfigure your settings</li>
                <li>Re-import your books and restore from backup if needed</li>
              </ol>
            </div>
            
            <div className="p-4 bg-orange-50 rounded-lg">
              <h3 className="font-semibold mb-2">Debug Mode</h3>
              <p className="text-sm text-gray-700 mb-2">
                Enable debug mode to collect detailed error information:
              </p>
              <ul className="list-disc ml-6 text-sm text-gray-700 space-y-1">
                <li>Go to Settings → Advanced → Debug Mode</li>
                <li>Enable detailed logging</li>
                <li>Reproduce the issue</li>
                <li>Share the debug log with support</li>
                <li>Remember to disable debug mode when done</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Getting Help */}
        <Card className="border-0 shadow-sm bg-gradient-to-r from-blue-50 to-green-50">
          <CardHeader>
            <CardTitle>Still Need Help?</CardTitle>
            <CardDescription>
              If these solutions don't work, here's how to get additional support
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h3 className="font-semibold">Before Contacting Support</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Note your device model and OS version</li>
                  <li>• Record the CaptureRead version number</li>
                  <li>• Document the exact steps that cause the issue</li>
                  <li>• Take screenshots if possible</li>
                  <li>• Try the issue on another device if available</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Contact Options</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• In-app support chat (Settings → Help & Support)</li>
                  <li>• Email: support@captureread.com</li>
                  <li>• Community forum for user-to-user help</li>
                  <li>• GitHub issues for technical bugs</li>
                  <li>• Discord server for real-time assistance</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Troubleshooting;
