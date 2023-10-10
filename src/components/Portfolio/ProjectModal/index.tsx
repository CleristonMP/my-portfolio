import React from 'react'
import Image from 'next/image';
import portfImgs from '@/assets/imgs/portfolio';

export default function ProjectModal() {
  return (
      <div
        className="modal fade"
        id="projectModal"
        tabIndex={-1}
        aria-labelledby="projectModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>

              {/* Carousel */}
              <div id="projectCarousel" className="carousel slide">
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#projectCarousel"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#projectCarousel"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#projectCarousel"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <Image
                      src={portfImgs.p2}
                      alt=""
                      className="d-block w-100 h-auto"
                    />
                  </div>
                  <div className="carousel-item">
                    <Image
                      src={portfImgs.p3}
                      alt=""
                      className="d-block w-100 h-auto"
                    />
                  </div>
                  <div className="carousel-item">
                    <Image
                      src={portfImgs.p4}
                      alt=""
                      className="d-block w-100 h-auto"
                    />
                  </div>
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
  )
}
