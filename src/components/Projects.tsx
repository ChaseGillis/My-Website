import React from 'react';

const Projects: React.FC = () => {
  return (
    <div className="projectWrapper">
        <div className="content2">
        <div className="text">
            <h2>Precedent Parser</h2>
            <p>
              ● Led a team to create a web scraper and website using Python, aiding legal research for precedent cases<br/><br/>
              ● Utilized Open-AI to search scraped data, providing citations, summaries, probabilities, and case strategies<br/><br/>
              ● Developed an interactive prototype with Streamlit to demonstrate this concept for an NYU startup competition
            </p>
          </div>
          <a href="https://precedent-parser-9862598fa83a.herokuapp.com/" rel="noreferrer">
          <img src={`${process.env.PUBLIC_URL}/PParse Window.png`} alt="win" className="pparse" />
        <div className="project-info">
            <p><b>Click the image above to demo!</b></p>
        </div>
    </a>
        </div>
      </div>
  );
};

export default Projects;
