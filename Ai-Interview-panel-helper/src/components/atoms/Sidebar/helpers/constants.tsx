import {
  BookText,
  CreditCard,
  LayoutDashboard,
  LucideProps,
  Stars,
  TicketPercent,
  UserCog,
  Building,
  Medal,
} from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

import { ROUTES } from "@/shared/routes";

export type NavItem = {
  icon?: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  label: string;
  path?: string;
  activePaths?: string[];
  children?: NavItem[];
  badge?: string;
};

export const navItems: NavItem[] = [
  {
    icon: LayoutDashboard,
    label: "Dashboards",
    path: ROUTES.DASHBOARD,
    activePaths: [ROUTES.DASHBOARD_ANALYTICS],
    badge: "5",
    children: [
      {
        label: "Analytics",
        path: ROUTES.DASHBOARD_ANALYTICS,
        activePaths: [ROUTES.DASHBOARD_ANALYTICS],
      },
      {
        label: "CRM",
        path: ROUTES.DASHBOARD_CRM,
        activePaths: [ROUTES.DASHBOARD_CRM],
      },
    ],
  },
  {
    icon: UserCog,
    label: "Users",
    path: ROUTES.USERS,
    activePaths: [ROUTES.USERS],
    children: [
      {
        label: "List",
        path: ROUTES.USERS_LIST,
        activePaths: [ROUTES.USERS_LIST],
      },
      // {
      //   label: "View",
      //   path: ROUTES.USERS_VIEW,
      //   activePaths: [ROUTES.USERS_VIEW],
      //   children: [
      //     {
      //       label: "Account",
      //       path: ROUTES.USERS_VIEW_ACCOUNT,
      //       activePaths: [ROUTES.USERS_VIEW_ACCOUNT],
      //     },
      //   ],
      // },
    ],
  },
  {
    icon: Building,
    label: "Companies",
    path: ROUTES.COMPANIES,
    activePaths: [ROUTES.COMPANIES],
    children: [
      {
        label: "List",
        path: ROUTES.COMPANIES_LIST,
        activePaths: [ROUTES.COMPANIES_LIST],
      },
      // {
      //   label: "View",
      //   path: ROUTES.COMPANIES_VIEW,
      //   activePaths: [ROUTES.COMPANIES_VIEW],
      //   children: [
      //     {
      //       label: "Jobs",
      //       path: ROUTES.COMPANIES_VIEW_JOBS,
      //       activePaths: [ROUTES.COMPANIES_VIEW_JOBS],
      //     },
      //   ],
      // },
    ],
  },
  {
    icon: BookText,
    label: "Invoices",
    activePaths: [ROUTES.INVOICES_LIST],
    children: [
      {
        label: "List",
        path: ROUTES.INVOICES_LIST,
        activePaths: [ROUTES.INVOICES_LIST],
      },
      {
        label: "Preview",
        path: ROUTES.INVOICES_PREVIEW,
        activePaths: [ROUTES.INVOICES_PREVIEW],
      },
      {
        label: "Add",
        path: ROUTES.INVOICES_ADD,
        activePaths: [ROUTES.INVOICES_ADD],
      },
      {
        label: "Edit",
        path: ROUTES.INVOICES_EDIT,
        activePaths: [ROUTES.INVOICES_EDIT],
      },
    ],
  },
  {
    icon: CreditCard,
    label: "Transactions",
    activePaths: [ROUTES.TRANSACTIONS_LIST],
    children: [
      {
        label: "List",
        path: ROUTES.TRANSACTIONS_LIST,
        activePaths: [ROUTES.TRANSACTIONS_LIST],
      },
    ],
  },
  {
    icon: Stars,
    label: "Subscriptions",
    activePaths: [ROUTES.SUBSCRIPTIONS_LIST],
    children: [
      {
        label: "List",
        path: ROUTES.SUBSCRIPTIONS_LIST,
        activePaths: [ROUTES.SUBSCRIPTIONS_LIST],
      },
    ],
  },
  {
    icon: Medal,
    label: "Badges",
    activePaths: [ROUTES.BADGES],
    children: [
      {
        label: "List",
        path: ROUTES.BADGES_LIST,
        activePaths: [ROUTES.BADGES_LIST],
      },
      {
        label: "Add",
        path: ROUTES.BADGES_ADD,
        activePaths: [ROUTES.BADGES_ADD],
      },
      {
        label: "Edit",
        path: ROUTES.BADGES_EDIT,
        activePaths: [ROUTES.BADGES_EDIT],
      },
    ],
  },
  {
    icon: TicketPercent,
    label: "Promo Codes",
    activePaths: [ROUTES.PROMO_CODES_LIST],
    children: [
      {
        label: "List",
        path: ROUTES.PROMO_CODES_LIST,
        activePaths: [ROUTES.PROMO_CODES_LIST],
      },
    ],
  },
  {
    icon: TicketPercent,
    label: "Events",
    activePaths: [ROUTES.EVENTS_LIST],
    children: [
      {
        label: "List",
        path: ROUTES.EVENTS_LIST,
        activePaths: [ROUTES.EVENTS_LIST],
      },
    ],
  },
  {
    icon: TicketPercent,
    label: "Groups",
    activePaths: [ROUTES.GROUPS_LIST],
    children: [
      {
        label: "List",
        path: ROUTES.GROUPS_LIST,
        activePaths: [ROUTES.GROUPS_LIST],
      },
    ],
  },
];
