import React from 'react';
import Image from 'next/image';
import portfImgs from '@/assets/imgs/portfolio';

import './styles.css';

export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="portfolio_title text-left">
              <h2>last projects carried out</h2>
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
                  />
                </div>
                <div className="short_info">
                  <h4>
                    <a href="#">minimal design</a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="project_box">
                <div className="single_project">
                  <Image
                    src={portfImgs.p2}
                    alt=""
                    className="img-fluid w-100"
                  />
                </div>
                <div className="short_info">
                  <h4>
                    <a href="#">Paint wall</a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="project_box">
                <div className="single_project">
                  <Image
                    src={portfImgs.p3}
                    alt=""
                    className="img-fluid w-100"
                  />
                </div>
                <div className="short_info">
                  <h4>
                    <a href="#">female light</a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="project_box">
                <div className="single_project">
                  <Image
                    src={portfImgs.p4}
                    alt=""
                    className="img-fluid w-100"
                  />
                </div>
                <div className="short_info">
                  <h4>
                    <a href="#">fourth air</a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="project_box">
                <div className="single_project">
                  <Image
                    src={portfImgs.p5}
                    alt=""
                    className="img-fluid w-100"
                  />
                </div>
                <div className="short_info">
                  <h4>
                    <a href="#">together sign</a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="project_box">
                <div className="single_project">
                  <Image
                    src={portfImgs.p6}
                    alt=""
                    className="img-fluid w-100"
                  />
                </div>
                <div className="short_info">
                  <h4>
                    <a href="#">multiply fowl</a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="project_box">
                <div className="single_project">
                  <Image
                    src={portfImgs.p7}
                    alt=""
                    className="img-fluid w-100"
                  />
                </div>
                <div className="short_info">
                  <h4>
                    <a href="#">green heaven</a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="project_box">
                <div className="single_project">
                  <Image
                    src={portfImgs.p8}
                    alt=""
                    className="img-fluid w-100"
                  />
                </div>
                <div className="short_info">
                  <h4>fly male</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="project_box">
                <div className="single_project">
                  <Image
                    src={portfImgs.p9}
                    alt=""
                    className="img-fluid w-100"
                  />
                </div>
                <div className="short_info">
                  <h4>
                    <a href="#">season face</a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
