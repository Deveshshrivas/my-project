import React, { useState } from 'react';
import ChatMessage from './ChatMessage';

const Chat = () => {
  const [messages] = useState([
    { id: 1, user: 'Max', time: '2:39pm', text: "Hey everyone, let's discuss the new feature roadmap." },
    { id: 2, user: 'Sarah', time: '2:41pm', text: 'Sounds good, I have some ideas to share.' },
    { id: 3, user: 'Alex', time: '2:43pm', text: "Great, let's discuss this in the next team meeting." }
  ]);

  return (
    <div className="flex-1 p-5 border-r border-gray-200">
      {messages.map(message => (
        <div className="mb-2" key={message.id}>
          <ChatMessage message={message} />
        </div>
      ))}
      <input type="text" placeholder="Type your message..." className="w-full p-2 border rounded" />
    </div>
  );
};

export default Chat;
