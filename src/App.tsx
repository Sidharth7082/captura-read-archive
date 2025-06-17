
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Download from "./pages/Download";
import Changelogs from "./pages/Changelogs";
import DocsLayout from "./components/DocsLayout";
import GettingStarted from "./pages/docs/GettingStarted";
import Tracking from "./pages/docs/Tracking";
import Troubleshooting from "./pages/docs/Troubleshooting";
import ReaderSettings from "./pages/docs/ReaderSettings";
import Contribute from "./pages/docs/Contribute";
import GeneralFAQ from "./pages/docs/faq/GeneralFAQ";
import LibraryFAQ from "./pages/docs/faq/LibraryFAQ";
import SmartUpdatesFAQ from "./pages/docs/faq/SmartUpdatesFAQ";
import UpcomingUpdatesFAQ from "./pages/docs/faq/UpcomingUpdatesFAQ";
import ExtensionsFAQ from "./pages/docs/faq/ExtensionsFAQ";
import LocalSourceFAQ from "./pages/docs/faq/LocalSourceFAQ";
import DownloadsFAQ from "./pages/docs/faq/DownloadsFAQ";
import ReaderFAQ from "./pages/docs/faq/ReaderFAQ";
import SettingsFAQ from "./pages/docs/faq/SettingsFAQ";
import StorageFAQ from "./pages/docs/faq/StorageFAQ";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/download" element={<Download />} />
          <Route path="/changelogs" element={<Changelogs />} />
          <Route path="/docs/*" element={<DocsLayout />}>
            <Route path="guides/getting-started" element={<GettingStarted />} />
            <Route path="guides/tracking" element={<Tracking />} />
            <Route path="guides/troubleshooting" element={<Troubleshooting />} />
            <Route path="guides/reader-settings" element={<ReaderSettings />} />
            <Route path="contribute" element={<Contribute />} />
            <Route path="faq/general" element={<GeneralFAQ />} />
            <Route path="faq/library" element={<LibraryFAQ />} />
            <Route path="faq/updates/smart" element={<SmartUpdatesFAQ />} />
            <Route path="faq/updates/upcoming" element={<UpcomingUpdatesFAQ />} />
            <Route path="faq/browse/extensions" element={<ExtensionsFAQ />} />
            <Route path="faq/browse/local-source" element={<LocalSourceFAQ />} />
            <Route path="faq/downloads" element={<DownloadsFAQ />} />
            <Route path="faq/reader" element={<ReaderFAQ />} />
            <Route path="faq/settings" element={<SettingsFAQ />} />
            <Route path="faq/storage" element={<StorageFAQ />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
