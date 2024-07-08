/** @jsx h */
import { defineComponent, h } from 'vue';

export default defineComponent({
  name: 'ChatMessage',
  props: {
    message: Object
  },
  render() {
    return (
      <div class="chat-message" style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
        <div>{this.message.user} {this.message.time}</div>
        <div>{this.message.text}</div>
      </div>
    );
  }
});
