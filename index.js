import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Link } from 'react-router';
import List from './list.jsx';
import Form from './form.jsx';
import { Provider } from 'react-redux';
import { store } from './store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/form">Form</Link></li>
            </ul>
            <Match exactly pattern="/" component={List} />
            <Match exactly pattern="/form" component={Form} />
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

render(<App />, document.querySelector('#render-target'));
