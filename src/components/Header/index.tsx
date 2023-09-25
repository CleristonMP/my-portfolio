'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import logo from '../../assets/imgs/logo.svg';
import useScreenSize from '@/utils/useScreenSize';

import './styles.css';

export default function Header() {
  const screenSize = useScreenSize();

  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle');
  }, []);

  return (
    <header className="header_area" id="header">
      <div className="main_menu">
        <nav
          className={
            screenSize.width >= 768
              ? 'navbar navbar-expand-md nav-f1'
              : 'navbar navbar-expand-md navbar-dark bg-dark'
          }
        >
          <div className="container-fluid my-1">
            <a className="navbar-brand custom-brand" href="#">
              <Image src={logo} alt="Cleriston" width={140} />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarToggler"
              aria-controls="navbarToggler"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarToggler"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    HOME
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    ABOUT
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#tech">
                    SKILLS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#feature">
                    SERVICES
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#portfolio">
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
