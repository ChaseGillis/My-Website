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
                  <h3><i>Software Engineer & Data Scientist</i></h3><br/>
                  <p>● Designed a profitability model using SQL, Python, and Power BI to rank accounts and advise changes, boosting revenue by 10%<br/><br/>
                    ● Developed a cybersecurity system for file integrity verification through hash comparisons, detecting tampering in ~1% of files<br/><br/>
                    ● Implemented Python archive system to relocate files older than 7 years, freeing 1 TB of disk space in a day, boosting efficiency</p>
              </div>
              </div>
              <div className="timeline-container right">
              <div className="content">
              <h2>JPMORGAN CHASE & CO. VIRTUAL EXPERIENCE PROGRAM</h2>
                  <h3><i>Quantitative Researcher</i></h3>
                  <p><br/>● Built a natural gas price forecast model, merging linear and sinusoidal regression for trend visualization, achieving 90% accuracy<br/><br/>
                        ● Priced a commodity storage contract by analyzing trading schedules, fees, and cash flow, optimizing contract value by 10%<br/><br/>
                        ● Estimated default probabilities and bucketed FICO scores using logistic regression and MSE, improving risk assessment by 10%</p>
              </div></div>
              <div className="timeline-container left">
                    <div className="content">
          <h2>NYU 404 FITNESS</h2>
                  <h3><i>Supervisor & Data Scientist</i></h3>
                  <p><br/>● Optimized gym hours and staffing with Python and Pandas, aligning schedules with budget constraints and operational needs<br/><br/>
                          ● Reduced theft by ~75% through a strategic anti-theft campaign involving improved signage, rotation timing, and staff relocation<br/><br/>
                          ● Led a team of 50 attendants as the youngest supervisor; duties included managing hiring/training, scheduling, and enforcing rules</p></div>
</div>
              <div className="timeline-container right">
              <div className="content">
          <h2>SCALE AI</h2>
                  <h3><i>Software Engineer - AI Consultant</i></h3>
                  <p><br/>● Reviewed AI-generated code in various languages for compliance with company standards, ensuring quality and accuracy<br/><br/>
                        ● Enhanced AI model performance by implementing efficient algorithms, improving content generation accuracy by ~12%</p></div></div>
                    <div className="timeline-container left">
                    <div className="content">
          <h2>TECH@NYU</h2>
                  <h3><i>Project Lead</i></h3>
                  <p><br/>● Mentored a 12-student cohort (5% acceptance rate) in four software engineering projects, enhancing programming skills<br/><br/>
                          ● Initiated development of a website to archive and showcase past projects, fostering community and alumni engagement<br/><br/>
                          ● Organized office visits to companies like Epic Games and Netflix for practical learning experiences</p></div>
</div>
                    <div className="timeline-container right">
                    <div className="content">
          <h2>LYFT FORAGE JOB SIMULATION</h2>
                  <h3><i>Back-End Software Engineer</i></h3>
                  <p><br/>● Refactored a complex codebase, drafting a UML class diagram for system reorganization<br/><br/>
                          ● Implemented unit tests and added tire-wear detection for service decisions using test-driven development</p></div>
              </div>
              
          <img src={`${process.env.PUBLIC_URL}/fish.png`} alt="fish" className="fish" /></div>
      </div><div className="TechStack">
        <div className="techHalf">
              <ion-icon name="logo-python" title="Python"></ion-icon>
              <img src={`${process.env.PUBLIC_URL}/Java icon.svg`} alt="Java Icon" />
              <img src={`${process.env.PUBLIC_URL}/C++.png`} alt="C++ Icon" />
              <ion-icon name="logo-javascript" title="JavaScript"></ion-icon>
              <img src={`${process.env.PUBLIC_URL}/sql icon.png`} alt="SQL Icon" />
              </div>
              <div className="techHalf">
              <ion-icon name="logo-html5" title="HTML5"></ion-icon>
              <ion-icon name="logo-css3" title="CSS3"></ion-icon>
              <ion-icon name="logo-react" title="React"></ion-icon>
              <ion-icon name="logo-nodejs" title="Node.js"></ion-icon>
              <ion-icon name="logo-tux" title="Linux"></ion-icon></div>
          </div></>
  );
};

export default Timeline;
