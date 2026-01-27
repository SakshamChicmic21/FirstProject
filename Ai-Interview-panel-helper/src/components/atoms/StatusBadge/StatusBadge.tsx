"use client";
interface StatusBadgeToggleProps {
  value?: boolean;
}

const StatusBadgeToggle = ({ value }: StatusBadgeToggleProps) => {
  return (
    <button
      className={`px-3 py-1 rounded-full text-sm font-medium ${
        value ? "bg-green-100 text-green-700" : "bg-gray-200 text-gray-600"
      }`}
    >
      {value ? "Active" : "Inactive"}
    </button>
  );
};

export default StatusBadgeToggle;
