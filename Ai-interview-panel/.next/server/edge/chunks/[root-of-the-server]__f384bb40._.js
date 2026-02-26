(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/[root-of-the-server]__f384bb40._.js", {

"[externals]/node:buffer [external] (node:buffer, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}}),
"[project]/src/shared/routes.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "PRIVATE_ROUTES": (()=>PRIVATE_ROUTES),
    "PUBLIC_ROUTES": (()=>PUBLIC_ROUTES),
    "ROUTES": (()=>ROUTES)
});
const PUBLIC_ROUTES = {
    LOGIN: "/login",
    REGISTER: "/register",
    FORGOT_PASSWORD: "/forgot-password",
    OTP_VERIFY: "/otp-verify",
    RESET_PASSWORD: "/reset-password"
};
const PRIVATE_ROUTES = {
    DASHBOARD: "/dashboard",
    USERS: "/users",
    USERS_LIST: "/users/list",
    USERS_VIEW: "/users/view",
    DASHBOARD_CRM: "/dashboard/crm",
    INVOICES_LIST: "/invoices/list",
    INVOICES_PREVIEW: "/invoices/preview",
    INVOICES_ADD: "/invoices/add",
    INVOICES_EDIT: "/invoices/edit",
    DASHBOARD_ANALYTICS: "/dashboard/analytics",
    USERS_VIEW_ACCOUNT: "/users/view/account",
    USERS_VIEW_SECURITY: "/users/view/security",
    USERS_VIEW_BILLING: "/users/view/billing",
    USERS_VIEW_NOTIFICATIONS: "/users/view/notifications",
    USERS_VIEW_CONNECTIONS: "/users/view/connections",
    TRANSACTIONS_LIST: "/transactions/list",
    SUBSCRIPTIONS_LIST: "/subscriptions/list",
    SUBSCRIPTIONS_VIEW: "/subscriptions/view",
    BADGES: "/badges",
    BADGES_LIST: "/badges/list",
    BADGES_ADD: "/badges/add",
    BADGES_EDIT: "/badges/edit",
    COMPANIES: "/companies",
    COMPANIES_LIST: "/companies/list",
    COMPANIES_VIEW: "/companies/view",
    COMPANIES_VIEW_JOBS: "/companies/view/jobs",
    COMPANIES_VIEW_EVENTS: "/companies/view/events",
    COMPANIES_VIEW_BUSINESS: "/companies/view/businessleads",
    COMPANIES_VIEW_HIRING: "/companies/view/hiring",
    COMPANIES_VIEW_ENGAGEMENT: "/companies/view/engagement",
    COMPANIES_VIEW_SPONSORSHIP: "/companies/view/sponsorship",
    COMPANIES_VIEW_BOOST: "/companies/view/boost",
    COMPANIES_VIEW_GROWTH: "/companies/view/companygrowth",
    PROMO_CODES_LIST: "/promo-codes/list",
    EVENTS_LIST: "/events/list",
    GROUPS_LIST: "/groups/list"
};
const ROUTES = {
    ...PUBLIC_ROUTES,
    ...PRIVATE_ROUTES
};
}}),
"[project]/src/middleware.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "config": (()=>config),
    "default": (()=>middleware)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/web/spec-extension/response.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$headers$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/headers.js [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$cookies$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/request/cookies.js [middleware-edge] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/shared/session'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$routes$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/routes.ts [middleware-edge] (ecmascript)");
;
;
;
;
const protectedRoutes = Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$routes$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["PRIVATE_ROUTES"]);
const publicRoutes = Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$routes$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["PUBLIC_ROUTES"]);
async function middleware(req) {
    const path = req.nextUrl.pathname;
    console.log("🔥 Middleware is running:", path);
    if (path === "/") {
        const cookie = req.cookies.get("session")?.value;
        const session = await decrypt(cookie);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL(session?.token ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$routes$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["PRIVATE_ROUTES"].DASHBOARD_ANALYTICS : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$routes$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["PUBLIC_ROUTES"].LOGIN, req.nextUrl));
    }
    // 2. Check if the current route is protected or public
    const isProtectedRoute = protectedRoutes.includes(path);
    const isPublicRoute = publicRoutes.includes(path);
    // 3. Decrypt the session from the cookie
    const cookie = (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$cookies$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["cookies"])()).get("session")?.value;
    const session = await decrypt(cookie);
    // 4. Redirect to /login if the user is not authenticated
    if (isProtectedRoute && !session?.token) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$routes$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["PUBLIC_ROUTES"].LOGIN, req.nextUrl));
    }
    // 5. Redirect to /dashboard if the user is authenticated
    if (isPublicRoute && session?.token && !req.nextUrl.pathname.startsWith(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$routes$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["PRIVATE_ROUTES"].DASHBOARD_ANALYTICS)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$routes$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["PRIVATE_ROUTES"].DASHBOARD_ANALYTICS, req.nextUrl));
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
}
const config = {
    matcher: [
        "/((?!api|_next/static|_next/image|.*\\.png$).*)"
    ]
};
}}),
}]);

//# sourceMappingURL=%5Broot-of-the-server%5D__f384bb40._.js.map