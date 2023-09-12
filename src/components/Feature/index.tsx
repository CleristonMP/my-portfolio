import React from 'react';
import Image from 'next/image';
import ftImgs from '@/assets/imgs/features';

import './styles.css';

export default function Feature() {
  return (
    <section id='feature' className="features_area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div className="feature_title">
              <h2>service offers </h2>
              <p>
                Is give may shall likeness made yielding spirit a itself togeth
                created after sea is in beast beginning signs open god
                you&#39;re gathering ithe
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="feature_item">
              <Image src={ftImgs.wpDev} alt="" />
              <h4>Wp developing</h4>
              <p>
                Creeping for female light years that lesser can&#39;t evening
                heaven isn&#39;t bearing tree
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="feature_item">
              <Image src={ftImgs.uiUxDes} alt="" />
              <h4>UI/ux design</h4>
              <p>
                Creeping for female light years that lesser can&#39;t evening
                heaven isn&#39;t bearing tree
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="feature_item">
              <Image src={ftImgs.webDes} alt="" />
              <h4>Web design</h4>
              <p>
                Creeping for female light years that lesser can&#39;t evening
                heaven isn&#39;t bearing tree
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="feature_item">
              <Image src={ftImgs.seoOpt} alt="" />
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
