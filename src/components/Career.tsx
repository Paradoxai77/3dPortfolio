import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer Intern</h4>
                <h5>Innovation Hacks</h5>
              </div>
              <h3>AUG 2026 - NOW</h3>
            </div>
            <p>
              Troubleshooted technical issues, maintained strong education in latest tech, and implemented firewalls/security measures.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Web Dev Intern</h4>
                <h5>Ateion</h5>
              </div>
              <h3>JUN 2026 - NOW</h3>
            </div>
            <p>
              Developed web applications, integrated back-end services, and conducted comprehensive testing and debugging.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Technical Member</h4>
                <h5>Club ZEN & CESA</h5>
              </div>
              <h3>SEP 2025 - NOW</h3>
            </div>
            <p>
              Coordinated technical lectures, hands-on workshops, and contributed to the design of student projects in web dev and automation.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Team Lead Researcher</h4>
                <h5>RCP R&D Team</h5>
              </div>
              <h3>APR 2026 - JUL 2026</h3>
            </div>
            <p>
              Led investigations into zero-day exploits, integrated SIEM/SOAR platforms, and established standardized SOC playbooks.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Campus Ambassador</h4>
                <h5>Jyesta & Teachnook</h5>
              </div>
              <h3>JAN 2026 - MAR 2026</h3>
            </div>
            <p>
              Engaged students through informative events and increased engagement with technology platforms via targeted outreach.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
