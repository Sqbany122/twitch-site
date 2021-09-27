import React, {useState} from 'react';
import './App.css';
import Navigation from "./components/Navbar";
import MainPage from "./components/pages/MainPage";
import Clips from "./components/pages/Clips";
import Videos from "./components/pages/Videos";
import Projects from "./components/pages/Projects";
import Commands from "./components/pages/Commands";
import Moderators from "./components/pages/users/Moderators";
import BannedUsers from "./components/pages/users/BannedUsers";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <div className="main">
        <Navigation />
        <Switch>
            <Route path="/" exact component={MainPage}/>
            <Route path="/klipy" exact component={Clips}/>
            <Route path="/wideo" exact component={Videos}/>
            <Route path="/moderatorzy" exact component={Moderators}/>
            <Route path="/zbanowani" exact component={BannedUsers}/>
            <Route path="/komendy" exact component={Commands}/>
            <Route path="/projekty" exact component={Projects}/>
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
