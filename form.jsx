import React from 'react';
import Form from './form.html';

const parser = new DOMParser();

export default class extends React.Component {
  createMarkup() {
    const html = parser.parseFromString(Form, 'text/html');
    const htmlString = html.documentElement.querySelector('body').innerHTML
    return { __html: htmlString };
  }
  render() {
    return (
      <div dangerouslySetInnerHTML={this.createMarkup()} />
    );
  }
}
