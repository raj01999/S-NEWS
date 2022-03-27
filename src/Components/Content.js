import React, { Component } from "react";

export default class Content extends Component {
  render() {
    return (
      <p
        className="card-text"
        dangerouslySetInnerHTML={{ __html: this.props.content }}
      ></p>
    );
  }
}
