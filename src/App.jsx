import React, { Fragment, useEffect, useState } from "react";

import Navbar from "./features/Navbar";
import Story from "./components/Story";
import StoryWrapper from "./features/StoryWrapper";

const axios = require("axios");

const instance = axios.create({
  baseURL: "https://newsapi.org/v2/",
  timeout: 1000,
  headers: { "X-Api-Key": "4e0353c6745b4a54b37392c40b5cb661" },
});

const App = () => {
  const [stories, setStories] = useState(null)
  const getStories = () => {
    instance({
      method: "get",
      url: "top-headlines/sources?",
      responseType: "application/json",
    }).then(function (response) {
      console.log(response.data);
      setStories(response.data)
    });
  };

  const story = {
    source: {
      id: null, //Likely not null, can do something here
      name: "seattlepi.com",
    },
    author: "By TOM KRISHER and MATT O'BRIEN, AP Business Writers",
    title: "Shareholders await Musk's next move in Twitter takeover bid",
    description:
      "DETROIT (AP) — Twitter has dropped a major roadblock in front of Elon Musk’s effort to take over the company, leaving investors to wonder about the mercurial Tesla CEO’s next move.\nThe social media company has adopted a “poison pill” defense that makes it dif…",
    url: "https://www.seattlepi.com/news/article/Twitter-says-poison-pill-makes-coercive-17087916.php",
    urlToImage:
      "https://s.hdnux.com/photos/01/25/15/77/22339535/3/rawImage.jpg",
    publishedAt: "2022-04-18T22:21:51Z",
    content:
      "DETROIT (AP) Twitter has dropped a major roadblock in front of Elon Musks effort to take over the company, leaving investors to wonder about the mercurial Tesla CEOs next move.The social media compan… [+5259 chars]",
  };

  return (
    <Fragment>
      <Navbar />
      <button onClick={getStories}>Get Stories </button>
      <StoryWrapper>
        <Story story={story} />
        <Story story={story} />
      </StoryWrapper>
    </Fragment>
  );
};

export default App;
