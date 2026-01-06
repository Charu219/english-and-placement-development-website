


// src/pages/HomePage.jsx
import React, { useState, useEffect, useRef } from "react"; // <-- CORRECTED: Added useRef

import "./HomePage.css";




const HomePage = () => {
  const [showPrograms, setShowPrograms] = useState(false);

  const togglePrograms = () => {
    setShowPrograms(!showPrograms);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown")) {
        setShowPrograms(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // --- Speech Analyzer File Upload Logic (ADDED) ---
  const fileInputRef = useRef(null); // Ref for the hidden file input

  const handleBrowseClick = () => {
    if (fileInputRef.current) {
        fileInputRef.current.click(); // Programmatically click the hidden input
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Selected file:", file.name);
      // Add your logic here to upload or process the file
    }
    // Clear the input value so the user can select the same file again if needed
    event.target.value = null; 
  };
  // --- End Speech Analyzer File Upload Logic ---


  return (
    <div className="homepage">
      {/* ===== Navbar ===== */}
      <nav className="navbar">
        <div className="logo">
          <img src="logo.svg" alt="TalkMate AI Logo" />
        </div>

        <ul className="nav-links">
          <li>Home</li>

          {/* Programs dropdown */}
          <li className="dropdown">
            Programs
            <span
              className={`arrow ${showPrograms ? "open" : ""}`}
              onClick={togglePrograms}
            >
              ▼
            </span>
            {showPrograms && (
              <ul className="dropdown-menu">
                <li>AI Vocabulary Booster</li>
                <li>Group Discussion</li>
                <li>HR Questions</li>
                <li>Aptitude Questions</li>
                <li>Communication Development</li>
              </ul>
            )}
          </li>

  <li>
  <a href="/coursepage.html">Courses</a>
</li>



<li>
  <a href="/challenge-index.html">Challenge</a>
</li>

<li className="chatbot-link">
    {/* Corrected to use a standard HTML anchor tag <a> that points to the static file */}
    <a href="chatbot.html">Chatbot</a>
</li>

        </ul>
      </nav>

      {/* ===== Speaking Level Test ===== */}
      <section className="test-section">
        <div className="test-content">
          <h2>Speaking Level Test</h2>
          <p>Fast, reliable, and stress-free English certification</p>
          <ul>
            <li>20-minute online test</li>
            <li>Instant CEFR-level results</li>
            <li>Clear feedback on strengths and areas to improve</li>
            <li>Share your certificate on LinkedIn or as a PDF</li>
          </ul>
          <button className="btn">Buy Test</button>
        </div>
        <div className="test-image">
          <img src="home2.jpg" alt="Certificate" />
        </div>
      </section>

      {/* ===== Vocabulary Booster ===== */}
      <section className="vocab-section">
        <div className="vocab-content">
          <h2>AI-Powered Vocabulary Booster</h2>
          <p>
            Learn new words that our AI thinks fit your interests and English
            level
          </p>
          <button className="btn">Start practice</button>
        </div>
        <div className="vocab-image">
          <img src="robo.jpeg" alt="AI Robot" />
        </div>
      </section>





      {/* ===== Courses Section ===== */}
 <section className="courses-section">
        <div className="section-header">
          <h3>Courses</h3>
    <li>View all</li>


        </div>
        <div className="course-card-list"> {/* Changed from card-list to course-card-list to differentiate styling */}

          {/* Course 1: Speak Like a Native with American TV Shows */}
          <div className="course-card course-tv">
            <div className="course-difficulty">B1-B2</div> {/* Example difficulty */}
            <div className="course-icon">
              <img src="native.webp" alt="TV Icon" /> {/* Make sure tv.webp is in your public folder */}
            </div>
            <div className="course-title">Speak Like a Native with American TV Shows</div>
            <div className="course-meta">
              <span className="course-status available">
                <span className="status-dot"></span> Available
              </span>
              <span className="course-lessons">Lessons 0/20</span>
            </div>
          </div>

          {/* Course 2: General Speaking Course */}
          <div className="course-card course-microphone">
             <div className="course-difficulty">B1-B2</div>
            <div className="course-icon">
              <img src="speak.jpg" alt="Microphone Icon" /> {/* Make sure microphone_icon.webp is in your public folder */}
            </div>
            <div className="course-title">General Speaking Course</div>
            <div className="course-meta">
              <span className="course-status available">
                <span className="status-dot"></span> Available
              </span>
              <span className="course-lessons">Lessons 0/88</span>
            </div>
          </div>

          {/* Course 3: Job Interview Preparation */}
          <div className="course-card course-interview">
             <div className="course-difficulty">B2-C1</div>
            <div className="course-icon">
              <img src="interview.jpg" alt="Interview Icon" /> {/* Make sure interview_icon.webp is in your public folder */}
            </div>
            <div className="course-title">Job Interview Preparation</div>
            <div className="course-meta">
              <span className="course-status in-progress">
                <span className="status-dot"></span> In progress
              </span>
              <span className="course-lessons">Lessons 1/21</span>
            </div>
          </div>

          {/* Course 4: How to Make Great Small Talk */}
          <div className="course-card course-chat">
             <div className="course-difficulty">B2-C1</div>
            <div className="course-icon">
              <img src="smalltalk.webp" alt="Chat Bubbles Icon" /> {/* Make sure chat_bubbles.webp is in your public folder */}
            </div>
            <div className="course-title">How to Make Great Small Talk</div>
            <div className="course-meta">
              <span className="course-status available">
                <span className="status-dot"></span> Available
              </span>
              <span className="course-lessons">Lessons 0/21</span>
            </div>
          </div>
          
          {/* Course 5: Advanced Speaking Course (from Image 4) */}
          <div className="course-card course-megaphone">
             <div className="course-difficulty">B2-C1</div>
            <div className="course-icon">
              <img src="advanced.jpg" alt="Megaphone Icon" /> {/* Make sure megaphone.webp is in your public folder */}
            </div>
            <div className="course-title">Advanced Speaking Course</div>
            <div className="course-meta">
              <span className="course-status available">
                <span className="status-dot"></span> Available
              </span>
              <span className="course-lessons">Lessons 0/30</span>
            </div>
          </div>

          {/* Course 6: Business English (from Image 4) */}
          <div className="course-card course-briefcase">
             <div className="course-difficulty">B2-C1</div>
            <div className="course-icon">
              <img src="bussiness.jpg" alt="Briefcase Icon" /> {/* Make sure briefcase.webp is in your public folder */}
            </div>
            <div className="course-title">Business English</div>
            <div className="course-meta">
              <span className="course-status available">
                <span className="status-dot"></span> Available
              </span>
              <span className="course-lessons">Lessons 0/30</span>
            </div>
          </div>

        </div>
      </section>






      {/* ===== Speech Analyzer Section ===== */}
      <section className="speech-section">
        <h3>Speech Analyzer</h3>
        <p>
          Record your pitch or upload an audio to receive feedback on your
          grammar, vocabulary, and fluency ✌️
        </p>
        <div className="speech-tools">
          {/* Start Recording Card - Structured with image and subtext */}
          <div className="card start-recording-card">
              <img 
                  src="microphone.jpeg" 
                  alt="Microphone" 
              /> 
              <div className="card-main-text">Start Recording</div> 
              <div className="card-sub-text">For useful feedback, please speak for more than 1 minute</div>
          </div>

          {/* Drop or Browse Card - Structured, functional for file access */}
          <div className="card drop-browse-card" onClick={handleBrowseClick}>
              <img 
                  src="cloud.jpeg" 
                  alt="Cloud Upload" 
              />
              <div className="card-main-text">Drop or Browse an audio file</div>
              <div className="card-sub-text">One speaker only, 15 min maximum, file formats: mp3, m4a</div>
              {/* Hidden file input for actual file selection */}
              <input
                  type="file"
                  accept=".mp3,.m4a"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  style={{ display: 'none' }} 
              />
          </div>
        </div>
        <p className="plan-info">
          Free plan users have 15 minutes,{" "}
          <span className="pro-plan">Pro plan</span> users have unlimited usage
        </p>
      </section>


{/* ===== Footer ===== */}
 <footer className="footer">
  <h4>Other</h4>
  <div className="card-list other-cards">

    {/* 1. IELTS Speaking Partner Chat */}
    <a
      href="https://t.me/yourtelegramgroup"  // 👈 replace with real link
      target="_blank"
      rel="noopener noreferrer"
      className="card other-card"
    >
      <div className="icon-wrapper">
        <img src="tele.webp" alt="Telegram Icon" className="other-icon" />
      </div>
      <div className="other-title">IELTS Speaking Partner Chat</div>
      <div className="other-description">
        We've set up this chat so you can find a speaking partner for a mock job interview or a mock IELTS speaking section.
      </div>
    </a>

    {/* 2. Your Ideas Are Always Welcome! */}
    <div
      className="card other-card"
      onClick={() => alert("Feature request clicked!")} // 👈 temporary action
    >
      <div className="icon-wrapper">
        <img src="msg.webp" alt="Chat Bubble Icon" className="other-icon" />
      </div>
      <div className="other-title">Your Ideas Are Always Welcome!</div>
      <div className="other-description">
        What features would you like to see? We're here to listen and bring them to life.
      </div>
    </div>

    {/* 3. Invite Friends */}
    <div
      className="card other-card"
      onClick={() => alert("Invite friends modal will open")} // 👈 temporary action
    >
      <div className="icon-wrapper">
        <img src="hand.png" alt="Handshake Icon" className="other-icon" />
      </div>
      <div className="other-title">Invite Friends</div>
      <div className="other-description">
        Do you have someone who can benefit from SmallTalk2Me?
      </div>
    </div>

  </div>
</footer>


      
      
    </div>
  );
};

export default HomePage;