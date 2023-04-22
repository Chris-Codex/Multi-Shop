import React, { useState } from "react";
import { categories } from "./data";
import { motion } from "framer-motion";

const CatDropDown = () => {
  const [move, setMove] = useState(false);

  return (
    <motion.main
      className="category-dropdown-wrapper"
      animate={{ y: 1, scale: 1 }}
      initial={{ scale: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="cat-div">
        {categories.map((cat, index) => {
          const { category } = cat;
          return (
            <ul className="cat-ul">
              <li className="cat-li">{category}</li>
            </ul>
          );
        })}
      </div>
    </motion.main>
  );
};

export default CatDropDown;
