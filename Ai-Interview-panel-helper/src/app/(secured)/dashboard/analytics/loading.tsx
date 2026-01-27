import { Skeleton } from "@/components/atoms/Skeleton";

export default function Loading() {
  return (
    <main className="flex-1 overflow-y-auto">
      <div className="p-0 mt-[20px]">
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 max-h-fit">
          {/* SwiperCard Skeleton */}
          <div className="rounded-[5px] overflow-hidden shadow-md relative bg-gradient-to-br from-indigo-500 to-purple-500 text-black p-[24px] pb-[10px] flex flex-col gap-4 dark:bg-gray-900">
            {/* Swiper Pagination Skeleton */}
            <div className="absolute !top-[22px] !right-[20px] !left-[unset] !w-fit h-fit z-10 flex gap-2">
              <Skeleton className="w-3 h-3 rounded-full bg-white/40" />
              <Skeleton className="w-3 h-3 rounded-full bg-white/80" />
              <Skeleton className="w-3 h-3 rounded-full bg-white/40" />
            </div>
            {/* Title & Subtitle */}
            <div className="p-0">
              <Skeleton className="h-6 w-40 mb-2 bg-white/40" />
              <Skeleton className="h-4 w-32 bg-white/30" />
            </div>
            {/* Swiper Slides Skeleton */}
            <div className="flex gap-4">
              {[...Array(1)].map((_, i) => (
                <div
                  key={i}
                  className="flex items-end justify-between pr-[30px] w-full"
                >
                  <div className="flex flex-col gap-4 justify-end">
                    <Skeleton className="h-5 w-24 bg-white/60 mb-2" />
                    <div className="grid grid-cols-2 gap-[20px]">
                      {[...Array(4)].map((_, j) => (
                        <div key={j} className="flex items-center gap-[10px]">
                          <Skeleton className="min-w-[40px] h-6 bg-white/30 rounded-[5px]" />
                          <Skeleton className="h-4 w-10 bg-white/20" />
                        </div>
                      ))}
                    </div>
                  </div>
                  <Skeleton className="w-[80px] h-[80px] rounded-full bg-white/20" />
                </div>
              ))}
            </div>
          </div>

          {/* AreaChart & ComparisonCard Skeletons */}
          <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 max-h-fit">
            {/* AreaChart Skeleton */}
            <div className="bg-white shadow-customsm rounded-[5px] py-[25px] w-full flex flex-col gap-2 dark:bg-gray-900">
              <div className="mb-[10px] px-[25px]">
                <Skeleton className="h-6 w-32 mb-2" />
                <Skeleton className="h-4 w-24 mb-2" />
                <Skeleton className="h-6 w-20" />
              </div>
              <Skeleton className="h-24 w-[90%] mx-auto rounded" />
            </div>
            {/* ComparisonCard Skeleton */}
            <div className="rounded-[5px] shadow-customsm bg-white p-[25px] w-full max-w-sm flex flex-col gap-2 dark:bg-gray-900">
              <div className="flex justify-between items-center mb-0">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-16" />
              </div>
              <Skeleton className="h-6 w-24 mb-2" />
              <div className="flex justify-between items-center text-center gap-y-4 mb-[10px]">
                <div>
                  <Skeleton className="h-4 w-16 mb-2" />
                  <Skeleton className="h-5 w-10 mb-1" />
                  <Skeleton className="h-3 w-8" />
                </div>
                <div className="flex flex-col items-center justify-center h-32 gap-[3px]">
                  <Skeleton className="w-px h-6 bg-gray-300" />
                  <Skeleton className="rounded-full w-[28px] h-[28px] bg-gray-100" />
                  <Skeleton className="w-px h-6 bg-gray-300" />
                </div>
                <div>
                  <Skeleton className="h-4 w-16 mb-2" />
                  <Skeleton className="h-5 w-10 mb-1" />
                  <Skeleton className="h-3 w-8" />
                </div>
              </div>
              <Skeleton className="h-2 w-full rounded-full" />
            </div>
          </div>

          {/* EarningReportCard Skeleton */}
          <div className="bg-white rounded-[5px] shadow-customsm p-[25px] w-full flex flex-col gap-4 dark:bg-gray-900">
            <div className="flex justify-between items-start">
              <div>
                <Skeleton className="h-6 w-32 mb-2" />
                <Skeleton className="h-4 w-24" />
              </div>
              <Skeleton className="w-8 h-8 rounded-full" />
            </div>
            <div className="flex items-center justify-between 2xl:gap-[50px] gap-[30px]">
              <div className="pr-[15px]">
                <Skeleton className="h-6 w-20 mb-2" />
                <Skeleton className="h-4 w-32" />
              </div>
              <Skeleton className="h-[160px] w-[200px] rounded" />
            </div>
            <div className="flex gap-[15px] mt-1">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-[33%]">
                  <Skeleton className="h-4 w-20 mb-2" />
                  <Skeleton className="h-6 w-16 mb-2" />
                  <Skeleton className="h-2 w-3/4 rounded" />
                </div>
              ))}
            </div>
          </div>

          {/* SupportTrackerCard Skeleton */}
          <div className="bg-white rounded-[5px] shadow-customsm w-full flex flex-col p-[25px] gap-4 dark:bg-gray-900">
            <div className="flex justify-between items-start">
              <div>
                <Skeleton className="h-6 w-32 mb-2" />
                <Skeleton className="h-4 w-24" />
              </div>
              <Skeleton className="w-8 h-8 rounded-full" />
            </div>
            <div className="flex items-center justify-between mt-[40px]">
              <div>
                <Skeleton className="h-6 w-16 mb-2" />
                <Skeleton className="h-4 w-24 mb-6" />
                <div className="space-y-4 text-sm">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="flex items-center gap-[20px]">
                      <Skeleton className="w-[30px] h-[30px] rounded-[5px]" />
                      <div className="flex flex-col gap-[0px]">
                        <Skeleton className="h-4 w-20 mb-1" />
                        <Skeleton className="h-3 w-12" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <Skeleton className="h-[231px] w-[300px] rounded" />
            </div>
          </div>

          {/* Bottom row: Sales by Countries, Total Earning, Top Transactions */}
          <div className="col-span-full grid grid-cols-1 sm:grid-cols-3 gap-6 mb-[10px]">
            {/* Sales by Countries */}
            <div className="bg-white rounded-[5px] shadow-customsm w-full flex flex-col p-[25px] gap-4 dark:bg-gray-900">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <Skeleton className="h-6 w-32 mb-2" />
                  <Skeleton className="h-4 w-24" />
                </div>
                <Skeleton className="w-8 h-8 rounded-full" />
              </div>
              <div className="space-y-4">
                {[...Array(7)].map((_, i) => (
                  <div key={i} className="flex items-center">
                    <Skeleton className="mr-4 rounded-full w-[34px] h-[34px]" />
                    <div className="flex justify-between items-center w-full flex-wrap gap-y-2">
                      <div className="flex flex-col">
                        <Skeleton className="h-4 w-20 mb-1" />
                        <Skeleton className="h-3 w-10" />
                      </div>
                      <Skeleton className="h-4 w-16" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Total Earning */}
            <div className="bg-white rounded-[5px] shadow-customsm w-full flex flex-col p-[25px] gap-4 dark:bg-gray-900">
              <div className="flex justify-between items-start mb-2">
                <Skeleton className="h-6 w-32" />
                <Skeleton className="w-8 h-8 rounded-full" />
              </div>
              <div className="flex items-center gap-2 mb-4">
                <Skeleton className="h-6 w-20" />
                <Skeleton className="h-4 w-16" />
              </div>
              <Skeleton className="h-[200px] w-full rounded mb-4" />
              <div className="mt-4 space-y-3">
                {[...Array(2)].map((_, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between text-sm"
                  >
                    <div className="flex items-center gap-3">
                      <Skeleton className="w-8 h-8 rounded-md" />
                      <div>
                        <Skeleton className="h-4 w-20 mb-1" />
                        <Skeleton className="h-3 w-12" />
                      </div>
                    </div>
                    <Skeleton className="h-4 w-16" />
                  </div>
                ))}
              </div>
            </div>
            {/* Top Transactions */}
            <div className="bg-white rounded-[5px] shadow-customsm w-full flex flex-col p-[25px] gap-4 dark:bg-gray-900">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <Skeleton className="h-6 w-32 mb-2" />
                  <Skeleton className="h-4 w-24" />
                </div>
                <Skeleton className="w-8 h-8 rounded-full" />
              </div>
              <div className="space-y-4">
                {[...Array(7)].map((_, i) => (
                  <div key={i} className="flex items-center">
                    <Skeleton className="mr-4 rounded-full w-[34px] h-[34px]" />
                    <div className="flex justify-between items-center w-full flex-wrap gap-y-2">
                      <div className="flex flex-col">
                        <Skeleton className="h-4 w-24 mb-1" />
                        <Skeleton className="h-3 w-10" />
                      </div>
                      <Skeleton className="h-4 w-12" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
