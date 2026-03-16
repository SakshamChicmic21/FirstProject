# 🗺️ Routing Guide - Ai-Interview-panel-helper

## Overview
This document explains the routing structure of the Ai-Interview-panel-helper application and how to manage route protection.

---

## 📁 Route Structure

### **Public Routes** (`/src/app/(public)`)
Accessible without authentication:
- `/login` - User login page
- `/forgot-password` - Password recovery
- `/otp-verify` - OTP verification
- `/reset-password` - Password reset

### **Secured Routes** (`/src/app/(secured)`)
Originally protected by authentication (currently disabled):

#### Dashboard
- `/dashboard/analytics` - Analytics dashboard
- `/dashboard/crm` - CRM dashboard

#### Users Management
- `/users/list` - User listing
- `/users/view` - User details
- `/users/view/account` - Account settings
- `/users/view/security` - Security settings
- `/users/view/billing` - Billing information
- `/users/view/notifications` - Notification preferences
- `/users/view/connections` - User connections

#### Invoices
- `/invoices/list` - Invoice listing
- `/invoices/add` - Create new invoice
- `/invoices/edit` - Edit invoice
- `/invoices/preview` - Preview invoice

#### Companies
- `/companies/list` - Company listing
- `/companies/view` - Company details
- `/companies/view/jobs` - Company job postings
- `/companies/view/events` - Company events
- `/companies/view/businessleads` - Business leads
- `/companies/view/hiring` - Hiring information
- `/companies/view/engagement` - Engagement metrics
- `/companies/view/sponsorship` - Sponsorships
- `/companies/view/boost` - Boost campaigns
- `/companies/view/companygrowth` - Growth analytics

#### Other Features
- `/badges/list` - Badge management
- `/badges/add` - Create badge
- `/badges/edit` - Edit badge
- `/events/list` - Event listing
- `/groups/list` - Group listing
- `/promo-codes/list` - Promo code management
- `/subscriptions/list` - Subscription listing
- `/subscriptions/view` - Subscription details
- `/transactions/list` - Transaction history
- `/interview` - AI Interview panel
- `/tts-demo` - Text-to-speech demo

---

## 🔐 Authentication System

### Middleware (`/src/middleware.ts`)
The middleware handles:
1. **Session Management** - Checks for valid session cookies
2. **Route Protection** - Blocks unauthenticated access to secured routes
3. **Redirection Logic**:
   - Unauthenticated users → `/login`
   - Authenticated users accessing public routes → `/dashboard/analytics`
   - Root path `/` → Redirects based on auth status

### Route Configuration (`/src/shared/routes.ts`)
Centralized route definitions:
- `PUBLIC_ROUTES` - Routes accessible without login
- `PRIVATE_ROUTES` - Routes requiring authentication
- `ROUTES` - Combined export of all routes

---

## 🔓 Current Status: AUTHENTICATION DISABLED

**All routes are now publicly accessible** without authentication.

### What Changed:
- Middleware logic is commented out
- No session checks are performed
- No redirects based on authentication status
- All routes (public and secured) can be accessed directly

### Console Output:
You'll see: `🔓 Middleware disabled - allowing all routes: <path>`

---

## 🔄 How to Re-Enable Authentication

To restore route protection, edit `/src/middleware.ts`:

1. **Uncomment the original code** (remove `/* */` comments)
2. **Comment out the bypass code** (lines with `return NextResponse.next()`)
3. **Restore imports**:
   ```typescript
   import { cookies } from "next/headers";
   import { decrypt } from "@/shared/session";
   import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "./shared/routes";
   ```

### Quick Restore Code:
```typescript
export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  console.log("🔥 Middleware is running:", path);
  
  // Redirect root path based on auth
  if (path === "/") {
    const cookie = req.cookies.get("session")?.value;
    const session = await decrypt(cookie);
    return NextResponse.redirect(
      new URL(
        session?.token ? PRIVATE_ROUTES.DASHBOARD_ANALYTICS : PUBLIC_ROUTES.LOGIN,
        req.nextUrl
      )
    );
  }

  const isProtectedRoute = Object.values(PRIVATE_ROUTES).includes(path);
  const isPublicRoute = Object.values(PUBLIC_ROUTES).includes(path);
  const cookie = (await cookies()).get("session")?.value;
  const session = await decrypt(cookie);

  // Protect secured routes
  if (isProtectedRoute && !session?.token) {
    return NextResponse.redirect(new URL(PUBLIC_ROUTES.LOGIN, req.nextUrl));
  }

  // Redirect authenticated users from public routes
  if (isPublicRoute && session?.token && !req.nextUrl.pathname.startsWith(PRIVATE_ROUTES.DASHBOARD_ANALYTICS)) {
    return NextResponse.redirect(new URL(PRIVATE_ROUTES.DASHBOARD_ANALYTICS, req.nextUrl));
  }

  return NextResponse.next();
}
```

---

## 🎯 Alternative Approaches

### Option 1: Selective Route Protection
Modify the `protectedRoutes` array to only protect specific routes:
```typescript
const protectedRoutes = [
  PRIVATE_ROUTES.USERS_LIST,
  PRIVATE_ROUTES.COMPANIES_LIST,
  // Add only routes you want to protect
];
```

### Option 2: Disable Middleware Completely
Delete or rename `src/middleware.ts` to prevent it from running.

### Option 3: Environment-Based Protection
Add environment variable control:
```typescript
export default async function middleware(req: NextRequest) {
  if (process.env.DISABLE_AUTH === 'true') {
    return NextResponse.next();
  }
  // ... rest of middleware logic
}
```

---

## 📝 Notes

- **Route Groups**: The `(public)` and `(secured)` folders are Next.js route groups - they organize routes without affecting the URL structure
- **Secured Layout**: The `(secured)/layout.tsx` adds Header and Sidebar components to all protected pages
- **Middleware Matcher**: Currently runs on all routes except API routes, static files, and images

---

## 🚀 Next Steps

1. **Test All Routes**: Visit secured routes directly to verify they're accessible
2. **Check Console**: Look for `🔓 Middleware disabled` messages
3. **Development**: Build features without auth interruptions
4. **Before Production**: Re-enable authentication for security

---

*Last Updated: 2026-01-27*
