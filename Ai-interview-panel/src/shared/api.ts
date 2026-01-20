const API_VERSION = "v1";
const API_VERSION_V2 = "v2";

const getBaseUrls = () => {
  if (process.env.NEXT_PUBLIC_ENV === "development") {
    return {
      NETWORK_SERVICES: `${process.env.NEXT_PUBLIC_API_URL}:5096/network-service/`,
      POST_SERVICE: `${process.env.NEXT_PUBLIC_API_URL}:5180/post-service/`,
      SECURITY_SERVICE: `${process.env.NEXT_PUBLIC_API_URL}:5041/security-service/`,
      PROFILE_SERVICE: `${process.env.NEXT_PUBLIC_API_URL}:5245/profile-service/`,
    };
  } else {
    return {
      NETWORK_SERVICES: `${process.env.NEXT_PUBLIC_API_URL}/network-service/`,
      POST_SERVICE: `${process.env.NEXT_PUBLIC_API_URL}/post-service/`,
      SECURITY_SERVICE: `${process.env.NEXT_PUBLIC_API_URL}/security-service/`,
      PROFILE_SERVICE: `${process.env.NEXT_PUBLIC_API_URL}/profile-service/`,
    };
  }
};
const BASE_URLS = getBaseUrls();

// const BASE_URLS = {
//   NETWORK_SERVICES: `http://192.180.3.86:5096/network-service/`,
//   POST_SERVICE: `http://192.180.3.86:5180/post-service/`,
//   SECURITY_SERVICE: `http://192.180.3.86:5041/security-service/`,
//   PROFILE_SERVICE: `http://192.180.3.86:5245/profile-service/`,
// };

export const API_END_POINTS = {
  LOGIN: `/security-service/api/admin/login`,
  FORGOT_PASSWORD: `/security-service/api/admin/forgot-password`,
  VERIFY_CODE: `/security-service/api/admin/verify-reset-password-code`,
  RESET_PASSWORD: `/security-service/api/admin/reset-password`,
  USER: `${BASE_URLS.PROFILE_SERVICE}api/admin/profile-list`,
  CHANGE_USER_PASSWORD: `/security-service/api/admin/reset-user-password`,
  USER_STATUS: `${BASE_URLS.SECURITY_SERVICE}api/admin/toggle-user-active`,
  IMPERSONATE_USER: `/security-service/api/admin/impersonate-users`,
  INVOICES: `${API_VERSION}/invoices`,
  INVOICES_STATS: `${API_VERSION}/invoices/stats`,
  INVOICES_DETAILS: `${API_VERSION}/invoices/details`,
  INVOICES_DOWNLOAD: `${API_VERSION}/invoices/downloadInvoice`,
  PROJECTS: `${API_VERSION}/projects`,
  CLIENTS: `${API_VERSION}/clients`,
  USER_ACTIVITY: `${API_VERSION}/userActivity`,
  USER_LOGIN_TACKING: `${API_VERSION}/user/loginTracking`,
  PRODUCT_POPULAR: `${API_VERSION}/product/popular`,

  // Dashboard Endpoints
  WEBSITE_ANALYTICS: `${API_VERSION}/dashboard/websiteAnalytics`,
  AVERAGE_DAILY_SALES: `${API_VERSION}/dashboard/averageDailySales`,
  SALES_OVERVIEW: `${API_VERSION}/dashboard/salesOverview`,
  EARNINGS_REPORT: `${API_VERSION_V2}/dashboard/earningsReport`,
  SUPPORT_TICKETS: `${API_VERSION}/dashboard/supportTickets`,
  SALES_BY_COUNTRY: `${API_VERSION}/dashboard/salesByCountry`,
  TOTAL_EARNINGS: `${API_VERSION}/dashboard/totalEarnings`,
  TOP_TRANSACTIONS: `${API_VERSION}/product/topTransaction`,
  TRANSACTIONS: `${API_VERSION}/transactions`,

  PAYMENY_METHODS: `${API_VERSION}/paymentMethods`,
  INVOICE_COUNTER: `${API_VERSION}/counters`,

  SUBSCRIPTION_PLANS: `${API_VERSION}/subscriptionPlans`,
  SUBSCRIPTION_USERS: `${API_VERSION}/subscriptionPlans/purchaseHistory`,

  CURRENT_SUBSCRIPTION: `${API_VERSION}/user/currentSubscription`,
  UPGRADE_USER_PLAN: `${API_VERSION}/user/upgradeSubscription`,
  CANCEL_USER_SUBSCRIPTION: `${API_VERSION}/user/cancelSubscription`,
  BADGES: `${API_VERSION}/badges`,
  USER_BADGES: `${API_VERSION}/userBadges`,
  PAYMENT_METHODS: `${API_VERSION}/paymentMethods`,
  PROMO_CODES: `${API_VERSION}/promotionalCodes`,
  USER_PROMO_CODES: `${API_VERSION}/userPromotionCodes`,

  //Company Endpoints
  // COMPANY: `${API_VERSION}/companies`,
  COMPANY: `${BASE_URLS.NETWORK_SERVICES}api/admin/companies`,
  UPLOAD_BADGE_IMAGE: `${API_VERSION}/file/upload`,

  //Jobs
  JOBS: `${API_VERSION}/jobs`,
  APPLICATIONS: `${API_VERSION}/jobApplications`,

  //Posts
  POSTS: `${BASE_URLS.POST_SERVICE}api/admin/posts`,

  //Users
  USERS_ACHIEVEMENTS: `${BASE_URLS.PROFILE_SERVICE}api/achievement`,
};
