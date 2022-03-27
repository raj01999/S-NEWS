import "./App.css";
import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      page: 1,
      search: null,
      result: {
        status: "ok",
        totalResults: 1,
        articles: [
          {
            source: {
              id: null,
              name: "news api",
            },
            author: "Sarafraj Mallick",
            title: "Search Your Favorite News",
            description: null,
            url: "https://github.com/raj01999",
            urlToImage:
              "https://cdn.searchenginejournal.com/wp-content/uploads/2019/09/647e8cc9-69cd-4fcf-bed8-2ccba7931ef7.jpeg",
            publishedAt: `${String(new Date())}`,
            content: `<div style='color:red'>Search Your Favorite News</div>`,
          },
        ],
      },
    };
  }

  searching = (val) => {
    this.fetching(val);
  };

  async fetching(key) {
    let url =
      "https://newsapi.org/v2/everything?apiKey=66f05e46cec04f10bf8bea352bc1b4f3&q=" +
      key +
      "&pageSize=45";

    // let url =
    //   "https://newsapi.org/v2/top-headlines?apiKey=d6ca667f31534c3fb010f7ce631ed378&q=" +
    //   key +
    //   "&pageSize=100";
    // `&page=${this.state.page}&pageSize=30`;

    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ result: parsedData });
    this.setState({ search: key });
    this.setState({ page: 1 });
  }

  // nextNews = async () => {
  //   let url =
  //     "https://newsapi.org/v2/everything?apiKey=d6ca667f31534c3fb010f7ce631ed378&q=" +
  //     this.state.search +
  //     `&page=${this.state.page + 1}&pageSize=15`;
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   this.setState({ result: parsedData });
  //   this.state.page += 1;
  //   console.log(this.state.page);
  // };

  // previousNews = async () => {
  //   let url =
  //     "https://newsapi.org/v2/everything?apiKey=d6ca667f31534c3fb010f7ce631ed378&q=" +
  //     this.state.search +
  //     `&page=${this.state.page - 1}&pageSize=15`;
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   this.setState({ result: parsedData });
  //   this.state.page -= 1;
  //   console.log(this.state.page);
  // };

  render() {
    return (
      <>
        <Navbar title="S News" searching={this.searching} />
        <News data={this.state.result} />
        <div className="d-flex justify-content-between mx-2 mb-1">
          <button
            type="button"
            className="btn btn-dark"
            disabled={true}
            // onClick={this.previousNews}
          >
            ← Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            disabled={true}
            // onClick={this.nextNews}
          >
            Next →
          </button>
        </div>
      </>
    );
  }
}
