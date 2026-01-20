"use client";
import { useState, useTransition } from "react";
import EditUserModal from "../EditUserModal";
import { User } from "@/shared/types";
import ConfirmationModal from "../../ConfirmationModal/ConfirmationModal";
import { suspendUserAction, updateUserAction } from "@/api/user";
import Button from "@/components/atoms/Button";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const UserEdit = ({ userData }: { userData: User }) => {
  const router = useRouter();

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isSuspendOpen, setIsSuspendOpen] = useState(false);
  const [isLoading, startTrasition] = useTransition();
  const handleSuspendUser = async () => {
    try {
      const res = await suspendUserAction({
        userId: userData?.userId,
        isActive: !userData?.isActive,
      });

      console.log("Suspend user response:", res);

      if (res?.statusCode === 200) {
        toast.success(res.message || "User status updated successfully");
      } else {
        toast.error(res.message || "Failed to update user status");
      }

      setIsSuspendOpen(false);
      router.refresh();
    } catch (error) {
      console.error("Error suspending user:", error);
      toast.error("An error occurred while updating user status");
      setIsSuspendOpen(false);
    }
  };
  return (
    <>
      <div className="flex justify-between mt-4">
        <Button onClick={() => setIsEditOpen(true)}>Edit</Button>
        {userData.isActive ? (
          <Button variant="danger" onClick={() => setIsSuspendOpen(true)}>
            Suspend
          </Button>
        ) : (
          <Button variant="success" onClick={() => setIsSuspendOpen(true)}>
            Unsuspend
          </Button>
        )}
      </div>
      <EditUserModal
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        onSubmit={(data) => {
          startTrasition(async () => {
            const res = await updateUserAction({
              ...data,
              userId: userData?.id,
            });
            if (res.statusCode == 200) {
              toast.success(res.message);
            } else {
              toast.error(res.message);
            }
            setIsEditOpen(false);
            router.refresh();
          });
        }}
        userData={userData}
        isLoading={isLoading}
      />

      <ConfirmationModal
        isOpen={isSuspendOpen}
        onClose={() => setIsSuspendOpen(false)}
        onConfirm={handleSuspendUser}
        title={userData.isActive ? "Suspend User" : "Unsuspend User"}
        message={
          userData.isActive
            ? "Are you sure you want to suspend this user?"
            : "Are you sure you want to unsuspend this user?"
        }
      />
    </>
  );
};

export default UserEdit;
