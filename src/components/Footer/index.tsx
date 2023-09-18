import React from 'react';
import Image from 'next/image';
import logo from '../../assets/imgs/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

import './styles.css';

export default function Footer() {
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
                <h4>Follow Me</h4>
              </div>
              <div className="footer_social">
                <a href="#">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center footer_bottom">
          <p className="col-lg-8 col-sm-12 footer_text">
            Copyright ©
            <script>document.write(new Date().getFullYear());</script>2023 All
            rights reserved | This template is made by{' '}
            <a href="https://colorlib.com" target="_blank">
              Colorlib
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
