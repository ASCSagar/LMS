import React from 'react';
import { Link } from 'react-router-dom';
import brand1 from '../img/brand/brand_1.png';
import brand2 from '../img/brand/brand_2.png';
import brand3 from '../img/brand/brand_3.png';
import brand4 from '../img/brand/brand_4.png';
import brand6 from '../img/brand/brand_6.png';

const BrandSection = () => {
  return (
    <div className="brandarea__2">
      <div className="container">
        <div className="row">
          <div className="brandarea__wraper brandarea__wraper__2" data-aos="fade-up">
            <div className="brandarea__img">
              <Link to="/brand_1"><img src={brand1} alt="brand" /></Link>
            </div>
            <div className="brandarea__img">
              <Link to="/brand_2"><img src={brand2} alt="brand" /></Link>
            </div>
            <div className="brandarea__img">
              <Link to="/brand_3"><img src={brand3} alt="brand" /></Link>
            </div>
            <div className="brandarea__img">
              <Link to="/brand_4"><img src={brand4} alt="brand" /></Link>
            </div>
            <div className="brandarea__img">
              <Link to="/brand_6"><img src={brand6} alt="brand" /></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandSection;
