import { Outlet } from "react-router-dom";
import { AssistantWidget } from "@/components/AssistantWidget";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <AssistantWidget />
    </div>
  );
}
