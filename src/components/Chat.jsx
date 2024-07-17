import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ChatMessage from './ChatMessage';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get('https://owngitbackend-9938b4acc212.herokuapp.com/messages');
        setMessages(response.data);
        setError(''); // Clear any previous errors
      } catch (error) {
        console.error('Failed to fetch messages:', error);
        setError('Failed to fetch messages. Please try again later.');
      }
    };

    fetchMessages();
    const intervalId = setInterval(fetchMessages, 5000); // Fetch messages every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  const sendMessage = async () => {
    if (!input.trim()) return; // Prevent sending empty messages

    const message = {
      user: 'User',
      time: new Date().toISOString(),
      text: input.trim(),
    };

    try {
      await axios.post('https://owngitbackend-9938b4acc212.herokuapp.com/messages', message);
      setInput(''); // Clear input field
      setError(''); // Clear any previous errors
    } catch (error) {
      console.error('Failed to send message:', error);
      setError('Failed to send message. Please try again later.');
    }
  };

  return (
    <div className="flex-1 p-5 border-r border-gray-200 flex flex-col">
      {error && <p className="text-red-500">{error}</p>}
      <div className="flex-grow overflow-auto" style={{ maxHeight: '50vh', width: '100%', border: '1px solid #ccc', padding: '10px', boxSizing: 'border-box', overflowY: 'scroll' }}>
        {[...messages].reverse().map((message, index) => (
          <div className="mb-2" key={index}>
            <ChatMessage message={message} />
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        placeholder="Type your message..."
        className="w-full p-2 border rounded mt-4"
        aria-label="Type your message"
      />
    </div>
  );
};

export default Chat;