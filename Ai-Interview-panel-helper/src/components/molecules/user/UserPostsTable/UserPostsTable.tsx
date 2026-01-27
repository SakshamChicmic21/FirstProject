"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import {
  Eye,
  Trash2,
  ExternalLink,
  Eye as ViewsIcon,
  TrendingUp,
  Shield,
  Calendar,
  Building2,
  Video,
  Star,
} from "lucide-react";
import { toast } from "react-toastify";

import { deletePostAction } from "@/api/posts";
import Table, {
  TableColumn,
  BULK_ACTION_VARIANTS,
} from "@/components/atoms/Table";
import type { BulkAction } from "@/components/atoms/Table/Table";
import Pagination from "@/components/atoms/Pagination";
import ConfirmationModal from "../../ConfirmationModal/ConfirmationModal";
import { Post, SORT_DIRECTION } from "@/shared/types";

const UserPostsTable = ({
  data,
}: {
  data: { data: Post[]; count: number };
  userId: string;
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [sortKey, setSortKey] = useState("");
  const [sortDirection, setSortDirection] = useState<SORT_DIRECTION>(1);
  const [modal, setModal] = useState<{ open: boolean; data?: Post }>({
    open: false,
  });
  const [bulkModal, setBulkModal] = useState<{
    open: boolean;
    action?: string;
  }>({
    open: false,
  });

  const handleDeletePost = async () => {
    if (!modal.data?.id) return;

    try {
      const res = await deletePostAction({
        postIds: [modal.data.id],
      });

      if (res?.statusCode === 200) {
        toast.success(res.message || "Post deleted successfully");
        router.refresh();
      } else {
        toast.error(res.message || "Failed to delete post");
      }
    } catch (error) {
      console.error("Error deleting post:", error);
      toast.error("An error occurred while deleting the post");
    }

    setModal({ open: false });
  };

  const handleBulkDeletePosts = async () => {
    if (selectedRows.length === 0) return;

    try {
      const res = await deletePostAction({
        postIds: selectedRows,
      });

      if (res?.statusCode === 200) {
        toast.success(`${selectedRows.length} post(s) deleted successfully`);
        setSelectedRows([]);
      } else {
        toast.error(res.message || "Failed to delete posts");
      }

      router.refresh();
      setBulkModal({ open: false });
    } catch (error) {
      console.error("Error deleting posts:", error);
      toast.error("An error occurred while deleting posts");
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

  const stripHtml = (html: string): string => {
    const tmp = document.createElement("div");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

  const columns: TableColumn<Post>[] = [
    {
      title: "Post",
      field: (row) => (
        <div className="flex items-start gap-3 max-w-md">
          {row.images && row.images.length > 0 && (
            <div className="relative">
              <Image
                src={row.images[0]}
                alt="Post image"
                width={48}
                height={48}
                className="w-12 h-12 rounded-lg object-cover"
              />
              {row.images.length > 1 && (
                <div className="absolute -top-1 -right-1 bg-gray-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  +{row.images.length - 1}
                </div>
              )}
            </div>
          )}
          <div className="flex-1 min-w-0">
            <div className="font-medium text-gray-900 truncate">
              {row.title || "Untitled Post"}
            </div>
            <div className="text-sm text-gray-500 truncate">
              {stripHtml(row.description).substring(0, 30)}
              {stripHtml(row.description).length > 30 && "..."}
            </div>
            <div className="text-xs text-gray-400 mt-1">
              by {row.author}
              {row.isCompanyAuthor && (
                <span className="ml-1 px-1 py-0.5 bg-blue-100 text-blue-800 rounded text-xs">
                  Company
                </span>
              )}
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Engagement",
      field: (row) => (
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <ViewsIcon size={14} className="text-gray-500" />
            <span className="font-medium">{row.views}</span>
            <span className="text-gray-500">views</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <TrendingUp size={14} className="text-green-500" />
            <span className="font-medium">{row.engagementRate}%</span>
            <span className="text-gray-500">engagement</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Shield size={14} className="text-blue-500" />
            <span className="text-gray-500">Trust:</span>
            <span className="font-medium">{row.trustLevel}</span>
          </div>
        </div>
      ),
    },
    {
      title: "Status",
      field: (row) => (
        <div className="space-y-2">
          {row.sponsorStatus && (
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
              <Star size={12} />
              Sponsored
            </span>
          )}
          {row.isVideo && (
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
              <Video size={12} />
              Video
            </span>
          )}
          {row.companyName && (
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <Building2 size={12} />
              <span>{row.companyName}</span>
            </div>
          )}
        </div>
      ),
    },
    {
      title: "Published",
      field: (row) => (
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Calendar size={14} className="text-gray-400" />
          <span>{formatDate(row.publishedAt)}</span>
        </div>
      ),
      sortable: true,
      sortKey: "publishedAt",
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
              // TODO: Implement view post functionality
              toast.info("View post functionality will be implemented");
            }}
          />
          <ExternalLink
            className="text-gray-500 cursor-pointer hover:text-green-600"
            size={16}
            onClick={() => {
              // TODO: Implement external link functionality
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

  return (
    <div className="space-y-6">
      <Table<Post>
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
        title="Posts"
      />
      <ConfirmationModal
        isOpen={modal.open}
        onClose={() => setModal({ open: false })}
        onConfirm={handleDeletePost}
        title="Delete Post"
        message="Are you sure you want to delete this post? This action cannot be undone."
      />

      {/* Bulk Actions Confirmation Modal */}
      <ConfirmationModal
        isOpen={bulkModal.open}
        onClose={() => setBulkModal({ open: false })}
        onConfirm={handleBulkDeletePosts}
        title="Delete Posts"
        message={`Are you sure you want to delete ${selectedRows.length} post${selectedRows.length > 1 ? "s" : ""}? This action cannot be undone.`}
      />
    </div>
  );
};

export default UserPostsTable;
