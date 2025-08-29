"use client";
import { useState } from "react";
import AddFeedbackModal from "./AddFeedbackModal";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-indigo-600 to-purple-600 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-white">Lane Feedback</h1>
          <p className="text-sm text-indigo-100">
            Submit and explore product feedback
          </p>
        </div>
        <button
          onClick={() => setOpen(true)}
          className="bg-white text-indigo-700 font-medium px-4 py-2 rounded-full shadow hover:bg-gray-100 transition"
        >
          + Add Feedback
        </button>
      </div>
      <AddFeedbackModal open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
