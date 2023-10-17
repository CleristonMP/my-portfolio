'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import portfImgs from '@/assets/imgs/portfolio';
import ProjectModal from './ProjectModal';
import getImgsFromFolder from '@/assets/imgs/projects';

import './styles.css';

export default function Portfolio() {
  const [projectsImgs, setProjectsImgs] = useState<any[]>([]);
  useEffect(() => {
    const projects: any = getImgsFromFolder();
    const firstImgUrlFromEachFolder: string[] = [];
    for (let key in projects) {
      firstImgUrlFromEachFolder.push( require(
        '@/assets/imgs/projects' + projects[key].at(0).substring(1))
      );
    }
    setProjectsImgs(firstImgUrlFromEachFolder);
  }, []);

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

              {projectsImgs &&
                projectsImgs.map(item => (
                  <div className="project_box" key={Math.random()}>
                    <div className="single_project">
                      <Image
                        src={item}
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
                ))}

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
