import { Search } from "lucide-react";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const SearchInput = ({
  value,
  onChange,
  placeholder = "Search...",
  className = "",
}: SearchInputProps) => {
  return (
    <div className={`relative ${className}`}>
      <Search
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-400"
        size={18}
      />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent w-full dark:bg-gray-900 dark:border-gray-800 dark:text-white"
      />
    </div>
  );
};

export default SearchInput;
