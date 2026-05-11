import React, { useState, useEffect, useRef } from "react";
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight,
  Sparkles,
  Zap,
  Award,
  Users,
  TrendingUp
} from "lucide-react";
import "./Testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    company: "TechStart",
    logo: "🚀",
    review: "Byte Ignis transformed our outdated platform into a modern, scalable solution. Their team's attention to detail and technical expertise is unmatched. We've seen a 300% increase in user engagement since launch.",
    rating: 5,
    tags: ["Web Development", "Scalability"],
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    achievement: "300% growth",
    date: "2024"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Director, FinCorp",
    company: "FinCorp",
    logo: "💰",
    review: "Working with Byte Ignis feels like having an in-house team of experts. They delivered our mobile app ahead of schedule and under budget. The user feedback has been phenomenal.",
    rating: 5,
    tags: ["Mobile App", "FinTech"],
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    achievement: "2x faster delivery",
    date: "2024"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Head, GrowthLab",
    company: "GrowthLab",
    logo: "📈",
    review: "The UI/UX design and digital marketing strategy from Byte Ignis completely transformed our brand. Our conversion rates tripled within 3 months. They're not just developers - they're growth partners.",
    rating: 5,
    tags: ["UI/UX", "Digital Marketing"],
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    achievement: "3x conversion",
    date: "2024"
  },
  {
    id: 4,
    name: "David Kim",
    role: "CTO, AI Innovate",
    company: "AI Innovate",
    logo: "🤖",
    review: "The technical expertise at Byte Ignis is world-class. They solved complex challenges that other agencies couldn't. Our platform now handles 1M+ users with zero downtime.",
    rating: 5,
    tags: ["AI/ML", "Cloud"],
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    achievement: "1M+ users",
    date: "2024"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);
  const carouselRef = useRef(null);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <section className="testimonials">
      {/* Animated Background */}
      <div className="testimonials-bg">
        <div className="testimonials-particles"></div>
        <div className="testimonials-gradient"></div>
      </div>

      <div className="testimonials-container">
        {/* Section Header */}
        <div className="testimonials-header">
          <div className="testimonials-badge">
            <Sparkles size={14} />
            <span>Client Love</span>
          </div>
          
          <h2 className="testimonials-title">
            Don't just take our word for it
            <span className="testimonials-gradient-text"> see what our clients say</span>
          </h2>
          
          <p className="testimonials-subtitle">
            We've helped 500+ businesses scale their digital presence. Here's what they have to say.
          </p>
        </div>

        {/* Stats Row */}
        <div className="testimonials-stats">
          <div className="stat-card">
            <div className="stat-icon">⭐</div>
            <div className="stat-number">4.9</div>
            <div className="stat-label">Average Rating</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">👥</div>
            <div className="stat-number">500+</div>
            <div className="stat-label">Happy Clients</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🚀</div>
            <div className="stat-number">98%</div>
            <div className="stat-label">Retention Rate</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🏆</div>
            <div className="stat-number">24/7</div>
            <div className="stat-label">Support</div>
          </div>
        </div>

        {/* Main Testimonial Display */}
        <div className="testimonials-carousel">
          {/* Left Side - Highlighted Stats for current testimonial */}
          <div className="testimonials-highlight">
            <div className="highlight-content">
              <div className="highlight-icon">🏆</div>
              <div className="highlight-text">
                <span>Key Achievement</span>
                <strong>{testimonials[currentIndex]?.achievement}</strong>
              </div>
            </div>
            <div className="highlight-content">
              <div className="highlight-icon">📅</div>
              <div className="highlight-text">
                <span>Year</span>
                <strong>{testimonials[currentIndex]?.date}</strong>
              </div>
            </div>
            <div className="highlight-content">
              <div className="highlight-icon">🏢</div>
              <div className="highlight-text">
                <span>Industry</span>
                <strong>{testimonials[currentIndex]?.tags[0]}</strong>
              </div>
            </div>
          </div>

          {/* Center - Main Testimonial Card */}
          <div className="testimonials-main">
            <div className="testimonial-card">
              <div className="testimonial-quote">
                <Quote size={32} />
              </div>
              
              <div className="testimonial-content">
                <p className="testimonial-text">"{testimonials[currentIndex]?.review}"</p>
                
                <div className="testimonial-rating">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="#fe9303" color="#fe9303" />
                  ))}
                </div>
                
                <div className="testimonial-author">
                  <div className="author-avatar">
                    <img src={testimonials[currentIndex]?.image} alt={testimonials[currentIndex]?.name} />
                  </div>
                  <div className="author-info">
                    <h4>{testimonials[currentIndex]?.name}</h4>
                    <p>{testimonials[currentIndex]?.role}</p>
                  </div>
                </div>
                
                <div className="testimonial-tags">
                  {testimonials[currentIndex]?.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Company Logo */}
          <div className="testimonials-company">
            <div className="company-logo-card">
              <div className="company-logo">{testimonials[currentIndex]?.logo}</div>
              <div className="company-name">{testimonials[currentIndex]?.company}</div>
              <div className="company-trust">
                <Award size={16} />
                <span>Trusted Partner</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="testimonials-nav">
          <button className="nav-btn prev" onClick={prevSlide}>
            <ChevronLeft size={24} />
          </button>
          
          <div className="nav-dots">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                className={`dot ${idx === currentIndex ? "active" : ""}`}
                onClick={() => goToSlide(idx)}
              />
            ))}
          </div>
          
          <button className="nav-btn next" onClick={nextSlide}>
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Floating Elements */}
        <div className="testimonials-floating">
          {testimonials.map((_, idx) => (
            <div 
              key={idx}
              className={`floating-card ${idx === currentIndex ? "active" : ""}`}
              style={{ '--i': idx }}
              onClick={() => goToSlide(idx)}
            >
              <div className="floating-avatar">
                <img src={testimonials[idx].image} alt={testimonials[idx].name} />
              </div>
              <div className="floating-name">{testimonials[idx].name}</div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="trust-indicators">
          <div className="trust-line"></div>
          <div className="trust-text">
            <Users size={16} />
            <span>Join 500+ satisfied businesses</span>
            <TrendingUp size={16} />
          </div>
          <div className="trust-line"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;