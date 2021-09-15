import React, {useState} from 'react';
import './App.css';
import Navigation from "./components/Navbar";
import MainPage from "./components/pages/MainPage";
import Clips from "./components/pages/Clips";
import Videos from "./components/pages/Videos";
import Moderators from "./components/pages/users/Moderators";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Navigation />
      <div className="main">
        <Switch>
            <Route path="/" exact component={MainPage}/>
            <Route path="/klipy" exact component={Clips}/>
            <Route path="/wideo" exact component={Videos}/>
            <Route path="/moderatorzy" exact component={Moderators}/>
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
