import React from "react";
import { motion } from "framer-motion";
import { AiOutlineCheck } from "react-icons/ai";
const MenuCard = ({ itemNum, burgerSrc, price, title, handler, delay = 0 }) => {
  return (
    <motion.div
      className="menuCard"
      initial={{
        x: "-100%",
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        delay,
      }}
    >
      <div className="burgerinfo">{itemNum}</div>
      <main>
        <img className="img" src={burgerSrc} alt={itemNum} />
        <h5 className="price">
          {price} <span className="rupee_icon">₹</span>
        </h5>
        <div className="information">
          <p className="info_para">
            <AiOutlineCheck className="icon" />
            Fresh Vagitables
          </p>
          <p className="info_para">
            <AiOutlineCheck className="icon" />
            Fresh Souces
          </p>
          <p className="info_para">
            <AiOutlineCheck className="icon" />
            New Packiging options
          </p>
          <p className="info_para">
            <AiOutlineCheck className="icon" />
            Gluton Free
          </p>
        </div>
        <p className="burgertitle">{title}</p>
        <div className="buttoncontainer">
          <button className="addbutton" onClick={() => handler(itemNum)}>
            Add to Cart
          </button>
        </div>
      </main>
    </motion.div>
  );
};

export default MenuCard;
