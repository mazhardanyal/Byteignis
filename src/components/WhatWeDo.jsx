import React, { useEffect, useRef, useState } from "react";
import { Globe, Smartphone, Palette, TrendingUp, ArrowRight, Sparkles } from "lucide-react";
import "./WhatWeDo.css";

const services = [
  {
    id: 1,
    title: "Web Applications",
    short: "Scalable web apps for modern businesses",
    features: ["React / Next.js", "Node.js / Python", "Database Design", "Cloud Deployment"],
    icon: Globe,
    color: "#fd4305",
  },
  {
    id: 2,
    title: "Mobile Development",
    short: "Native & cross-platform apps",
    features: ["React Native", "Flutter", "iOS & Android", "Offline Support"],
    icon: Smartphone,
    color: "#fe9303",
  },
  {
    id: 3,
    title: "UI/UX Design",
    short: "Beautiful interfaces users love",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    icon: Palette,
    color: "#fd4305",
  },
  {
    id: 4,
    title: "Digital Marketing",
    short: "Data-driven growth strategies",
    features: ["SEO Optimization", "Content Strategy", "Analytics", "Conversion Rate"],
    icon: TrendingUp,
    color: "#fe9303",
  },
];

const WhatWeDo = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      // Get the section's position
      const sectionRect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Calculate scroll progress within section (0 to 1)
      let scrollProgress = (viewportHeight - sectionRect.top) / (sectionRect.height);
      scrollProgress = Math.max(0, Math.min(1, scrollProgress));
      
      // Map progress to card index - MUCH SLOWER transition
      // Each card takes 25% of the section scroll
      let newIndex = Math.floor(scrollProgress * services.length);
      newIndex = Math.min(Math.max(0, newIndex), services.length - 1);
      
      setActiveIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const ActiveIcon = services[activeIndex]?.icon;

  return (
    <>
      <section className="whatwedo-clean" ref={sectionRef}>
        <div className="clean-container">
          
          {/* LEFT SIDE - TEXT */}
          <div className="clean-left">
            <div className="clean-badge">
              <Sparkles size={14} />
              <span>What We Do</span>
            </div>
            
            <h2 className="clean-title">
              We build digital products that deliver
            </h2>
            
            <p className="clean-subtitle">
              From startups to enterprises, we create software that solves real problems.
            </p>
            
            <div className="clean-active-card">
              <div className="clean-active-icon" style={{ background: `${services[activeIndex]?.color}15` }}>
                {ActiveIcon && <ActiveIcon size={32} color={services[activeIndex]?.color} />}
              </div>
              <div>
                <div className="clean-active-label">Currently viewing</div>
                <div className="clean-active-title">{services[activeIndex]?.title}</div>
                <p className="clean-active-desc">{services[activeIndex]?.short}</p>
              </div>
            </div>
            
            <button className="clean-cta">
              View All Services
              <ArrowRight size={16} />
            </button>
          </div>

          {/* RIGHT SIDE - CARDS */}
          <div className="clean-right">
            <div className="clean-cards">
              {services.map((service, idx) => {
                const Icon = service.icon;
                const isActive = idx === activeIndex;
                const isPast = idx < activeIndex;
                
                let cardStyle = {};
                
                if (isActive) {
                  cardStyle = {
                    transform: "translateY(0px) scale(1)",
                    opacity: 1,
                    zIndex: 10,
                  };
                } else if (isPast) {
                  cardStyle = {
                    transform: `translateY(-${(activeIndex - idx) * 30}px) scale(0.96)`,
                    opacity: 0.4,
                    zIndex: 5 - (activeIndex - idx),
                  };
                } else {
                  cardStyle = {
                    transform: "translateY(50px) scale(0.94)",
                    opacity: 0,
                    zIndex: 0,
                  };
                }
                
                return (
                  <div
                    key={service.id}
                    ref={(el) => (cardsRef.current[idx] = el)}
                    className={`clean-card ${isActive ? "active" : ""}`}
                    style={cardStyle}
                  >
                    <div className="clean-card-inner">
                      <div className="clean-card-number">{String(idx + 1).padStart(2, "0")}</div>
                      <div className="clean-card-icon" style={{ color: service.color }}>
                        <Icon size={52} />
                      </div>
                      <h3 className="clean-card-title">{service.title}</h3>
                      <p className="clean-card-desc">{service.short}</p>
                      
                      <ul className="clean-card-features">
                        {service.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                      
                    
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Scroll Hint */}
            {activeIndex < services.length - 1 && window.innerWidth > 1024 && (
              <div className="clean-scroll-hint">
                <div className="clean-scroll-wheel"></div>
                <span>Scroll down</span>
              </div>
            )}
          </div>
        </div>
      </section>

    
    </>
  );
};

export default WhatWeDo;