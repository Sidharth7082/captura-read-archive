
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Download } from "lucide-react";

const DownloadsFAQ = () => {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Downloads FAQ</h1>
        <p className="text-xl text-gray-600">
          Common questions about downloading and managing books in CaptureRead.
        </p>
      </div>

      <Card className="border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Download className="h-6 w-6 text-blue-600" />
            <span>Download Management</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="download-location">
              <AccordionTrigger>Where are downloaded books stored?</AccordionTrigger>
              <AccordionContent>
                Downloaded books are stored in different locations depending on your platform:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>Android:</strong> Internal storage → CaptureRead → Books</li>
                  <li><strong>iOS:</strong> App sandbox → Documents → Books</li>
                  <li><strong>Windows:</strong> %USERPROFILE%\Documents\CaptureRead\Books</li>
                  <li><strong>macOS:</strong> ~/Documents/CaptureRead/Books</li>
                  <li><strong>Linux:</strong> ~/.local/share/CaptureRead/Books</li>
                </ul>
                You can change the download location in Settings → Storage → Download Location.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="download-failed">
              <AccordionTrigger>What should I do if a download fails?</AccordionTrigger>
              <AccordionContent>
                If a download fails, try these solutions:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Check your internet connection stability</li>
                  <li>Ensure you have sufficient storage space</li>
                  <li>Retry the download from the Downloads queue</li>
                  <li>Try downloading at a different time (server may be busy)</li>
                  <li>Clear the app cache and restart</li>
                  <li>Check if the source is still available</li>
                  <li>Use a different download source if available</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="pause-resume">
              <AccordionTrigger>Can I pause and resume downloads?</AccordionTrigger>
              <AccordionContent>
                Yes, CaptureRead supports pausing and resuming downloads:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Tap the pause button in the Downloads section</li>
                  <li>Downloads automatically pause when you lose internet connection</li>
                  <li>Resume downloads by tapping the resume button</li>
                  <li>Downloads resume automatically when connection is restored</li>
                  <li>You can set downloads to pause on mobile data to save bandwidth</li>
                  <li>Priority downloads can be set to continue even when others are paused</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="download-queue">
              <AccordionTrigger>How does the download queue work?</AccordionTrigger>
              <AccordionContent>
                The download queue manages multiple downloads efficiently:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Downloads are processed in order of priority</li>
                  <li>You can reorder items in the queue by dragging</li>
                  <li>Set maximum concurrent downloads (default: 3)</li>
                  <li>Failed downloads remain in queue for retry</li>
                  <li>Completed downloads are automatically removed</li>
                  <li>Queue persists even if you close the app</li>
                  <li>View queue status in the Downloads section</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="storage-space">
              <AccordionTrigger>How much storage space do books take?</AccordionTrigger>
              <AccordionContent>
                Storage requirements vary by book format and content:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>EPUB:</strong> Typically 1-5 MB for text-based books</li>
                  <li><strong>PDF:</strong> 5-50 MB depending on layout and images</li>
                  <li><strong>CBZ/CBR:</strong> 20-200 MB for comic books</li>
                  <li><strong>Audiobooks:</strong> 100-500 MB per book</li>
                  <li><strong>Image-heavy books:</strong> Can exceed 100 MB</li>
                </ul>
                Check storage usage in Settings → Storage → Usage Statistics.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="offline-downloads">
              <AccordionTrigger>Can I download books for offline reading?</AccordionTrigger>
              <AccordionContent>
                Yes, offline reading is a core feature of CaptureRead:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>All imported and downloaded books are available offline</li>
                  <li>Download books while connected to WiFi for later offline reading</li>
                  <li>Mark books as "Keep Offline" to prevent automatic cleanup</li>
                  <li>Sync progress when you reconnect to the internet</li>
                  <li>Use "Offline Mode" to prevent any network requests</li>
                  <li>Download entire series or collections for extended offline reading</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="bandwidth-control">
              <AccordionTrigger>How can I control bandwidth usage?</AccordionTrigger>
              <AccordionContent>
                CaptureRead offers several bandwidth control options:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>WiFi Only:</strong> Restrict downloads to WiFi connections</li>
                  <li><strong>Download Scheduling:</strong> Set specific times for downloads</li>
                  <li><strong>Speed Limiting:</strong> Limit download speed to preserve bandwidth</li>
                  <li><strong>Data Saver Mode:</strong> Compress downloads and reduce quality</li>
                  <li><strong>Metered Connection:</strong> Pause downloads on metered connections</li>
                  <li><strong>Priority System:</strong> Prioritize important downloads</li>
                </ul>
                Configure these settings in Settings → Downloads → Bandwidth Control.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="bulk-download">
              <AccordionTrigger>Can I download multiple books at once?</AccordionTrigger>
              <AccordionContent>
                Yes, CaptureRead supports bulk downloading:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Select multiple books and choose "Download All"</li>
                  <li>Download entire series or collections with one click</li>
                  <li>Use filters to select books by genre, author, or status</li>
                  <li>Set up automatic downloads for new releases</li>
                  <li>Schedule bulk downloads for off-peak hours</li>
                  <li>Monitor progress of all downloads in the Downloads section</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

export default DownloadsFAQ;
