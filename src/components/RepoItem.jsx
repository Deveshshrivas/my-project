import React from 'react';

const RepoItem = ({ name, updated }) => {
  return (
    <div className="flex justify-between mb-2">
      <div>{name}</div>
      <div>{updated}</div>
    </div>
  );
};

export default RepoItem;
