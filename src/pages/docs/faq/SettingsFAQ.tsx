
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Settings } from "lucide-react";

const SettingsFAQ = () => {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Settings FAQ</h1>
        <p className="text-xl text-gray-600">
          Learn how to configure and customize CaptureRead to suit your preferences.
        </p>
      </div>

      <Card className="border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Settings className="h-6 w-6 text-blue-600" />
            <span>App Configuration</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="sync-settings">
              <AccordionTrigger>How do I configure sync settings?</AccordionTrigger>
              <AccordionContent>
                Sync settings control how your data is synchronized across devices:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>Enable sync:</strong> Go to Settings → Account → Enable Sync</li>
                  <li><strong>Sync frequency:</strong> Choose automatic, manual, or scheduled sync</li>
                  <li><strong>Sync content:</strong> Select what to sync (progress, bookmarks, settings, etc.)</li>
                  <li><strong>Conflict resolution:</strong> Choose how to handle sync conflicts</li>
                  <li><strong>Bandwidth limits:</strong> Set limits for sync data usage</li>
                  <li><strong>Sync over WiFi only:</strong> Restrict sync to WiFi connections</li>
                  <li><strong>Force sync:</strong> Manually trigger sync when needed</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="theme-customization">
              <AccordionTrigger>How do I customize themes and appearance?</AccordionTrigger>
              <AccordionContent>
                Customize the app's appearance:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>Built-in themes:</strong> Choose from Light, Dark, Sepia, or High Contrast</li>
                  <li><strong>Custom themes:</strong> Create your own color schemes (Premium feature)</li>
                  <li><strong>Auto theme switching:</strong> Automatically switch based on time of day</li>
                  <li><strong>Reading themes:</strong> Separate themes for library and reading views</li>
                  <li><strong>Color customization:</strong> Adjust background, text, and accent colors</li>
                  <li><strong>Theme sharing:</strong> Share custom themes with the community</li>
                  <li><strong>Theme import:</strong> Import themes created by other users</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="notification-settings">
              <AccordionTrigger>How do I manage notifications?</AccordionTrigger>
              <AccordionContent>
                Control when and how CaptureRead notifies you:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>Reading reminders:</strong> Set daily reading goal reminders</li>
                  <li><strong>New book notifications:</strong> Get notified about new releases</li>
                  <li><strong>Sync notifications:</strong> Alerts for sync completion or failures</li>
                  <li><strong>Download notifications:</strong> Status updates for book downloads</li>
                  <li><strong>Reading streak notifications:</strong> Celebrate reading milestones</li>
                  <li><strong>Quiet hours:</strong> Disable notifications during specific hours</li>
                  <li><strong>Notification sounds:</strong> Customize or disable notification sounds</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="privacy-settings">
              <AccordionTrigger>What privacy settings are available?</AccordionTrigger>
              <AccordionContent>
                Protect your privacy with these settings:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>Data collection:</strong> Control what usage data is collected</li>
                  <li><strong>Analytics:</strong> Opt out of anonymous analytics</li>
                  <li><strong>Cloud storage:</strong> Choose what data to store in the cloud</li>
                  <li><strong>Local-only mode:</strong> Keep all data on your device</li>
                  <li><strong>Reading history:</strong> Control reading activity tracking</li>
                  <li><strong>Advertising:</strong> Manage personalized ad preferences</li>
                  <li><strong>Data export:</strong> Export your data at any time</li>
                  <li><strong>Account deletion:</strong> Permanently delete your account and data</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="backup-restore">
              <AccordionTrigger>How do backup and restore work?</AccordionTrigger>
              <AccordionContent>
                Backup and restore your CaptureRead data:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>Automatic backups:</strong> Daily backups to cloud storage (if enabled)</li>
                  <li><strong>Manual backups:</strong> Create backups on demand</li>
                  <li><strong>Local backups:</strong> Save backups to your device storage</li>
                  <li><strong>Selective backup:</strong> Choose what to include in backups</li>
                  <li><strong>Backup encryption:</strong> Encrypt backups for security</li>
                  <li><strong>Restore options:</strong> Restore from any available backup</li>
                  <li><strong>Backup verification:</strong> Verify backup integrity before restore</li>
                  <li><strong>Migration tools:</strong> Transfer data from other reading apps</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="performance-settings">
              <AccordionTrigger>How can I optimize performance settings?</AccordionTrigger>
              <AccordionContent>
                Optimize CaptureRead for your device:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>Cache size:</strong> Adjust cache size for better performance</li>
                  <li><strong>Preloading:</strong> Configure page preloading for faster navigation</li>
                  <li><strong>Image quality:</strong> Adjust image quality to save memory</li>
                  <li><strong>Animation settings:</strong> Reduce animations on slower devices</li>
                  <li><strong>Memory management:</strong> Configure memory usage limits</li>
                  <li><strong>Background processing:</strong> Control background sync and updates</li>
                  <li><strong>Battery optimization:</strong> Enable power-saving features</li>
                  <li><strong>Hardware acceleration:</strong> Use GPU for better performance</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="reset-settings">
              <AccordionTrigger>How do I reset settings to defaults?</AccordionTrigger>
              <AccordionContent>
                Reset various aspects of CaptureRead:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>Reset all settings:</strong> Restore all settings to factory defaults</li>
                  <li><strong>Reset appearance:</strong> Reset only theme and display settings</li>
                  <li><strong>Reset reading settings:</strong> Restore reading preferences to defaults</li>
                  <li><strong>Reset account settings:</strong> Reset sync and account preferences</li>
                  <li><strong>Clear cache:</strong> Clear temporary files and cached data</li>
                  <li><strong>Reset keyboard shortcuts:</strong> Restore default key bindings</li>
                  <li><strong>Factory reset:</strong> Complete reset including user data (use with caution)</li>
                </ul>
                Always backup your data before performing any reset operations.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="import-export-settings">
              <AccordionTrigger>Can I import/export my settings?</AccordionTrigger>
              <AccordionContent>
                Share and backup your settings configuration:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>Export settings:</strong> Save settings to a file for backup</li>
                  <li><strong>Import settings:</strong> Load settings from a backup file</li>
                  <li><strong>Selective import:</strong> Choose which settings to import</li>
                  <li><strong>Settings templates:</strong> Create and share setting templates</li>
                  <li><strong>Cloud settings sync:</strong> Automatically sync settings across devices</li>
                  <li><strong>Profile management:</strong> Create multiple setting profiles</li>
                  <li><strong>Quick setup:</strong> Import recommended settings for new users</li>
                  <li><strong>Settings migration:</strong> Migrate settings from other reading apps</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

export default SettingsFAQ;
