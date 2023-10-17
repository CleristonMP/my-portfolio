'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import ProjectModal from './ProjectModal';
import getImgsFromFolder from '@/assets/imgs/projects';

import './styles.css';

export default function Portfolio() {
  const [projectsUrls, setProjectsUrls] = useState<any>({});
  const [projectsFirstImg, setProjectsFirstImg] = useState<any[]>([]);
  const [projectTitles, setProjectTitles] = useState<string[]>([]);
  const [modalChoice, setModalChoice] = useState(projectTitles[0] || '');

  useEffect(() => {
    const projects: any = getImgsFromFolder();

    setProjectsUrls(projects);
    setProjectTitles(Object.keys(projects));

    const firstImgUrlFromEachFolder: string[] = [];
    for (let key in projects) {
      firstImgUrlFromEachFolder.push(
        require('@/assets/imgs/projects' + projects[key].at(0).substring(1)),
      );
    }
    setProjectsFirstImg(firstImgUrlFromEachFolder);
  }, []);

  function handleImgClick(index: number, event: any): void {
    event.preventDefault();
    setModalChoice(projectTitles[index]);
  }

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
            {projectsFirstImg &&
              projectsFirstImg.map((item, index) => (
                <div className="col-lg-4 col-md-6" key={index}>
                  <div className="project_box">
                    <div className="single_project">
                      <Image
                        src={item}
                        alt={projectTitles[index]}
                        className="img-fluid w-100"
                        data-bs-toggle="modal"
                        data-bs-target="#projectModal"
                        onClick={event => handleImgClick(index, event)}
                      />
                    </div>
                    <div className="short_info">
                      <h4>{projectTitles[index]}</h4>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {projectsUrls &&
        Object.keys(projectsUrls).map((_item, index) => (
          <ProjectModal
            key={index}
            projectTitle={modalChoice}
            imgsUrls={projectsUrls[modalChoice]}
          />
        ))}
    </section>
  );
}
