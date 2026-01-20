import React from "react";

import Header from "@/components/atoms/Header";
import Sidebar from "@/components/atoms/Sidebar";

type LayoutProps = {
  children: React.ReactNode;
};

const SecuredLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800">
      <Sidebar />
      <div className="flex-1 flex flex-col lg:ml-64 p-[20px] ">
        <div className="custom-container w-full">
          <Header />
          <main className="flex-1 overflow-y-auto">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default SecuredLayout;
