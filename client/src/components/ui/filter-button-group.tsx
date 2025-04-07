import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FilterButtonGroupProps {
  filters: string[];
  onChange: (filter: string) => void;
  className?: string;
}

export function FilterButtonGroup({ filters, onChange, className }: FilterButtonGroupProps) {
  const [activeFilter, setActiveFilter] = useState(filters[0]);

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    onChange(filter);
  };

  return (
    <div className={cn("inline-flex p-1 bg-gray-200 dark:bg-gray-700 rounded-lg", className)}>
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => handleFilterClick(filter)}
          className={cn(
            "px-4 py-2 text-sm font-medium rounded-lg relative",
            "transition-colors duration-200",
            activeFilter !== filter && "hover:text-primary-600"
          )}
        >
          {activeFilter === filter && (
            <motion.div
              layoutId="activeFilterBackground"
              className="absolute inset-0 bg-white dark:bg-gray-800 rounded-lg shadow-sm"
              transition={{ type: "spring", duration: 0.5 }}
            />
          )}
          <span className="relative z-10">{filter}</span>
        </button>
      ))}
    </div>
  );
}
