
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Book } from "lucide-react";

const ReaderFAQ = () => {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Reader FAQ</h1>
        <p className="text-xl text-gray-600">
          Frequently asked questions about the CaptureRead reading interface and features.
        </p>
      </div>

      <Card className="border-0 shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Book className="h-6 w-6 text-blue-600" />
            <span>Reading Experience</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="navigation">
              <AccordionTrigger>How do I navigate through books?</AccordionTrigger>
              <AccordionContent>
                CaptureRead offers multiple navigation methods:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>Tap:</strong> Tap the right side to go forward, left side to go back</li>
                  <li><strong>Swipe:</strong> Swipe left for next page, right for previous page</li>
                  <li><strong>Volume buttons:</strong> Use volume up/down to turn pages (configurable)</li>
                  <li><strong>Keyboard:</strong> Arrow keys, spacebar, or page up/down on desktop</li>
                  <li><strong>Table of Contents:</strong> Tap the menu to jump to specific chapters</li>
                  <li><strong>Progress bar:</strong> Drag the progress slider to jump to any position</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="bookmarks">
              <AccordionTrigger>How do I create and manage bookmarks?</AccordionTrigger>
              <AccordionContent>
                Bookmarks help you save important pages:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>Create:</strong> Long-press on any page and select "Bookmark"</li>
                  <li><strong>Quick bookmark:</strong> Tap the bookmark icon in the toolbar</li>
                  <li><strong>Named bookmarks:</strong> Add custom names and notes to bookmarks</li>
                  <li><strong>View all:</strong> Access bookmarks from the menu or sidebar</li>
                  <li><strong>Organize:</strong> Create bookmark folders and categories</li>
                  <li><strong>Sync:</strong> Bookmarks sync across all your devices</li>
                  <li><strong>Export:</strong> Export bookmarks to share or backup</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="highlights">
              <AccordionTrigger>How do I highlight text and add notes?</AccordionTrigger>
              <AccordionContent>
                Highlighting and annotation features:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>Highlight:</strong> Select text and choose a highlight color</li>
                  <li><strong>Multiple colors:</strong> Use different colors for different purposes</li>
                  <li><strong>Add notes:</strong> Attach personal notes to any highlight</li>
                  <li><strong>Quick notes:</strong> Double-tap to create a quick note</li>
                  <li><strong>View highlights:</strong> See all highlights in the annotations panel</li>
                  <li><strong>Search annotations:</strong> Find specific highlights and notes</li>
                  <li><strong>Export annotations:</strong> Export all highlights and notes</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="text-selection">
              <AccordionTrigger>How do I select and copy text?</AccordionTrigger>
              <AccordionContent>
                Text selection varies by book format:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>EPUB:</strong> Long-press and drag to select text</li>
                  <li><strong>PDF:</strong> Use text selection tool if text is selectable</li>
                  <li><strong>Image-based PDFs:</strong> Use OCR to extract text (premium feature)</li>
                  <li><strong>Copy text:</strong> Select text and choose "Copy" from the context menu</li>
                  <li><strong>Look up:</strong> Select text and choose "Look up" for definitions</li>
                  <li><strong>Translate:</strong> Select text and choose "Translate" for foreign languages</li>
                  <li><strong>Share:</strong> Select text and share via other apps</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="zoom-pan">
              <AccordionTrigger>How do I zoom and pan in PDFs?</AccordionTrigger>
              <AccordionContent>
                PDF viewing controls:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>Pinch to zoom:</strong> Use two fingers to zoom in/out</li>
                  <li><strong>Double-tap zoom:</strong> Double-tap to fit width or zoom to selection</li>
                  <li><strong>Pan:</strong> Drag with one finger to move around when zoomed</li>
                  <li><strong>Zoom controls:</strong> Use + and - buttons in the toolbar</li>
                  <li><strong>Fit options:</strong> Fit page, fit width, or fit height</li>
                  <li><strong>Zoom presets:</strong> Quick zoom levels (50%, 100%, 200%, etc.)</li>
                  <li><strong>Remember zoom:</strong> App remembers your zoom level per book</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="reading-progress">
              <AccordionTrigger>How is reading progress tracked?</AccordionTrigger>
              <AccordionContent>
                Reading progress is automatically tracked:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>Automatic tracking:</strong> Progress saves as you read</li>
                  <li><strong>Cross-device sync:</strong> Resume reading on any device</li>
                  <li><strong>Multiple metrics:</strong> Tracks pages read, time spent, and percentage complete</li>
                  <li><strong>Visual indicators:</strong> Progress bar shows completion status</li>
                  <li><strong>Reading statistics:</strong> View detailed reading analytics</li>
                  <li><strong>Backup progress:</strong> Progress is included in cloud backups</li>
                  <li><strong>Manual adjustment:</strong> Manually set progress if needed</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="search-in-book">
              <AccordionTrigger>How do I search within a book?</AccordionTrigger>
              <AccordionContent>
                In-book search functionality:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>Access search:</strong> Tap the search icon or use Ctrl+F (desktop)</li>
                  <li><strong>Text search:</strong> Search for specific words or phrases</li>
                  <li><strong>Navigate results:</strong> Jump between search results</li>
                  <li><strong>Highlight results:</strong> Search terms are highlighted in the text</li>
                  <li><strong>Case sensitivity:</strong> Toggle case-sensitive search</li>
                  <li><strong>Whole word search:</strong> Search for complete words only</li>
                  <li><strong>Search history:</strong> Previous searches are saved for quick access</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="reading-modes">
              <AccordionTrigger>What reading modes are available?</AccordionTrigger>
              <AccordionContent>
                CaptureRead offers several reading modes:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>Paging mode:</strong> Traditional page-by-page reading</li>
                  <li><strong>Scrolling mode:</strong> Continuous scrolling through the book</li>
                  <li><strong>Auto-scroll mode:</strong> Automatically scroll at your reading speed</li>
                  <li><strong>Focus mode:</strong> Dims surrounding text to focus on current paragraph</li>
                  <li><strong>Immersive mode:</strong> Hides all UI elements for distraction-free reading</li>
                  <li><strong>Speed reading mode:</strong> Rapid serial visual presentation (RSVP)</li>
                  <li><strong>Dual-page mode:</strong> Show two pages side by side (tablets/desktop)</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReaderFAQ;
