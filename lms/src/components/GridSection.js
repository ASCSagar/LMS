import React from "react";
import grid1 from "../img/grid/grid_1.png";
import { Link } from "react-router-dom";

const GridSection = () => {
  return (
    <div className="gridarea gridarea__2">
      <div className="container">
        <div className="row grid__row">
          <div
            className="col-xl-5 col-lg-5 col-md-12 col-sm-12"
            data-aos="fade-up"
          >
            <div className="section__title__2">
              <div className="section__title__button">
                <div className="default__small__button">Course List</div>
              </div>
              <div className="section__title__heading__2 section__title__heading__3 heading__fontsize__2">
                <h2>Perfect Online Course for Your Career</h2>
              </div>
            </div>
          </div>
          <div
            className="col-xl-7 col-lg-7 col-md-12 col-sm-12"
            data-aos="fade-up"
          >
            <div className="gridfilter_nav grid__filter__2 gridFilter">
              <button className="active" data-filter="*">
                See All
              </button>
              <button data-filter=".filter1" className="">
                Data science
              </button>
              <button data-filter=".filter2" className="">
                Engineering
              </button>
              <button data-filter=".filter3" className="">
                Featured
              </button>
              <button data-filter=".filter4" className="">
                Architecture
              </button>
            </div>
          </div>
        </div>
        <div className="row grid" data-aos="fade-up">
          {/* You can map through your courses data and generate grid items dynamically */}
          {/* Example for a single grid item, you can duplicate this structure for each course */}
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 grid-item filter1 filter3">
            <div className="gridarea__wraper">
              <div className="gridarea__img">
                <Link to="/course-details">
                  <img src={grid1} alt="grid" />
                </Link>
                <div className="gridarea__small__button">
                  <div className="grid__badge">Data & Tech</div>
                </div>
                <div className="gridarea__small__icon">
                  <Link to="#">
                    <i className="icofont-heart-alt"></i>
                  </Link>
                </div>
              </div>
              <div className="gridarea__content">
                <div className="gridarea__list">
                  <ul>
                    <li>
                      <i className="icofont-book-alt"></i> 23 Lesson
                    </li>
                    <li>
                      <i className="icofont-clock-time"></i> 1 hr 30 min
                    </li>
                  </ul>
                </div>
                <div className="gridarea__heading">
                  <h3 className="gridarea_link">
                    <Link to="/course-details">
                      Foundation course to understand about software
                    </Link>
                  </h3>
                </div>
                <div className="gridarea__price">
                  $32.00 <del>/$67.00</del>
                  <span>
                    {" "}
                    <del className="del__2">Free</del>
                  </span>
                </div>
                <div className="gridarea__bottom">
                  <Link to="/instructor-details">
                    <div className="gridarea__small__img">
                      <img src={grid1} alt="grid" />
                      <div className="gridarea__small__content">
                        <h6>Micle Jhon</h6>
                      </div>
                    </div>
                  </Link>
                  <div className="gridarea__star">
                    <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                    <span>(44)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 grid-item filter1 filter3">
            <div className="gridarea__wraper">
              <div className="gridarea__img">
                <Link to="/course-details">
                  <img src={grid1} alt="grid" />
                </Link>
                <div className="gridarea__small__button">
                  <div className="grid__badge">Data & Tech</div>
                </div>
                <div className="gridarea__small__icon">
                  <Link to="#">
                    <i className="icofont-heart-alt"></i>
                  </Link>
                </div>
              </div>
              <div className="gridarea__content">
                <div className="gridarea__list">
                  <ul>
                    <li>
                      <i className="icofont-book-alt"></i> 23 Lesson
                    </li>
                    <li>
                      <i className="icofont-clock-time"></i> 1 hr 30 min
                    </li>
                  </ul>
                </div>
                <div className="gridarea__heading">
                  <h3 className="gridarea_link">
                    <Link to="/course-details">
                      Foundation course to understand about software
                    </Link>
                  </h3>
                </div>
                <div className="gridarea__price">
                  $32.00 <del>/$67.00</del>
                  <span>
                    {" "}
                    <del className="del__2">Free</del>
                  </span>
                </div>
                <div className="gridarea__bottom">
                  <Link to="/instructor-details">
                    <div className="gridarea__small__img">
                      <img src={grid1} alt="grid" />
                      <div className="gridarea__small__content">
                        <h6>Micle Jhon</h6>
                      </div>
                    </div>
                  </Link>
                  <div className="gridarea__star">
                    <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                    <span>(44)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 grid-item filter1 filter3">
            <div className="gridarea__wraper">
              <div className="gridarea__img">
                <Link to="/course-details">
                  <img src={grid1} alt="grid" />
                </Link>
                <div className="gridarea__small__button">
                  <div className="grid__badge">Data & Tech</div>
                </div>
                <div className="gridarea__small__icon">
                  <Link to="#">
                    <i className="icofont-heart-alt"></i>
                  </Link>
                </div>
              </div>
              <div className="gridarea__content">
                <div className="gridarea__list">
                  <ul>
                    <li>
                      <i className="icofont-book-alt"></i> 23 Lesson
                    </li>
                    <li>
                      <i className="icofont-clock-time"></i> 1 hr 30 min
                    </li>
                  </ul>
                </div>
                <div className="gridarea__heading">
                  <h3 className="gridarea_link">
                    <Link to="/course-details">
                      Foundation course to understand about software
                    </Link>
                  </h3>
                </div>
                <div className="gridarea__price">
                  $32.00 <del>/$67.00</del>
                  <span>
                    {" "}
                    <del className="del__2">Free</del>
                  </span>
                </div>
                <div className="gridarea__bottom">
                  <Link to="/instructor-details">
                    <div className="gridarea__small__img">
                      <img src={grid1} alt="grid" />
                      <div className="gridarea__small__content">
                        <h6>Micle Jhon</h6>
                      </div>
                    </div>
                  </Link>
                  <div className="gridarea__star">
                    <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                    <span>(44)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 grid-item filter1 filter3">
            <div className="gridarea__wraper">
              <div className="gridarea__img">
                <Link to="/course-details">
                  <img src={grid1} alt="grid" />
                </Link>
                <div className="gridarea__small__button">
                  <div className="grid__badge">Data & Tech</div>
                </div>
                <div className="gridarea__small__icon">
                  <Link to="#">
                    <i className="icofont-heart-alt"></i>
                  </Link>
                </div>
              </div>
              <div className="gridarea__content">
                <div className="gridarea__list">
                  <ul>
                    <li>
                      <i className="icofont-book-alt"></i> 23 Lesson
                    </li>
                    <li>
                      <i className="icofont-clock-time"></i> 1 hr 30 min
                    </li>
                  </ul>
                </div>
                <div className="gridarea__heading">
                  <h3 className="gridarea_link">
                    <Link to="/course-details">
                      Foundation course to understand about software
                    </Link>
                  </h3>
                </div>
                <div className="gridarea__price">
                  $32.00 <del>/$67.00</del>
                  <span>
                    {" "}
                    <del className="del__2">Free</del>
                  </span>
                </div>
                <div className="gridarea__bottom">
                  <Link to="/instructor-details">
                    <div className="gridarea__small__img">
                      <img src={grid1} alt="grid" />
                      <div className="gridarea__small__content">
                        <h6>Micle Jhon</h6>
                      </div>
                    </div>
                  </Link>
                  <div className="gridarea__star">
                    <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                    <span>(44)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 grid-item filter1 filter3">
            <div className="gridarea__wraper">
              <div className="gridarea__img">
                <Link to="/course-details">
                  <img src={grid1} alt="grid" />
                </Link>
                <div className="gridarea__small__button">
                  <div className="grid__badge">Data & Tech</div>
                </div>
                <div className="gridarea__small__icon">
                  <Link to="#">
                    <i className="icofont-heart-alt"></i>
                  </Link>
                </div>
              </div>
              <div className="gridarea__content">
                <div className="gridarea__list">
                  <ul>
                    <li>
                      <i className="icofont-book-alt"></i> 23 Lesson
                    </li>
                    <li>
                      <i className="icofont-clock-time"></i> 1 hr 30 min
                    </li>
                  </ul>
                </div>
                <div className="gridarea__heading">
                  <h3 className="gridarea_link">
                    <Link to="/course-details">
                      Foundation course to understand about software
                    </Link>
                  </h3>
                </div>
                <div className="gridarea__price">
                  $32.00 <del>/$67.00</del>
                  <span>
                    {" "}
                    <del className="del__2">Free</del>
                  </span>
                </div>
                <div className="gridarea__bottom">
                  <Link to="/instructor-details">
                    <div className="gridarea__small__img">
                      <img src={grid1} alt="grid" />
                      <div className="gridarea__small__content">
                        <h6>Micle Jhon</h6>
                      </div>
                    </div>
                  </Link>
                  <div className="gridarea__star">
                    <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                    <span>(44)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 grid-item filter1 filter3">
            <div className="gridarea__wraper">
              <div className="gridarea__img">
                <Link to="/course-details">
                  <img src={grid1} alt="grid" />
                </Link>
                <div className="gridarea__small__button">
                  <div className="grid__badge">Data & Tech</div>
                </div>
                <div className="gridarea__small__icon">
                  <Link to="#">
                    <i className="icofont-heart-alt"></i>
                  </Link>
                </div>
              </div>
              <div className="gridarea__content">
                <div className="gridarea__list">
                  <ul>
                    <li>
                      <i className="icofont-book-alt"></i> 23 Lesson
                    </li>
                    <li>
                      <i className="icofont-clock-time"></i> 1 hr 30 min
                    </li>
                  </ul>
                </div>
                <div className="gridarea__heading">
                  <h3 className="gridarea_link">
                    <Link to="/course-details">
                      Foundation course to understand about software
                    </Link>
                  </h3>
                </div>
                <div className="gridarea__price">
                  $32.00 <del>/$67.00</del>
                  <span>
                    {" "}
                    <del className="del__2">Free</del>
                  </span>
                </div>
                <div className="gridarea__bottom">
                  <Link to="/instructor-details">
                    <div className="gridarea__small__img">
                      <img src={grid1} alt="grid" />
                      <div className="gridarea__small__content">
                        <h6 className="gridarea_author">Micle Jhon</h6>
                      </div>
                    </div>
                  </Link>
                  <div className="gridarea__star">
                    <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                    <i className="icofont-star"></i>
                    <span>(44)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End of a single grid item */}
        </div>
      </div>
    </div>
  );
};

export default GridSection;
