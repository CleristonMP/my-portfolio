import React from 'react';
import Image from 'next/image';
import coursesImgs from '@/assets/imgs/courses';

import './styles.css';

export default function Course() {
  return (
    <section id='courses' className="courses_area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div className="courses_title">
              <h2>courses taken</h2>
              <p>
                Below are listed some of the major courses I have already completed.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="course_item">
              <Image src={coursesImgs.wpDev} alt="" />
              <h4>Wp developing</h4>
              <p>
                Creeping for female light years that lesser can&#39;t evening
                heaven isn&#39;t bearing tree
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="course_item">
              <Image src={coursesImgs.uiUxDes} alt="" />
              <h4>UI/ux design</h4>
              <p>
                Creeping for female light years that lesser can&#39;t evening
                heaven isn&#39;t bearing tree
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="course_item">
              <Image src={coursesImgs.webDes} alt="" />
              <h4>Web design</h4>
              <p>
                Creeping for female light years that lesser can&#39;t evening
                heaven isn&#39;t bearing tree
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="course_item">
              <Image src={coursesImgs.seoOpt} alt="" />
              <h4>seo optimize</h4>
              <p>
                Creeping for female light years that lesser can&#39;t evening
                heaven isn&#39;t bearing tree
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
