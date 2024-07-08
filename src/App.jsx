/** @jsx h */
import { defineComponent, h } from 'vue';
import Sidebar from './components/Sidebar.jsx';
import RepoList from './components/RepoList';
import Chat from './components/Chat';
import FileList from './components/FileList';

export default defineComponent({
  name: 'App',
  render() {
    return (
      <div id="app" style={{ display: 'flex', height: '100vh' }}>
        <Sidebar />
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <RepoList />
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
            <Chat />
            <FileList />
          </div>
        </div>
      </div>
    );
  }
});
