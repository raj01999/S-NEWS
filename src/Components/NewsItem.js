import React, { Component } from "react";
import Content from "./Content";
// import Description from "./Description";

export default class NewsItem extends Component {
  render() {
    const {
      source,
      author,
      title,
      // description,
      url,
      urlToImage,
      publishedAt,
      content,
    } = this.props;
    const time = publishedAt.split("T");
    return (
      <div className="card mb-3 mx-3" style={{ width: "25rem" }}>
        <img src={urlToImage} className="card-img-top" alt="img" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">Author: {author}</p>
          <p className="card-text">Source: {source.name}</p>
          <p className="card-text">{time[0] + " / " + time[1].slice(0, -1)}</p>
          <Content content={content} />
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-primary"
          >
            Read More
          </a>
        </div>
      </div>
    );
  }
}
