import React from 'react';
import List from './list.html';

const parser = new DOMParser();

export default class extends React.Component {
  createMarkup() {
    const html = parser.parseFromString(List, 'text/html');
    const htmlString = html.documentElement.querySelector('body').innerHTML
    return { __html: htmlString };
  }
  render() {
    return (
      <div dangerouslySetInnerHTML={this.createMarkup()} />
    );
  }
}
