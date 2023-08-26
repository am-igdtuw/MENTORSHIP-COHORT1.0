import React from 'react';
import './Post.css'; // Create this CSS file

function Post(props) {
  const { username, imageUrl, caption } = props;

  return (
    <div className="post">
      <div className="post-header">
        <img src="profile_picture.jpg" alt="User Profile" />
        <h2>{username}</h2>
      </div>
      <img className="post-image" src={imageUrl} alt="Post" />
      <div className="post-actions">{/* Like, comment, and share buttons */}</div>
      <div className="post-caption">
        <strong>{username}</strong> {caption}
      </div>
      <div className="post-comments">{/* Comments section */}</div>
    </div>
  );
}

export default Post;
