import React from 'react';
import Image from 'next/image';
import certificates from '@/assets/imgs/certificates';

import './styles.css';

export default function Course() {
  return (
    <section id="courses" className="courses_area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div className="courses_intro">
              <h2 className="courses_title">Courses taken</h2>
              <p>
                Below are listed some of the major courses I have already
                completed.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {certificates &&
            certificates.map(cert => (
              <div key={cert.id} className="col-lg-4 col-md-6">
                <div className="course_item">
                  <div className="cert-img">
                    <Image src={cert.certSrc} alt={cert.caption} />
                  </div>
                  <h4>{cert.caption}</h4>
                  <p className="completion-date">
                    Completion date: {cert.completionDate}
                  </p>
                  <p className="course-load">
                    Course load: {cert.courseLoad} hours
                  </p>
                  <details>
                    <summary>See more</summary>
                    <dl>
                      {cert.topics.map(topic => (
                        <div key={Math.random()}>
                          <dt>{topic.subject}</dt>
                          <dd>{topic.description}</dd>
                        </div>
                      ))}
                    </dl>
                  </details>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
