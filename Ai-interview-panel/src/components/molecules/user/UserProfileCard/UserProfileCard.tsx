import Image from "next/image";

import { dummyProfile } from "@/assets";
import StatusBadgeToggle from "@/components/atoms/StatusBadge/StatusBadge";
import {
  COUNTRIES,
  COUNTRY_NAMES,
  USER_ROLE_NAMES,
  USER_ROLES,
  USER_STATUS,
} from "@/shared/constants";
import { User } from "@/shared/types";

import UserEdit from "./UserEdit";

const UserProfileCard = ({ userData }: { userData: User }) => {
  const {
    firstName = "Unknown",
    lastName = "Unknown",
    email = "N/A",

    contactNumber = "N/A",
    status = USER_STATUS.ACTIVE,
    role = USER_ROLES.ENTERPRISE,
    companyName = "N/A",
    country = COUNTRIES.AUSTRALIA,
  } = userData;
  console.log(status);
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow text-center dark:bg-gray-900 dark:border-gray-800">
        <Image
          src={dummyProfile}
          alt={firstName}
          width={96}
          height={96}
          className="mx-auto  mb-4"
        />
        <h3 className="text-lg font-semibold mb-1 dark:text-white">
          {firstName} {lastName}
        </h3>
        <span className="text-sm text-gray-500 px-2 py-1 bg-gray-100 rounded-full inline-block mb-4 dark:bg-gray-800 dark:text-white">
          {USER_ROLE_NAMES[role]}
        </span>
        <div className="text-xl text-left font-semibold text-gray-900 mb-2 dark:text-white">
          Details
        </div>
        <div className="border-t border-gray-200 mt-0 mb-2 dark:border-gray-800" />
        {/* Details */}
        <div className="text-left text-sm space-y-1 dark:text-white">
          <p className="dark:text-white">
            <strong>Email:</strong> {email}
          </p>

          <p className="dark:text-white">
            <strong>Contact:</strong> {contactNumber}
          </p>
          <p className="dark:text-white">
            <strong>Company:</strong> {companyName || "N/A"}
          </p>
          <p className="dark:text-white">
            <strong>Country:</strong> {COUNTRY_NAMES[country] || "N/A"}
          </p>
          <p className="dark:text-white">
            <strong>Status:</strong>{" "}
            <StatusBadgeToggle value={status === USER_STATUS.ACTIVE} />
          </p>
        </div>

        {/* Actions */}
        <UserEdit userData={userData} />
      </div>
    </>
  );
};

export default UserProfileCard;
