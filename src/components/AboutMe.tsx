import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <div id="about" className="about-container">
      <div className="profile-image">
        <img src={`${process.env.PUBLIC_URL}/profilePic.jpg`} alt="Profile" className="img-small"/>
      </div>
      <div className="about-text">
        <h2>ABOUT</h2>
        <p>As a senior at New York University pursuing a Bachelor of Arts in Computer Science with a minor in Data Science, I have honed my skills in software engineering and data analysis. My academic journey and real-world experiences have fueled my passion for building fun projects that drive business success and technological advancement.
        <br/><br/>
        I combine my expertise in Python, SQL, Java, and JavaScript with the work ethic and resilience I cultivated through being a student-athlete to tackle real-world problems and create impactful solutions. All of my previous roles, from SWE Consulting to leading a project dedicated to aiding legal research, involved optimizing systems or improving processes, aligning with my ultimate goal of using technology to make an impact.
        <br/><br/>
        When I'm not coding, you can find me working on my Nissan 370Z, or exploring my interests such as fishing, dirtbiking, weight lifting, chess, and spikeball.</p>
      </div>
    </div>
  );
};

export default AboutMe;
