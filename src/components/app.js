import React, { Component } from 'react';
import { Switch, Route} from "react-router-dom"

import Nav from "./nav"
import Home from "./pages/home"
import Hat from "./pages/hat"
import AddHat from "./pages/add-hat"

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Nav />

        <Switch>
          <Route exact path="/" component = {Home} />
          <Route path="/hats" component = {Hat} />
          <Route path="/add-hat" component = {AddHat} />
        </Switch>
      </div>
    );
  }
}
