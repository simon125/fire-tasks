import React, { Component } from 'react';

import './App.css';


// Components
import AppBar from 'material-ui/AppBar'

import Todo from './components/Todo'



class App extends Component {
  render() {
    return (

      <div>
        <AppBar
          title="Welcome in FireTasks"
          iconElementLeft={null}
        />


        <Todo />
      </div>
    );
  }
}

export default App;
