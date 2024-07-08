import React from 'react';

const FileItem = ({ name, updated }) => {
  return (
    <div className="flex justify-between mb-2">
      <div>{name}</div>
      <div className="text-gray-500">{updated}</div>
    </div>
  );
};

export default FileItem;
