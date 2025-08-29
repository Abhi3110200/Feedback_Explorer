interface Props {
  item: {
    _id: string;
    title: string;
    description: string;
    category: string;
    createdAt: string;
  };
}

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    bug: "bg-red-100 text-red-800",
    feature: "bg-blue-100 text-blue-800",
    enhancement: "bg-purple-100 text-purple-800",
    ui: "bg-amber-100 text-amber-800",
    ux: "bg-green-100 text-green-800",
  };
  return colors[category.toLowerCase()] || "bg-gray-100 text-gray-800";
};

export default function FeedbackCard({ item }: Props) {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
      <div className="flex justify-between items-start gap-3">
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-gray-900 truncate">
            {item.title}
          </h3>
          <p className="text-gray-600 text-sm mt-1 line-clamp-2">
            {item.description}
          </p>
        </div>
        <span 
          className={`px-3 py-1 text-xs font-medium rounded-full whitespace-nowrap ${getCategoryColor(item.category)}`}
        >
          {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
        </span>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-xs text-gray-500">
          {new Date(item.createdAt).toLocaleString(undefined, {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
        </span>
        <span className="text-xs text-gray-400">
          {new Date(item.createdAt).toLocaleTimeString(undefined, {
            hour: '2-digit',
            minute: '2-digit'
          })}
        </span>
      </div>
    </div>
  );
}
