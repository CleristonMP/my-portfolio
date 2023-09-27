import React from 'react';
import Image from 'next/image';
import aboutImg from '@/assets/imgs/about.svg';

import './styles.css';

export default function About() {
  return (
    <section id="about" className="about_area">
      <div className="container">
        <div className="row justify-content-start align-items-center">
          <div className="col-lg-5">
            <div className="about_img">
              <Image src={aboutImg} alt="About image" />
            </div>
          </div>

          <div className="offset-lg-1 col-lg-5">
            <div className="about_title text-left">
              <h2>Let me introduce myself</h2>
              <p>
                I have always had an affinity with the IT area, although I
                entered the port area. Even working as a Naval Technical
                Inspector, I also worked in the company&apos;s IT area, being
                responsible for the assembly and maintenance of computers, the
                LAN network, development of spreadsheets and databases to
                facilitate administrative routines.
              </p>
              <p>
                After 14 years of port career, I decided to change my profession
                to work in the area that has always caught my attention and that
                will provide me with more skills related to my vocation.
              </p>
              <p>
                At 34 years old, I had the courage to take risks in another
                professional field, developed the discipline to study alone, as
                self-taught, and determination to achieve my goal.
              </p>
              <p>
                I am currently developing applications in JAVA &#40;backend&#41; and
                JavaScript &#40;frontend&#41;, as well as HTML and CSS. With the
                knowledge I acquired, I was able to develop the website of the
                company where I currently work and promote it. I continue to
                study and develop projects to practice the knowledge acquired
                and improve it.
              </p>
             {/* { <a className="btn btn-primary custom-btn" href="#">
                <span>Download CV</span>
              </a>} */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
