"use client";

import {
  Bell,
  Grid3X3,
  Languages,
  LogOut,
  Moon,
  Search,
  Settings,
  Sun,
  User,
} from "lucide-react";
import { useTheme } from "next-themes";
import { redirect, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { THEME_TYPE } from "@/shared/constants";
import { ROUTES } from "@/shared/routes";
import { deleteSessionClient, getLocale, updateLocale } from "@/shared/utils";

import CheckClickOutside from "../CheckClickOutside";
import CommandPalette from "../CommandPalette";
import { AdminUser } from "@/shared/types";

const Header = () => {
  const router = useRouter();
  const { resolvedTheme, setTheme } = useTheme();
  const [notificationCount] = useState(3);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [language, setLanguage] = useState<string>();
  const toggleTheme = () => {
    setTheme(
      resolvedTheme === THEME_TYPE.DARK ? THEME_TYPE.LIGHT : THEME_TYPE.DARK,
    );
  };
  const user: AdminUser = JSON.parse(localStorage?.getItem?.("user") ?? "{}");
  const handleLogout = async () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    const success = await deleteSessionClient();
    if (success) {
      toast.success("Logout Successfully");
      redirect(ROUTES.LOGIN);
    } else {
      toast.error("Session deletion failed.");
    }
  };

  const handleLanguageChange = async (lang: string) => {
    if (lang === language) {
      setShowLanguageMenu(false);
      return;
    }
    await updateLocale(lang);
    setLanguage(lang);
    setShowLanguageMenu(false);
    router.refresh();
  };
  useEffect(() => {
    (async () => {
      const savedLanguage = await getLocale();
      console.log(savedLanguage, " savedLanguage");
      setLanguage(savedLanguage || "en");
    })();
  }, [setLanguage]);
  const [showCommandPalette, setShowCommandPalette] = useState(false);
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setShowCommandPalette(true);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);
  return (
    <>
      <header className="bg-white dark:bg-gray-900 w-full sticky top-[15px] z-[99] flex items-center justify-between shadow-[0_2px_8px_0_rgba(47,43,61,0.12)] border rounded-[5px] p-[5px_10px] dark:border-gray-700">
        {/* Search Bar */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search (Ctrl + K)"
              onClick={() => setShowCommandPalette(true)}
              className="pl-10 pr-4 py-2 w-full bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-purple-300 focus:ring-2 focus:ring-purple-200 focus:outline-none transition-all duration-200 text-black dark:bg-gray-800 dark:border-gray-700 dark:focus:border-purple-300 dark:focus:ring-purple-200"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-3 ml-4">
          {/* Language Selector */}
          <CheckClickOutside onClick={() => setShowLanguageMenu(false)}>
            <div className="relative">
              <button
                onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors duration-200 dark:text-gray-400 dark:hover:text-gray-100 dark:hover:bg-gray-700"
              >
                <Languages size={18} />
              </button>
              {showLanguageMenu && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50 dark:bg-gray-800 dark:border-gray-700">
                  <button
                    className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-gray-400 ${language === "en" ? "font-bold bg-gray-100 dark:bg-gray-700" : ""}`}
                    onClick={() => handleLanguageChange("en")}
                  >
                    English
                  </button>
                  <button
                    className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-gray-400 ${language === "fr" ? "font-bold bg-gray-100 dark:bg-gray-700" : ""}`}
                    onClick={() => handleLanguageChange("fr")}
                  >
                    French
                  </button>
                  <button
                    className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-gray-400 ${language === "es" ? "font-bold bg-gray-100 dark:bg-gray-700" : ""}`}
                    onClick={() => handleLanguageChange("es")}
                  >
                    Spanish
                  </button>
                </div>
              )}
            </div>
          </CheckClickOutside>
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors duration-200 dark:text-gray-400 dark:hover:text-gray-100 dark:hover:bg-gray-700"
          >
            {resolvedTheme === THEME_TYPE.DARK ? (
              <Sun size={18} />
            ) : (
              <Moon size={18} />
            )}
          </button>

          {/* App Grid */}
          <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors duration-200 dark:text-gray-400 dark:hover:text-gray-100 dark:hover:bg-gray-700">
            <Grid3X3 size={18} />
          </button>

          {/* Notifications */}
          <CheckClickOutside onClick={() => setShowNotifications(false)}>
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors duration-200 dark:text-gray-400 dark:hover:text-gray-100 dark:hover:bg-gray-700"
              >
                <Bell size={18} />
                {notificationCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-white text-xs font-bold flex items-center justify-center">
                    {notificationCount}
                  </span>
                )}
              </button>
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50 dark:bg-gray-800 dark:border-gray-700">
                  <div className="p-4 border-b border-gray-200">
                    <h3 className="font-semibold text-gray-900 dark:text-gray-400">
                      Notifications ({notificationCount})
                    </h3>
                  </div>
                  <div className="max-h-64 overflow-y-auto">
                    <div className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-gray-400">
                            New user registered
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            2 minutes ago
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-gray-400">
                            Order completed
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            5 minutes ago
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-gray-400">
                            System update available
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            1 hour ago
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </CheckClickOutside>
          {/* User Menu */}
          <CheckClickOutside onClick={() => setShowUserMenu(false)}>
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200 dark:text-gray-400 dark:hover:text-gray-100 dark:hover:bg-gray-700"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">
                    {(user?.name?.split?.(" ")?.[0]?.[0]?.toUpperCase?.() ??
                      "") +
                      (user?.name?.split?.(" ")?.[1]?.[0]?.toUpperCase?.() ??
                        "")}
                  </span>
                </div>
              </button>
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50 dark:bg-gray-800 dark:border-gray-700">
                  <div className="px-4 py-3 border-b border-gray-200">
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-400">
                      {user?.name}
                    </p>
                    <p className="text-xs text-gray-500">{user?.email}</p>
                  </div>
                  <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center dark:text-gray-400">
                    <User className="mr-2 h-4 w-4" />
                    Profile
                  </button>
                  <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center dark:text-gray-400">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </button>
                  <hr className="my-1" />
                  <button
                    onClick={handleLogout}
                    className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center text-red-600 dark:text-gray-400"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Log out
                  </button>
                </div>
              )}
            </div>
          </CheckClickOutside>
        </div>
      </header>
      <CommandPalette
        isOpen={showCommandPalette}
        onClose={() => setShowCommandPalette(false)}
      />
    </>
  );
};

export default Header;
