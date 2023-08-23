'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import logo from '../../img/logo.png';

import './styles.css';

export default function Header() {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle');
  }, []);

  return (
    <header className="header_area bg-body-tertiary">
      <div className="main_menu">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand custom-brand f1" href="#">
              <Image src={logo} alt="Cleriston" width={140} />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo03"
              aria-controls="navbarTogglerDemo03"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse f1"
              id="navbarTogglerDemo03"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    HOME
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    ABOUT
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    SKILLS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    PROJECTS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    CONTACT
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
