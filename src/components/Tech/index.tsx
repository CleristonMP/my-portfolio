'use client';
import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import techImgs from '@/assets/imgs/techs';

import './styles.css';

export default function Tech() {
  const getExperienceYears = () => {
    const initialDate = new Date('2019-12-01').getTime();
    const today = Date.now();
    return (today - initialDate) / 1000 / 3600 / 24 / 365;
  };

  return (
    <section id="tech" className="tech_area">
      <div className="container">
        <div className="mb-4 mb-sm-5">
          <h2 className="text-center text-uppercase mb-0 tech-title">
            technologies used
          </h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="row">
              {techImgs &&
                techImgs.map(img => (
                  <div key={img.id} className="d-flex justify-content-center col-lg-4 col-md-4 col-sm-6 mb-5">
                    <div className="single-tech-item">
                      <Image src={img.imgSrc} alt={img.caption} height={100} />
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="offset-lg-2 col-lg-4 col-md-6 mt-4 mt-sm-5">
            <div className="my-info">
              <div className="d-flex align-items-center mb-5">
                <span className="txt-large">
                  {getExperienceYears().toFixed(1)}
                </span>
                <span className="txt-small">Years Experience</span>
              </div>
              <div className="contact d-flex align-items-center">
                <div>
                  <FontAwesomeIcon icon={faPhone} className="phone-icon" />
                </div>
                <div className="ms-3">
                  <p>contact me</p>
                  <h3>+55 98 9 8199 9361 </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
