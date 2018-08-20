import React from 'react';
import { Link } from 'react-router-dom';

import './SlideList.scss';

import talkData from '../../../data';

const SlideItem = ({ id }) => (
  <div className="SlideList__item">
    <Link to={`/slides/${id}`}>{id}</Link>
  </div>
)

const SlideList = () => (
  <div className="SlideList">
    <h2>O mundo das Single Page Applications</h2>
    <div className="SlideList__wrapper">
      { talkData.slides.map(data => <SlideItem key={data.id} {...data} />) }
    </div>
    <div className="SlideList__link">
      <Link to="/" className="button">home</Link>
    </div>
  </div>
);

export default SlideList;
