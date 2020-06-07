import React, { Component } from "react";
// import { async } from "q";

import Gallery from 'react-photo-gallery'
// import axios from 'axios';
// import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
// const cheerio = require("cheerio");

let response2 = [], page = 1;
// let jsonData = {};
export default class Main2 extends Component {
  state = {
    users: [],
    isLoading: true,
    errors: null,
    page: 1
  };

  loadImages = async (page) => {
    // axios
    // // The API we're requesting data from
    // .get(`https://unsplash.com/napi/photos?page=${page}&per_page=30`)
    // // Once we get a response, we'll map the API endpoints to our props
    // .then(response =>
    //   response.map(user => ({
    //     name: `${user.urls.raw}`
    //   }))
    // )
    // // Let's make sure to change the loading state to display the data
    // .then(users => {
    //   this.setState({
    //     users,
    //     isLoading: false
    //   });
    // })
    // // We can still use the `.catch()` method since axios is promise-based
    // .catch(error => this.setState({ error, isLoading: false }));
    // console.log("Data is:", this.state.users);
    const response = await fetch(`https://cors-anywhere.herokuapp.com/` + `https://unsplash.com/napi/photos?page=${page}&per_page=30`);
    const htmlString = await response.json();
    htmlString.map((links, i) => {
      // console.log("Links are: ",links.urls.full+'.jpg');
      response2.push({ "src": links.urls.small + '.jpg', "width": 4, "height": 3 });
      // jsonData = JSON.stringify({"src":links.urls.full+'.jpg'});
    });
    // console.log("Links are: ",response2);
    this.displayImages(response2);
    response2 = [];
  };
  componentDidMount() {
    this.loadImages(page);
  }

  displayImages = (images) => {
    console.log("Links from the function: ", images);
    this.setState({
      users: images
    });
    // images = [];
  }

  updatePage = () => {
    // this.loadImages(this.state.page);
    // this.setState({
    //   page: this.state.page + 1
    // });
    page = page + 1;
    // this.loadImages(this.state.page);
    this.goToNextPage();
    console.log("Envoked");
  }

  goToNextPage = () => {
    console.log("Page is: ", page)
    this.loadImages(page);
  }

  componentWillUnmount() {
    response2 = [];
    page = 1;
  }

  render() {
    // console.log("Links are: ",response2);
    return (
      <div>
        <Gallery photos={this.state.users} />
        <button style={{ float: "right" }} onClick={this.updatePage}>Next</button>
        <div>{page}</div>
      </div>
    );
  }
}