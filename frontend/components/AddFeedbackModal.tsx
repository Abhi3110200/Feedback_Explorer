"use client";
import { useState } from "react";
import { createFeedback } from "@/lib/api";
import toast from "react-hot-toast";

interface Props {
  open: boolean;
  onClose: () => void;
  onFeedbackAdded?: () => void;
}

export default function AddFeedbackModal({ open, onClose, onFeedbackAdded }: Props) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("Bug");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!title || !desc || !category) {
      toast.error("All fields are required!");
      return;
    }
    try {
      setLoading(true);
      await createFeedback({ title, description: desc, category });
      toast.success("Feedback submitted!");
      onClose();
      onFeedbackAdded?.();
    } catch {
      toast.error("Failed to submit feedback.");
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/40 flex items-center justify-center backdrop-blur-sm z-50"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md relative animate-fadeIn">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Add Feedback</h2>
        <div className="space-y-4">
          <input
            className="w-full border px-3 text-gray-800 py-2 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="w-full border px-3 text-gray-800 py-2 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            placeholder="Description"
            rows={3}
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <select
            className="w-full border px-3 text-gray-800 py-2 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Bug">Bug</option>
            <option value="Feature">Feature</option>
            <option value="Improvement">Improvement</option>
            <option value="UI">UI</option>
            <option value="UX">UX</option>
          </select>
        </div>
        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded-full text-gray-600 hover:bg-gray-100 transition"
          >
            Cancel
          </button>
          <button
            disabled={loading}
            onClick={handleSubmit}
            className="bg-indigo-600 text-white px-6 py-2 rounded-full font-medium hover:bg-indigo-700 transition disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
}
