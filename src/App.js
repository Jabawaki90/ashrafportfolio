import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="main">
        <div className="header">
          <div className="leftheader">
            <div className="portfolio">
              <text>Portfolio Projects</text>
            </div>
            <div className="contact">
              <text>Contact</text>
            </div>
          </div>
          <div className="rightheader">
            <div className="mystory">
              <text>My Story</text>
            </div>
            <div className="personalparticular">
              <text>Personal Particular</text>
            </div>
            <div className="experience">
              <text>Working Experience</text>
            </div>
          </div>
        </div>
        <div className="story">2</div>
        <div className="personal">3</div>
        <footer>4</footer>
      </div>
    </>
  );
}

export default App;
