import React, { useState, useEffect } from "react";
import "./Testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    review: "Byte Ignis transformed our outdated platform. Their team's attention to detail is unmatched. We've seen a 300% increase in user engagement.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    company: "TechStart"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Director, FinCorp",
    review: "Working with Byte Ignis feels like having an in-house team of experts. They delivered ahead of schedule and under budget.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    company: "FinCorp"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Head, GrowthLab",
    review: "The UI/UX design from Byte Ignis transformed our brand. Our conversion rates tripled within 3 months.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    company: "GrowthLab"
  },
  {
    id: 4,
    name: "David Kim",
    role: "CTO, AI Innovate",
    review: "The technical expertise at Byte Ignis is world-class. Our platform now handles 1M+ users with zero downtime.",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    rating: 5,
    company: "AI Innovate"
  },
  {
    id: 5,
    name: "Lisa Wong",
    role: "Founder, DesignHub",
    review: "Best development team I've ever worked with. They truly care about delivering excellence.",
    image: "https://randomuser.me/api/portraits/women/89.jpg",
    rating: 5,
    company: "DesignHub"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const current = testimonials[activeIndex];

  return (
    <section className="testimonials-new">
      <div className="testimonials-new-container">
        
        {/* Section Header */}
        <div className="testimonials-new-header">
          <div className="section-badge">
            <span className="badge-dot"></span>
            <span>What Our Clients Say</span>
          </div>
          <h2 className="section-title">
            Loved by businesses
            <span className="title-accent"> worldwide</span>
          </h2>
          <p className="section-subtitle">
            Don't just take our word for it — hear from our amazing clients
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className={`testimonial-master ${isAnimating ? 'animating' : ''}`}>
          {/* Background decoration */}
          <div className="testimonial-bg-decoration">
            <div className="decoration-1"></div>
            <div className="decoration-2"></div>
          </div>

          {/* Quote icon */}
          <div className="quote-icon">“</div>

          {/* Review Text */}
          <p className="testimonial-review">{current.review}</p>

          {/* Rating Stars */}
          <div className="testimonial-stars">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="star">★</span>
            ))}
          </div>

          {/* Author Section */}
          <div className="testimonial-author-section">
            <div className="author-avatar-new">
              <img src={current.image} alt={current.name} />
              <div className="avatar-ring"></div>
            </div>
            <div className="author-details">
              <h4 className="author-name">{current.name}</h4>
              <p className="author-role">{current.role}</p>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="testimonial-nav-dots">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              className={`nav-dot ${idx === activeIndex ? 'active' : ''}`}
              onClick={() => {
                setActiveIndex(idx);
              }}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="testimonial-arrows">
          <button className="arrow-btn prev-btn" onClick={prevTestimonial}>
            ←
          </button>
          <button className="arrow-btn next-btn" onClick={nextTestimonial}>
            →
          </button>
        </div>

        {/* Floating Stats */}
        <div className="floating-stats">
          <div className="stat-float stat-1">
            <span className="stat-emoji">⭐</span>
            <div>
              <div className="stat-value">4.9</div>
              <div className="stat-label">Average Rating</div>
            </div>
          </div>
          <div className="stat-float stat-2">
            <span className="stat-emoji">👥</span>
            <div>
              <div className="stat-value">500+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
          </div>
          <div className="stat-float stat-3">
            <span className="stat-emoji">🚀</span>
            <div>
              <div className="stat-value">98%</div>
              <div className="stat-label">Retention Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;