/** @jsx h */
import { defineComponent, h } from 'vue';
import FileItem from './FileItem';

export default defineComponent({
  name: 'FileList',
  render() {
    return (
      <div class="file-list" style={{ flex: 1, padding: '20px' }}>
        <FileItem name="index.js" updated="2 days ago" />
        <FileItem name="package.json" updated="1 week ago" />
        <FileItem name="README.md" updated="3 months ago" />
      </div>
    );
  }
});
