'use client';
import React from 'react';
import Image from 'next/image';
import myAvatar from '@/assets/imgs/my-avatar.jpg';

import './styles.css';

export default function Presentation() {
  return (
    <section className="presentation_area" id="presentation">
      <div className="banner_inner">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="banner_content">
                <h3 className="text-uppercase">Hello</h3>
                <h1 className="text-uppercase">I am Cleriston Pereira</h1>
                <h5 className="text-uppercase">Full stack web developer</h5>
                <div className="d-flex align-items-center">
                  <button type='button' className="btn btn-primary my-btn custom-btn">
                    <span>Hire Me</span>
                  </button>
                  <button type='button' className="btn btn-primary tr-bg">
                    <span>Get CV</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="home_right_img">
                <Image src={myAvatar} alt="Cleriston avatar" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
