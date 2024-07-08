import React from 'react';
import RepoItem from './RepoItem';

const Sidebar = () => {
  return (
    <div className="w-64 bg-green-700 text-white p-5">
      <h1 className="text-2xl font-bold mb-4">DevHub</h1>
      <div className="mt-5">
        <RepoItem name="my-app" updated="2 days ago" />
        <RepoItem name="my-website" updated="1 week ago" />
        <RepoItem name="my-library" updated="3 months ago" />
      </div>
    </div>
  );
};

export default Sidebar;
