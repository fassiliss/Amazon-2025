import React from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import LowerHeader from "./LowerHeader";
import { BiCart } from "react-icons/bi";

const Header = () => {
  return (
    <>
      <section>
        <div className={classes.header__container}>
          {/* logo section */}
          <div className={classes.logo__container}>
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo"
              />
            </Link>
            <div className={classes.delivery}>
              {/* delivery */}

              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Delivered to </p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>
          {/* search bar */}
          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" />
            <BsSearch size={25} />
          </div>
          {/* right side link  */}
          <div className={classes.order__container}>
            <Link to="" className={classes.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg"
                alt=""
              />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </Link>

            {/* three components */}
            <Link to="">
              <p>Sign In</p>
              <span>Account & Lists</span>
            </Link>
            {/* Orders */}
            <Link to="orders">
              <p>returns</p>
              <span>& Orders</span>
            </Link>
            {/* Cart */}
            <Link to="cart" className={classes.cart}>
              <BiCart size={35} />
              <span>0</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </>
  );
};

export default Header;
