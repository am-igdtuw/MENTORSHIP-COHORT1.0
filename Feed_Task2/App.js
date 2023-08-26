import React, { useState } from 'react';
import './App.css';
  
  const images = [
  'https://blog.hootsuite.com/wp-content/uploads/2022/06/Instagram-Apps-Cover-Photo-556x556.png',
  'https://blog.hootsuite.com/wp-content/uploads/2022/09/Instagram-notes.png',
  'https://blog.hootsuite.com/wp-content/uploads/2022/06/Instagram-Apps-Cover-Photo-556x556.png',
    // Add more image URLs here
  ];
  
  function App() {
    const [comments, setComments] = useState(Array(images.length).fill(''));
  
    const handleCommentChange = (index, event) => {
      const newComments = [...comments];
      newComments[index] = event.target.value;
      setComments(newComments);
    };
  
    return (
      <div className="app">
        <header className="app-header">
          <h1>Instagram Feed</h1>
        </header>
        <div className="feed">
          {images.map((imageUrl, index) => (
            <div key={index} className="post">
              <img src={imageUrl} alt={`Post ${index}`} />
              <textarea
                placeholder="Add a comment..."
                value={comments[index]}
                onChange={(event) => handleCommentChange(index, event)}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default App;
  
