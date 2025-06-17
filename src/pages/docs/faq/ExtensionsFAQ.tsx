
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Puzzle } from "lucide-react";

const ExtensionsFAQ = () => {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Extensions FAQ</h1>
        <p className="text-xl text-gray-600">
          Learn about CaptureRead extensions and how they enhance your reading experience.
        </p>
      </div>

      <Card className="border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Puzzle className="h-6 w-6 text-blue-600" />
            <span>Extensions & Add-ons</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="what-are-extensions">
              <AccordionTrigger>What are CaptureRead extensions?</AccordionTrigger>
              <AccordionContent>
                Extensions add extra functionality to CaptureRead:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>Book source extensions:</strong> Connect to additional book repositories</li>
                  <li><strong>Reading tools:</strong> Enhanced reading features like speed reading</li>
                  <li><strong>Export tools:</strong> Additional export formats and destinations</li>
                  <li><strong>Theme extensions:</strong> Custom themes and visual enhancements</li>
                  <li><strong>Integration extensions:</strong> Connect with other apps and services</li>
                  <li><strong>Accessibility extensions:</strong> Tools for users with special needs</li>
                  <li><strong>Analytics extensions:</strong> Advanced reading statistics and insights</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="install-extensions">
              <AccordionTrigger>How do I install extensions?</AccordionTrigger>
              <AccordionContent>
                Installing extensions is straightforward:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>Extension store:</strong> Browse the built-in extension store</li>
                  <li><strong>One-click install:</strong> Install extensions with a single tap</li>
                  <li><strong>Sideload extensions:</strong> Install extensions from files</li>
                  <li><strong>Developer mode:</strong> Enable developer mode for testing extensions</li>
                  <li><strong>Automatic updates:</strong> Extensions update automatically</li>
                  <li><strong>Dependency management:</strong> Automatically handle extension dependencies</li>
                  <li><strong>Rollback capability:</strong> Revert to previous extension versions</li>
                </ul>
                Access extensions through Settings → Extensions → Browse Extensions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="popular-extensions">
              <AccordionTrigger>What are the most popular extensions?</AccordionTrigger>
              <AccordionContent>
                Top-rated extensions by category:
                <div className="space-y-4 mt-3">
                  <div>
                    <h4 className="font-medium">Reading Enhancement</h4>
                    <ul className="text-sm text-gray-600 ml-4 space-y-1">
                      <li>• Speed Reader Pro - RSVP reading with customizable speeds</li>
                      <li>• Focus Mode - Highlights current sentence/paragraph</li>
                      <li>• Reading Ruler - Visual guide for line-by-line reading</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium">Book Sources</h4>
                    <ul className="text-sm text-gray-600 ml-4 space-y-1">
                      <li>• Project Gutenberg - Access to 60,000+ free ebooks</li>
                      <li>• Internet Archive - Millions of books and documents</li>
                      <li>• Open Library - Comprehensive book database</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium">Productivity</h4>
                    <ul className="text-sm text-gray-600 ml-4 space-y-1">
                      <li>• Notion Sync - Sync highlights to Notion</li>
                      <li>• Goodreads Integration - Sync reading progress</li>
                      <li>• Anki Flashcards - Create flashcards from highlights</li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="manage-extensions">
              <AccordionTrigger>How do I manage installed extensions?</AccordionTrigger>
              <AccordionContent>
                Extension management tools:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>Extension list:</strong> View all installed extensions</li>
                  <li><strong>Enable/disable:</strong> Toggle extensions on/off without uninstalling</li>
                  <li><strong>Update management:</strong> Control automatic updates</li>
                  <li><strong>Configuration:</strong> Adjust extension settings</li>
                  <li><strong>Permission review:</strong> Review and modify extension permissions</li>
                  <li><strong>Performance monitoring:</strong> Check extension impact on app performance</li>
                  <li><strong>Backup extensions:</strong> Export extension configurations</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="extension-security">
              <AccordionTrigger>Are extensions safe to use?</AccordionTrigger>
              <AccordionContent>
                Extension security measures:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>Code review:</strong> All store extensions undergo security review</li>
                  <li><strong>Sandboxing:</strong> Extensions run in isolated environments</li>
                  <li><strong>Permission system:</strong> Extensions request specific permissions</li>
                  <li><strong>Digital signatures:</strong> Extensions are cryptographically signed</li>
                  <li><strong>Reputation system:</strong> User ratings and reviews for quality assurance</li>
                  <li><strong>Automatic scanning:</strong> Regular security scans for malware</li>
                  <li><strong>Revocation system:</strong> Ability to remotely disable malicious extensions</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="develop-extensions">
              <AccordionTrigger>Can I develop my own extensions?</AccordionTrigger>
              <AccordionContent>
                Yes! CaptureRead supports custom extension development:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>Extension SDK:</strong> Comprehensive development kit with APIs</li>
                  <li><strong>Documentation:</strong> Detailed guides and API reference</li>
                  <li><strong>Sample extensions:</strong> Example code for common extension types</li>
                  <li><strong>Testing tools:</strong> Built-in testing and debugging tools</li>
                  <li><strong>Publishing platform:</strong> Submit extensions to the store</li>
                  <li><strong>Developer community:</strong> Forums and chat for extension developers</li>
                  <li><strong>Monetization options:</strong> Paid extensions and donation support</li>
                </ul>
                Visit our developer portal at developers.captureread.com to get started.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="extension-troubleshooting">
              <AccordionTrigger>What if an extension isn't working?</AccordionTrigger>
              <AccordionContent>
                Troubleshooting extension issues:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>Restart app:</strong> Many issues resolve with a simple restart</li>
                  <li><strong>Check permissions:</strong> Ensure the extension has necessary permissions</li>
                  <li><strong>Update extension:</strong> Install the latest version</li>
                  <li><strong>Disable conflicts:</strong> Temporarily disable other extensions</li>
                  <li><strong>Clear cache:</strong> Clear extension cache and data</li>
                  <li><strong>Reinstall extension:</strong> Uninstall and reinstall the extension</li>
                  <li><strong>Check logs:</strong> Review extension logs for error messages</li>
                  <li><strong>Contact developer:</strong> Report issues to the extension developer</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="extension-updates">
              <AccordionTrigger>How do extension updates work?</AccordionTrigger>
              <AccordionContent>
                Extension update system:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>Automatic updates:</strong> Extensions update automatically by default</li>
                  <li><strong>Manual updates:</strong> Option to update extensions manually</li>
                  <li><strong>Staged rollouts:</strong> Updates released gradually to ensure stability</li>
                  <li><strong>Rollback option:</strong> Revert to previous version if needed</li>
                  <li><strong>Update notifications:</strong> Notifications for important updates</li>
                  <li><strong>Beta updates:</strong> Opt into beta versions of extensions</li>
                  <li><strong>Update scheduling:</strong> Control when updates are installed</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExtensionsFAQ;
