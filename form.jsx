import Form from './form.html';
import React from 'react';
import ReactDOM from 'react-dom';

const parser = new DOMParser();

export default class extends React.Component {
  createMarkup() {
    const html = parser.parseFromString(Form, 'text/html');
    const body = html.documentElement.querySelector('body');
    const form = body.querySelector('#todo-form');
    const script = document.createElement('script');
    script.text = 'var logResult = function () { console.log("form"); return false; }';
    script.type = 'text/javascript'
    document.body.appendChild(script);
    form.setAttribute('onsubmit', 'return logResult()')
    const htmlString = body.innerHTML
    return { __html: htmlString };
  }
  render() {
    return (
      <div dangerouslySetInnerHTML={this.createMarkup()} />
    );
  }
}
