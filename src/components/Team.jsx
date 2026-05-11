import React from 'react';
import Fouder from "../assets/Fouder.jpeg";
import { useState, useEffect } from "react";
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaEnvelope,
  FaBrain,
  FaPalette,
  FaMobileAlt,
  FaServer,
  FaRocket,
  FaExternalLinkAlt,
  FaCode
} from "react-icons/fa";
import "./Team.css";

const team = [
  {
    id: 1,
    name: "Mazhar Danyal",
    role: "Founder & CEO",
    expertise: "MERN Stack",
    bio: "2+ years in tech. Passionate about building scalable web applications and leading innovative teams.",
    image: Fouder,   
    icon: FaBrain,
    color: "#fd4305",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    },
    achievements: ["Tech Founder", "MERN Expert", "Team Leader"],
    skills: ["React", "Node.js", "MongoDB", "Express"]
  },
  {
    id: 2,
    name: "Wahid Ali",
    role: "Co-Founder & CTO",
    expertise: "Full Stack Development",
    bio: "Experienced full-stack developer focused on building robust backend systems and scalable architectures.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    icon: FaCode,
    color: "#fe9303",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    },
    achievements: ["Backend Expert", "System Architect", "Tech Lead"],
    skills: ["Python", "Django", "PostgreSQL", "Redis"]
  },
  {
    id: 3,
    name: "Marcus Williams",
    role: "Lead Developer",
    expertise: "Backend & Cloud",
    bio: "Cloud architect specializing in scalable systems. Built infrastructure for 50M+ users.",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    icon: FaServer,
    color: "#fd4305",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    },
    achievements: ["AWS Certified", "Kubernetes Expert", "Cloud Architect"],
    skills: ["AWS", "Docker", "K8s", "Terraform"]
  },
  {
    id: 4,
    name: "Elena Rodriguez",
    role: "Mobile Expert",
    expertise: "iOS & Android",
    bio: "Built 50+ mobile apps used by millions. React Native and Flutter specialist.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    icon: FaMobileAlt,
    color: "#fe9303",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    },
    achievements: ["App Store Featured", "Google Play Award", "Mobile Expert"],
    skills: ["React Native", "Flutter", "Swift", "Kotlin"]
  },
  {
    id: 5,
    name: "David Park",
    role: "AI Specialist",
    expertise: "Machine Learning & AI",
    bio: "ML expert with PhD from Stanford. Built AI solutions for Fortune 500 companies.",
    image: "https://randomuser.me/api/portraits/men/91.jpg",
    icon: FaBrain,
    color: "#fd4305",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    },
    achievements: ["AI Researcher", "Patent Holder", "ML Speaker"],
    skills: ["TensorFlow", "PyTorch", "OpenCV", "NLP"]
  },
  {
    id: 6,
    name: "Lisa Wong",
    role: "Frontend Architect",
    expertise: "UI Development",
    bio: "Creates lightning-fast, pixel-perfect interfaces. Performance obsessed.",
    image: "https://randomuser.me/api/portraits/women/89.jpg",
    icon: FaCode,
    color: "#fe9303",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    },
    achievements: ["React Expert", "Performance Specialist", "UI Architect"],
    skills: ["React", "Vue", "Next.js", "Tailwind"]
  }
];

const Team = () => {
  const [activeMember, setActiveMember] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto-rotate only on desktop
  useEffect(() => {
    if (isMobile) return;
    
    const interval = setInterval(() => {
      setActiveMember((prev) => (prev + 1) % team.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isMobile]);

  const handleCardClick = (index) => {
    setActiveMember(index);
  };

  const currentMember = team[activeMember];
  const IconComponent = currentMember?.icon;

  return (
    <section className="team">
      {/* Background Effects */}
      <div className="team-bg">
        <div className="team-cube"></div>
        <div className="team-cube team-cube-2"></div>
        <div className="team-cube team-cube-3"></div>
      </div>

      <div className="team-container">
        {/* Section Header */}
        <div className="team-header">
          <div className="team-badge">
            <span className="badge-icon">✨</span>
            <span>The Minds Behind Magic</span>
          </div>
          <h2 className="team-title">
            Meet the
            <span className="team-gradient"> dream team</span>
          </h2>
          <p className="team-subtitle">
            World-class talent united by one mission — building extraordinary digital products
          </p>
        </div>

        {/* Main Team Display */}
        <div className="team-showcase">
          
          {/* Left Side - Team Member Profile */}
          <div className="team-profile">
            <div className="profile-glow" style={{ background: currentMember?.color }}></div>
            
            <div className="profile-image-wrapper">
              <div className="profile-image">
                <img src={currentMember?.image} alt={currentMember?.name} />
                <div className="image-ring" style={{ borderColor: currentMember?.color }}></div>
              </div>
              <div className="profile-badge" style={{ background: currentMember?.color }}>
                <span>{activeMember + 1}</span>
              </div>
            </div>
            
            <div className="profile-info">
              <h3 className="profile-name">{currentMember?.name}</h3>
              <p className="profile-role" style={{ color: currentMember?.color }}>{currentMember?.role}</p>
              <p className="profile-expertise">{currentMember?.expertise}</p>
              <p className="profile-bio">{currentMember?.bio}</p>
              
              <div className="profile-achievements">
                {currentMember?.achievements.map((achievement, i) => (
                  <div key={i} className="achievement-badge">
                    <span>🏆</span>
                    <span>{achievement}</span>
                  </div>
                ))}
              </div>
              
              <div className="profile-skills">
                <div className="skills-title">Core Skills</div>
                <div className="skills-list">
                  {currentMember?.skills.map((skill, i) => (
                    <span key={i} className="skill-tag" style={{ borderColor: currentMember?.color }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="profile-social">
                <a href={currentMember?.social?.github} target="_blank" rel="noopener noreferrer" className="social-link">
                  <FaGithub size={18} />
                </a>
                <a href={currentMember?.social?.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                  <FaLinkedin size={18} />
                </a>
                <a href={currentMember?.social?.twitter} target="_blank" rel="noopener noreferrer" className="social-link">
                  <FaTwitter size={18} />
                </a>
                <a href="#" className="social-link">
                  <FaEnvelope size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Team Cards Grid */}
          <div className="team-grid">
            <div className="grid-container">
              {team.map((member, idx) => {
                const isActive = idx === activeMember;
                const IconComp = member.icon;
                
                return (
                  <div
                    key={member.id}
                    className={`team-card ${isActive ? "active" : ""}`}
                    onClick={() => handleCardClick(idx)}
                    style={{
                      '--card-color': member.color
                    }}
                  >
                    <div className="card-content">
                      <div className="card-avatar">
                        <img src={member.image} alt={member.name} />
                        <div className="avatar-ring" style={{ borderColor: member.color }}></div>
                      </div>
                      <div className="card-info">
                        <h4>{member.name}</h4>
                        <p>{member.role}</p>
                      </div>
                      <div className="card-icon" style={{ color: member.color }}>
                        <IconComp size={22} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="team-stats">
          <div className="stat-item">
            <div className="stat-value">15+</div>
            <div className="stat-label">Years Combined Experience</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">500+</div>
            <div className="stat-label">Projects Delivered</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">24/7</div>
            <div className="stat-label">Support Available</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">100%</div>
            <div className="stat-label">Client Satisfaction</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="team-cta">
          <div className="cta-content">
            <FaRocket size={24} />
            <div>
              <h4>Join Our Team</h4>
              <p>We're always looking for talented people</p>
            </div>
            <button className="cta-button">
              View Open Positions
              <FaExternalLinkAlt size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;