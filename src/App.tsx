import React, { useState, useCallback } from "react";
import LaunchList from "./Components/LaunchList";
import LaunchProfile from "./Components/LaunchProfile";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <LaunchList />
        </Route>
        <Route exact path="/details">
          <LaunchProfile />
        </Route>
      </Router>
    </div>
  );
};

export default App;
