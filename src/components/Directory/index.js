import React from 'react';
// import { Link } from 'react-router-dom';
import ShopMen from './../../assets/shopMens.jpg';
import ShopWomen from './../../assets/shopWomen.jpg';
import './styles.scss';

const Directory = props => {
  return (
    <div className="directory">
      <div className="wrap">
        <div
          className="item"
          style={{
            backgroundImage: `url(${ShopWomen})`
          }}
        >
          {/* <Link to="/search/womens"> */}
          <a>
            Shop Womens
            </a>
          {/* </Link> */}
        </div>
        <div
          className="item"
          style={{
            backgroundImage: `url(${ShopMen})`
          }}
        >
          {/* <Link to="/search/mens"> */}
          <a>
            Shop Mens
            </a>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Directory;