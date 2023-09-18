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
              <h2>quality work Recently done project</h2>
            </div>
          </div>
        </div>
        <div className="filters-content">
          <div className="row portfolio-grid justify-content-center">
            <div className="col-lg-4 col-md-6 all latest">
              <div className="portfolio_box">
                <div className="single_portfolio">
                  <Image
                    src={portfImgs.p1}
                    alt=""
                    className="img-fluid w-100"
                  />
                </div>
                <div className="short_info">
                  <h4>
                    <a href="portfolio-details.html">minimal design</a>
                  </h4>
                  <p>Animated, portfolio</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 all popular">
              <div className="portfolio_box">
                <div className="single_portfolio">
                  <Image
                    src={portfImgs.p2}
                    alt=""
                    className="img-fluid w-100"
                  />
                </div>
                <div className="short_info">
                  <h4>
                    <a href="portfolio-details.html">Paint wall</a>
                  </h4>
                  <p>Animated, portfolio</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 all latest">
              <div className="portfolio_box">
                <div className="single_portfolio">
                  <Image
                    src={portfImgs.p3}
                    alt=""
                    className="img-fluid w-100"
                  />
                </div>
                <div className="short_info">
                  <h4>
                    <a href="portfolio-details.html">female light</a>
                  </h4>
                  <p>Animated, portfolio</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 all popular">
              <div className="portfolio_box">
                <div className="single_portfolio">
                  <Image
                    src={portfImgs.p4}
                    alt=""
                    className="img-fluid w-100"
                  />
                </div>
                <div className="short_info">
                  <h4>
                    <a href="portfolio-details.html">fourth air</a>
                  </h4>
                  <p>Animated, portfolio</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 all following">
              <div className="portfolio_box">
                <div className="single_portfolio">
                  <Image
                    src={portfImgs.p5}
                    alt=""
                    className="img-fluid w-100"
                  />
                </div>
                <div className="short_info">
                  <h4>
                    <a href="portfolio-details.html">together sign</a>
                  </h4>
                  <p>Animated, portfolio</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 all upcoming">
              <div className="portfolio_box">
                <div className="single_portfolio">
                  <Image
                    src={portfImgs.p6}
                    alt=""
                    className="img-fluid w-100"
                  />
                </div>
                <div className="short_info">
                  <h4>
                    <a href="portfolio-details.html">multiply fowl</a>
                  </h4>
                  <p>Animated, portfolio</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 all upcoming following">
              <div className="portfolio_box">
                <div className="single_portfolio">
                  <Image
                    src={portfImgs.p7}
                    alt=""
                    className="img-fluid w-100"
                  />
                </div>
                <div className="short_info">
                  <h4>
                    <a href="portfolio-details.html">green heaven</a>
                  </h4>
                  <p>Animated, portfolio</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 all following">
              <div className="portfolio_box">
                <div className="single_portfolio">
                  <Image
                    src={portfImgs.p8}
                    alt=""
                    className="img-fluid w-100"
                  />
                </div>
                <div className="short_info">
                  <h4>fly male</h4>
                  <p>Animated, portfolio</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 all upcoming">
              <div className="portfolio_box">
                <div className="single_portfolio">
                  <Image
                    src={portfImgs.p9}
                    alt=""
                    className="img-fluid w-100"
                  />
                </div>
                <div className="short_info">
                  <h4>
                    <a href="portfolio-details.html">season face</a>
                  </h4>
                  <p>Animated, portfolio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
