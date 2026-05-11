import { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
 const words = [
  { text: "Ships Fast", effect: "shake" },
  { text: "Feels Instant", effect: "wave" },
  { text: "Stays Stable", effect: "shake" },
  { text: "Runs At Scale", effect: "wave" }
];

  // Typing animation
  useEffect(() => {
    const word = words[currentWord].text;
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(word.substring(0, displayText.length + 1));
        if (displayText.length === word.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(word.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentWord((prev) => (prev + 1) % words.length);
        }
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentWord]);

  return (
    <section className="hero-split">
      <div className="hero-left">
        <div className="hero-badge">
          <span className="badge-dot"></span>
          Trusted by 150+ companies
        </div>
        
        <h1 className="hero-title">
          Build Software That
          <span className="gradient-text-wrapper">
            <span 
              className={`gradient-text ${words[currentWord].effect}`}
              data-text={displayText}
            >
              {displayText}
            </span>
            <span className="cursor-type">|</span>
          </span>
        </h1>
        
        <p className="hero-desc">
          From startup to enterprise, we build products that grow with you. 
          No rewrites. No technical debt. Just clean code.
        </p>
        
        <div className="hero-buttons">
          <button className="btn-primary">
            Start your project
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </button>
        </div>
        
        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-number">150+</div>
            <div className="stat-label">projects shipped</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">98%</div>
            <div className="stat-label">client retention</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <div className="stat-label">support</div>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <div className="code-editor">
          <div className="editor-header">
            <div className="editor-dots">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="editor-title">byte-ignis/workspace</div>
          </div>
          <div className="editor-body">
            <div className="code-line">
              <span className="line-number">1</span>
              <span className="code-keyword">import</span>
              <span className="code-text"> {'{'} ByteIgnis {'}'} from </span>
              <span className="code-string">'@byteignis/core'</span>
            </div>
            <div className="code-line">
              <span className="line-number">2</span>
              <span></span>
            </div>
            <div className="code-line">
              <span className="line-number">3</span>
              <span className="code-keyword">const</span>
              <span className="code-text"> ignite = </span>
              <span className="code-keyword">new</span>
              <span className="code-text"> ByteIgnis(</span>
              <span className="code-string">'your-project'</span>
              <span className="code-text">)</span>
            </div>
            <div className="code-line">
              <span className="line-number">4</span>
              <span></span>
            </div>
            <div className="code-line typing-line">
              <span className="line-number">5</span>
              <span className="code-text">ignite</span>
              <span className="code-keyword">.build</span>
              <span className="code-text">()</span>
              <span className="cursor-blink"></span>
            </div>
            <div className="code-output">
              <span className="output-text">🚀 Building your idea...</span>
              <span className="output-success">✓ Ready in 0.3s</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;