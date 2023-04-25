import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
import {
  AiFillInstagram,
  AiFillYoutube,
  AiFillGithub,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__icon">
          <AiFillInstagram />
          <AiFillYoutube />
          <AiFillGithub />
          <AiFillTwitterCircle />
        </div>
        <div>
          <p>Copyright &copy; 2027 by Burger, Inc. All rights reserved.</p>
          <div className="heart__para">
            <p className="heart__line">
              Crafted with <AiFillHeart className="footer__heart" /> By
              <BsCodeSlash /> Aman Trivedi
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
