import React from "react";

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
        </div>
      </footer>
    </>
  );
};

export default Footer;
