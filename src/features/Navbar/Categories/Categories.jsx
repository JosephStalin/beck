import React, { useState } from "react";
import Category from "./Category/Category";

import "./styles.css";

const CATEGORIES = [
  {
    title: "Business",
    searchString: "business",
  },
  {
    title: "Entertainment",
    searchString: "entertainment",
  },
  {
    title: "General",
    searchString: "general",
  },
  {
    title: "Health",
    searchString: "health",
  },
  {
    title: "Science",
    searchString: "science",
  },
  {
    title: "Sports",
    searchString: "sports",
  },
  {
    title: "Technology",
    searchString: "technology",
  },
];

const Categories = (props) => {
  const { instance, setStories } = props;

  const handleCategoryClick = (e, searchCategory) => {
    e.preventDefault();
    instance({
      method: "get",
      url: `top-headlines?country=us&category=${searchCategory}`,
      responseType: "application/json",
    }).then(function (response) {
      setStories(response.data.articles);
    });
  };

  const categories = CATEGORIES.map((category) => (
    <Category
      key={category.searchString}
      category={category}
      handleCategoryClick={handleCategoryClick}
    />
  ));

  return <div className='categories'>{categories}</div>;
};

export default Categories;
