"use client";

import { Skeleton } from "@/components/atoms/Skeleton";

const ConnectedAccountsLoading = () => {
  return (
    <>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 space-y-6 animate-pulse dark:bg-gray-900 dark:border-gray-800">
        {/* Header */}
        <div>
          <Skeleton className="h-5 w-40 mb-2" />
          <Skeleton className="h-4 w-64" />
        </div>

        {/* Account Rows */}
        <div className="space-y-4 dark:bg-gray-900 dark:border-gray-800">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="flex items-center justify-between py-2">
              {/* Left side (Icon + Info) */}
              <div className="flex items-center space-x-3">
                <Skeleton className="w-8 h-8 rounded-lg" />
                <div className="space-y-1">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-3 w-48" />
                </div>
              </div>

              {/* Right side (Toggle) */}
              <Skeleton className="h-6 w-11 rounded-full" />
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 space-y-6 animate-pulse dark:bg-gray-900 dark:border-gray-800">
        {/* Header */}
        <div>
          <Skeleton className="h-5 w-40 mb-2" />
          <Skeleton className="h-4 w-64" />
        </div>

        {/* Account Rows */}
        <div className="space-y-4 dark:bg-gray-900 dark:border-gray-800">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="flex items-center justify-between py-2">
              {/* Left side (Icon + Info) */}
              <div className="flex items-center space-x-3">
                <Skeleton className="w-8 h-8 rounded-lg" />
                <div className="space-y-1">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-3 w-48" />
                </div>
              </div>

              {/* Right side (Toggle) */}
              <Skeleton className="h-6 w-11 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ConnectedAccountsLoading;
