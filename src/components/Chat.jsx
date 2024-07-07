import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons'

const Chat = () => {
  return (
    <>
      <div className="column">
        <h1>Explore</h1>
        <ul>
          <li><img src="folder-icon.png" alt="Folder Icon" /> my-app <span>Last updated 2 days ago</span></li>
          <li><img src="folder-icon.png" alt="Folder Icon" /> my-website <span>Last updated 1 week ago</span></li>
          <li><img src="folder-icon.png" alt="Folder Icon" /> my-library <span>Last updated 2 months ago</span></li>
        </ul>
      </div>
      <div className="column chat">
        <h1>Chat</h1>
        <div className="message">
          <span>Max 2:38pm</span>
          <p>Hey everyone, let's discuss the new feature roadmap.</p>
        </div>
      </div>
      <div className="column">
        <h1>Files</h1>
        <ul>
        
          <li><img src="file-icon.png" alt="File Icon" /> package.json <span>Last updated 1 week ago</span></li>
          <li><img src="file-icon.png" alt="File Icon" /> README.md <span>Last updated 3 months ago</span></li>
        </ul>
      </div>
    </>
  );
};

export default Chat;