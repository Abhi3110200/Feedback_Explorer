import FeedbackList from "@/components/FeedbackList";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <div className="max-w-6xl mx-auto w-full px-4 py-6">
        <FeedbackList />
      </div>
    </div>
  );
}
