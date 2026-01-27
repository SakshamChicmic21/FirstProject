import { Skeleton } from "@/components/atoms/Skeleton";

const Loading = () => {
  return (
    <main className="flex-1 overflow-y-auto animate-pulse">
      <div className="space-y-6 mt-[20px]">
        {/* Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {["bg-purple-100", "bg-red-100", "bg-green-100", "bg-orange-100"].map(
            (bg, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 dark:bg-gray-900 dark:border-gray-800"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-full">
                    <Skeleton className="h-4 w-20 mb-1" />
                    <div className="flex items-center space-x-2 mt-1">
                      <Skeleton className="h-8 w-20" />
                      <Skeleton className="h-5 w-12" />
                    </div>
                    <Skeleton className="h-3 w-16 mt-2" />
                  </div>
                  <div className={`p-3 rounded-lg ${bg}`}>
                    {" "}
                    {/* colored icon bg */}
                    <Skeleton className="h-5 w-5" />
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
        {/* Filters and Actions */}
        <div className="overflow-x-auto">
          <div className="bg-white rounded-t-lg shadow-sm border border-gray-200 dark:bg-gray-900 dark:border-gray-800">
            <div className="p-6 border-b border-gray-200">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Skeleton className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4" />
                    <Skeleton className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg w-60 bg-gray-100 h-10" />
                  </div>
                  <Skeleton className="h-10 w-24" />
                  <Skeleton className="h-10 w-36" />
                </div>
                <div className="flex justify-end items-center gap-x-3">
                  <Skeleton className="h-6 w-20" />
                  <Skeleton className="w-60 h-10" />
                </div>
              </div>
            </div>
          </div>

          {/* Table Skeleton */}
          <div className="bg-white overflow-auto shadow-sm dark:bg-gray-900 dark:border-gray-800">
            <table className="min-w-full divide-y">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  {/* Checkbox */}
                  <th className="px-4 py-3 w-[60px]">
                    <Skeleton className="h-4 w-4 rounded" />
                  </th>
                  {/* Id, Name, Role, Status, Actions */}
                  {[...Array(5)].map((_, i) => (
                    <th key={i} className="px-4 py-3">
                      <Skeleton className="h-3 w-20" />
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                {[...Array(7)].map((_, rowIdx) => (
                  <tr key={rowIdx}>
                    {/* Checkbox */}
                    <td className="px-4 py-3">
                      <Skeleton className="h-4 w-4 rounded" />
                    </td>
                    {/* Id */}
                    <td className="px-4 py-[6px] min-w-[120px]">
                      <Skeleton className="h-4 w-16" />
                    </td>
                    {/* Name */}
                    <td className="px-4 py-[6px] min-w-[120px]">
                      <Skeleton className="h-4 w-24" />
                    </td>
                    {/* Role */}
                    <td className="px-4 py-[6px] min-w-[120px]">
                      <Skeleton className="h-4 w-20" />
                    </td>
                    {/* Status */}
                    <td className="px-4 py-[6px] min-w-[120px]">
                      <Skeleton className="h-6 w-16 rounded-full" />
                    </td>
                    {/* Actions */}
                    <td className="px-4 py-[6px] min-w-[120px]">
                      <div className="flex items-center space-x-2">
                        <Skeleton className="h-6 w-6 rounded" />
                        <Skeleton className="h-6 w-6 rounded" />
                        <Skeleton className="h-6 w-6 rounded" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Skeleton */}
          <div className="bg-white px-6 py-4 rounded-b-xl flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0 border-t dark:bg-gray-900 dark:border-gray-800">
            <div className="flex items-center space-x-2">
              <Skeleton className="h-8 w-24" />
              <Skeleton className="h-8 w-32" />
            </div>
            <div className="flex items-center space-x-2 lg:flex-row gap-2 flex-col">
              <div className="flex space-x-2 items-center">
                {[...Array(7)].map((_, i) => (
                  <Skeleton key={i} className="h-8 w-8 rounded" />
                ))}
              </div>
              <div className="flex items-center space-x-2 w-full">
                <Skeleton className="h-8 w-24" />
                <Skeleton className="h-8 w-12" />
              </div>
            </div>
          </div>
        </div>
        {/* Add User Sidebar Skeleton */}
        <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out translate-x-full dark:bg-gray-900 dark:border-gray-800">
          <div className="flex items-center justify-between px-6 py-4 border-b">
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-8 w-8 rounded" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Loading;
