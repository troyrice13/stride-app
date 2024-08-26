import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div className="text-center text-gray-600">Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className="bg-white overflow-hidden shadow-lg rounded-lg border border-gray-200 p-6">
        <div className="flex items-center space-x-4">
          <img
            src={user.picture}
            alt={user.name}
            className="w-16 h-16 rounded-full border border-gray-300"
          />
          <div>
            <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
        </div>
        <div className="mt-6 border-t border-gray-200">
          <dl className="divide-y divide-gray-200">
            <div className="py-4 grid grid-cols-3 gap-4">
              <dt className="text-sm font-medium text-gray-500">Full name</dt>
              <dd className="text-sm text-gray-900 col-span-2">{user.name}</dd>
            </div>
            <div className="py-4 grid grid-cols-3 gap-4">
              <dt className="text-sm font-medium text-gray-500">Email address</dt>
              <dd className="text-sm text-gray-900 col-span-2">{user.email}</dd>
            </div>
            <div className="py-4 grid grid-cols-3 gap-4">
              <dt className="text-sm font-medium text-gray-500">Phone number</dt>
              <dd className="text-sm text-gray-900 col-span-2">(123) 456-7890</dd>
            </div>
            <div className="py-4 grid grid-cols-3 gap-4">
              <dt className="text-sm font-medium text-gray-500">Address</dt>
              <dd className="text-sm text-gray-900 col-span-2">
                123 Main St, Anytown, USA 12345
              </dd>
            </div>
          </dl>
        </div>
      </div>
    )
  );
};

export default Profile;
