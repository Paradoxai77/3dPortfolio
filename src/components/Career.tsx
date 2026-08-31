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
                <h4>Full Stack Web Developer</h4>
                <h5>Ateion</h5>
              </div>
              <h3>2026-NOW</h3>
            </div>
            <p>
              Implementing robust UI features and onboarding flows for modern web applications.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Team Lead Researcher</h4>
                <h5>REDCYBERFOX LLP</h5>
              </div>
              <h3>MAY 2026 - JUN 2026</h3>
            </div>
            <p>
              Directed a research team to formulate technical reports for maritime cybersecurity and incident response in collaboration with AA Oceania.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Technical Member</h4>
                <h5>Club ZEN & CESA</h5>
              </div>
              <h3>2026-NOW</h3>
            </div>
            <p>
              Developing tech projects, organizing events, and serving as an outreach leader for the computer engineering department.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Campus Ambassador</h4>
                <h5>Jyesta, Teachnook, & Acmegrade</h5>
              </div>
              <h3>2026-NOW</h3>
            </div>
            <p>
              Drove awareness of professional courses, promoted bootcamps, and led outreach activities on campus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
