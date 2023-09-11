'use client';
import React from 'react';
import Image from 'next/image';
import banner from '../../assets/imgs/home-right.png';

import './styles.css';

export default function Presentation() {
  return (
    <section className="home_banner_area" id="presentation">
      <div className="banner_inner">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="banner_content">
                <h3 className="text-uppercase">Hello</h3>
                <h1 className="text-uppercase">I am Cleriston Pereira</h1>
                <h5 className="text-uppercase">Full stack web developer</h5>
                <div className="d-flex align-items-center">
                  <a className="btn btn-primary my-btn custom-btn" href="#">
                    <span>Hire Me</span>
                  </a>
                  <a className="btn btn-primary tr-bg" href="#">
                    <span>Get CV</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="home_right_img">
                <Image src={banner} alt="Cleriston avatar" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
