import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
} from "react-router-dom";
import { Sidebar } from 'Sidebar';
import { SuspenseBasic } from 'SuspenseBasic';
import { SuspenseFilter } from 'SuspenseFilter';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="sidebar"><Sidebar /></div>
        <Route exact path='/suspense'><SuspenseBasic /></Route>
        <Route exact path='/s-filter'><SuspenseFilter /></Route>
        <Route exact path='/'>
          <Redirect to='/suspense' />
        </Route>
      </div>
    </Router>
  );
}

export default App;
