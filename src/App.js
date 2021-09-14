import React, {useState} from 'react';
import './App.css';
import Navigation from "./components/Navbar";
import Clips from "./components/pages/Clips";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Navigation />
      <div className="main">
        <Switch>
            <Route path="/klipy" exact component={Clips}/>
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
