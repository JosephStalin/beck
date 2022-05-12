import React from "react";

import "./styles.css";

const Category = (props) => {
  const { category, handleCategoryClick } = props;
  return (
    <div
      className='category'
      onClick={(e) => {
        handleCategoryClick(e, category.searchString);
      }}
    >
      <p>{category.title}</p>
    </div>
  );
};

export default Category;
