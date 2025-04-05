import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faFirefoxBrowser, faFacebook } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { faComputer, faPaintBrush } from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";

const labelsFirst = [
    "React",
    "JavaScript",
    "PHP",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "MySQL",
    "API Integration",
    "Git",
    "Postman"
];

const labelsSecond = [
    "System Maintenance",
    "Troubleshooting",
    "Microsoft Office Suite"
];

const labelsUIUX = [
    "Wireframing",
    "Prototyping",
    "Figma",
    "Adobe XD",
    "User Research",
    "Design Systems"
];

const labelsDatabase = [
    "SQL",
    "NoSQL",
    "PostgreSQL",
    "MongoDB",
    "Database Optimization",
    "Data Modeling"
];

const labelsMarketing = [
    "SEO",
    "Content Marketing",
    "Google Ads",
    "Social Media Marketing",
    "Email Marketing",
    "Analytics"
];


const labelsSocial = [
    "Facebook",
    "Instagram",
    "Twitter",
    "LinkedIn",
    "YouTube"
   ];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>Experienced in developing and deploying web applications using PHP, React, and MySQL. Strong background in designing, coding, and optimizing websites while ensuring seamless integration with databases and APIs.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tools & Technologies:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faComputer} size="3x"/>
                    <h3>IT Support & System Maintenance</h3>
                    <p>Hands-on experience troubleshooting software and hardware issues, maintaining systems, and ensuring security updates. Proficient in cloud deployment, DevOps processes, and automation of system tasks.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tools & Technologies:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPaintBrush} size="3x"/>
                    <h3>UI/UX Design</h3>
                    <p>Skilled in designing user-friendly interfaces and enhancing user experiences using modern design tools and methodologies.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tools & Technologies:</span>
                        {labelsUIUX.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faFileAlt} size="3x"/>
                    <h3>Database Management</h3>
                    <p>Expertise in managing, optimizing, and securing relational and non-relational databases for efficient data storage and retrieval.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tools & Technologies:</span>
                        {labelsDatabase.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faFacebook} size="3x"/>
                    <h3>Social Media Management</h3>
                    <p>Professional management of social media platforms, including content creation, audience engagement, analytics tracking, and strategy optimization to enhance brand visibility and growth.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tools & Technologies:</span>
                        {labelsSocial.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faFirefoxBrowser} size="3x"/>
                    <h3>Digital Marketing</h3>
                    <p>Experienced in leveraging digital channels to enhance brand visibility, increase engagement, and drive business growth.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tools & Technologies:</span>
                        {labelsMarketing.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
