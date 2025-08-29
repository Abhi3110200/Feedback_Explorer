"use client";

import { useState } from "react";
import FeedbackList from "@/components/FeedbackList";
import Header from "@/components/Header";

export default function Home() {
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleNewFeedback = () => {
    setRefreshTrigger(prev => prev + 1);
  };

  return (
    <div className="w-full">
      <Header onNewFeedback={handleNewFeedback} />
      <div className="max-w-6xl mx-auto w-full px-4 py-6">
        <FeedbackList refreshTrigger={refreshTrigger} />
      </div>
    </div>
  );
}
