import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-gray-100 p-4">
      <h2 className="text-lg font-semibold">Dashboard</h2>
      <ul className="mt-4 space-y-2">
        <li><a href="/dashboard/overview" className="block hover:bg-gray-200 p-2 rounded">Overview</a></li>
        <li><a href="/dashboard/users" className="block hover:bg-gray-200 p-2 rounded">Users</a></li>
        <li><a href="/dashboard/settings" className="block hover:bg-gray-200 p-2 rounded">Settings</a></li>
      </ul>
    </aside>
  );
};

export default Sidebar;