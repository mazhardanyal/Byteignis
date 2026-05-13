import React, { useState } from 'react';
import'../components/Contact.css'
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1500);
  };

  return (
    <div className="contact-page">
      {/* Animated Background */}
      <div className="contact-bg">
        <div className="contact-gradient"></div>
        <div className="contact-particles"></div>
      </div>

      <div className="contact-container">
        {/* Left Side - Contact Info */}
        <div className="contact-info">
          <div className="info-header">
            <div className="info-badge">
              <span className="badge-icon">📞</span>
              <span>Get in Touch</span>
            </div>
            <h1 className="info-title">
              Let's talk about
              <span className="title-gradient"> your project</span>
            </h1>
            <p className="info-subtitle">
              Have a project in mind? We'd love to hear about it. 
              Fill out the form and we'll get back to you within 24 hours.
            </p>
          </div>

          {/* Contact Details */}
          <div className="contact-details">
            <div className="detail-card">
              <div className="detail-icon email-icon">
                <span>✉️</span>
              </div>
              <div className="detail-content">
                <h4>Email Us</h4>
              
                <a href="mailto:support@byteignis.com">byteignis@gmail.com</a>
              </div>
            </div>

            <div className="detail-card">
              <div className="detail-icon phone-icon">
                <span>📱</span>
              </div>
              <div className="detail-content">
                <h4>Call Us</h4>
                  <a className="phone-link" href="tel:+923159890926">
      +92 315 9890926
    </a>
               <a className="phone-link" href="tel:+923150960131">
      +92 315 0960131
    </a>
              </div>
            </div>

            <div className="detail-card">
              <div className="detail-icon location-icon">
                <span>📍</span>
              </div>
              <div className="detail-content">
                <h4>Visit Us</h4>
                <p>123 Innovation Street, Tech Valley</p>
                <p>Silicon Valley, CA 94025</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="social-section">
            <h4>Follow Us</h4>
            <div className="social-links-group">
              <a href="#" className="social-link-card">
                <span>🐙</span>
                <span>GitHub</span>
              </a>
              <a href="#" className="social-link-card">
                <span>💼</span>
                <span>LinkedIn</span>
              </a>
              <a href="#" className="social-link-card">
                <span>🐦</span>
                <span>YouTube</span>
              </a>
              <a href="#" className="social-link-card">
                <span>📸</span>
                <span>Instagram</span>
              </a>
            </div>
          </div>

          {/* Office Hours */}
          <div className="office-hours">
            <div className="hours-icon">⏰</div>
            <div className="hours-content">
              <h4>Office Hours</h4>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday - Sunday: Closed</p>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="contact-form-wrapper">
          <div className="form-header">
            <h2>Send us a message</h2>
            <p>We'll respond within 24 hours</p>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">
                <span>👤</span>
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
              <div className="input-border"></div>
            </div>

            <div className="form-group">
              <label htmlFor="email">
                <span>✉️</span>
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
              />
              <div className="input-border"></div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">
                <span>📌</span>
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project Inquiry"
                required
              />
              <div className="input-border"></div>
            </div>

            <div className="form-group">
              <label htmlFor="message">
                <span>💬</span>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                rows="5"
                required
              ></textarea>
              <div className="input-border"></div>
            </div>

            <button 
              type="submit" 
              className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner"></span>
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <span className="btn-arrow">→</span>
                </>
              )}
            </button>

            {submitStatus === 'success' && (
              <div className="success-message">
                <span>✓</span>
                Message sent successfully! We'll get back to you soon.
              </div>
            )}
          </form>

          {/* Floating Elements */}
          <div className="floating-elements">
            <div className="float-el el-1">
              <span>⚡</span>
              <span>Fast Response</span>
            </div>
            <div className="float-el el-2">
              <span>🔒</span>
              <span>Secure & Confidential</span>
            </div>
            <div className="float-el el-3">
              <span>🌟</span>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;