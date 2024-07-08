import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import ChatMessage from './ChatMessage';

// Updated to match the CORS policy origin
const socket = io('*', { withCredentials: true, extraHeaders: { "my-custom-header": "abcd" } });

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    socket.on('chat messages', (msgs) => {
      setMessages(msgs);
    });

    socket.on('chat message', (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      socket.off('chat messages');
      socket.off('chat message');
    };
  }, []);

  const sendMessage = () => {
    const message = {
      user: 'User', // Replace with actual user info
      time: new Date().toLocaleTimeString(),
      text: input,
    };
    socket.emit('chat message', message);
    setInput('');
  };

  return (
    <div className="flex-1 p-5 border-r border-gray-200">
      {messages.map((message, index) => (
        <div className="mb-2" key={index}>
          <ChatMessage message={message} />
        </div>
      ))}
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        onKeyDown={(e) => e.key === 'Enter' && sendMessage()} 
        placeholder="Type your message..." 
        className="w-full p-2 border rounded" 
      />
    </div>
  );
};

export default Chat;