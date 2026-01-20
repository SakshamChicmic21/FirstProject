// utils/sessionClient.ts

import clsx, { ClassValue } from "clsx";
import { format, formatDistanceToNow } from "date-fns";
import Payment from "payment";
import { twMerge } from "tailwind-merge";

import {
  ENTITY_STATUS,
  STATUS_COLOR_MAP,
  TRANSACTION_SOURCE_TYPES,
} from "./constants";

// Set session cookie by sending token to server
export async function createSessionClient(token: string): Promise<boolean> {
  try {
    const res = await fetch("/api/session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    });

    if (!res.ok) {
      const data = await res.json();
      console.error("Failed to create session:", data);
      return false;
    }

    return true;
  } catch (err) {
    console.error("❌ Error in createSessionClient:", err);
    return false;
  }
}

// Delete session cookie (logout)
export async function deleteSessionClient(): Promise<boolean> {
  try {
    const res = await fetch("/api/session", {
      method: "DELETE",
    });

    if (!res.ok) {
      const data = await res.json();
      console.error("Failed to delete session:", data);
      return false;
    }

    return true;
  } catch (err) {
    console.error("❌ Error in deleteSessionClient:", err);
    return false;
  }
}
// Delete session cookie (logout)
export async function getSessionClient() {
  try {
    const res = await fetch("/api/session", {
      method: "GET",
    });

    const data = await res.json();
    if (!res.ok) {
      console.error("Failed to get session:", data);
      return data;
    }

    return data;
  } catch (err) {
    console.error("❌ Error in getSessionClient:", err);
    return err;
  }
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function hexToRgb(hex: string): string {
  const sanitizedHex = hex.replace("#", "");
  const bigint = parseInt(sanitizedHex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `${r},${g},${b}`;
}

export const toQueryParams = <T>(params: T): string => {
  const searchParams = new URLSearchParams();

  Object.entries(params as object).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      searchParams.append(key, String(value));
    }
  });

  return `?${searchParams.toString()}`;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function debounce<F extends (...args: any[]) => void>(
  func: F,
  wait: number,
): (...args: Parameters<F>) => void {
  let timeout: ReturnType<typeof setTimeout>;

  return (...args: Parameters<F>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(...args);
    }, wait);
  };
}

export const getRelativeTime = (date: Date | string): string => {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
};

export function formatMsToReadableDuration(ms: number): string {
  const totalSeconds = Math.floor(ms / 1000);
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);

  const parts = [];
  if (days) parts.push(`${days} days`);
  if (hours) parts.push(`${hours} hour${hours > 1 ? "s" : ""}`);
  if (minutes) parts.push(`${minutes} minute${minutes > 1 ? "s" : ""}`);

  return parts.join(" ");
}

export const calculateTotal = ({
  cost = 0,
  quantity = 0,
  discount = 0,
  tax1Percentage = 0,
  tax2Percentage = 0,
}) => {
  if (cost === 0 || quantity === 0) return 0;
  const price = cost * quantity;
  const discountedPrice = price - price * (discount / 100);
  const tax1Price = discountedPrice * (tax1Percentage / 100);
  const tax2Price = discountedPrice * (tax2Percentage / 100);
  return discountedPrice + tax1Price + tax2Price;
};

// Format card number based on issuer
export const formatCardNumber = (value: string): string => {
  return value
    .replace(/\D/g, "")
    .replace(/(.{4})/g, "$1 ")
    .trim();
};

// Format expiry date
export const formatExpiry = (value: string): string => {
  const digits = value.replace(/\D/g, "").slice(0, 4);
  if (digits.length <= 2) return digits;
  return `${digits.slice(0, 2)}/${digits.slice(2)}`;
};

// Format CVV
export const formatCVV = (value: string, cardNumber: string): string => {
  const digits = value.replace(/\D/g, "");
  const cardType = Payment.fns.cardType(cardNumber);
  const maxLength = cardType === "amex" ? 4 : 3;
  return digits.slice(0, maxLength);
};

// Get card issuer
export const getCardIssuer = (cardNumber: string): string | null => {
  const digits = cardNumber.replace(/\D/g, "");
  return Payment.fns.cardType(digits) ?? null;
};

export const formatNumberValue = (value: number): string => {
  if (value === 0) return "0";
  if (value < 0) return `-${formatNumberValue(-value)}`;
  return `${value.toLocaleString(undefined, { maximumFractionDigits: 2 })}`;
};

export const getTransactionSourceDetails = (source: number): string => {
  switch (source) {
    case TRANSACTION_SOURCE_TYPES.WALLET:
      return "Wallet";
    case TRANSACTION_SOURCE_TYPES.BANK_TRANSFER:
      return "Bank Transfer";
    case TRANSACTION_SOURCE_TYPES.PAYPAL:
      return "PayPal";
    case TRANSACTION_SOURCE_TYPES.BANK_TRANSACTION:
      return "Bank Transaction";
    case TRANSACTION_SOURCE_TYPES.CARD:
      return "Card";
    default:
      return "";
  }
};

export const formatDate = (date: Date | string): string => {
  if (!date) return "";

  return format(date, "MMMM d, yyyy h:mm a");
};

export async function updateLocale(locale: string): Promise<boolean> {
  try {
    const res = await fetch("/api/locale", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ locale }),
    });

    if (!res.ok) {
      const data = await res.json();
      console.error("Failed to update locale:", data);
      return false;
    }

    return true;
  } catch (err) {
    console.error("❌ Error in updateLocale:", err);
    return false;
  }
}

export async function getLocale(): Promise<string | null> {
  try {
    const res = await fetch("/api/locale", {
      method: "GET",
    });
    if (!res.ok) {
      const data = await res.json();
      console.error("Failed to get locale:", data);
      return null;
    }

    const data = await res.json();
    console.log(data, "res in getLocale");
    return data.locale || "en";
  } catch (err) {
    console.error("❌ Error in getLocale:", err);
    return null;
  }
}

export const getStatusColor = (status: ENTITY_STATUS): string => {
  return (
    STATUS_COLOR_MAP[status as ENTITY_STATUS] || "bg-gray-100 text-gray-800"
  );
};
