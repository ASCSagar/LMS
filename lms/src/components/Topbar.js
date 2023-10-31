import React from 'react';
import { Link } from 'react-router-dom';
import '../css/style.css';
import IcoFont from 'react-icofont';

const TopBar = () => {
  return (
    <div className="topbararea">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 ">
            <div className="topbar__left">
              <ul className="topbar_ul" >
                <li>
                  Call Us: +1 800 123 456 789
                </li>
                <li>
                  - Mail Us: Itcroc@mail.com
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="topbar__right">
              <div className="topbar__icon">
              <IcoFont icon="location-pin" />
              </div>
              <div className="topbar__text">
                <p>684 West College St. Sun City, USA</p>
              </div>
              <div className="topbar__list">
                <ul>
                  <li>
                    <Link to="#"><i className="icofont-facebook"></i></Link>
                  </li>
                  <li>
                    <Link to="#"><i className="icofont-twitter"></i></Link>
                  </li>
                  <li>
                    <Link to="#"><i className="icofont-instagram"></i></Link>
                  </li>
                  <li>
                    <Link to="#"><i className="icofont-youtube-play"></i></Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
