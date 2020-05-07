import React from "react";
import "./App.css";

import Home from './Home';
import AddBook from "./AddBook";
import {

  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
            <Home />
        </Route>
          <Route path="/add">
             <AddBook/>
          </Route>
      </Switch>
    </Router>


  );
}

export default App;
