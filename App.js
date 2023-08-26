import React from 'react';
import Header from './components/Header';
import Post from './components/Post';
import './App.css'; // You can customize this CSS file

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <div className="feed">
          {/* Example posts */}
          <Post
            username="exampleUser1"
            imageUrl="post_image1.jpg"
            caption="Caption for post 1"
          />
          <Post
            username="exampleUser2"
            imageUrl="post_image2.jpg"
            caption="Caption for post 2"
          />
          {/* Add more posts here */}
        </div>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Instagram Clone</p>
      </footer>
    </div>
  );
}

export default App;
