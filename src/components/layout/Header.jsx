import React from "react";
import { FaHamburger } from "react-icons/fa";

import { Link } from "react-router-dom";
import { AiOutlineLogin } from "react-icons/ai";

import { motion } from "framer-motion";

const Header = ({ isAuthenticated = false }) => {
  return (
    <nav>
      <motion.div initial={{ x: "-100%" }} whileInView={{ x: 0 }}>
        <FaHamburger />
      </motion.div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <Link to={isAuthenticated ? "/me" : "/login"}>
          {isAuthenticated ? <p>Profile</p> : <AiOutlineLogin />}
        </Link>
      </div>
    </nav>
  );
};

export default Header;
