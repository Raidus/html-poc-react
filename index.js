// import list and form pages
// build app component
// use react router
// use react-dom to render app
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router';

class App extends React.Component {
  render() {
    return (
      <div>App</div>
    );
  }
}

render(<App />, document.getElementById('render-target'));
