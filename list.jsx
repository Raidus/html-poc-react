import React from 'react';
import List from './list.html';

export default class extends React.Component {
  createMarkup() {
    return { __html: List };
  }
  render() {
    return (
      <div dangerouslySetInnerHTML={this.createMarkup()} />
    );
  }
}
