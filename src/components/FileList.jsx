import React from 'react';
import FileItem from './FileItem';

const FileList = () => {
  return (
    <div className="flex-1 p-5">
      <FileItem name="index.js" updated="2 days ago" />
      <FileItem name="package.json" updated="1 week ago" />
      <FileItem name="README.md" updated="3 months ago" />
    </div>
  );
};

export default FileList;
