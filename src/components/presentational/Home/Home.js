import React from 'react';
import { Link } from 'react-router-dom';

import './Home.scss';

import talkData from '../../../data';

const Home = () => (
  <div className="Home">
    <small className="Home__social">
      <a
        href="https://twitter.com/willame_soares"
        rel="noopener"
        target="_blank">
        @willamesoares
      </a>
    </small>
    <h1 className="Home__title">
      { talkData.title }
    </h1>
    <div className="Home__link">
      <Link to="/slides" className="button">all slides</Link>
      <Link to="/slides/1" className="button">start</Link>
    </div>
  </div>
);

export default Home;
