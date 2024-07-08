/** @jsx h */
import { defineComponent, h } from 'vue';
import RepoItem from './RepoItem';

export default defineComponent({
  name: 'Sidebar',
  render() {
    return (
      <div class="sidebar" style={{ width: '250px', backgroundColor: '#f4f4f4', padding: '20px' }}>
        <h1>DevHub</h1>
        <div class="repos" style={{ marginTop: '20px' }}>
          <RepoItem name="my-app" updated="2 days ago" />
          <RepoItem name="my-website" updated="1 week ago" />
          <RepoItem name="my-library" updated="3 months ago" />
        </div>
      </div>
    );
  }
});
