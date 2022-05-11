import React, { Fragment, useEffect, useState } from "react";

import Navbar from "./features/Navbar";
import Story from "./components/Story";
import StoryWrapper from "./features/StoryWrapper";
import StoryModal from "./components/StoryModal";

import { Spinner } from "react-bootstrap";

import { map } from "ramda";

const axios = require("axios");

const instance = axios.create({
  baseURL: "https://newsapi.org/v2/",
  timeout: 1000,
  headers: { "X-Api-Key": "4e0353c6745b4a54b37392c40b5cb661" },
});

const App = () => {
  const [stories, setStories] = useState(null);
  const [modalStory, setModalStory] = useState({
    title: null,
    url: null,
  });
  const [showModal, setShowModal] = useState(false);

  const getStories = () => {
    instance({
      method: "get",
      url: "top-headlines?country=us",
      responseType: "application/json",
    }).then(function (response) {
      setStories(response.data.articles);
    });
  };

  useEffect(() => {
    getStories();
  }, []);

  /*
  {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Jessie Yeung, CNN",
      "title": "Hong Kong's next leader is a hardline former police officer who took on the city's protesters - CNN",
      "description": "As night fell, chaos erupted when crowds of protesters outside Hong Kong's legislative building hurled bottles at police, who fired pepper spray and swung batons, dragging some people to the ground.",
      "url": "https://www.cnn.com/2022/05/07/asia/john-lee-hong-kong-chief-executive-intl-hnk-dst/index.html",
      "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220505015429-john-lee-hk-0429-super-tease.jpg",
      "publishedAt": "2022-05-07T23:39:00Z",
      "content": "Hong Kong (CNN)As night fell, chaos erupted when crowds of protesters outside Hong Kong's legislative building hurled bottles at police, who fired pepper spray and swung batons, dragging some people … [+13353 chars]"
    },
   */

  const openStoryModal = (story) => {
    setShowModal(true);
    setModalStory(story);
  };

  const storyContainer = (story) => {
    return (
      <div>
      <Story
        key={story.publishedAt}
        story={story}
        showModal={() => {
          openStoryModal(story);
        }}
      />
      <hr/>
      </div>
    );
  };

  const displayStories = () => {
    return map(storyContainer, stories);
  };

  return (
    <Fragment>
      <Navbar instance={instance} setStories={setStories}/>
      <StoryModal
        show={showModal}
        closeModal={() => setShowModal(false)}
        story={modalStory}
      />
      <StoryWrapper>
        {stories ? (
          displayStories()
        ) : (
          /* This doesnt show the spinner properly - swap the turnary and style it */
          <Spinner animation='border' role='status'>
            <span className='visually-hidden'>Loading...</span>
          </Spinner>
        )}
      </StoryWrapper>
    </Fragment>
  );
};

export default App;
