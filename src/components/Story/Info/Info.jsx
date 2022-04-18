import React from "react";

import "./Info.css";

const Info = (props) => {
  const { info } = props;
  return <div className='info'>{info}</div>;
};

export default Info;
