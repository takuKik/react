import React, { Component } from 'react';

class App extends Component {
  render() {
     const greeting = "Hi,Tom!";
     const dom = <h1>{greeting}</h1>;
    return dom;
  }
}

export default App;
