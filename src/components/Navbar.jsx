import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* Logo Section */}
        <div className="nav-logo">
          <a href="/" onClick={() => handleTabClick('home')}>
            <div className="logo">
              <img src={logo} alt="Byte Ignis Logo" />
            </div>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="nav-menu">
          <li className={`nav-item ${activeTab === 'home' ? 'active' : ''}`}>
            <a href="/" className="nav-link" onClick={() => handleTabClick('home')}>
              <span></span> Home
            </a>
          </li>
          <li className={`nav-item ${activeTab === 'about' ? 'active' : ''}`}>
            <a href="/about" className="nav-link" onClick={() => handleTabClick('about')}>
              <span></span> About
            </a>
          </li>
          <li className={`nav-item ${activeTab === 'projects' ? 'active' : ''}`}>
            <a href="/projects" className="nav-link" onClick={() => handleTabClick('projects')}>
              <span></span> Projects
            </a>
          </li>
          <li className={`nav-item ${activeTab === 'services' ? 'active' : ''}`}>
            <a href="/services" className="nav-link" onClick={() => handleTabClick('services')}>
              <span></span> Services
            </a>
          </li>
          <li className={`nav-item ${activeTab === 'contact' ? 'active' : ''}`}>
            <a href="/contact" className="nav-link" onClick={() => handleTabClick('contact')}>  <span></span> Contact
            </a>
          </li>
        </ul>

        {/* Book Appointment Button */}
        <div className="nav-button">
          <button className="btn-appointment" onClick={() => alert('Book appointment modal would open here')}>
            Book Appointment
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="menu-icon" onClick={toggleMobileMenu}>
          <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <ul className="mobile-nav-menu">
          <li className="mobile-nav-item">
            <a href="/" onClick={() => handleTabClick('home')}>
              <span></span> Home
            </a>
          </li>
          <li className="mobile-nav-item">
            <a href="/about" onClick={() => handleTabClick('about')}>
              <span></span> About
            </a>
          </li>
          <li className="mobile-nav-item">
            <a href="/projects" onClick={() => handleTabClick('projects')}>
              <span></span> Projects
            </a>
          </li>
          <li className="mobile-nav-item">
            <a href="/services" onClick={() => handleTabClick('services')}>
              <span></span> Services
            </a>
          </li>
          <li className="mobile-nav-item">
            <a href="/contact" onClick={() => handleTabClick('contactus')}>
              <span></span> Contact
            </a>
          </li>
        </ul>
        <div className="mobile-button">
          <button className="btn-appointment-mobile" onClick={() => alert('Book appointment modal would open here')}>
            Book Appointment
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;