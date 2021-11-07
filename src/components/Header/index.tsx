/* eslint-disable react/style-prop-object */
import React, { Component } from 'react';
import CanvasComponent from '../../elements/canvas';
import './header.scss'
class HeaderComponenet extends Component {
  render() {
    return (
      <div>
        <div className="background"></div>
        <div className="background-texture"></div>
        <header className="header">
          <div className="left-content">
            <p className="stay-home">Stay Home!!</p>
            <h1>Be a good Calm And Let's Watch TV.</h1>
            <p></p>
            <p className="para">
              Make Fun in Our Home with Our Family and keep stay At home
              for your health, saves your self and your family Or You Can Scroll buttom let's see
            </p>
            <a href="http://" className="btn btn-primary">Join and Watch</a>
          </div>
          <CanvasComponent></CanvasComponent>
        </header>
        <script src="main.js"></script>
      </div>
    );
  }
}

export default HeaderComponenet;