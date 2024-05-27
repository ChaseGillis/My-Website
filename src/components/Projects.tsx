import React from 'react';

const Projects: React.FC = () => {
  return (
    <div className="projimg">
      <img src={`${process.env.PUBLIC_URL}/leftHill.png`}  alt="Imag 1" className="img1" />
      <img src={`${process.env.PUBLIC_URL}/rightHill.png`}  alt="Imag 2" className="img2" />
      <br/><br/><br/>
      <img src={`${process.env.PUBLIC_URL}/PParser.gif`}  alt="gif" className="pparse" /><p>
      <h2>Precedent Parser</h2><br></br>
      ● Led a team to create a web scraper and website using Python, aiding legal research for precedent cases<br></br><br></br>
      ● Utilized Open-AI to search scraped data, providing citations, summaries, probabilities, and case strategies<br></br><br></br>
      ● Developed an interactive prototype with Streamlit to demonstrate this concept for an NYU startup competition
      </p></div>
  );
};

export default Projects;
