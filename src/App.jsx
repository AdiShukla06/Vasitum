import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Handle screen resizing
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind's `md` breakpoint starts at 768px
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      {isMobile ? (
        <motion.div
          initial={false}
          animate={sidebarOpen ? "open" : "closed"}
          variants={{
            open: { x: 0 },
            closed: { x: "-100%" },
          }}
          className="absolute inset-y-0 left-0 z-30 w-64 bg-white shadow-lg"
        >
          <Sidebar closeSidebar={() => setSidebarOpen(false)} />
        </motion.div>
      ) : (
        <div className="relative w-64 bg-white shadow-lg">
          <Sidebar />
        </div>
      )}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <Dashboard />
        </main>
      </div>
    </div>
  );
}

export default App;
