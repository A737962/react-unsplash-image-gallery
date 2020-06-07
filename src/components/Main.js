import React, { Component } from "react";
import { async } from "q";

const cheerio = require("cheerio");

let response2 = [];
export default class Main extends Component {
  state = {
    page: 0,
    items: []
  };

  loadImages = async (page = 1) => {
    // const searchUrl = `https://www.amazon.de/s/?page=${page}&keywords=graphic+card`;
    // const searchUrl = `https://unsplash.com/napi/photos?page=${page}&per_page=30`;
    // const response = await fetch(searchUrl); // fetch page

    // const htmlString = await response.text(); // get response text
    // console.log("Response is html: ",htmlString);
    // const $ = cheerio.load(htmlString); // parse HTML string
    // response2 = $("ul");
    // console.log("Response is after cheerio: ",response2);
    fetch(`https://unsplash.com/napi/photos?page=${page}&per_page=30`)
    // We get the API response and receive data in JSON format...
    .then(response => response.json())
    // ...then we update the users state
    .then(data =>
        console.log("Data from array", data)
    )
    // Catch any errors we hit and update the app
    .catch(error => this.setState({ error, isLoading: false }));
    // this.setState({
    //     items: $("urls")
    // })
    // console.log("Response is: ",response2);

    // return $("#s-results-list-atf > li") // select result <li>s
    //   .map((_, li) => ({
    //     // map to an list of objects
    //     asin: $(li).data("asin"),
    //     title: $("h2", li).text(),
    //     price: $("span.a-color-price", li).text(),
    //     rating: $("span.a-icon-alt", li).text(),
    //     imageUrl: $("img.s-access-image").attr("src")
    //   }));
  };
  componentDidMount() {
      this.loadImages();
  }

  render() {
    return (
    <div>Images</div>);
  }
}
