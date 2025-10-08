import React, { useEffect } from "react";
import { useUsers } from "../hooks/api/useUser";

const UsersTable = () => {
  const { users, loading, error, fetchUsers } = useUsers();

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  // Skeleton row component inline
  const SkeletonRow = () => (
    <tr className="hover:bg-gray-100">
      <td className="px-4 py-2 border">
        <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
      </td>
      <td className="px-4 py-2 border">
        <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
      </td>
      <td className="px-4 py-2 border">
        <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
      </td>
      <td className="px-4 py-2 border">
        <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse"></div>
      </td>
      <td className="px-4 py-2 border">
        <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>
      </td>
      <td className="px-4 py-2 border">
        <div className="h-4 bg-gray-200 rounded w-1/3 animate-pulse"></div>
      </td>
      <td className="px-4 py-2 border">
        <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
      </td>
    </tr>
  );

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Users Table</h2>

      {error && <p className="text-red-500">Error: {error.message}</p>}

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="px-4 py-2 border">First Name</th>
              <th className="px-4 py-2 border">Last Name</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Phone Number</th>
              <th className="px-4 py-2 border">Alternate Phone</th>
              <th className="px-4 py-2 border">DOT Number</th>
              <th className="px-4 py-2 border">Company Name</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              // Show skeleton rows while loading
              Array.from({ length: 8 }).map((_, index) => (
                <SkeletonRow key={`skeleton-${index}`} />
              ))
            ) : users.length > 0 ? (
              // Show actual user data
              users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-100">
                  <td className="px-4 py-2 border">{user.firstName}</td>
                  <td className="px-4 py-2 border">{user.lastName}</td>
                  <td className="px-4 py-2 border">{user.email}</td>
                  <td className="px-4 py-2 border">{user.phoneNumber}</td>
                  <td className="px-4 py-2 border">
                    {user.alternatePhone || "-"}
                  </td>
                  <td className="px-4 py-2 border">{user.dotNumber}</td>
                  <td className="px-4 py-2 border">{user.companyName}</td>
                </tr>
              ))
            ) : (
              // Show no users message
              <tr>
                <td
                  colSpan="7"
                  className="text-center py-4 text-gray-500 border"
                >
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersTable;
