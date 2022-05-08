import React from 'react';
import './about.css';
import './about2.css';
import './about3.css';

import ME from '../../assets/Remini202108041441113083.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__image">
            <img src={ME} alt="about Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article id='car' className="about__card">
              <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <small>1 Year Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon"/>
              <h5>Clients</h5>
              <small>3+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon"/>
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>

          </div>
          <p>

ITI graduate specialized in Mearn full stack eager to take a challenging role as Front End Web Developer in a highly technical company where my skills are professionally applied in Front-End Web Development HTML 5, CSS 3, JavaScript, ES6, Bootstrap 5, JQuery, SCSS, JSON, AJAX, Typescript, Angular and React and use these skills in providing quality service to the company.</p>
          <a href="#contact" className='btn btn-primary aboutBtn'>Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
