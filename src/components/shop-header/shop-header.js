import React from 'react';
import classes from './shop-header.module.scss';
import { Link } from 'react-router-dom';

const ShopHeader = ({ numItems, total }) => {
  return (
    <header className={`row ${classes.shopHeader}`}>
      <Link to="/">
        <div className={`${classes.logo} text-dark`}>Film Tracker</div>
      </Link>
      <Link to="/cart">
        <div className={`${classes.shoppingCart}`}>
          <i className="cart-icon fa fa-shopping-cart" />
          {numItems} items (${total})
        </div>
      </Link>
    </header>
  );
};

export default ShopHeader;
