import React, { Component } from 'react';
import Header from './components/Header'
import Brewery from './components/Brewery'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
          <Brewery />
                    
        </header>
      </div>
    );
  }
}

export default App;
