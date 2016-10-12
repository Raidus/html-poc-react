import React from 'react';
import Form from './form.html';

export default class extends React.Component {
  createMarkup() {
    return { __html: Form };
  }
  render() {
    return (
      <div dangerouslySetInnerHTML={this.createMarkup()} />
    );
  }
}
