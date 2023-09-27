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
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="row">
              {techImgs &&
                techImgs.map(img => (
                  <div key={img.id} className="col-lg-4 col-md-4 col-sm-6">
                    <div className="single-tech-item d-table">
                      <div className="d-table-cell text-center">
                        <Image
                          src={img.imgSrc}
                          alt={img.caption}
                          height={100}
                        />
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="offset-lg-2 col-lg-4 col-md-6">
            <div className="client-info">
              <div className="d-flex align-items-center mb-50">
                <span className="txt-large">
                  {getExperienceYears().toFixed(1)}
                </span>
                <span className="txt-small">Years Experience</span>
              </div>
              <div className="call-now d-flex">
                <div>
                  <FontAwesomeIcon icon={faPhone} className="phone-icon" />
                </div>
                <div className="ml-15">
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
