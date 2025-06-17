
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const GeneralFAQ = () => {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">General FAQ</h1>
        <p className="text-xl text-gray-600">
          Find answers to the most common questions about CaptureRead.
        </p>
      </div>

      <Card className="border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <HelpCircle className="h-6 w-6 text-blue-600" />
            <span>Frequently Asked Questions</span>
          </CardTitle>
          <CardDescription>
            Common questions and answers about using CaptureRead
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="what-is-captureread">
              <AccordionTrigger>What is CaptureRead?</AccordionTrigger>
              <AccordionContent>
                CaptureRead is a comprehensive digital reading application designed to help you organize, track, and enhance your reading experience. It supports multiple file formats, offers cloud synchronization, and provides detailed reading analytics to help you build better reading habits.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="supported-formats">
              <AccordionTrigger>What file formats does CaptureRead support?</AccordionTrigger>
              <AccordionContent>
                CaptureRead supports a wide range of formats including:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>EPUB (Electronic Publication)</li>
                  <li>PDF (Portable Document Format)</li>
                  <li>MOBI (Mobipocket)</li>
                  <li>AZW3 (Amazon Kindle)</li>
                  <li>CBZ/CBR (Comic Book Archives)</li>
                  <li>TXT (Plain Text)</li>
                  <li>HTML (Web Pages)</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="free-or-paid">
              <AccordionTrigger>Is CaptureRead free?</AccordionTrigger>
              <AccordionContent>
                CaptureRead offers both free and premium features. The core reading functionality is completely free, including basic library management, reading progress tracking, and local storage. Premium features include cloud sync, advanced analytics, unlimited cloud storage, and priority support.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="cloud-sync">
              <AccordionTrigger>How does cloud sync work?</AccordionTrigger>
              <AccordionContent>
                Cloud sync automatically synchronizes your reading progress, bookmarks, highlights, and library organization across all your devices. Your actual book files can optionally be stored in the cloud for access anywhere. All data is encrypted for security and privacy.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="offline-reading">
              <AccordionTrigger>Can I read offline?</AccordionTrigger>
              <AccordionContent>
                Yes! CaptureRead is designed to work offline. Once you've downloaded or imported your books, you can read them without an internet connection. Your reading progress and annotations are saved locally and will sync when you reconnect to the internet.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="device-limit">
              <AccordionTrigger>How many devices can I use with one account?</AccordionTrigger>
              <AccordionContent>
                Free accounts can sync across up to 3 devices. Premium accounts have unlimited device synchronization. You can manage your connected devices from your account settings and remove devices you no longer use.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="privacy-security">
              <AccordionTrigger>How secure is my data?</AccordionTrigger>
              <AccordionContent>
                We take privacy and security seriously. Your data is encrypted in transit and at rest. We don't store or analyze your book content - only metadata like reading progress and bookmarks. You can enable local-only mode to keep all data on your device if preferred.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="import-existing-library">
              <AccordionTrigger>Can I import my existing library from other apps?</AccordionTrigger>
              <AccordionContent>
                Yes! CaptureRead supports importing from various sources:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Calibre libraries</li>
                  <li>Goodreads reading lists</li>
                  <li>Other reading apps' export files</li>
                  <li>Bulk import from folders</li>
                  <li>Cloud storage services (Google Drive, Dropbox, etc.)</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="family-sharing">
              <AccordionTrigger>Can I share books with family members?</AccordionTrigger>
              <AccordionContent>
                CaptureRead respects copyright laws and DRM restrictions. You can share books that are DRM-free and legally shareable. For family sharing, consider using family library features where each member maintains their own reading progress while accessing shared books.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="customer-support">
              <AccordionTrigger>How do I get help or report issues?</AccordionTrigger>
              <AccordionContent>
                You can get support through several channels:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>In-app help center and FAQ</li>
                  <li>Email support at support@captureread.com</li>
                  <li>Community forums and Discord server</li>
                  <li>GitHub issues for technical problems</li>
                  <li>Social media channels for updates and quick questions</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

export default GeneralFAQ;
