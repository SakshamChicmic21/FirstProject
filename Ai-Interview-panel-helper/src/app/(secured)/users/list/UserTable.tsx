"use client";

import { EllipsisVertical, Eye, Trash2 } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import {
  changeUserPasswordAction,
  deleteUserAction,
  impersonateUserAction,
  suspendUserAction,
} from "@/api/user";
import { Menu } from "@/components/atoms/Menu";
import Pagination from "@/components/atoms/Pagination";
import SearchToolbar from "@/components/atoms/SearchToolbar";
import StatusBadgeToggle from "@/components/atoms/StatusBadge/StatusBadge";
import Table, {
  BULK_ACTION_VARIANTS,
  BulkAction,
  TableColumn,
} from "@/components/atoms/Table";
import ConfirmationModal from "@/components/molecules/ConfirmationModal/ConfirmationModal";
import { ResponseType, SORT_DIRECTION, User } from "@/shared/types";
import AddUserSidebar from "./AddUserSidebar";
import { MODAL_TYPE } from "@/components/molecules/ConfirmationModal/helpers/constants";
import { REGEX } from "@/shared/strings";
import Link from "next/link";

const UserTable = ({
  data,
  searchString,
}: {
  data: ResponseType & { data: { items: User[]; totalCount: number } };
  searchString: string;
}) => {
  const router = useRouter();

  const columns: TableColumn<User>[] = [
    {
      field: "userId",
      title: "User Id",
      render: (data) => (data?.userId ? `#${data.userId.slice(-6)}` : ""),
    },
    {
      field: "firstName",
      title: "Name",
      render: (data) => `${data?.firstName ?? ""} ${data?.lastName ?? ""}`,
      sortable: true,
      sortKey: "name",
    },
    {
      field: "engagementScore",
      title: "Enagagement Score",
    },
    {
      field: "trustLevel",
      title: "Trust Level",
    },
    {
      field: "status",
      title: "Status",
      render: (data) => (
        <StatusBadgeToggle value={data?.isActive}></StatusBadgeToggle>
      ),
    },
    {
      field: "",
      title: "Actions",
      render: (data) => (
        <div className="flex items-center space-x-2">
          <Trash2
            className="text-gray-500 cursor-pointer"
            onClick={() =>
              setModal({ open: true, data: data, type: MODAL_TYPE.DELETE })
            }
          />
          <Link href={`/users/view/${data.userId}/posts`}>
            <Eye className="text-gray-500 cursor-pointer" />
          </Link>
          <Menu
            items={[
              {
                label: "Reset Password",
                onClick: () =>
                  setModal({
                    open: true,
                    data: data,
                    type: MODAL_TYPE.RESET_PASSWORD,
                  }),
              },
              {
                label: data?.isActive ? "Suspend" : "Unsuspend",
                onClick: () =>
                  setModal({
                    open: true,
                    data: data,
                    type: MODAL_TYPE.SUSPEND,
                  }),
              },
              {
                label: "Impersonate",
                onClick: () =>
                  setModal({
                    open: true,
                    data: data,
                    type: MODAL_TYPE.IMPERSONATE,
                  }),
              },
            ]}
            menuButton={<EllipsisVertical className="cursor-pointer" />}
          />
        </div>
      ),
    },
  ];
  const searchParams = useSearchParams();
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState<{
    open: boolean;
    data?: User;
    type?: MODAL_TYPE;
  }>({
    open: false,
  });
  const [bulkModal, setBulkModal] = useState<{
    open: boolean;
    action?: string;
  }>({
    open: false,
  });
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [sortKey, setSortKey] = useState("");
  const [sortDirection, setSortDirection] = useState<SORT_DIRECTION>(1);
  const [password, setPassword] = useState({ value: "", error: "" });
  useEffect(() => {
    const newParams = new URLSearchParams(searchParams.toString());
    if (currentPage > 1) {
      newParams.set("skip", ((currentPage - 1) * pageSize).toString());
    } else {
      newParams.delete("skip"); // Optional: clean URL
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
  const handleDelete = async () => {
    if (!modal.data?.userId) return;
    const res = await deleteUserAction({
      userIds: [modal.data?.userId],
    });
    if (res.statusCode == 200) {
      toast.success(res.message);
    } else {
      toast.error(res.message);
    }
    router.refresh();
    setModal({ open: false });
  };
  const handleSuspend = async () => {
    if (!modal.data?.userId) return;
    const res = await suspendUserAction({
      userId: modal.data?.userId,
      isActive: !modal.data.isActive,
    });
    if (res.statusCode == 200) {
      toast.success(res.message);
    } else {
      toast.error(res.message);
    }
    router.refresh();
    setModal({ open: false });
  };

  const handleChangePassword = async () => {
    if (!password.value) {
      setPassword({ value: password.value, error: "Required" });
    } else if (!REGEX.STRONG_PASSWORD.test(password.value)) {
      setPassword({
        value: password.value,
        error:
          "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character",
      });
    } else {
      const res = await changeUserPasswordAction({
        userId: modal.data?.userId || "",
        password: password.value,
      });
      if (res.statusCode == 200) {
        toast.success(res.message);
      } else {
        toast.error(res.message);
      }
      setModal({ open: false });
    }
  };
  const handleImpersonate = async () => {
    if (!modal.data?.userId) return;
    const res = await impersonateUserAction({
      userId: modal.data?.userId,
    });
    console.log(res, modal.data?.userId, "esresressdf");
    if (res.statusCode == 200) {
      toast.success(res.message);
    } else {
      toast.error(res.message);
    }
    setModal({ open: false });
  };

  const handleBulkDeleteUsers = async () => {
    console.log(selectedRows, "selectedRows");
    if (selectedRows.length === 0) return;
    const res = await deleteUserAction({
      userIds: selectedRows,
    });
    console.log(res, "res");

    if (res.statusCode == 200) {
      toast.success(res.message);
      setSelectedRows([]);
      router.refresh();
    } else {
      toast.error(res.message);
    }
    setBulkModal({ open: false });
  };
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
  return (
    <>
      <div className="bg-white rounded-t-lg shadow-sm border border-gray-200 dark:bg-gray-900 dark:border-gray-800">
        {/* Table Controls */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-4">
              <SearchToolbar
                initialQuery={searchString}
                placeholder="Search User"
              />
              {/* <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 dark:text-gray-400 dark:border-gray-800 dark:hover:bg-gray-800">
                <Download size={18} />
                <span>Export</span>
              </button>
              <Button
                variant="primary"
                type="button"
                onClick={() => setOpen(true)}
              >
                <Plus size={18} />
                <span>Add New Record</span>
              </Button> */}
            </div>
            {/* <div className="flex justify-end items-center gap-x-3">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-400">
                Filters
              </h2>
              <SelectFilter<USER_ROLES>
                paramName="role"
                options={USER_ROLE_OPTIONS}
                placeholder="Filter by Role"
                className="w-60"
              />
            </div> */}
          </div>
        </div>
      </div>
      <Table<User>
        data={data?.data?.items || []}
        columns={columns}
        keyExtractor={(item) => item.userId || ""}
        handleSort={(sortKey, sortDirection) => {
          setSortKey(sortKey);
          setSortDirection(sortDirection);
        }}
        selectedRows={selectedRows}
        setSelectedRows={setSelectedRows}
        bulkActions={bulkActions}
      />
      <Pagination
        totalItems={data?.data?.totalCount ?? 0}
        currentPage={currentPage}
        pageSize={pageSize}
        onPageChange={(page) => setCurrentPage(page + 1)}
        onPageSizeChange={(size) => {
          setPageSize(size);
          setCurrentPage(1); // reset to first page
        }}
        title="users"
      />
      <ConfirmationModal
        isOpen={modal.open}
        onClose={() => setModal({ open: false })}
        onConfirm={
          modal.type === MODAL_TYPE.IMPERSONATE
            ? handleImpersonate
            : modal.type === MODAL_TYPE.RESET_PASSWORD
              ? handleChangePassword
              : modal.type === MODAL_TYPE.DELETE
                ? handleDelete
                : handleSuspend
        }
        title={
          modal.type === MODAL_TYPE.RESET_PASSWORD ||
          modal.type === MODAL_TYPE.IMPERSONATE
            ? "Confirm"
            : modal.type === MODAL_TYPE.DELETE
              ? "Delete User"
              : modal.data?.isActive
                ? "Suspend User"
                : "Unsuspend User"
        }
        message={
          modal.type === MODAL_TYPE.IMPERSONATE
            ? "Are you sure you want to impersonate this user?"
            : modal.type === MODAL_TYPE.RESET_PASSWORD
              ? "Are you sure you want to change this user password?"
              : modal.type === MODAL_TYPE.DELETE
                ? "Are you sure you want to delete this user?"
                : modal.data?.isActive
                  ? "Are you sure you want to suspend this user?"
                  : "Are you sure you want to unsuspend this user?"
        }
        customComponent={
          modal.type === MODAL_TYPE.RESET_PASSWORD ? (
            <>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Password
              </label>
              <input
                value={password.value}
                onChange={(e) => {
                  const value = e.target.value;
                  if (!value) {
                    setPassword({ value, error: "Required" });
                  } else if (!REGEX.STRONG_PASSWORD.test(value)) {
                    setPassword({
                      value: value,
                      error:
                        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character",
                    });
                  } else {
                    setPassword({ value, error: "" });
                  }
                }}
                className="w-full mb-3 p-1 border rounded dark:bg-gray-900 dark:border-gray-800 dark:text-white"
              />
              {password?.error && (
                <span className="text-red-500 text-xs mt-1">
                  {password?.error}
                </span>
              )}
            </>
          ) : null
        }
      />
      <ConfirmationModal
        isOpen={bulkModal.open}
        onClose={() => setBulkModal({ open: false })}
        onConfirm={handleBulkDeleteUsers}
        title="Delete Users"
        message={`Are you sure you want to delete ${selectedRows.length} user${selectedRows.length > 1 ? "s" : ""}? This action cannot be undone.`}
      />
      <AddUserSidebar setOpen={setOpen} open={open} />
    </>
  );
};

export default UserTable;
