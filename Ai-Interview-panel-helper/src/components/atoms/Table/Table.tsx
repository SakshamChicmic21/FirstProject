"use client";
import React, { useState } from "react";

import { SORT_DIRECTION } from "@/shared/types";

// Bulk Action Variants
export const BULK_ACTION_VARIANTS = {
  DANGER: "danger",
  WARNING: "warning",
  SUCCESS: "success",
  PRIMARY: "primary",
} as const;

export type BulkActionVariant =
  (typeof BULK_ACTION_VARIANTS)[keyof typeof BULK_ACTION_VARIANTS];

export interface TableColumn<T> {
  title: string;
  field: keyof T | ((data: T) => React.ReactNode) | ""; // This will allow both `keyof T` or a function
  render?: (data: T) => React.ReactNode;
  width?: string;
  sortable?: boolean;
  sortKey?: string;
}

export interface BulkAction {
  label: string;
  icon?: React.ReactNode;
  variant?: BulkActionVariant;
  onClick: (selectedIds: string[]) => void;
}

interface TableProps<T> {
  columns: TableColumn<T>[];
  data: T[];
  isLoading?: boolean;
  keyExtractor: (item: T) => string;
  onRowClick?: (item: T) => void;
  emptyMessage?: string;
  className?: string;
  handleSort?: (sortKey: string, sortDirection: 1 | -1) => void;
  selectedRows?: string[];
  setSelectedRows?: React.Dispatch<React.SetStateAction<string[]>>;
  hideSelectCol?: boolean;
  bulkActions?: BulkAction[];
}
function renderSortIcon<T>(
  column: TableColumn<T>,
  sortKey: string,
  sortDirection: SORT_DIRECTION,
) {
  if (column.sortKey === sortKey) {
    if (sortDirection === -1) {
      return "▲";
    } else {
      return "▼";
    }
  } else {
    return "⇅";
  }
}

// Helper function to get bulk action button styles
function getBulkActionButtonStyles(
  variant: BulkAction["variant"],
  isDisabled: boolean,
): string {
  if (isDisabled) {
    return "text-gray-400 bg-gray-100 border-gray-200 cursor-not-allowed dark:text-gray-600 dark:bg-gray-800 dark:border-gray-700";
  }

  switch (variant) {
    case BULK_ACTION_VARIANTS.DANGER:
      return "text-red-700 bg-red-100 border-red-200 hover:bg-red-200 dark:text-red-400 dark:bg-red-900/20 dark:border-red-800 dark:hover:bg-red-900/30";
    case BULK_ACTION_VARIANTS.WARNING:
      return "text-orange-700 bg-orange-100 border-orange-200 hover:bg-orange-200 dark:text-orange-400 dark:bg-orange-900/20 dark:border-orange-800 dark:hover:bg-orange-900/30";
    case BULK_ACTION_VARIANTS.SUCCESS:
      return "text-green-700 bg-green-100 border-green-200 hover:bg-green-200 dark:text-green-400 dark:bg-green-900/20 dark:border-green-800 dark:hover:bg-green-900/30";
    case BULK_ACTION_VARIANTS.PRIMARY:
    default:
      return "text-blue-700 bg-blue-100 border-blue-200 hover:bg-blue-200 dark:text-blue-400 dark:bg-blue-900/20 dark:border-blue-800 dark:hover:bg-blue-900/30";
  }
}

// Helper function to get clear button styles
function getClearButtonStyles(isDisabled: boolean): string {
  if (isDisabled) {
    return "text-gray-400 bg-gray-100 border-gray-200 cursor-not-allowed dark:text-gray-600 dark:bg-gray-800 dark:border-gray-700";
  }
  return "text-gray-600 bg-gray-100 border-gray-200 hover:bg-gray-200 dark:text-gray-400 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700";
}

// Helper function to get selection text
function getSelectionText(selectedCount: number): string {
  if (selectedCount === 0) {
    return "No items selected";
  }
  return `${selectedCount} item${selectedCount > 1 ? "s" : ""} selected`;
}
export function Table<T>({
  columns,
  data,
  isLoading = false,
  keyExtractor,
  onRowClick,
  emptyMessage = "No data available",
  className,
  handleSort = () => {},
  selectedRows = [],
  setSelectedRows = () => {},
  hideSelectCol = false,
  bulkActions = [],
}: Readonly<TableProps<T>>) {
  const [sortKey, setSortKey] = useState("");
  const [sortDirection, setSortDirection] = useState<SORT_DIRECTION>(1);
  const onSortClick = (sortKey = "", sortDirection: SORT_DIRECTION = 1) => {
    handleSort(sortKey, sortDirection);
    setSortDirection(sortDirection);
    setSortKey(sortKey);
  };
  return (
    <div
      className={
        "bg-white overflow-auto shadow-sm dark:bg-gray-900 dark:border-gray-800" +
        className
      }
    >
      {/* Bulk Actions Toolbar - Top */}
      {bulkActions.length > 0 && (
        <div className="px-4 py-2 bg-blue-50 border-b border-blue-200 dark:bg-blue-900/20 dark:border-blue-800">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-medium text-blue-900 dark:text-blue-100">
                {getSelectionText(selectedRows.length)}
              </span>
            </div>

            <div className="flex items-center space-x-2">
              {bulkActions.map((action, index) => {
                const isDisabled = selectedRows.length === 0;
                return (
                  <button
                    key={index}
                    onClick={() =>
                      selectedRows.length > 0 && action.onClick(selectedRows)
                    }
                    disabled={isDisabled}
                    className={`flex items-center space-x-1 px-2 py-1 text-xs font-medium rounded border transition-colors ${getBulkActionButtonStyles(
                      action.variant,
                      isDisabled,
                    )}`}
                  >
                    {action.icon && (
                      <span
                        className={`scale-75 ${isDisabled ? "opacity-50" : ""}`}
                      >
                        {action.icon}
                      </span>
                    )}
                    <span>{action.label}</span>
                  </button>
                );
              })}

              <button
                onClick={() => setSelectedRows([])}
                disabled={selectedRows.length === 0}
                className={`px-2 py-1 text-xs font-medium rounded border transition-colors ${getClearButtonStyles(
                  selectedRows.length === 0,
                )}`}
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      )}

      <table className="min-w-full divide-y ">
        <thead className="bg-gray-50 dark:bg-gray-800">
          <tr>
            {!hideSelectCol && (
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 tracking-wider w-[60px]">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 dark:border-gray-800"
                  checked={
                    !!selectedRows.length &&
                    !!data.length &&
                    selectedRows.length === data.length
                  }
                  onChange={() => {
                    if (selectedRows.length === data.length) {
                      setSelectedRows([]);
                    } else {
                      const allItemIds = data.map((item) => keyExtractor(item));
                      setSelectedRows(allItemIds);
                    }
                  }}
                />
              </th>
            )}
            {columns?.map((column, index) => (
              <th
                key={`${column.title + index}`}
                scope="col"
                onClick={() =>
                  column.sortable &&
                  onSortClick(column.sortKey, sortDirection === 1 ? -1 : 1)
                }
                className={`px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400 ${
                  column.width ? column.width : ""
                } ${column.sortable ? "cursor-pointer select-none" : ""}`}
              >
                <div className="flex items-left justify-left gap-1">
                  {column.title}
                  {column.sortable && (
                    <span className="text-gray-400">
                      {renderSortIcon<T>(column, sortKey, sortDirection)}
                    </span>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
          {data?.length === 0 || !data ? (
            <tr className="empty-row">
              <td
                colSpan={10}
                className="px-4 py-[30px] min-w-[120px] text-sm text-gray-500 text-center dark:text-gray-400"
              >
                {emptyMessage}
              </td>
            </tr>
          ) : (
            data?.map?.((item) => (
              <tr
                key={keyExtractor(item)}
                className={
                  (onRowClick
                    ? "cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800"
                    : "") +
                  (selectedRows?.includes(keyExtractor(item))
                    ? " bg-purple-100 dark:bg-purple-900"
                    : "")
                }
                onClick={onRowClick ? () => onRowClick(item) : undefined}
              >
                {!hideSelectCol && (
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-600 tracking-wider w-[60px] dark:text-gray-400">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300"
                      checked={!!selectedRows?.includes(keyExtractor(item))}
                      onChange={() => {
                        const itemId = keyExtractor(item);

                        if (selectedRows?.includes(itemId)) {
                          const newSelectedRows = selectedRows.filter(
                            (id) => id !== itemId,
                          );

                          setSelectedRows(newSelectedRows);
                        } else {
                          const newSelectedRows = [...selectedRows, itemId];

                          setSelectedRows(newSelectedRows);
                        }
                      }}
                    />
                  </th>
                )}
                {columns.map((column, index) => {
                  let value: unknown = "";
                  if (column.field) {
                    if (typeof column.field === "function") {
                      value = column.field(item);
                    } else {
                      value = item[column.field];
                    }
                  }

                  return (
                    <td
                      key={`${column.title + index}`}
                      className="px-4 py-[6px] min-w-[120px] text-sm text-gray-500 text-left dark:text-gray-400"
                    >
                      {column.render
                        ? column.render(item)
                        : (value as React.ReactNode)}
                    </td>
                  );
                })}
              </tr>
            ))
          )}
        </tbody>
      </table>

      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 dark:bg-gray-900">
          <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin dark:border-purple-400" />
        </div>
      )}
    </div>
  );
}

export default Table;
