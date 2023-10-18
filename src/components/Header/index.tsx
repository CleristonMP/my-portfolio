'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import logo from '../../assets/imgs/logo.svg';
import useScreenSize from '@/utils/useScreenSize';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import './styles.css';

export default function Header() {
  const [windowScrollY, setWindowScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('');

  const screenSize = useScreenSize();

  const handleLinkClick = (section: string) => {
    setActiveSection(section);
    scrollToSection(section);
  };

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll('section');

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop - 100 &&
          scrollPosition < sectionTop + sectionHeight - 50
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);

  useEffect(() => {
    const handleUrlAnchorChange = () => {
      const sectionFromUrl = window.location.hash.substring(1);
      setActiveSection(sectionFromUrl);
    };

    window.addEventListener('hashchange', handleUrlAnchorChange);

    return () => {
      window.removeEventListener('hashchange', handleUrlAnchorChange);
    };
  }, []);

  useEffect(() => {
    const handleScrollChange = () => setWindowScrollY(window.scrollY);
    window.addEventListener('scroll', handleScrollChange);
    return () => window.removeEventListener('scroll', handleScrollChange);
  }, [windowScrollY]);

  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle');
  }, []);

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
                      activeSection === '' || activeSection === 'presentation'
                        ? 'active'
                        : ''
                    }`}
                    onClick={() => {
                      handleLinkClick('#');
                    }}
                    href="#"
                  >
                    HOME
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${
                      activeSection === 'about' ? 'active' : ''
                    }`}
                    onClick={() => handleLinkClick('about')}
                    href="#about"
                  >
                    ABOUT
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${
                      activeSection === 'tech' ? 'active' : ''
                    }`}
                    onClick={() => handleLinkClick('tech')}
                    href="#tech"
                  >
                    TECHS
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${
                      activeSection === 'courses' ? 'active' : ''
                    }`}
                    onClick={() => handleLinkClick('courses')}
                    href="#courses"
                  >
                    COURSES
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${
                      activeSection === 'portfolio' ? 'active' : ''
                    }`}
                    onClick={() => handleLinkClick('portfolio')}
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
