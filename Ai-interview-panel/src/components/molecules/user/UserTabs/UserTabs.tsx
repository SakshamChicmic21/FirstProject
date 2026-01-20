"use client";

import { usePathname, useRouter } from "next/navigation";

const UserTabs = ({ userId }: { userId: string }) => {
  const router = useRouter();
  const pathname = usePathname();
  const userTabs = [
    { name: "Posts", path: `/users/view/${userId}/posts` },
    { name: "Achievements", path: `/users/view/${userId}/achievements` },
    // { name: "Security", path: `/users/view/${userId}/security` },
    // { name: "Billing & Plans", path: `/users/view/${userId}/billing` },
    // { name: "Notifications", path: `/users/view/${userId}/notifications` },
    // { name: "Connections", path: `/users/view/${userId}/connections` },
    // { name: "Promo Codes", path: `/users/view/${userId}/promo-codes` },
    // { name: "Badges", path: `/users/view/${userId}/badges` },
  ];
  return (
    <div className="flex gap-4 border-b overflow-x-auto dark:bg-gray-800 dark:border-gray-900">
      {userTabs.map((tab) => (
        <button
          key={tab.name}
          onClick={() => router.push(tab.path)}
          className={`px-4 py-2 text-sm font-medium border-b-2 cursor-pointer ${
            pathname.includes(tab.path)
              ? "text-primary border-primary dark:text-white dark:border-white dark:hover:text-gray-500"
              : "text-gray-500 border-transparent hover:text-primary dark:text-white dark:hover:text-gray-500"
          }`}
        >
          {tab.name}
        </button>
      ))}
    </div>
  );
};

export default UserTabs;
