import "./Story.css";
import StoryImg from "./Stories/Storyimg.js";
import React from 'react';
import Source from "./Stories/Source.js";
import Title from "./Stories/Title.js";
import Summary from "./Stories/Summary.js";
import Info from "./Stories/Info.js";

function Expand() {
    alert("yo");
}

function Story() {
    let source = 'CNN';
    let title = '‘Recession shock’ is coming, Bank of America warns';
    let summary = `New York
    CNN Business
     — 
    Bank of America is warning that high inflation poses a credible threat to the economic recovery that began just two years ago.`;


  return (
    <div className="story" onClick={Expand}>
        <div className="image">
      <StoryImg></StoryImg>
      </div>
      <div className="right">
        <Source className="source" source={source}></Source>
        <Title className="title" title={title}></Title>
        <Summary className="summary" summary={summary}></Summary>
        <Info></Info>
      </div>
    </div>
  );
}

export default Story;
