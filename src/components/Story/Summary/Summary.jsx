import React from "react";
import "./Summary.css";

const Summary = (props) => {
  const { summary } = props;
  return <div className='summary'>{summary}</div>;
};

export default Summary;
