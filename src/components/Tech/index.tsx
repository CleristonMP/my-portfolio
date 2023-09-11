'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

import './styles.css';
export default function Tech() {
  const [techImgs, setTechImgs] = useState<any[]>([]);

  useEffect(() => {
    function importAll(r: __WebpackModuleApi.RequireContext) {
      let images: any = {};
      r.keys().map((item: string, index: any) => {
        images[item.replace('./', '')] = r(item);
      });
      return images;
    }

    const images = importAll(
      require.context('../../assets/imgs/techs', false, /\.(png|jpe?g|svg)$/),
    );

    const imgsSet = new Set();
    for (const x in images) {
      imgsSet.add(images[x].default);
    }

    const uniqueImgs: any[] = [];
    imgsSet.forEach(x => uniqueImgs.push(x));

    setTechImgs(uniqueImgs);
  }, []);

  return (
    <section id="tech" className="tech_area section_gap_bottom">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="row">
              {techImgs &&
                techImgs.map(img => (
                  <div
                    key={Math.random()}
                    className="col-lg-4 col-md-4 col-sm-6"
                  >
                    <div className="single-brand-item d-table">
                      <div className="d-table-cell text-center">
                        <Image src={img} alt="About image" />
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="offset-lg-2 col-lg-4 col-md-6">
            <div className="client-info">
              <div className="d-flex mb-50">
                <span className="large">10</span>
                <span className="txt-small">Years Experience Working</span>
              </div>
              <div className="call-now d-flex">
                <div>
                  <FontAwesomeIcon icon={faPhone} className="phone-icon" />
                </div>
                <div className="ml-15">
                  <p>call me now</p>
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