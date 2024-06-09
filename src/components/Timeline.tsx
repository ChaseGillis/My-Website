import React, {} from 'react';

const Timeline: React.FC = () => {

  return (
    <><div className="timeline" id="resume">
      <div className="timeline-wrapper">
        <div className="resme">
        <img src={`${process.env.PUBLIC_URL}/fisherman.png`} alt="Fisherman" className="fisherman" />
          <div className="line"></div>      </div>
      <div className="exp"><h2>WORK EXPERIENCE</h2></div>
          <div className="timeline-container left">
              <div className="content">
                  <h2>U.S. CENTURY BANK</h2>
                  <h3><i>Software Engineering Intern</i></h3>
                  <p>● Designed profitability model using SQL, Python, and Power BI to rank accounts and suggest changes, increasing revenue<br/><br/>
                    ● Built a cybersecurity system that periodically verifies file integrity using hash comparisons and sends alerts of tampering<br/><br/>
                    ● Developed Python-based archive system to relocate files older than a specified date, optimizing system performance</p>
              </div>
              </div>
              <div className="timeline-container right">
              <div className="content">
              <h2>NYU 404 FITNESS</h2>
                  <h3><i>Supervisor and Data Scientist</i></h3>
                  <p><br/>● Optimized gym hours and staffing schedules using Python, Pandas, and Excel, aligning with budget constraints<br/><br/>
                        ● Initiated anti-theft campaign, reducing theft by up to 50% through strategic signage and staff rotation<br/><br/>
                        ● Selected as the youngest-ever supervisor to coordinate a team of 50+ attendants, handling hiring and scheduling</p>
              </div></div>
              <div className="timeline-container left">
              <div className="content">
          <h2>SCALE AI</h2>
                  <h3><i>Software Engineer - AI Consultant</i></h3>
                  <p><br/>● Conducted reviews of AI-generated content and code, ensuring compliance with company standards<br/><br/>
                        ● Enhanced AI models by identifying efficient algorithms in AI-generated code, improving content accuracy</p></div></div>
                    <div className="timeline-container right">
                    <div className="content">
          <h2>TECH@NYU</h2>
                  <h3><i>Project Lead</i></h3>
                  <p><br/>● Mentored 12 students (5% acceptance rate) in four software engineering projects, enhancing programming skills<br/><br/>
                          ● Initiated development of a website to archive and showcase past projects, fostering community and alumni engagement<br/><br/>
                          ● Organized office visits to companies like Epic Games and Netflix for practical learning experiences</p></div>
</div>
                    <div className="timeline-container left">
                    <div className="content">
          <h2>LYFT FORAGE JOB SIMULATION</h2>
                  <h3><i>Back-End Software Engineer</i></h3>
                  <p><br/>● Refactored a complex codebase, drafting a UML class diagram for system reorganization<br/><br/>
                          ● Implemented unit tests and added tire-wear detection for service decisions using test-driven development</p></div>
              </div>
          <img src={`${process.env.PUBLIC_URL}/fish.png`} alt="fish" className="fish" /></div>
      </div><div className="TechStack">
              <ion-icon name="logo-python" title="Python"></ion-icon>
              <img src={`${process.env.PUBLIC_URL}/Java icon.svg`} alt="Java Icon" />
              <ion-icon name="logo-javascript" title="JavaScript"></ion-icon>
              <img src={`${process.env.PUBLIC_URL}/sql icon.png`} alt="SQL Icon" />
              <ion-icon name="logo-html5" title="HTML5"></ion-icon>
              <ion-icon name="logo-css3" title="CSS3"></ion-icon>
              <ion-icon name="logo-react" title="React"></ion-icon>
              <ion-icon name="logo-nodejs" title="Node.js"></ion-icon>
              <ion-icon name="logo-tux" title="Linux"></ion-icon>
          </div></>
  );
};

export default Timeline;
