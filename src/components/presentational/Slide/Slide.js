import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import talkData from '../../../data';

import './Slide.scss';

class Slide extends Component {
  componentDidMount = () => {
    document.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount = () => {
    document.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = (event) => {
    const keyName = event.key;

    if (keyName === 'ArrowRight') {
      this.nextSlide();
    } else if (keyName === 'ArrowLeft') {
      this.previousSlide();
    }
  }

  nextSlide = () => {
    const currentSlideId = +this.props.match.params.id;

    if (!this.isLastSlide()) {
      this.props.history.push(`/slides/${currentSlideId + 1}`);
    }
  }

  previousSlide = () => {
    const currentSlideId = +this.props.match.params.id;

    if (!(currentSlideId <= 1)) {
      this.props.history.push(`/slides/${currentSlideId - 1}`);
    }
  }

  isLastSlide = () => {
    return talkData.slides.length === +this.props.match.params.id;
  }

  renderLeftArrow = (id) => {
    if (id > 1) {
      return (
        <div className="Slide__arrows--left">
          <Link to={`/slides/${id-1}`}> ◀ </Link>
        </div>
      )
    }
  }

  renderRightArrow = (id) => {
    if (!this.isLastSlide()) {
      return (
        <div className="Slide__arrows--right">
          <Link to={`/slides/${id+1}`}> ▶ </Link>
        </div>
      )
    }
  }

  render() {
    const id = +this.props.match.params.id;
    const slideData = talkData.slides.find(data => data.id === id);

    return (
      <div className="Slide">
        <div className="Slide__arrows">
          { this.renderLeftArrow(id) }
          <small className="Slide__id">{ id }</small>
          { this.renderRightArrow(id) }
        </div>
        <h1 className="Slide__title">
          { slideData.title }
        </h1>
        <p className="Slide__body">
          { slideData.body }
        </p>
        <div className="Slide_link">
          <Link to="/slides" className="button">all slides</Link>
          <Link to="/" className="button">home</Link>
        </div>
      </div>
    );
  }
}

export default Slide;
