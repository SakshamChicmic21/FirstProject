import React from "react";

import SwiperCard from "@/components/atoms/CustomSliders/SwiperCard";
import AreaChart from "@/components/molecules/Charts/AreaChart";
import ComparisonCard from "@/components/molecules/ComparisionCard";
import EarningReportCard from "@/components/molecules/EarningReport/EarningReportChart";
import SupportTrackerCard from "@/components/molecules/SupportTrackerCard";
import ListingCard from "@/components/molecules/ListingCard";
import TotalEarningCard from "@/components/molecules/TotalEarningCard";

import { LISTING_CARD_TYPES } from "@/components/molecules/ListingCard/helpers/types";
import {
  fetchAverageDailySales,
  fetchDashboardAnalytics,
  fetchEarningsReport,
  fetchSalesByCountry,
  fetchSalesOverview,
  fetchSupportTickets,
  fetchTopTransactions,
  fetchTotalEarnings,
} from "@/api/dashboard";

import {
  LISTING_OPTION_VALUES,
  LISTING_OPTIONS,
} from "@/components/molecules/PopularProducts/helpers/types";

interface AnalyticsPageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

function getFirstParam<T>(param: T | T[] | undefined, defaultValue: T): T {
  if (Array.isArray(param)) return param[0];
  if (param !== undefined) return param;
  return defaultValue;
}

const Analytics = async ({ searchParams }: AnalyticsPageProps) => {
  const { supportTrack, topTransactions, totalEarnings } = await searchParams;
  const supportTrackFilter = getFirstParam(
    supportTrack,
    String(LISTING_OPTION_VALUES.THIS_WEEK),
  );
  const topTransactionsFilter = getFirstParam(
    topTransactions,
    String(LISTING_OPTION_VALUES.THIS_WEEK),
  );
  const totalEarningsFilter = getFirstParam(
    totalEarnings,
    String(LISTING_OPTION_VALUES.THIS_WEEK),
  );

  const topTransactionDuration = (() => {
    switch (topTransactionsFilter) {
      case String(LISTING_OPTION_VALUES.THIS_WEEK):
        return "Week";
      case String(LISTING_OPTION_VALUES.LAST_MONTH):
        return "Last Month";
      case String(LISTING_OPTION_VALUES.LAST_YEAR):
        return "Last Year";
      default:
        return "Week";
    }
  })();

  // Fetch all dashboard data
  const [
    websiteAnalyticsData,
    dailySalesChartConfig,
    salesOverview,
    earningsReport,
    supportTickets,
    salesByCountry,
    totalEarningsData,
    topTransactionsData,
  ] = await Promise.all([
    fetchDashboardAnalytics(),
    fetchAverageDailySales(),
    fetchSalesOverview(),
    fetchEarningsReport(),
    fetchSupportTickets({ dateFilter: supportTrackFilter }),
    fetchSalesByCountry(),
    fetchTotalEarnings({ filterType: totalEarningsFilter }),
    fetchTopTransactions({
      filterType: topTransactionsFilter,
      skip: 0,
      limit: 7,
    }),
  ]);

  return (
    <div className="p-0 mt-[20px]">
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 max-h-fit">
        <SwiperCard
          title="Website Analytics"
          subtitle="Traffic & Conversions"
          data={websiteAnalyticsData}
          height="auto"
        />

        <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 max-h-fit">
          <AreaChart config={dailySalesChartConfig} />
          <ComparisonCard
            title="Sales Overview"
            totalValue={salesOverview.totalValue}
            changePercent={salesOverview.changeInPercent}
            items={salesOverview.series}
          />
        </div>

        <EarningReportCard
          title="Earning Reports"
          subtitle="Weekly Earnings Overview"
          stats={earningsReport.stats}
          series={earningsReport.series}
        />

        <SupportTrackerCard
          title="Support Tracker"
          subtitle="Last 7 Days"
          totalCount={supportTickets.totalCount}
          progressPercent={supportTickets.progressPercent}
          stats={supportTickets.stats}
        />

        <div className="col-span-full grid grid-cols-1 sm:grid-cols-3 gap-6 mb-[10px]">
          <ListingCard
            title="Sales by Countries"
            subtitle="Monthly Sales Overview"
            data={salesByCountry.items}
            menuOptions={LISTING_OPTIONS}
            listingCardType={LISTING_CARD_TYPES.SALES}
            filterKeyName="salesByCountry"
          />

          <TotalEarningCard
            title="Total Earning"
            percentage={Number(totalEarningsData.percentage)}
            change={Number(totalEarningsData.change)}
            categories={["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"]}
            series={totalEarningsData.series}
            stats={totalEarningsData.stats}
          />

          <ListingCard
            title="Top Transactions"
            subtitle={`Total ${topTransactionsData.total || 0} Transactions done in this ${topTransactionDuration}`}
            data={
              Array.isArray(topTransactionsData?.transactions)
                ? topTransactionsData.transactions
                : []
            }
            menuOptions={LISTING_OPTIONS}
            listingCardType={LISTING_CARD_TYPES.TRANSACTION}
            filterKeyName="topTransactions"
          />
        </div>
      </div>
    </div>
  );
};
export default Analytics;
