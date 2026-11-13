import React from "react";

export default function AppShell({ children, lightStatusBar = false }) {
  return (
    <div className="min-h-dvh w-full bg-slate-100 flex justify-center items-start sm:items-center sm:py-6 font-sans text-slate-900 antialiased">
      {/* Responsive Mobile Container */}
      <div className="relative w-full sm:max-w-[412px] min-h-dvh sm:min-h-[852px] sm:h-[852px] bg-white sm:shadow-2xl overflow-hidden flex flex-col border-slate-200 sm:border">
        {/* Top Status Bar using Frame.svg */}
        <header className="sticky top-0 left-0 right-0 z-50 w-full h-11 shrink-0 pointer-events-none select-none flex items-center justify-center">
          <img
            src="/Frame.svg"
            alt="Status Bar"
            className={`w-full h-11 object-fill block ${
              lightStatusBar ? "" : "brightness-0"
            }`}
          />
        </header>

        {/* Page Content */}
        <main className="flex-1 min-h-0 flex flex-col relative">
          {children}
        </main>
      </div>
    </div>
  );
}
