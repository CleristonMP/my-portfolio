import React from 'react';
import Image from 'next/image';
import logo from '../../assets/imgs/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import './styles.css';

export default function Footer() {
  const getFullYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="flex-column">
              <div className="footer_logo">
                <a href="#">
                  <Image src={logo} alt="Cleriston" />
                </a>
                <h4>Contact Me</h4>
              </div>
              <div className="footer_social">
                <a
                  href="https://www.facebook.com/profile.php?id=100072653596522"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="https://www.instagram.com/c.m.peras/" target="_blank">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://github.com/CleristonMP" target="_blank">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  href="https://www.linkedin.com/in/cleriston-pereira-a60a471bb/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="mailto:cmelopereira@outlook.com">
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center footer_bottom">
          <p className="col-lg-8 col-sm-12 footer_text">
            Copyright ©{getFullYear() + ' '}
            All rights reserved | This template is made by{' '}
            <a href="https://colorlib.com" target="_blank">
              Colorlib
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
