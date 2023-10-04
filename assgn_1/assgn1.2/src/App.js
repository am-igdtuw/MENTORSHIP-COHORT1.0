import React from 'react';
import './App.css';
import Post from './Post';
import postData from './postData';

function App() {
  const rows = [];
  for (let i = 0; i < postData.length; i += 3) {
    const rowPosts = postData.slice(i, i + 3);
    const row = (
      <div className='body'>
      <div className="row" key={i}>
        {rowPosts.map((post, index) => (
          <div className='col-md-4' key={index}>
          <Post
            key={index}
            username={post.username}
            imageUrl={post.imageUrl}
            caption={post.caption}
          />
          </div>
        ))}
      </div>
      </div>
    );
    rows.push(row);
  }

  return <div className="app">{rows}</div>;
}

export default App;
