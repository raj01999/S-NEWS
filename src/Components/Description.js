import React, { Component } from "react";

export default class Description extends Component {
  render() {
    return (
      <p
        className="card-text"
        dangerouslySetInnerHTML={{ __html: this.props.description }}
      ></p>
    );
  }
}
