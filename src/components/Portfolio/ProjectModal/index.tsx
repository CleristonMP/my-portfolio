'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import './styles.css';

type Props = {
  projectTitle: string;
  imgsUrls: string[];
};

export default function ProjectModal({ projectTitle, imgsUrls }: Props) {
  const [projectImgs, setProjectImgs] = useState<any[]>([]);
  useEffect(() => {
    const imgs: any[] = [];
    imgsUrls &&
      imgsUrls.forEach(item => {
        imgs.push(require('@/assets/imgs/projects' + item.substring(1)));
      });
    setProjectImgs(imgs);
  }, [imgsUrls]);

  return (
    <div
      className="modal fade"
      id="projectModal"
      tabIndex={-1}
      aria-labelledby="projectModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-xl">
        <div className="modal-content">
          <div className="modal-body">
            <div className="btn-close-ctr">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            {/* Carousel */}
            <div id="projectCarousel" className="carousel slide">
              <div className="carousel-indicators">
                {projectImgs &&
                  projectImgs.map((img, index) => (
                    <button
                      key={Math.random()}
                      type="button"
                      data-bs-target="#projectCarousel"
                      data-bs-slide-to={`${index}`}
                      className="active"
                      aria-current="true"
                      aria-label={`Slide ${index + 1}`}
                    ></button>
                  ))}
              </div>

              <div className="carousel-inner">
                {projectImgs &&
                  projectImgs.map((img, index) => (
                    <div key={Math.random()} className="carousel-item active">
                      <Image
                        src={img}
                        alt={`${projectTitle} - ${index + 1}`}
                        className="d-block w-100 h-auto"
                      />
                    </div>
                  ))}
              </div>

              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#projectCarousel"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#projectCarousel"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
