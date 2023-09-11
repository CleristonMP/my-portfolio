import React from 'react';
import Image from 'next/image';
import aboutImg from '../../assets/imgs/about-me.png';

import './styles.css';

export default function About() {
  return (
    <section id="about" className="about_area section_gap">
      <div className="container">
        <div className="row justify-content-start align-items-center">
          <div className="col-lg-5">
            <div className="about_img">
              <Image src={aboutImg} alt="About image" />
            </div>
          </div>

          <div className="offset-lg-1 col-lg-5">
            <div className="main_title text-left">
              <h2>let&apos;s introduce about myself</h2>
              <p>
                Whose given. Were gathered. There first subdue greater. Bearing
                you Whales heaven midst their. Beast creepeth. Fish days.
              </p>
              <p>
                Is give may shall likeness made yielding spirit a itself
                together created after sea is in beast beginning signs open god
                you&apos;re gathering whose gathered cattle let. Creature whales
                fruit unto meat the life beginning all in under give two.
              </p>
              <a className="btn btn-primary custom-btn" href="#">
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
