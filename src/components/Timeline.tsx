import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Sep 2023 - Jun 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">ModriTech Solutions</h4>
            <p>
              Developed and deployed websites and systems, managed both design and coding processes, and built automated reporting tools using Python and SQL.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Sep 2022 - Apr 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Junior Web Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Grafix Resolution Limited</h4>
            <p>
              Assisted in website development, conducted quality assessments of graphic materials, and supported database processing activities.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      
      <div className="items-container">
        <h1>Education</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: '#f3f3f3', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  #f3f3f3' }}
            date="2023"
            iconStyle={{ background: '#0073e6', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">BSc (Hons) in Computing Information Systems</h3>
            <h4 className="vertical-timeline-element-subtitle">National College of Information Technology (NACIT)</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2021-2022"
            iconStyle={{ background: '#0073e6', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Advanced Diploma in Business Information Technology</h3>
            <h4 className="vertical-timeline-element-subtitle">National College of Information Technology (NACIT)</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2020-2021"
            iconStyle={{ background: '#0073e6', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Diploma in Business Information Technology</h3>
            <h4 className="vertical-timeline-element-subtitle">National College of Information Technology (NACIT)</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2017"
            iconStyle={{ background: '#0073e6', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Malawi School Certificate of Education (MSCE)</h3>
            <h4 className="vertical-timeline-element-subtitle">Michiri View Boys Secondary School(High School)</h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
