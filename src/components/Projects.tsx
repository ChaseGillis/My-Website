import React from 'react';

const Projects: React.FC = () => {
  return (
    <div className="projectWrapper">
      <div className="projimg">
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
          <img src={`${process.env.PUBLIC_URL}/PParser.gif`} alt="gif" className="pparse" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
