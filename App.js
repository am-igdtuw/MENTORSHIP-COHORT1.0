import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1 className="logo">TeamUp</h1>
        <nav className="nav-items">
          <a href="#">Home</a>
          <a href="#">Find a Team</a>
          <a href="#">About Us</a>
          <a href="#">Contact</a>
        </nav>
      </header>
      <main>
        <section className="intro">
          <h1>Find Your Dream Team for Hackathons</h1>
          <p>Join forces with talented individuals and create innovative solutions.</p>
          <button>Get Started</button>
        </section>
        <section className="how-it-works">
          <h2>How It Works</h2>
          <div className="step">
            <div className="step-icon">1</div>
            <p>Create an Account</p>
          </div>
          <div className="step">
            <div className="step-icon">2</div>
            <p>Search for Teammates</p>
          </div>
          <div className="step">
            <div className="step-icon">3</div>
            <p>Form Your Team</p>
          </div>
        </section>
        <section className="find-a-team">
          <h2>Find a Team</h2>
          <p>Browse through available projects and join a team that aligns with your interests and skills.</p>
          <button>Browse Teams</button>
        </section>
        <section className="contact">
          <h2>Contact Us</h2>
          <p>If you have any questions or suggestions, feel free to reach out to us.</p>
          <button>Contact Us</button>
        </section>
      </main>
      <footer className="footer">
        <div className="copy">&copy; {new Date().getFullYear()} TeamUp</div>
        <div className="bottom-links">
          <div className="links">
            <span>More Info</span>
            <a href="#">Home</a>
            <a href="#">Find a Team</a>
            <a href="#">About Us</a>
            <a href="#">Contact</a>
          </div>
          <div className="links">
            <span>Social Links</span>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
