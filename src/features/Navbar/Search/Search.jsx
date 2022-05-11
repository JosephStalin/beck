import React, { useState } from "react";
import Form from "react-bootstrap/Form";

/* Kyle,
look at liveshare chat - just use that. See if you can fix the modal centering
 */
import "./Search.css";


const Search = (props) => {

  
   const axios = require("axios");

  const instance = axios.create({
    baseURL: "https://newsapi.org/v2/",
    timeout: 1000,
    headers: { "X-Api-Key": "4e0353c6745b4a54b37392c40b5cb661" },
  });

  const { setStories } = props;
  const [apiString, setApiString] = useState('')
  const Bruh = (event) => {
    const q = event.target.search.value;
    console.log(event);
    const url = "top-headlines?" + {q}

    instance({
      method: "get",
      url: {url},
      responseType: "application/json",
    }).then(function (response) {
      setStories(response.data.articles);
    });
  }

  return (
    <div id='search'>
      <Form  onSubmit={(event) => Bruh(event)}>
        <Form.Control type='text' placeholder='Search...' name='search' className="form-control form-icon-trailing">
        </Form.Control>
      </Form>
    </div>
  );
};

export default Search;
