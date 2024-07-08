import React from 'react';

const ChatMessage = ({ message }) => {
  return (
    <div className="border-b pb-2">
      <div>{message.user} {message.time}</div>
      <div>{message.text}</div>
    </div>
  );
};

export default ChatMessage;
