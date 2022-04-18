import React from "react";

import StoryImage from "./StoryImage";
import Source from "./Source";
import Title from "./Title";
import Summary from "./Summary";
import Info from "./Info";

import "./styles.css";

function Expand() {
  alert("yo");
}

const Story = () => {
  let source = "CNN";
  let title = "‘Recession shock’ is coming, Bank of America warns";
  let summary = `New York
    CNN Business
     — 
    Bank of America is warning that high inflation poses a credible threat to the economic recovery that began just two years ago.`;

  return (
    <div className='story' onClick={Expand}>
      <div className='image'>
        <StoryImage />
      </div>
      <div className='right'>
        <Source className='source' source={source} />
        <Title className='title' title={title} />
        <Summary className='summary' summary={summary} />
        <Info></Info>
      </div>
    </div>
  );
};

export default Story;
