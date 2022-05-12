import React, { useState } from "react";
import { Form } from "react-bootstrap";

import "./styles.css";

const Search = (props) => {
  const { instance, setStories } = props;
  const [queryString, setQueryString] = useState("");

  const onSearchSubmit = (e) => {
    e.preventDefault();
    instance({
      method: "get",
      url: `top-headlines?country=us&q=${queryString}`,
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
          onChange={({target:{value}}) => setQueryString(value)}
          className='form-control form-icon-trailing'
          autoComplete="off"
        />
      </Form>
    </div>
  );
};

export default Search;
