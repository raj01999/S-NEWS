import React, { Component } from "react";
import Counter from "./Counter";
import NewsItem from "./NewsItem";

export default class News extends Component {
  render() {
    return (
      <>
        <Counter
          totalResults={
            this.props.data.totalResults
              ? this.props.data.totalResults
              : "Need paid plan for more api request"
          }
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          {this.props.data.articles
            ? this.props.data.articles.map((element) => {
                return (
                  <NewsItem
                    key={element.url}
                    source={element.source}
                    author={element.author}
                    title={element.title}
                    description={element.description}
                    url={element.url}
                    urlToImage={element.urlToImage}
                    publishedAt={element.publishedAt}
                    content={element.content}
                  />
                );
              })
            : "Need paid plan for more api request"}
        </div>
      </>
    );
  }
}
