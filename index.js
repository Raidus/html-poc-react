// use react router
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match } from 'react-router';
import List from './list.jsx';
import Form from './form.jsx';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Match exactly pattern="/" component={List} />
          <Match exactly pattern="/test" component={Form} />
        </div>
      </BrowserRouter>
    );
  }
}

render(<App />, document.getElementById('render-target'));
