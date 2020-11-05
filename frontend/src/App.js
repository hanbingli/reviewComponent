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
  const articleId ='5f9af4826d4d6b0fc2ab32f7';
  const dummyPros =['economic', 'fast delivery', 'nice wrapping', 'high quality'];
  const dummyCons = ['pricy', 'slow delivery', 'bad wrapping', 'bad quality']

  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <img src={bannerPic} className='bannerPic'/>
      </header>

      <Route path='/'exact>
        <ReviewPage articleId={articleId} />
      </Route>

      <Route path="/addReview" exact>
        <AddReviewPage articleId={articleId} pros={dummyPros} cons={dummyCons} />
      </Route>
    </div>
    </Router>
  );
}

export default App;
