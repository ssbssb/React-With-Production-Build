import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      id : this.props.id
    };
  }
render()
{
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
