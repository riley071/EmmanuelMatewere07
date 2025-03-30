import React from "react";
import blog from '../assets/images/blog.png';

import coun from '../assets/images/coun.png';
import port from '../assets/images/port.png';
import member from '../assets/images/member.png';
import desk from '../assets/images/desk.jpg';
import wild from '../assets/images/wild.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://riley071.github.io/Camping-Site-Multipage-Website-/" target="_blank" rel="noreferrer"><img src={wild} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://riley071.github.io/Camping-Site-Multipage-Website-/" target="_blank" rel="noreferrer"><h2>Wild Swimming and Camping Site </h2></a>
                <p>An online website to help them promote its facilities to those that enjoy camping and swimming the wilds.</p>
            </div>
            <div className="project">
                <a href="https://github.com/riley071/Help-Desk-Management-System-php-" target="_blank" rel="noreferrer"><img src={desk} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/riley071/Help-Desk-Management-System-php-" target="_blank" rel="noreferrer"><h2>Help-Desk-Management-System-php</h2></a>
                <p>A help desk management system is a software application that allows organizations to manage and track customer support requests.</p>
            </div>
            <div className="project">
                <a href="https://github.com/riley071/Membership-Managment-system-php" target="_blank" rel="noreferrer"><img src={member} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/riley071/Membership-Managment-system-php" target="_blank" rel="noreferrer"><h2>Membership Managment system php</h2></a>
                <p>Simple Membership System is developed using PHP, CSS, Bootstrap, and JavaScript. Talking about the project, it contains an admin side where a user can manage all the members and clubs record easily.</p>
            </div>
            <div className="project">
                <a href="https://riley071.github.io/my-protifilo-website/" target="_blank" rel="noreferrer"><img src={port} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://riley071.github.io/my-protifilo-website/" target="_blank" rel="noreferrer"><h2>Portifilo Site</h2></a>
                <p>A responsive and stylish portfolio website built using Bootstrap 5, showcasing my skills and projects.</p>

            </div>
            <div className="project">
                <a href="" target="_blank" rel="noreferrer"><img src={coun} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="" target="_blank" rel="noreferrer"><h2>Counselling Services System </h2></a>
                <p>The primary purpose of this project is establishing a counseling services system for Vintage Wellness Centre to eliminate the challenges that the organization was having at the expense of its current system..</p>
            </div>
                     
            <div className="project">
                <a href="https://riley071.github.io/Blog-application/" target="_blank" rel="noreferrer"><img src={blog} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://riley071.github.io/Blog-application/" target="_blank" rel="noreferrer"><h2>Blog Application</h2></a>
                <p>Blog Application is an application where user can add a new blog, edit it, delete it as well as view other blogs and make changes in them. Application uses LocalStorage, the localStorage object stores data with no expiration date.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;