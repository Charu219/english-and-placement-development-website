// src/pages/HomePage.jsx
import React, { useState, useEffect, useRef } from "react";

import "./HomePage.css";

const HomePage = () => {
  const [showPrograms, setShowPrograms] = useState(false);
  // State for the invite modal
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);

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

  // --- Speech Analyzer File Upload Logic ---
  const fileInputRef = useRef(null);

  const handleBrowseClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Selected file:", file.name);
    }
    event.target.value = null;
  };
  // --- End Speech Analyzer File Upload Logic ---

  // --- Functions/Variables for the "Other" section ---
  const TELEGRAM_LINK = "https://t.me/yourtelegramgroup"; // Replace with your actual link

  const handleFeatureRequestClick = () => {
    // Implement logic for feature requests, e.g., open a form or a new page
    console.log("Feature request clicked!");
    alert("This would open a feature request form!");
  };
  // --- End "Other" section functions ---

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

          <li>Courses</li>
          <li className="challenge">Challenge</li>
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

      {/* ===== IELTS Section ===== */}
      <section className="ielts-section">
        <div className="section-header">
          <h3>IELTS</h3>
          <a href="#">View all</a>
        </div>
        <div className="card-list">
          <div className="card">IELTS Speaking #1 – Money, Childhood</div>
          <div className="card">IELTS Speaking #2 – Age, Gadgets</div>
          <div className="card">IELTS Speaking #3 – TV, Business</div>
          <div className="card">#1 Part 1 – Money</div>
        </div>
      </section>

      {/* ===== Courses Section ===== */}
      <section className="courses-section">
        <div className="section-header">
          <h3>Courses</h3>
          <a href="#">View all</a>
        </div>
        <div className="card-list">
          <div className="card">Speak Like a Native with American TV Shows</div>
          <div className="card">General Speaking Course</div>
          <div className="card">Job Interview Preparation</div>
          <div className="card">How to Make Great Small Talk</div>
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
          <div className="card start-recording-card">
            <img src="microphone.jpeg" alt="Microphone" />
            <div className="card-main-text">Start Recording</div>
            <div className="card-sub-text">
              For useful feedback, please speak for more than 1 minute
            </div>
          </div>

          <div className="card drop-browse-card" onClick={handleBrowseClick}>
            <img src="cloud.jpeg" alt="Cloud Upload" />
            <div className="card-main-text">Drop or Browse an audio file</div>
            <div className="card-sub-text">
              One speaker only, 15 min maximum, file formats: mp3, m4a
            </div>
            <input
              type="file"
              accept=".mp3,.m4a"
              ref={fileInputRef}
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
          </div>
        </div>
        <p className="plan-info">
          Free plan users have 15 minutes,{" "}
          <span className="pro-plan">Pro plan</span> users have unlimited usage
        </p>
      </section>

      ===== Footer =====
       <footer className="footer">
        <h4>Other</h4>
        <div className="card-list other-cards">
          {/* 1. IELTS Speaking Partner Chat (Telegram Group) */}
          <div className="card other-card">
            <div className="icon-wrapper">
              <img
                src="tele.webp"
                alt="Telegram Icon"
                className="other-icon"
              />
            </div>
            <div className="other-title">IELTS Speaking Partner Chat</div>
            <div className="other-description">
              We've set up this chat so you can find a speaking partner for a
              mock job interview or a mock IELTS speaking section.
            </div>
          </div>

          {/* 2. Your Ideas Are Always Welcome! (Feature Request Form) */}
          <div className="card other-card">
            <div className="icon-wrapper">
              <img src="msg.webp" alt="Chat Bubble Icon" className="other-icon" />
            </div>
            <div className="other-title">Your Ideas Are Always Welcome!</div>
            <div className="other-description">
              What features would you like to see? We're here to listen and
              bring them to life.
            </div>
          </div>

          {/* 3. Invite Friends (Opens Modal) */}
          <div className="card other-card">
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