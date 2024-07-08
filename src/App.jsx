import React from 'react';
import Sidebar from './components/Sidebar';
import RepoList from './components/RepoList';
import Chat from './components/Chat';
import FileList from './components/FileList';
import './index.css';

const App = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <RepoList />
        <div className="flex justify-between p-5">
          <Chat />
          <FileList />
        </div>
      </div>
    </div>
  );
};

export default App;
