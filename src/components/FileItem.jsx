/** @jsx h */
import { defineComponent, h } from 'vue';

export default defineComponent({
  name: 'FileItem',
  props: {
    name: String,
    updated: String
  },
  render() {
    return (
      <div class="file-item" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
        <div>{this.name}</div>
        <div>{this.updated}</div>
      </div>
    );
  }
});
