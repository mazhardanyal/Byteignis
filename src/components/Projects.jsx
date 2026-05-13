import React, { useState, useRef, useEffect } from "react";
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "AI-Powered Analytics Platform",
    category: "Web Application",
    description: "Real-time analytics dashboard with predictive AI that processes millions of data points per second.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    tags: ["React", "Node.js", "TensorFlow", "AWS"],
    liveLink: "#",
    githubLink: "#",
    stats: { views: "12.5k", likes: "843", stars: "234" }
  },
  {
    id: 2,
    title: "E-Commerce Marketplace",
    category: "Full Stack",
    description: "Scalable e-commerce platform handling 100k+ daily active users with real-time inventory management.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800",
    tags: ["Next.js", "PostgreSQL", "Redis", "Docker"],
    liveLink: "#",
    githubLink: "#",
    stats: { views: "8.2k", likes: "567", stars: "189" }
  },
  {
    id: 3,
    title: "Healthcare Mobile App",
    category: "Mobile Development",
    description: "Cross-platform health tracking app with telemedicine features and HIPAA compliance.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800",
    tags: ["React Native", "Firebase", "Node.js", "MongoDB"],
    liveLink: "#",
    githubLink: "#",
    stats: { views: "6.8k", likes: "432", stars: "156" }
  },
  {
    id: 4,
    title: "FinTech Dashboard",
    category: "Web App",
    description: "Secure financial dashboard with real-time trading data and advanced charting capabilities.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    tags: ["Vue.js", "D3.js", "Python", "FastAPI"],
    liveLink: "#",
    githubLink: "#",
    stats: { views: "9.1k", likes: "678", stars: "201" }
  },
  {
    id: 5,
    title: "Social Media Platform",
    category: "Full Stack",
    description: "Feature-rich social platform with real-time messaging, stories, and content recommendations.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800",
    tags: ["React", "GraphQL", "Socket.io", "MongoDB"],
    liveLink: "#",
    githubLink: "#",
    stats: { views: "15.2k", likes: "1.2k", stars: "567" }
  },
  {
    id: 6,
    title: "AI Content Generator",
    category: "AI/ML",
    description: "Content generation platform using GPT-4 with custom fine-tuning for specific industries.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
    tags: ["Python", "OpenAI", "React", "LangChain"],
    liveLink: "#",
    githubLink: "#",
    stats: { views: "11.3k", likes: "956", stars: "445" }
  }
];

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [hoveredId, setHoveredId] = useState(null);
  const sectionRef = useRef(null);

  const categories = ["all", ...new Set(projects.map(p => p.category))];
  
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section className="projects" ref={sectionRef}>
      {/* Animated Background */}
      <div className="projects-bg">
        <div className="projects-gradient"></div>
      </div>

      <div className="projects-container">
        {/* Section Header */}
        <div className="projects-header">
          <div className="projects-badge">
            <span className="badge-icon">✨</span>
            <span>Our Work</span>
          </div>
          <h2 className="projects-title">
            Featured
            <span className="projects-gradient-text"> Projects</span>
          </h2>
          <p className="projects-subtitle">
            Transforming ideas into reality with cutting-edge technology and creative design
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="projects-filter">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className={`filter-btn ${filter === cat ? "active" : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className={`project-card ${hoveredId === project.id ? "hovered" : ""}`}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-actions">
                    <a href={project.liveLink} className="project-link" target="_blank" rel="noopener noreferrer">
                      <span className="link-icon">🔗</span>
                      <span>Live Demo</span>
                    </a>
                    <a href={project.githubLink} className="project-link" target="_blank" rel="noopener noreferrer">
                      <span className="link-icon">🐙</span>
                      <span>Source Code</span>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-category">{project.category}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-tag">{tag}</span>
                  ))}
                </div>
                
                <div className="project-stats">
                  <div className="stat">
                    <span className="stat-icon">👁️</span>
                    <span>{project.stats.views}</span>
                  </div>
                  <div className="stat">
                    <span className="stat-icon">❤️</span>
                    <span>{project.stats.likes}</span>
                  </div>
                  <div className="stat">
                    <span className="stat-icon">⭐</span>
                    <span>{project.stats.stars}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="projects-cta">
          <button className="view-all-btn">
            View All Projects
            <span className="btn-arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;