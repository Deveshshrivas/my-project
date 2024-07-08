import React from 'react';

const ChatMessage = ({ message }) => {
  return (
    <div className="border-b pb-2 mb-2">
      <div className="font-semibold">{message.user} <span className="text-gray-400">{message.time}</span></div>
      <div>{message.text}</div>
    </div>
  );
};

export default ChatMessage;
