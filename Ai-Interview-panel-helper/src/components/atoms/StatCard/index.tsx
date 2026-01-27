import React from "react";

export interface StatCard {
  title?: string;
  value?: string | number;
  change?: string;
  changeColor?: string;
  subtitle?: string;
  icon?: React.ReactNode;
  color?: string;
  index?: number;
  shadowColor?: string;
}

const StatCard: React.FC<{ stat: StatCard; index: number }> = ({
  stat,
  index,
}) => {
  return (
    <div
      key={index}
      className={`bg-white p-6 rounded-lg shadow-lg ${stat.shadowColor || ""} border border-gray-200 dark:bg-gray-900 dark:border-gray-800`}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="w-full">
          {stat.title && (
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
              {stat.title}
            </p>
          )}

          {(stat.value !== undefined || stat.change !== undefined) && (
            <div className="flex items-center space-x-2 mt-1">
              {stat.value !== undefined && (
                <span className="text-2xl font-bold text-gray-900 dark:text-gray-400">
                  {stat.value}
                </span>
              )}
              {stat.change && (
                <span
                  className={`text-sm font-medium ${
                    stat.changeColor || "text-green-600 dark:text-green-400"
                  }`}
                >
                  {stat.change}
                </span>
              )}
            </div>
          )}

          {stat.subtitle && (
            <p className="text-xs text-gray-500 mt-1 dark:text-gray-400">
              {stat.subtitle}
            </p>
          )}
        </div>

        {stat.icon && (
          <div
            className={`p-3 rounded-lg ${stat.color || "bg-gray-100 dark:bg-gray-800"}`}
          >
            {stat.icon}
          </div>
        )}
      </div>
    </div>
  );
};

export default StatCard;
