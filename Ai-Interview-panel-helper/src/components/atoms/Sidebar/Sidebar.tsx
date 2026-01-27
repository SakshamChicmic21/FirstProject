"use client";

import { ChevronDown, ChevronRight, Menu, X, Zap } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

import { cn } from "@/shared/utils";

import { NavItem, navItems } from "./helpers/constants";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const pathname = usePathname();
  const t = useTranslations("language");
  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleExpand = (label: string) =>
    setExpanded((prev) => ({ ...prev, [label]: !prev[label] }));

  // Auto-expand parents if any children are active
  useEffect(() => {
    const autoExpanded: Record<string, boolean> = {};

    const checkAndExpand = (
      items: NavItem[],
      parentChain: string[] = [],
    ): boolean => {
      let foundActive = false;

      for (const item of items) {
        if (item.children) {
          const childActive = checkAndExpand(item.children, [
            ...parentChain,
            item.label,
          ]);
          if (childActive) {
            autoExpanded[item.label] = true;
            parentChain.forEach((label) => {
              autoExpanded[label] = true;
            });
            foundActive = true;
          }
        } else if (
          item.activePaths?.some((path) => pathname.startsWith(path))
        ) {
          foundActive = true;
        }
      }

      return foundActive;
    };

    checkAndExpand(navItems);
    setExpanded(autoExpanded);
  }, [pathname]);
  const renderNavItem = (item: NavItem, depth = 0): React.ReactNode => {
    const isExpandable = item.children && item.children.length > 0;
    const isActive =
      !item.children &&
      item.activePaths?.some((path) =>
        path === "/" ? pathname === "/" : pathname.startsWith(path),
      );
    const paddingLeft = depth * 16 + 16;
    const Icon = item.icon;

    return (
      <li key={item.label}>
        {item.path && !isExpandable ? (
          <Link
            href={item.path}
            className={cn(
              "flex items-center px-[18px] py-[8px] rounded-lg text-gray-300 hover:bg-menubackground hover:text-menucolor transition-all duration-200 group dark:text-white dark:hover:bg-gray-700 dark:hover:text-white",
              isActive &&
                "bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-lg",
            )}
            style={{ paddingLeft }}
            onClick={() => setIsOpen(false)}
          >
            <span
              className={`mr-3 transition-transform group-hover:scale-110 duration-200 w-[10px] h-[10px] border-[1px] border rounded-full ${isActive ? "border-white" : "border-menucolor dark:border-white"}
              `}
            ></span>
            <span
              className={`flex-1 font-medium ${isActive ? "text-white" : "text-menucolor dark:text-white"}`}
            >
              {t(item.label)}
            </span>
            {item.badge && (
              <span className="ml-2 px-2 py-1 text-xs font-bold rounded-full bg-red-500 text-white">
                {item.badge}
              </span>
            )}
          </Link>
        ) : (
          <div
            className={
              "flex items-center p-3 py-[8px] rounded-lg cursor-pointer hover:bg-menubackground hover:text-menucolor transition-all duration-200 group dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
            }
            style={{ paddingLeft }}
            onClick={() => toggleExpand(item.label)}
          >
            <span className="mr-3 transition-transform duration-200">
              {Icon && <Icon size={20} className="text-gray-400" />}
            </span>
            <span
              className={`flex-1 font-medium ${isActive ? "text-white" : "text-menucolor dark:text-white"}`}
            >
              {t(item.label)}
            </span>
            {item.badge && (
              <span className="ml-2 px-2 py-1 text-xs font-bold rounded-full bg-red-500 text-white">
                {item.badge}
              </span>
            )}
            {isExpandable && (
              <div className="ml-2 transition-transform duration-200">
                {expanded[item.label] ? (
                  <ChevronDown size={16} className="text-gray-400" />
                ) : (
                  <ChevronRight size={16} className="text-gray-400" />
                )}
              </div>
            )}
          </div>
        )}
        {isExpandable && expanded[item.label] && (
          <ul className="mt-1 space-y-1">
            {item.children?.map((child) => renderNavItem(child, depth + 1))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 p-2 rounded-lg bg-white shadow-lg lg:hidden hover:bg-gray-50 transition-colors duration-200"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity duration-300"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-40 h-full w-64 bg-gradient-to-b from-gray-900 to-gray-800 shadow-2xl transform transition-all duration-300 ease-in-out bg-white dark:bg-gray-900",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
        )}
      >
        {/* Logo */}
        <div className="p-[15px_25px]">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Zap size={20} className="text-white" />
            </div>
            <h1 className="text-xl font-bold text-black dark:text-white">
              Vuexy
            </h1>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4 h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
          <ul className="space-y-2">
            {navItems.map((item) => renderNavItem(item))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
