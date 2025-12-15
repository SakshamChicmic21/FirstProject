import React from "react";

function NetworkStatus() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-xl px-8 py-6 flex flex-col items-center gap-3 animate-fadeIn">
        <div className="h-12 w-12 flex items-center justify-center rounded-full bg-red-100 text-red-600 text-xl">
          ⚠️
        </div>

        <h2 className="text-lg font-semibold text-gray-800">
          No Internet Connection
        </h2>

        <p className="text-sm text-gray-600 text-center">
          You're currently offline. Please check your network connection.
        </p>
      </div>
    </div>
  );
}

export default NetworkStatus;
