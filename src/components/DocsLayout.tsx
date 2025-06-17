
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import DocsSidebar from "./DocsSidebar";

const DocsLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-64 flex-shrink-0">
            <DocsSidebar />
          </aside>
          <main className="flex-1 bg-white rounded-lg shadow-sm p-8">
            <Outlet />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DocsLayout;
