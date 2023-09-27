'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import logo from '../../assets/imgs/logo.svg';
import useScreenSize from '@/utils/useScreenSize';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import './styles.css';

export default function Header() {
  const [windowHash, setWindowHash] = useState(window.location.hash);
  const [windowScrollY, setWindowScrollY] = useState(window.scrollY);

  const screenSize = useScreenSize();

  window.addEventListener('scroll', () => setWindowScrollY(window.scrollY));
  window.addEventListener('hashchange', () =>
    setWindowHash(window.location.hash),
  );

  const handleLinkActivation = () => {
    return {
      home: windowScrollY < 734 || windowHash === '' || windowHash === '#',
      about:
        (windowScrollY >= 734 && windowScrollY < 1500) ||
        windowHash === '#about',
      tech:
        (windowScrollY >= 1500 && windowScrollY < 1990) &&
        windowHash === '#tech',
      courses:
        (windowScrollY >= 1990 && windowScrollY < 2620) ||
        windowHash === '#courses',
      projects: windowScrollY >= 2620 || windowHash === '#projects',
    };
  };

  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle');
    
  }, [windowScrollY]);

  return (
    <header className="header_area" id="header">
      <div className="main_menu">
        <nav
          className={
            screenSize.width >= 768
              ? `navbar navbar-expand-md fixed-top bg-white px-sm-3 nav-f1 ${
                  windowScrollY >= 130 ? 'nav-shadow' : 'no-shadow'
                }`
              : 'navbar navbar-expand-md fixed-top navbar-dark bg-dark px-sm-3'
          }
        >
          <div className="container-fluid my-1">
            <a className="navbar-brand custom-brand" href="#">
              <Image src={logo} alt="Cleriston" width={140} />
            </a>
            <button
              className="navbar-toggler custom-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarToggler"
              aria-controls="navbarToggler"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarToggler"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className={`nav-link ${
                      handleLinkActivation().home ? 'active' : ''
                    }`}
                    href="#"
                  >
                    HOME
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${
                      handleLinkActivation().about ? 'active' : ''
                    }`}
                    href="#about"
                  >
                    ABOUT
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${
                      handleLinkActivation().tech ? 'active' : ''
                    }`}
                    href="#tech"
                  >
                    TECHS
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${
                      handleLinkActivation().courses ? 'active' : ''
                    }`}
                    href="#courses"
                  >
                    COURSES
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${
                      handleLinkActivation().projects ? 'active' : ''
                    }`}
                    href="#portfolio"
                  >
                    PROJECTS
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
