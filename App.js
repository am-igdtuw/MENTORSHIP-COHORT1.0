import './App.css';
import images from './images';

function App() {
  return (
    <div className="App">
      <h1>Assignment-1 Task2</h1>
      <div className="image-container">
        {images.map((item) => (
          <div className="image-item">
            <img src={item["bookimage-url"]} alt={item["book-name"]} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;
