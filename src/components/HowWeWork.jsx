import React, { useState, useEffect, useRef } from "react";
import { 
  Lightbulb, 
  Code2, 
  Rocket, 
  Heart,
  ArrowRight,
  Sparkles,
  Zap,
  Clock,
  Users,
  Shield,
  Target
} from "lucide-react";
import "./HowWeWork.css";

const steps = [
  {
    id: 1,
    title: "Discovery",
    icon: Lightbulb,
    shortDesc: "We dive deep into your vision",
    longDesc: "We analyze your goals, users, and market to create a roadmap that guarantees success.",
    details: ["Deep user research", "Competitor analysis", "Technical feasibility study", "Clear roadmap"],
    color: "#fd4305",
    duration: "1-2 weeks"
  },
  {
    id: 2,
    title: "Design",
    icon: Target,
    shortDesc: "Beautiful, intuitive interfaces",
    longDesc: "We craft pixel-perfect designs that users love and stakeholders approve.",
    details: ["Wireframing", "Interactive prototypes", "User testing", "Design systems"],
    color: "#fe9303",
    duration: "2-3 weeks"
  },
  {
    id: 3,
    title: "Build",
    icon: Code2,
    shortDesc: "Clean, scalable code",
    longDesc: "We build with modern tech stacks, writing clean code that scales with your business.",
    details: ["Agile development", "Daily updates", "Code reviews", "QA testing"],
    color: "#fd4305",
    duration: "4-8 weeks"
  },
  {
    id: 4,
    title: "Launch",
    icon: Rocket,
    shortDesc: "Deploy & grow together",
    longDesc: "We launch, monitor, and optimize - staying with you for the long haul.",
    details: ["Smooth deployment", "Performance monitoring", "24/7 support", "Continuous iteration"],
    color: "#fe9303",
    duration: "Ongoing"
  }
];

const HowWeWork = () => {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef(null);
  const stepRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      // Find which step is currently in view
      let newActiveStep = 0;
      
      stepRefs.current.forEach((step, idx) => {
        if (step) {
          const rect = step.getBoundingClientRect();
          const isInView = rect.top < window.innerHeight * 0.7 && rect.bottom > window.innerHeight * 0.3;
          if (isInView) {
            newActiveStep = idx;
          }
        }
      });
      
      setActiveStep(newActiveStep);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const ActiveIcon = steps[activeStep]?.icon;

  // Scroll to step when clicked
  const scrollToStep = (index) => {
    const element = stepRefs.current[index];
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
      setActiveStep(index);
    }
  };

  return (
    <section className="howwework" ref={sectionRef}>
      {/* Animated Background */}
      <div className="how-bg">
        <div className="how-grid"></div>
        <div className="how-glow"></div>
      </div>

      <div className="how-container">
        {/* Section Header */}
        <div className="how-header">
          <div className="how-badge">
            <Zap size={14} />
            <span>Our Process</span>
          </div>
          <h2 className="how-title">
            How we turn ideas into
            <span className="how-gradient"> reality</span>
          </h2>
          <p className="how-subtitle">
            A transparent, collaborative process that delivers results. No surprises. No delays.
          </p>
        </div>

        {/* Main Process Display - Simple Layout without sticky */}
        <div className="how-process-simple">
          
          {/* LEFT SIDE - Active Step Details */}
          <div className="how-left-simple">
            <div className="how-step-indicator">
              <div className="step-number">
                <span className="step-current">0{activeStep + 1}</span>
                <span className="step-total">/0{steps.length}</span>
              </div>
              <div className="step-progress">
                <div 
                  className="step-progress-fill" 
                  style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="how-step-details" key={activeStep}>
              <div 
                className="step-icon-large" 
                style={{ background: `${steps[activeStep]?.color}15`, color: steps[activeStep]?.color }}
              >
                {ActiveIcon && <ActiveIcon size={48} />}
              </div>
              
              <h3 className="step-title">{steps[activeStep]?.title}</h3>
              <p className="step-desc">{steps[activeStep]?.longDesc}</p>
              
              <div className="step-details-list">
                {steps[activeStep]?.details.map((detail, i) => (
                  <div key={i} className="step-detail-item">
                    <div className="detail-dot" style={{ background: steps[activeStep]?.color }}></div>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
              
              <div className="step-duration">
                <Clock size={16} />
                <span>Typical duration: {steps[activeStep]?.duration}</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Scrollable Timeline */}
          <div className="how-right-simple">
            <div className="how-timeline-simple">
              {steps.map((step, idx) => {
                const Icon = step.icon;
                const isActive = idx === activeStep;
                const isPassed = idx < activeStep;
                
                return (
                  <div
                    key={step.id}
                    ref={(el) => (stepRefs.current[idx] = el)}
                    className={`timeline-node-simple ${isActive ? "active" : ""} ${isPassed ? "passed" : ""}`}
                    onClick={() => scrollToStep(idx)}
                  >
                    <div className="timeline-line-simple">
                      <div 
                        className="timeline-dot"
                        style={{ 
                          background: isActive ? step.color : (isPassed ? step.color : "rgba(255,255,255,0.2)"),
                          transform: isActive ? "scale(1.3)" : "scale(1)"
                        }}
                      ></div>
                      {idx < steps.length - 1 && (
                        <div 
                          className="timeline-connector-simple"
                          style={{ 
                            background: isPassed ? step.color : "rgba(255,255,255,0.1)"
                          }}
                        ></div>
                      )}
                    </div>
                    
                    <div className="timeline-content-simple">
                      <div className="timeline-icon-simple">
                        <Icon size={20} />
                      </div>
                      <div className="timeline-text-simple">
                        <div className="timeline-title-simple">{step.title}</div>
                        <div className="timeline-desc-simple">{step.shortDesc}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="how-cta">
          <div className="how-cta-content">
            <Heart size={20} />
            <span>Ready to start your journey?</span>
            <button className="how-cta-btn">
              Let's Talk
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;