
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FolderOpen } from "lucide-react";

const LocalSourceFAQ = () => {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Local Source FAQ</h1>
        <p className="text-xl text-gray-600">
          Everything about managing local files and sources in CaptureRead.
        </p>
      </div>

      <Card className="border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <FolderOpen className="h-6 w-6 text-blue-600" />
            <span>Local File Management</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="what-is-local-source">
              <AccordionTrigger>What is a local source?</AccordionTrigger>
              <AccordionContent>
                Local sources are files stored on your device or local network:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>Device storage:</strong> Books stored directly on your phone, tablet, or computer</li>
                  <li><strong>SD card:</strong> Books stored on external SD cards (Android)</li>
                  <li><strong>USB drives:</strong> Books on USB storage devices</li>
                  <li><strong>Network drives:</strong> Shared folders on your local network</li>
                  <li><strong>Cloud-synced folders:</strong> Local folders synced with cloud services</li>
                  <li><strong>Email attachments:</strong> Books received via email</li>
                  <li><strong>Downloaded files:</strong> Books downloaded from the internet</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="add-local-files">
              <AccordionTrigger>How do I add local files to CaptureRead?</AccordionTrigger>
              <AccordionContent>
                Multiple ways to add local files:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>File browser:</strong> Use the built-in file browser to select files</li>
                  <li><strong>Drag and drop:</strong> Drag files directly into the app (desktop)</li>
                  <li><strong>Share menu:</strong> Use "Share with CaptureRead" from file managers</li>
                  <li><strong>Folder monitoring:</strong> Automatically import from watched folders</li>
                  <li><strong>Bulk import:</strong> Select entire folders to import all books</li>
                  <li><strong>Email import:</strong> Send books to your CaptureRead email address</li>
                  <li><strong>QR code sharing:</strong> Scan QR codes to import books</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="organize-local-files">
              <AccordionTrigger>How should I organize my local files?</AccordionTrigger>
              <AccordionContent>
                Best practices for organizing local files:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>Folder structure:</strong> Create folders by author, genre, or series</li>
                  <li><strong>Naming convention:</strong> Use consistent file naming (Author - Title.epub)</li>
                  <li><strong>Metadata embedding:</strong> Ensure files have proper metadata</li>
                  <li><strong>Format consistency:</strong> Prefer EPUB over PDF for better reading experience</li>
                  <li><strong>Duplicate management:</strong> Avoid storing multiple copies of the same book</li>
                  <li><strong>Backup strategy:</strong> Keep backups of your organized library</li>
                  <li><strong>Sync folders:</strong> Use cloud-synced folders for multi-device access</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="monitor-folders">
              <AccordionTrigger>Can CaptureRead monitor folders for new books?</AccordionTrigger>
              <AccordionContent>
                Yes, CaptureRead can automatically monitor folders:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>Folder watching:</strong> Automatically detect new files in specified folders</li>
                  <li><strong>Real-time monitoring:</strong> Import new books as soon as they're added</li>
                  <li><strong>Subdirectory scanning:</strong> Monitor subfolders recursively</li>
                  <li><strong>File type filtering:</strong> Only monitor specific file types</li>
                  <li><strong>Duplicate handling:</strong> Skip files that are already in your library</li>
                  <li><strong>Metadata extraction:</strong> Automatically extract book information</li>
                  <li><strong>Import notifications:</strong> Get notified when new books are imported</li>
                </ul>
                Set up folder monitoring in Settings → Import → Folder Monitoring.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="supported-formats">
              <AccordionTrigger>What file formats are supported for local files?</AccordionTrigger>
              <AccordionContent>
                CaptureRead supports a wide range of local file formats:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>EPUB:</strong> Recommended format for best reading experience</li>
                  <li><strong>PDF:</strong> Supported with advanced rendering and text extraction</li>
                  <li><strong>MOBI:</strong> Amazon Kindle format (DRM-free only)</li>
                  <li><strong>AZW3:</strong> Enhanced Kindle format (DRM-free only)</li>
                  <li><strong>CBZ/CBR:</strong> Comic book archives</li>
                  <li><strong>TXT:</strong> Plain text files</li>
                  <li><strong>HTML:</strong> Web pages and HTML books</li>
                  <li><strong>RTF:</strong> Rich Text Format documents</li>
                  <li><strong>DOCX:</strong> Microsoft Word documents (basic support)</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="network-storage">
              <AccordionTrigger>Can I access books from network storage?</AccordionTrigger>
              <AccordionContent>
                Yes, CaptureRead supports various network storage options:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>SMB/CIFS shares:</strong> Windows network shares</li>
                  <li><strong>FTP/SFTP:</strong> File transfer protocol servers</li>
                  <li><strong>WebDAV:</strong> Web-based file sharing</li>
                  <li><strong>NAS devices:</strong> Network-attached storage</li>
                  <li><strong>Home servers:</strong> Personal file servers</li>
                  <li><strong>Cloud storage:</strong> Dropbox, Google Drive, OneDrive</li>
                  <li><strong>Media servers:</strong> Plex, Jellyfin, and similar services</li>
                </ul>
                Configure network sources in Settings → Sources → Network Sources.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="offline-availability">
              <AccordionTrigger>Are local files available offline?</AccordionTrigger>
              <AccordionContent>
                Local file offline availability depends on storage type:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>Device storage:</strong> Always available offline</li>
                  <li><strong>SD card:</strong> Available when card is inserted</li>
                  <li><strong>USB drives:</strong> Available when connected</li>
                  <li><strong>Network storage:</strong> Only when connected to network</li>
                  <li><strong>Cached files:</strong> Recently accessed files are cached for offline use</li>
                  <li><strong>Download option:</strong> Download network files for offline access</li>
                  <li><strong>Sync options:</strong> Sync selected files to device storage</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="metadata-management">
              <AccordionTrigger>How does CaptureRead handle metadata for local files?</AccordionTrigger>
              <AccordionContent>
                Comprehensive metadata management for local files:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>Automatic extraction:</strong> Extract metadata from file properties</li>
                  <li><strong>Filename parsing:</strong> Extract title and author from filename</li>
                  <li><strong>Online lookup:</strong> Search online databases for missing metadata</li>
                  <li><strong>Manual editing:</strong> Edit metadata directly in the app</li>
                  <li><strong>Bulk editing:</strong> Edit metadata for multiple books at once</li>
                  <li><strong>Cover extraction:</strong> Extract embedded cover images</li>
                  <li><strong>Custom tags:</strong> Add your own tags and categories</li>
                  <li><strong>Metadata backup:</strong> Backup metadata separately from files</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

export default LocalSourceFAQ;
