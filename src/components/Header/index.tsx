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
    <header className="header_area">
      <div className="main_menu">
        <nav className="navbar navbar-expand-md">
          <div className="container-fluid">
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
            <div className="collapse navbar-collapse justify-content-end" id="navbarToggler">
              <ul className="navbar-nav">
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
