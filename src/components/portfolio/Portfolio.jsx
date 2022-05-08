import React from 'react';
import './portfolio.css';
import './portfolio2.css';

import Imag1 from '../../assets/Screenshot_٢٠٢٢-٠٤-٠١-١١-٤٠-١١-1.png';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className=" portfolio__image">
            <img src={Imag1} alt="" />
            <h3>This is titel</h3>
            <div className="portfolio__cta">
            <a href="" className="btn " target="_blank">
              Github
            </a>
            <a href="" className="btn btn-primary" target="_blank">
              Live Demo 
            </a>
            </div>
          </div>
        </article>

        <article className="portfolio__item">
          <div className=" portfolio__image">
            <img src={Imag1} alt="" />
            <h3>This is titel</h3>
            <div className="portfolio__cta">
            <a href="" className="btn " target="_blank">
              Github
            </a>
            <a href="" className="btn btn-primary" target="_blank">
              Live Demo 
            </a>
            </div>
          </div>
        </article>

        <article className="portfolio__item">
          <div className=" portfolio__image">
            <img src={Imag1} alt="" />
            <h3>This is titel</h3>
            <div className="portfolio__cta">
            <a href="" className="btn " target="_blank">
              Github
            </a>
            <a href="" className="btn btn-primary" target="_blank">
              Live Demo 
            </a>
            </div>
          </div>
        </article>


      </div>
    </section>
  );
};
export default Portfolio ;