
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Zap } from "lucide-react";

const SmartUpdatesFAQ = () => {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Smart Updates FAQ</h1>
        <p className="text-xl text-gray-600">
          Learn about CaptureRead's intelligent update system and how it keeps your content current.
        </p>
      </div>

      <Card className="border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Zap className="h-6 w-6 text-blue-600" />
            <span>Smart Update System</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="what-are-smart-updates">
              <AccordionTrigger>What are Smart Updates?</AccordionTrigger>
              <AccordionContent>
                Smart Updates automatically keep your content current:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>Automatic detection:</strong> Monitors your book sources for updates</li>
                  <li><strong>Intelligent scheduling:</strong> Updates during off-peak hours</li>
                  <li><strong>Selective updates:</strong> Only updates books you're actively reading</li>
                  <li><strong>Bandwidth awareness:</strong> Respects your data limits and preferences</li>
                  <li><strong>Version tracking:</strong> Keeps track of book versions and changes</li>
                  <li><strong>Rollback capability:</strong> Can revert to previous versions if needed</li>
                  <li><strong>Notification system:</strong> Alerts you when updates are available</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="how-smart-updates-work">
              <AccordionTrigger>How do Smart Updates work?</AccordionTrigger>
              <AccordionContent>
                The Smart Update process:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>Source monitoring:</strong> Regularly checks book sources for changes</li>
                  <li><strong>Change detection:</strong> Compares checksums and modification dates</li>
                  <li><strong>Priority assessment:</strong> Determines update priority based on your reading habits</li>
                  <li><strong>Scheduled execution:</strong> Downloads updates during optimal times</li>
                  <li><strong>Seamless replacement:</strong> Replaces old versions without losing progress</li>
                  <li><strong>Verification:</strong> Ensures updated files are valid and complete</li>
                  <li><strong>Cleanup:</strong> Removes old versions to save storage space</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="configure-smart-updates">
              <AccordionTrigger>How do I configure Smart Updates?</AccordionTrigger>
              <AccordionContent>
                Customize Smart Updates to your preferences:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>Enable/disable:</strong> Turn Smart Updates on or off globally</li>
                  <li><strong>Update frequency:</strong> Set how often to check for updates (daily, weekly, monthly)</li>
                  <li><strong>Bandwidth limits:</strong> Set maximum bandwidth for updates</li>
                  <li><strong>WiFi only:</strong> Restrict updates to WiFi connections</li>
                  <li><strong>Quiet hours:</strong> Set hours when updates shouldn't run</li>
                  <li><strong>Per-book settings:</strong> Configure updates for individual books</li>
                  <li><strong>Notification preferences:</strong> Choose when to be notified about updates</li>
                </ul>
                Access these settings in Settings → Updates → Smart Updates.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="update-conflicts">
              <AccordionTrigger>What happens if there are update conflicts?</AccordionTrigger>
              <AccordionContent>
                Smart Updates handles conflicts intelligently:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>Progress preservation:</strong> Your reading progress is always preserved</li>
                  <li><strong>Annotation merging:</strong> Attempts to merge annotations with updated content</li>
                  <li><strong>Bookmark adjustment:</strong> Adjusts bookmarks to match new content structure</li>
                  <li><strong>Version comparison:</strong> Shows you what changed between versions</li>
                  <li><strong>Manual resolution:</strong> Allows you to choose how to handle conflicts</li>
                  <li><strong>Backup creation:</strong> Creates backups before applying updates</li>
                  <li><strong>Rollback option:</strong> Easy rollback if update causes issues</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="update-notifications">
              <AccordionTrigger>How do update notifications work?</AccordionTrigger>
              <AccordionContent>
                Stay informed about available updates:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>Update available:</strong> Notification when updates are detected</li>
                  <li><strong>Update completed:</strong> Confirmation when updates finish</li>
                  <li><strong>Update failed:</strong> Alerts if updates encounter problems</li>
                  <li><strong>Batch notifications:</strong> Summary of multiple updates</li>
                  <li><strong>Priority updates:</strong> Immediate notifications for important updates</li>
                  <li><strong>Customizable alerts:</strong> Choose which types of updates to be notified about</li>
                  <li><strong>Quiet mode:</strong> Suppress notifications during reading sessions</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="manual-updates">
              <AccordionTrigger>Can I manually check for updates?</AccordionTrigger>
              <AccordionContent>
                Yes, you can manually control updates:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>Manual check:</strong> Check for updates on demand</li>
                  <li><strong>Selective updates:</strong> Choose which books to update</li>
                  <li><strong>Force update:</strong> Force update even if no changes detected</li>
                  <li><strong>Update queue:</strong> Queue multiple updates for batch processing</li>
                  <li><strong>Pause/resume:</strong> Pause and resume updates as needed</li>
                  <li><strong>Update history:</strong> View history of all updates</li>
                  <li><strong>Immediate updates:</strong> Apply updates immediately without scheduling</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="troubleshooting-updates">
              <AccordionTrigger>What if Smart Updates aren't working?</AccordionTrigger>
              <AccordionContent>
                Troubleshooting Smart Update issues:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>Check internet connection:</strong> Ensure stable internet access</li>
                  <li><strong>Verify permissions:</strong> Confirm app has necessary permissions</li>
                  <li><strong>Review settings:</strong> Check Smart Update configuration</li>
                  <li><strong>Clear cache:</strong> Clear update cache and retry</li>
                  <li><strong>Restart service:</strong> Restart the Smart Update service</li>
                  <li><strong>Source accessibility:</strong> Verify book sources are still accessible</li>
                  <li><strong>Contact support:</strong> Get help if issues persist</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="data-usage">
              <AccordionTrigger>How much data do Smart Updates use?</AccordionTrigger>
              <AccordionContent>
                Smart Updates are designed to be data-efficient:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>Delta updates:</strong> Only downloads changed parts of books</li>
                  <li><strong>Compression:</strong> Updates are compressed to reduce size</li>
                  <li><strong>Bandwidth monitoring:</strong> Tracks data usage for updates</li>
                  <li><strong>Usage reports:</strong> View detailed data usage statistics</li>
                  <li><strong>Limits and caps:</strong> Set monthly data limits for updates</li>
                  <li><strong>Efficient scheduling:</strong> Updates during off-peak hours when possible</li>
                  <li><strong>WiFi preference:</strong> Prioritizes WiFi over cellular data</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

export default SmartUpdatesFAQ;
