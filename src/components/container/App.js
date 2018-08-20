import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from '../presentational/Home/Home';
import Slide from '../presentational/Slide/Slide';
import SlideList from '../presentational/Slide/SlideList';

import './App.scss';

const App = () => (
  <Router>
    <div className="App container">
      <div className="row">
        <Route exact path="/" component={Home} />
        <Route exact path="/slides" component={SlideList} />
        <Route path="/slides/:id" component={Slide} />
      </div>
    </div>
  </Router>
);

export default App;
