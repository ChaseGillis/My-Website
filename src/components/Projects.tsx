import React from 'react';

const Projects: React.FC = () => {
  return (
    <div className="projectWrapper">
<div className="content2">
        <a href="https://github.com/ChaseGillis/LSTM-Model" rel="noreferrer">
          <img src={`${process.env.PUBLIC_URL}/bitcoin.png`} alt="win" className="pparse" />
        </a>
        <div className="text">
          <h2>Bicoin Forecast LSTM Model</h2>
          <p>
            ● Built an LSTM neural network model to predict Bitcoin prices and ROI for a tournament hosted by Trilemma Capital<br/><br/>
            ● Trained and optimized the model on historical closing prices using Adam optimizer and MSE loss function over 100 epochs
          </p>
        </div>
      </div>

      <div className="content2">
        <div className="text"> {/* Move text div to the right side of the image */}
          <h2>Pairwise Trading Algorithm and Engine</h2>
          <p>
            ● Developed Full-Stack trading engine using correlation, cointegration, and stationarity; integrated with Alpaca API and Streamlit<br/><br/>
            ● Created dynamic visualizations for price ratios, moving averages, and z-scores, achieving an average Sharpe Ratio of 1.48
          </p>
        </div>
        <a href="https://alg-trading.streamlit.app/" rel="noreferrer">
          <img src={`${process.env.PUBLIC_URL}/alg-trading.png`} alt="win" className="pparse" />
          <div className="project-info">
            <p><b>Click the image above to demo!</b></p>
          </div>
        </a>
      </div>

      <div className="content2">
      <a href="https://precedent.streamlit.app/" rel="noreferrer">
          <img src={`${process.env.PUBLIC_URL}/PParse Window.png`} alt="win" className="pparse" />
          <div className="project-info">
            <p><b>Click the image above to demo!</b></p>
          </div>
        </a>
        <div className="text">
          <h2>Precedent Parser</h2>
          <p>
            ● Led a team to develop a web scraper and website using Python and HTML/CSS, enhancing legal research for case precedents<br/><br/>
            ● Utilized OpenAI and ScrapeOPS APIs to fetch data, providing citations, summaries, probabilities, and strategic insights for cases
          </p>
        </div>
      </div>
      </div>
  );
};

export default Projects;
