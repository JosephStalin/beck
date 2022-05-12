import React, { useState, useCallback } from "react";
import { Form, InputGroup, FormControl } from "react-bootstrap";

import "./styles.css";

const axios = require("axios");

const instance = axios.create({
  baseURL: "https://newsapi.org/v2/",
  timeout: 1000,
  headers: { "X-Api-Key": "4e0353c6745b4a54b37392c40b5cb661" },
});


const Search = (props) => {
  const { setStories } = props;
  const [queryString, setQueryString] = useState("");

  const onQueryChange = ({target:{value}}) => setQueryString(value);

  const onSearchSubmit = (e) => {
    e.preventDefault();
    instance({
      method: "get",
      url: `top-headlines?q=${queryString}`,
      responseType: "application/json",
    }).then(function (response) {
      setStories(response.data.articles);
    });
  };

  return (
    <div id='search'>
      <Form
        onSubmit={(e) => {
          onSearchSubmit(e);
        }}
      >
        <Form.Control
          type='text'
          placeholder='Search...'
          name='search'
          value={queryString}
          onChange={onQueryChange}
          className='form-control form-icon-trailing'
        />
      </Form>
    </div>
  );
};

export default Search;
