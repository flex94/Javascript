import React from 'react';
import { Counter } from '../containers/SomeContainer.js';

export class Body extends React.Component {
  render () {
    return <div id="app_body">
      <p className="App-intro"> To get started, edit <code>src/App.js</code> and save to reload. </p>
      <div className="row">
        <div className="col col-xs-12">
          <Counter/>
        </div>
      </div>
    </div>;
  }
}

