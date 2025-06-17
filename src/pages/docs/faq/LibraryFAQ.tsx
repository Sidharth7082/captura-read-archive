
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Library } from "lucide-react";

const LibraryFAQ = () => {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Library FAQ</h1>
        <p className="text-xl text-gray-600">
          Everything you need to know about managing your CaptureRead library.
        </p>
      </div>

      <Card className="border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Library className="h-6 w-6 text-blue-600" />
            <span>Library Management</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="add-books">
              <AccordionTrigger>How do I add books to my library?</AccordionTrigger>
              <AccordionContent>
                You can add books in several ways:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>Local files:</strong> Tap the "+" button and select files from your device</li>
                  <li><strong>Cloud storage:</strong> Connect Dropbox, Google Drive, or OneDrive</li>
                  <li><strong>URL import:</strong> Import books directly from web URLs</li>
                  <li><strong>Bulk import:</strong> Select entire folders to import multiple books</li>
                  <li><strong>Email import:</strong> Send books to your personal CaptureRead email</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="organize-library">
              <AccordionTrigger>How can I organize my library?</AccordionTrigger>
              <AccordionContent>
                CaptureRead offers multiple organization options:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>Collections:</strong> Group books by topic, genre, or personal preference</li>
                  <li><strong>Tags:</strong> Add custom tags for flexible categorization</li>
                  <li><strong>Favorites:</strong> Mark books as favorites for quick access</li>
                  <li><strong>Reading Status:</strong> Organize by "Reading," "Want to Read," "Completed"</li>
                  <li><strong>Custom Sorting:</strong> Sort by title, author, date added, or progress</li>
                  <li><strong>Filters:</strong> Filter by format, genre, rating, or reading status</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="search-library">
              <AccordionTrigger>How does the search function work?</AccordionTrigger>
              <AccordionContent>
                The search function is comprehensive and includes:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>Title and Author:</strong> Search by book title or author name</li>
                  <li><strong>Full-text search:</strong> Search within book content (for supported formats)</li>
                  <li><strong>Metadata search:</strong> Search by genre, tags, publication year</li>
                  <li><strong>Advanced filters:</strong> Combine multiple search criteria</li>
                  <li><strong>Recent searches:</strong> Quickly access your recent search terms</li>
                  <li><strong>Search suggestions:</strong> Get suggestions as you type</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="duplicate-books">
              <AccordionTrigger>What happens if I import duplicate books?</AccordionTrigger>
              <AccordionContent>
                CaptureRead has built-in duplicate detection:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>Books are identified by title, author, and file hash</li>
                  <li>You'll be prompted before importing potential duplicates</li>
                  <li>Choose to skip, replace, or keep both versions</li>
                  <li>Duplicate detection can be configured in Settings</li>
                  <li>Use the "Find Duplicates" tool to clean up your library</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="backup-library">
              <AccordionTrigger>How do I backup my library?</AccordionTrigger>
              <AccordionContent>
                Several backup options are available:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>Cloud Sync:</strong> Automatic backup of metadata and progress</li>
                  <li><strong>Local Backup:</strong> Export library database to local storage</li>
                  <li><strong>File Export:</strong> Export book files and metadata together</li>
                  <li><strong>Scheduled Backups:</strong> Set up automatic backup schedules</li>
                  <li><strong>Selective Backup:</strong> Choose what to include in backups</li>
                </ul>
                Note: Book files are only backed up if you enable cloud storage.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="library-limit">
              <AccordionTrigger>Is there a limit to how many books I can have?</AccordionTrigger>
              <AccordionContent>
                Library limits depend on your account type:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>Free accounts:</strong> Up to 1,000 books locally</li>
                  <li><strong>Premium accounts:</strong> Unlimited books</li>
                  <li><strong>Cloud storage:</strong> Limited by your cloud storage quota</li>
                  <li><strong>Device storage:</strong> Limited by available device space</li>
                </ul>
                The app will notify you when approaching limits and offer upgrade options.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="metadata-editing">
              <AccordionTrigger>Can I edit book metadata?</AccordionTrigger>
              <AccordionContent>
                Yes, you can edit various metadata fields:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>Basic info:</strong> Title, author, publication date</li>
                  <li><strong>Descriptions:</strong> Add or edit book summaries</li>
                  <li><strong>Genres/Tags:</strong> Customize categories and tags</li>
                  <li><strong>Covers:</strong> Change book covers or add custom images</li>
                  <li><strong>Personal notes:</strong> Add your own descriptions and notes</li>
                  <li><strong>Ratings:</strong> Rate books on a 5-star scale</li>
                </ul>
                Changes are saved locally and synced across devices.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="delete-books">
              <AccordionTrigger>How do I remove books from my library?</AccordionTrigger>
              <AccordionContent>
                You can remove books in several ways:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>Individual removal:</strong> Long-press a book and select "Delete"</li>
                  <li><strong>Bulk removal:</strong> Select multiple books and delete together</li>
                  <li><strong>Archive option:</strong> Hide books without deleting them permanently</li>
                  <li><strong>Remove from device:</strong> Keep in library but remove local file</li>
                  <li><strong>Complete removal:</strong> Delete from library and all synced devices</li>
                </ul>
                Deleted books can be recovered from the trash for 30 days.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

export default LibraryFAQ;
