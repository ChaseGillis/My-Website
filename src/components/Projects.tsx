import React from 'react';

const Projects: React.FC = () => {
  return (
    <div className="projectWrapper">
      <div className="content2">
        <div className="text">
          <h2>Precedent Parser</h2>
          <p>
            ● Led a team to create a web scraper and website using Python and HTML/CSS, aiding legal research for precedent cases<br/><br/>
            ● Utilized Open-AI and ScrapeOPS API's to search data, providing citations, summaries, probabilities, and case strategies
          </p>
        </div>
        <a href="https://precedent.streamlit.app/" rel="noreferrer">
          <img src={`${process.env.PUBLIC_URL}/PParse Window.png`} alt="win" className="pparse" />
          <div className="project-info">
            <p><b>Click the image above to demo!</b></p>
          </div>
        </a>
      </div>

      <div className="content2">
        <a href="https://alg-trading.streamlit.app/" rel="noreferrer">
          <img src={`${process.env.PUBLIC_URL}/alg-trading.png`} alt="win" className="pparse" />
          <div className="project-info">
            <p><b>Click the image above to demo!</b></p>
          </div>
        </a>
        <div className="text"> {/* Move text div to the right side of the image */}
          <h2>Pairwise Trading Algorithm and Engine</h2>
          <p>
            ● Developed Full-Stack trading engine and strategy using correlation, cointegration, stationarity, Alpaca API, and Streamlit<br/><br/>
            ● Created visualizations for price ratios, dynamic moving averages, z-scores, and cumulative returns that average 15%
          </p>
        </div>
      </div>

      <div className="content2">
        <div className="text">
          <h2>Bicoin Forecast LSTM Model</h2>
          <p>
            ● Designed an LSTM neural network model to predict Bitcoin prices and ROI for a tournament hosted by Trilemma Capital<br/><br/>
            ● Trained my model on historical closing prices, optimized with Adam and mean squared error loss function over 100 epochs
          </p>
        </div>
        <a href="https://github.com/ChaseGillis/LSTM-Model" rel="noreferrer">
          <img src={`${process.env.PUBLIC_URL}/bitcoin.png`} alt="win" className="pparse" />
        </a>
      </div>
      </div>
  );
};

export default Projects;
