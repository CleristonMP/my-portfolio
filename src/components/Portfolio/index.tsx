'use client';
import React from 'react';
import Image from 'next/image';
import portfImgs from '@/assets/imgs/portfolio';
import ProjectModal from './ProjectModal';

import './styles.css';

export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="portfolio_title text-left">
              <h2>My projects</h2>
            </div>
          </div>
        </div>
        <div className="portfolio-content">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="project_box">
                <div className="single_project">
                  <Image
                    src={portfImgs.p1}
                    alt=""
                    className="img-fluid w-100"
                    data-bs-toggle="modal"
                    data-bs-target="#projectModal"
                  />
                </div>
                <div className="short_info">
                  <h4>
                    <a href="#">minimal design</a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProjectModal />
    </section>
  );
}
