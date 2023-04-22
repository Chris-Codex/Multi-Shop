import React, { useEffect } from "react";
import { categories } from "./data";

const CatDropDown = () => {
  return (
    <main className="category-dropdown-wrapper">
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
    </main>
  );
};

export default CatDropDown;
