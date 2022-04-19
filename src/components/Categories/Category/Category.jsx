import React from "react";

import "./Category.css";

const Category = (props) => {
  const { category } = props;
  return (
    <div className='category'>
      <p>{category}</p>
    </div>
  );
};

export default Category;
