import React, { useState } from 'react';

const Chat = () => {
  // Using useState hook to initialize messages state
  const [messages] = useState([
    { id: 1, user: 'Max', time: '2:39pm', text: "Hey everyone, let's discuss the new feature roadmap." },
    { id: 2, user: 'Sarah', time: '2:41pm', text: 'Sounds good, I have some ideas to share.' },
    { id: 3, user: 'Alex', time: '2:43pm', text: "Great, let's discuss this in the next team meeting." }
  ]);

  // Render method to display the component
  return (
    <div className="chat" style={{ flex: 1, padding: '20px' }}>
      {messages.map(message => (
        <div key={message.id}>
          <span>{message.user} {message.time}</span>
          <p>{message.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Chat;