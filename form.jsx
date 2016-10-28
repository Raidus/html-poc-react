import Form from './form.html';
import React from 'react';
import ReactDOM from 'react-dom';
import { getBodyElement, buildScriptWithFn } from './helpers';
import { connect } from 'react-redux';

class FormComponent extends React.Component {
  logResult() {
    const name = document.querySelector('#todo-name');
    console.log('the name', name.value);
    return false;
  }
  updateInputState() {
    const input = document.querySelector('#todo-name');
    console.log(input.value)
    return false;
  }
  createMarkup() {
    const body = getBodyElement(Form);
    this.script = buildScriptWithFn(this.logResult);
    this.inputScript = buildScriptWithFn(this.updateInputState);
    document.body.appendChild(this.script);
    document.body.appendChild(this.inputScript);
    const form = body.querySelector('#todo-form');
    form.setAttribute('onsubmit', 'return logResult()');
    const input = body.querySelector('#todo-name');
    input.setAttribute('oninput', 'return updateInputState()');
    const htmlString = body.innerHTML
    return { __html: htmlString };
  }
  render() {
    return (
      <div dangerouslySetInnerHTML={this.createMarkup()} />
    );
  }
  componentWillUnmount() {
    this.script.remove();
    this.inputScript.remove();
  }
}

const FormComponentWithRedux = connect(state => ({
  todoValue: state.todoFormValkke
}))(FormComponent);

export default FormComponentWithRedux;
