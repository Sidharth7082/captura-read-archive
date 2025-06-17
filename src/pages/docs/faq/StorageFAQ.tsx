
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HardDrive } from "lucide-react";

const StorageFAQ = () => {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Storage FAQ</h1>
        <p className="text-xl text-gray-600">
          Everything you need to know about storage management in CaptureRead.
        </p>
      </div>

      <Card className="border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <HardDrive className="h-6 w-6 text-blue-600" />
            <span>Storage Management</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="storage-location">
              <AccordionTrigger>Where does CaptureRead store my books?</AccordionTrigger>
              <AccordionContent>
                CaptureRead stores books in different locations depending on your platform:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>Android:</strong> Internal storage/CaptureRead/ or SD card/CaptureRead/</li>
                  <li><strong>iOS:</strong> App Documents folder (synced with iCloud if enabled)</li>
                  <li><strong>Windows:</strong> %USERPROFILE%\Documents\CaptureRead\</li>
                  <li><strong>macOS:</strong> ~/Documents/CaptureRead/</li>
                  <li><strong>Linux:</strong> ~/.local/share/CaptureRead/</li>
                </ul>
                You can change the storage location in Settings → Storage → Storage Location.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="sd-card-storage">
              <AccordionTrigger>Can I store books on an SD card?</AccordionTrigger>
              <AccordionContent>
                Yes, SD card storage is supported on Android devices:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>Enable SD card storage:</strong> Go to Settings → Storage → Use SD Card</li>
                  <li><strong>Move existing books:</strong> Use the "Move to SD Card" feature</li>
                  <li><strong>Automatic SD card detection:</strong> App detects when SD card is inserted/removed</li>
                  <li><strong>Hybrid storage:</strong> Keep frequently accessed books on internal storage</li>
                  <li><strong>SD card requirements:</strong> Use Class 10 or higher for best performance</li>
                  <li><strong>Backup considerations:</strong> SD cards can be removed, so keep backups</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="cloud-storage">
              <AccordionTrigger>How does cloud storage work?</AccordionTrigger>
              <AccordionContent>
                Cloud storage keeps your books accessible across all devices:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>Supported services:</strong> Google Drive, Dropbox, OneDrive, iCloud</li>
                  <li><strong>Automatic sync:</strong> Books and progress sync automatically</li>
                  <li><strong>Selective sync:</strong> Choose which books to store in the cloud</li>
                  <li><strong>Offline access:</strong> Downloaded books remain available offline</li>
                  <li><strong>Storage quotas:</strong> Respects your cloud service storage limits</li>
                  <li><strong>Conflict resolution:</strong> Handles conflicts when the same book is edited on multiple devices</li>
                  <li><strong>Encryption:</strong> All cloud-stored data is encrypted for security</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="storage-cleanup">
              <AccordionTrigger>How can I free up storage space?</AccordionTrigger>
              <AccordionContent>
                Several options to manage storage space:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>Clear cache:</strong> Remove temporary files and cached data</li>
                  <li><strong>Remove downloaded files:</strong> Keep books in library but remove local copies</li>
                  <li><strong>Archive old books:</strong> Move rarely-read books to archive</li>
                  <li><strong>Compress images:</strong> Reduce image quality to save space</li>
                  <li><strong>Delete completed books:</strong> Remove books you've finished reading</li>
                  <li><strong>Storage analyzer:</strong> See which books take up the most space</li>
                  <li><strong>Automatic cleanup:</strong> Set up automatic cleanup based on usage patterns</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="storage-limits">
              <AccordionTrigger>Are there storage limits?</AccordionTrigger>
              <AccordionContent>
                Storage limits vary by account type and platform:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>Free accounts:</strong> 5GB cloud storage, unlimited local storage</li>
                  <li><strong>Premium accounts:</strong> 100GB cloud storage, unlimited local storage</li>
                  <li><strong>Local storage:</strong> Limited only by your device's available space</li>
                  <li><strong>Book count limits:</strong> Free: 1,000 books, Premium: unlimited</li>
                  <li><strong>File size limits:</strong> Individual files up to 2GB</li>
                  <li><strong>Upgrade options:</strong> Additional cloud storage available for purchase</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="storage-analysis">
              <AccordionTrigger>How can I analyze my storage usage?</AccordionTrigger>
              <AccordionContent>
                Use the built-in storage analysis tools:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>Storage overview:</strong> See total space used by books, cache, and data</li>
                  <li><strong>Book-by-book analysis:</strong> View storage usage for individual books</li>
                  <li><strong>Format breakdown:</strong> See how much space each file format uses</li>
                  <li><strong>Usage trends:</strong> Track storage usage over time</li>
                  <li><strong>Largest files:</strong> Identify books that use the most storage</li>
                  <li><strong>Duplicate detection:</strong> Find duplicate books that waste space</li>
                  <li><strong>Cleanup recommendations:</strong> Get suggestions for freeing up space</li>
                </ul>
                Access storage analysis in Settings → Storage → Storage Analysis.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="backup-storage">
              <AccordionTrigger>How much space do backups take?</AccordionTrigger>
              <AccordionContent>
                Backup storage requirements:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>Metadata backups:</strong> Very small (usually under 10MB)</li>
                  <li><strong>Settings backups:</strong> Minimal space (under 1MB)</li>
                  <li><strong>Annotation backups:</strong> Small (typically 1-5MB)</li>
                  <li><strong>Full backups:</strong> Include book files, can be very large</li>
                  <li><strong>Incremental backups:</strong> Only backup changes to save space</li>
                  <li><strong>Compression:</strong> Backups are compressed to reduce size</li>
                  <li><strong>Retention policies:</strong> Automatically delete old backups to save space</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="external-storage">
              <AccordionTrigger>Can I use external storage devices?</AccordionTrigger>
              <AccordionContent>
                External storage support varies by platform:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>USB drives:</strong> Supported on Android with OTG adapter</li>
                  <li><strong>External hard drives:</strong> Supported on desktop versions</li>
                  <li><strong>Network storage:</strong> Access books from NAS devices</li>
                  <li><strong>Cloud services:</strong> Third-party cloud storage via file managers</li>
                  <li><strong>Auto-detection:</strong> Automatically detect when external storage is connected</li>
                  <li><strong>Safe removal:</strong> Proper ejection to prevent data corruption</li>
                  <li><strong>Permissions:</strong> Grant necessary permissions for external storage access</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

export default StorageFAQ;
