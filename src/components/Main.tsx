import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://i.postimg.cc/0z55B1V1/Untitled-design-1.png" alt="Avatar" />
        </div>
        
        
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/riley071" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/emmanuel-matewere-b5a39218b" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Emmanuel Matewere</h1>
          <p>Full Stack Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/riley071" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/emmanuel-matewere-b5a39218b" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;