"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
export default function CopyrightWarning() {
    const [open, setOpen] = useState(true); // always open initially

    const handleAcknowledge = () => {
        // Do something → redirect, lock site, etc.
        console.log("User acknowledged");
    };

    const handleRequestPermission = () => {
        // Do something → open email form, etc.
        console.log("Request permission clicked");
    };

    return (
        <Sheet open={open} onOpenChange={() => { }}>
            <SheetContent
                side="bottom"
                className="
          h-[90vh] 
          rounded-t-3xl 
          bg-[#0a0a0a]/95 
          backdrop-blur-xl 
          border-t 
          border-red-600/40 
          shadow-[0_-10px_50px_rgba(255,0,0,0.3)] 
          text-white 
          overflow-hidden
        "
            >
                {/* HEADER */}
                <div className="flex flex-col items-center text-center mt-6">
                    <div className="w-20 h-20 flex items-center justify-center rounded-full bg-red-900/40 border border-red-600/40 shadow-[0_0_20px_rgba(255,0,0,0.5)]">
                        <svg
                            className="w-12 h-12 text-red-500"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
                            />
                        </svg>
                    </div>

                    <h1 className="mt-6 text-3xl font-extrabold bg-linear-to-r from-red-400 to-red-600 bg-clip-text text-transparent drop-shadow-lg">
                        COPYRIGHT VIOLATION DETECTED
                    </h1>

                    <p className="mt-3 text-gray-300 text-sm max-w-xl leading-relaxed">
                        The system has detected duplicated or unauthorized content usage.
                        Continuing without correcting this may lead to copyright actions,
                        takedowns, or legal penalties.
                        This popup cannot be closed until you acknowledge your compliance.
                    </p>
                </div>

                {/* INFO SECTIONS */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 px-4">
                    <div className="p-4 bg-red-900/30 rounded-xl border border-red-700/30">
                        <h3 className="font-semibold text-red-400 mb-2">Risk Level</h3>
                        <p className="text-gray-300 text-sm">High — Potential copyright breach.</p>
                    </div>

                    <div className="p-4 bg-yellow-900/20 rounded-xl border border-yellow-700/30">
                        <h3 className="font-semibold text-yellow-400 mb-2">Required Action</h3>
                        <p className="text-gray-300 text-sm">Remove copied content or request permission.</p>
                    </div>

                    <div className="p-4 bg-blue-900/20 rounded-xl border border-blue-700/30">
                        <h3 className="font-semibold text-blue-400 mb-2">Status</h3>
                        <p className="text-gray-300 text-sm">Access temporarily restricted.</p>
                    </div>
                </div>

                {/* DIVIDER */}
                <div className="mt-10 h-px bg-linear-to-r from-transparent via-red-600 to-transparent opacity-50"></div>

                {/* ACTION BUTTONS */}
                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 px-4">

                    {/* Acknowledge */}
                    <button
                        className="
              w-full sm:w-auto 
              px-8 py-3 
              rounded-xl 
              font-semibold 
              text-white 
              bg-linear-to-r from-red-600 to-red-800 
              shadow-[0_5px_25px_rgba(255,0,0,0.4)] 
              hover:shadow-[0_5px_35px_rgba(255,0,0,0.6)] 
              transition-all 
              duration-300
              active:scale-95
            "
                    >
                        ✓ I Acknowledge & Will Fix
                    </button>

                    {/* Request Permission */}
                    <button
                        className="
              w-full sm:w-auto 
              px-8 py-3 
              rounded-xl 
              font-semibold 
              text-gray-300
              border border-gray-700 
              bg-gray-900/40
              hover:bg-gray-800/60
              hover:text-white 
              transition 
              duration-300 
              active:scale-95
            "
                    >
                        Request Legal Permission →
                    </button>
                </div>

                {/* FOOT WARNING */}
                <p className="text-center text-xs text-gray-500 mt-6 px-4">
                    This action is logged. Tampering with copyright notices is prohibited under law.
                </p>
            </SheetContent>
        </Sheet>
    );
}
