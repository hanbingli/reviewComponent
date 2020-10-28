import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import logo from './logo.svg';
import bannerPic from './banner.jpg';
import './App.css';

import ReviewPage from './components/ReviewPage';
import AddReviewPage from './components/AddReviewPage';


function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <img src={bannerPic} className='bannerPic'/>
      </header>

      <Route path="/" exact>
        <ReviewPage />
      </Route>

      <Route path="/review" exact>
        <AddReviewPage />
      </Route>
    </div>
    </Router>
  );
}

export default App;
