import React from "react";

import "./Categories.css";
import Category from "./Category/Category";

const Categories = () => {
  return (
    <div className='categories'>
      <Category category='Test' />
      <Category category='Test2' />
      <Category category='Test3' />
      <Category category='Test4' />
    </div>
  );
}

export default Categories;
