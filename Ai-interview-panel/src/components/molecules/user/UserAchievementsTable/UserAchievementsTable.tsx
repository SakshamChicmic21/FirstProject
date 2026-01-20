"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import {
  Eye,
  Trash2,
  ExternalLink,
  Calendar,
  Trophy,
  Edit,
  Award,
  Clock,
} from "lucide-react";
import { toast } from "react-toastify";

import { deleteAchievementAction } from "@/api/achievements";
import Table, {
  TableColumn,
  BULK_ACTION_VARIANTS,
} from "@/components/atoms/Table";
import type { BulkAction } from "@/components/atoms/Table/Table";
import Pagination from "@/components/atoms/Pagination";
import ConfirmationModal from "../../ConfirmationModal/ConfirmationModal";
import { Achievement, SORT_DIRECTION } from "@/shared/types";

const UserAchievementsTable = ({
  data,
}: {
  data: { data: Achievement[]; count: number };
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [sortKey, setSortKey] = useState("");
  const [sortDirection, setSortDirection] = useState<SORT_DIRECTION>(1);
  const [modal, setModal] = useState<{ open: boolean; data?: Achievement }>({
    open: false,
  });
  const [bulkModal, setBulkModal] = useState<{
    open: boolean;
    action?: string;
  }>({
    open: false,
  });

  const handleDeleteAchievement = async () => {
    if (!modal.data?.id) return;

    try {
      const res = await deleteAchievementAction({
        achievementIds: [modal.data.id],
      });

      if (res?.statusCode === 200) {
        toast.success(res.message || "Achievement deleted successfully");
        router.refresh();
      } else {
        toast.error(res.message || "Failed to delete achievement");
      }
    } catch (error) {
      console.error("Error deleting achievement:", error);
      toast.error("An error occurred while deleting the achievement");
    }

    setModal({ open: false });
  };

  const handleBulkDeleteAchievements = async () => {
    if (selectedRows.length === 0) return;

    try {
      const res = await deleteAchievementAction({
        achievementIds: selectedRows,
      });

      if (res?.statusCode === 200) {
        toast.success(
          `${selectedRows.length} achievement(s) deleted successfully`,
        );
        setSelectedRows([]);
      } else {
        toast.error(res.message || "Failed to delete achievements");
      }

      router.refresh();
      setBulkModal({ open: false });
    } catch (error) {
      console.error("Error deleting achievements:", error);
      toast.error("An error occurred while deleting achievements");
      setBulkModal({ open: false });
    }
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "2-digit",
    });
  };

  const formatDateTime = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const columns: TableColumn<Achievement>[] = [
    {
      title: "Achievement",
      field: (row) => (
        <div className="flex items-start gap-3 max-w-md">
          {row.achievementMediaUrl && (
            <div className="relative">
              <Image
                src={row.achievementMediaUrl}
                alt="Achievement media"
                width={48}
                height={48}
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div className="absolute -top-1 -right-1 bg-yellow-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                <Trophy size={10} />
              </div>
            </div>
          )}
          <div className="flex-1 min-w-0">
            <div className="font-medium text-gray-900 truncate">
              {row.title || "Untitled Achievement"}
            </div>
            <div className="text-sm text-gray-500 truncate">
              {row.description?.substring(0, 50)}
              {row.description && row.description.length > 50 && "..."}
            </div>
            <div className="text-xs text-gray-400 mt-1 flex items-center gap-1">
              <Award size={12} />
              <span>Achievement ID: {row.id.substring(0, 8)}...</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Achievement Date",
      field: (row) => (
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Calendar size={14} className="text-green-500" />
          <span>{formatDate(row.achievementDate)}</span>
        </div>
      ),
      sortable: true,
      sortKey: "achievementDate",
    },
    {
      title: "Last Modified",
      field: (row) => (
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Clock size={14} className="text-gray-400" />
          <span>{formatDateTime(row.modifiedOn)}</span>
        </div>
      ),
      sortable: true,
      sortKey: "modifiedOn",
    },
    {
      field: "",
      title: "Actions",
      render: (data) => (
        <div className="flex items-center space-x-2">
          <Eye
            className="text-gray-500 cursor-pointer hover:text-blue-600"
            size={16}
            onClick={() => {
              toast.info("View achievement functionality will be implemented");
            }}
          />
          <Edit
            className="text-gray-500 cursor-pointer hover:text-green-600"
            size={16}
            onClick={() => {
              toast.info("Edit achievement functionality will be implemented");
            }}
          />
          <ExternalLink
            className="text-gray-500 cursor-pointer hover:text-purple-600"
            size={16}
            onClick={() => {
              toast.info("External link functionality will be implemented");
            }}
          />
          <Trash2
            className="text-gray-500 cursor-pointer hover:text-red-600"
            size={16}
            onClick={() => setModal({ open: true, data: data })}
          />
        </div>
      ),
    },
  ];

  // Bulk actions configuration
  const bulkActions: BulkAction[] = [
    {
      label: "Delete",
      icon: <Trash2 size={14} />,
      variant: BULK_ACTION_VARIANTS.DANGER,
      onClick: () => {
        setBulkModal({ open: true, action: "delete" });
      },
    },
  ];

  useEffect(() => {
    const newParams = new URLSearchParams(searchParams.toString());
    if (currentPage > 1) {
      newParams.set("skip", ((currentPage - 1) * pageSize).toString());
    } else {
      newParams.delete("skip");
    }

    if (pageSize !== 10) {
      newParams.set("limit", pageSize.toString());
    } else {
      newParams.delete("limit");
    }
    if (sortKey) {
      newParams.set("sortKey", sortKey);
      newParams.set("sortDirection", sortDirection.toString());
    } else {
      newParams.delete("sortKey");
      newParams.delete("sortDirection");
    }

    router.push(`?${newParams.toString()}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, pageSize, sortKey, sortDirection]);
  console.log("achievements data", data);

  return (
    <div className="space-y-6">
      <Table<Achievement>
        columns={columns}
        data={data?.data || []}
        keyExtractor={(item) => item.id}
        handleSort={(key, direction) => {
          setSortKey(key);
          setSortDirection(direction);
        }}
        selectedRows={selectedRows}
        setSelectedRows={setSelectedRows}
        bulkActions={bulkActions}
      />
      <Pagination
        totalItems={data?.count ?? 0}
        currentPage={currentPage}
        pageSize={pageSize}
        onPageChange={(page) => {
          setCurrentPage(page + 1);
        }}
        onPageSizeChange={(size) => {
          setPageSize(size);
          setCurrentPage(1);
        }}
        title="Achievements"
      />
      <ConfirmationModal
        isOpen={modal.open}
        onClose={() => setModal({ open: false })}
        onConfirm={handleDeleteAchievement}
        title="Delete Achievement"
        message="Are you sure you want to delete this achievement? This action cannot be undone."
      />

      {/* Bulk Actions Confirmation Modal */}
      <ConfirmationModal
        isOpen={bulkModal.open}
        onClose={() => setBulkModal({ open: false })}
        onConfirm={handleBulkDeleteAchievements}
        title="Delete Achievements"
        message={`Are you sure you want to delete ${selectedRows.length} achievement${selectedRows.length > 1 ? "s" : ""}? This action cannot be undone.`}
      />
    </div>
  );
};

export default UserAchievementsTable;
