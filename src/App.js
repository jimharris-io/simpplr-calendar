import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './App.css';
import Calendar from './calendar/Calendar';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Calendar}/>
          <Route exact path='/:month/:year' component={Calendar}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
