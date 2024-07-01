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
              ● Developed and deployed a working prototype using Streamlit, Heroku, HTML, and CSS to showcase in a startup fair
            </p>
          </div>
          <a href="https://precedent.streamlit.app/" rel="noreferrer">
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
