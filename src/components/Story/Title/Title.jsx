import React from "react";
import "./Title.css";

const Title = (props) => {
  const { title } = props;
  return <div className='title'>{title}</div>;
};

export default Title;
