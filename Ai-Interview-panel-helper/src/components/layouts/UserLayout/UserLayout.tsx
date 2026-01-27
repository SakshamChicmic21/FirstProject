import { ReactNode } from "react";

import UserProfileCard from "@/components/molecules/user/UserProfileCard";
import UserTabs from "@/components/molecules/user/UserTabs/UserTabs";
import { COUNTRIES, USER_ROLES, USER_STATUS } from "@/shared/constants";
import { User, UserSubscription } from "@/shared/types";

// Dummy user data for development
const dummyUserData: User = {
  userId: "user-123",
  id: "user-123",
  firstName: "John",
  lastName: "Doe",
  name: "John Doe",
  email: "john.doe@example.com",
  profilePicture: "/images/dummy/dummyProfile.png",
  companyName: "Tech Solutions Inc.",
  contactNumber: "+1 (555) 123-4567",
  country: COUNTRIES.USA,
  role: USER_ROLES.ENTERPRISE,
  status: USER_STATUS.ACTIVE,
  isSuspended: false,
  isActive: true,
  engagementScore: 85,
  trustLevel: 4,
  createdAt: new Date("2023-01-15"),
  updatedAt: new Date("2024-01-10"),
  billingAddress: {
    address: "123 Main Street",
    city: "New York",
    state: "NY",
    country: "United States",
    countryCode: "US",
    zipcode: "10001",
  },
  bankDetails: {
    bankName: "Chase Bank",
    accountNumber: "****1234",
    accountHolderName: "John Doe",
    ifscCode: "CHASE123",
  },
};

interface UserLayoutProps {
  children: ReactNode;
  data?: User;
  currentSubscription?: UserSubscription;
}

const UserLayout = async ({
  children,
  data = dummyUserData,
  // currentSubscription,
}: UserLayoutProps) => {
  return (
    <div className="p-6 flex flex-col lg:flex-row gap-6">
      Sidebar
      <div className="w-full lg:w-1/3">
        <UserProfileCard userData={data} />
        {/* <PlanDetailsCard
          userData={data}
          currentSubscription={currentSubscription}
        /> */}
      </div>
      {/* Main Content */}
      <div className="w-full lg:w-2/3 flex flex-col gap-4">
        <UserTabs userId={data?.userId || ""} />
        {children}
      </div>
    </div>
  );
};

export default UserLayout;
