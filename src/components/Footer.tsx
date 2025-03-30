import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/yujisatojr" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/emmanuel-matewere-b5a39218b/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>Designed & built by <a href="" target="_blank" rel="noreferrer">Emmanuel Matewere</a> 2025</p>
    </footer>
  );
}

export default Footer;