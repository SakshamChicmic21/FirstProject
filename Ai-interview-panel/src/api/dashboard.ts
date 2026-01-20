// src/api/dashboard.ts
import { API_END_POINTS } from "@/shared/api";
import { getRequest } from "@/shared/fetcher";
import {
  transformAverageSalesData,
  transformSalesOverviewData,
  transformWebSiteAnalyticsData,
  transformEarningsReportData,
  transformSupportTicketsData,
  transformSalesByCountryData,
  transformTotalEarningsData,
  transformTopTransactionsData,
} from "@/shared/transformers/dashboard";

// Website Analytics
export const fetchDashboardAnalytics = (
  params: { filterType?: string } = {},
) => {
  return getRequest(API_END_POINTS.WEBSITE_ANALYTICS, params, {
    transformer: transformWebSiteAnalyticsData,
  });
};

// Daily Sales
export const fetchAverageDailySales = (params = {}) => {
  return getRequest(API_END_POINTS.AVERAGE_DAILY_SALES, params, {
    transformer: transformAverageSalesData,
  });
};

// Sales Overview
export const fetchSalesOverview = (params = {}) => {
  return getRequest(API_END_POINTS.SALES_OVERVIEW, params, {
    transformer: transformSalesOverviewData,
  });
};

// Earning Report
export const fetchEarningsReport = (params = {}) => {
  return getRequest(API_END_POINTS.EARNINGS_REPORT, params, {
    transformer: transformEarningsReportData,
  });
};

// Support Tracker
export const fetchSupportTickets = (params = {}) => {
  return getRequest(API_END_POINTS.SUPPORT_TICKETS, params, {
    transformer: transformSupportTicketsData,
  });
};

// Sales By Country
export const fetchSalesByCountry = (params = {}) => {
  return getRequest(API_END_POINTS.SALES_BY_COUNTRY, params, {
    transformer: transformSalesByCountryData,
  });
};

// Total Earning
export const fetchTotalEarnings = (params = {}) => {
  return getRequest(API_END_POINTS.TOTAL_EARNINGS, params, {
    transformer: transformTotalEarningsData,
  });
};

// Top Transactions
export const fetchTopTransactions = (params = {}) => {
  return getRequest(API_END_POINTS.TRANSACTIONS, params, {
    transformer: transformTopTransactionsData,
  });
};
