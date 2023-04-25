import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
import {
  AiFillInstagram,
  AiFillGithub,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__icon">
          <a href="https://www.instagram.com/_beingaman._/">
            <AiFillInstagram />
          </a>
          <a href="https://github.com/AmanTrivedi1">
            {" "}
            <AiFillGithub />
          </a>
          <a href="https://twitter.com/Aman_trivedi10">
            <AiFillTwitterCircle />
          </a>
        </div>
        <div>
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
