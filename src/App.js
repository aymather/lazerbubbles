import React, { Component } from 'react';
import './App.css';
import TableDisplay from './components/TableSelector';

class App extends Component {

    render(){
        return (
          <div className="App">
              <TableDisplay />
          </div>
        )
    }
}

export default App;
