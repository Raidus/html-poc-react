// use react router
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router';
import List from './list.jsx';
import Form from './form.jsx';

class App extends React.Component {
  render() {
    return (
      <List />
    );
  }
}

render(<App />, document.getElementById('render-target'));
