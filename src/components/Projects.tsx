import React from 'react';

const Projects: React.FC = () => {
  return (
    <div className="projectWrapper">
        <div className="hill-images">
          <img src={`${process.env.PUBLIC_URL}/leftHill.png`} alt="Hill 1" className="img1" />
          <img src={`${process.env.PUBLIC_URL}/rightHill.png`} alt="Hill 2" className="img2" />
        </div>
        <div className="content2">
        <div className="text">
            <h2>Precedent Parser</h2>
            <p>
              ● Led a team to create a web scraper and website using Python, aiding legal research for precedent cases<br/><br/>
              ● Utilized Open-AI to search scraped data, providing citations, summaries, probabilities, and case strategies<br/><br/>
              ● Developed an interactive prototype with Streamlit to demonstrate this concept for an NYU startup competition
            </p>
          </div>
          <a href="https://precedent-parser-9862598fa83a.herokuapp.com/" target="_blank">
          <img src={`${process.env.PUBLIC_URL}/PParse Window.png`} alt="win" className="pparse" />
        <div class="project-info">
            <h3>Project Title</h3>
            <p>Description of the project</p>
        </div>
    </a>
        </div>
      </div>
  );
};

export default Projects;
