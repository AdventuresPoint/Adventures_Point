import React, { Component } from "react";

import { Link } from "react-router-dom";
import img1 from './images/HS1.jpg'

export default class EMP extends Component {
  render() {
    return (
      <div className="container ">
        {" "}
        <div>
          <div className="banner-card">
            <img src={img1} class="card-img" alt="..." />
            <div className="banner-text ">
              <h1>ADVENTURES POINT</h1>
              <h2>Adventure is Awaits</h2>
              <h3>What are you waiting for..?</h3>

              <div className="slider-btn ">
                <Link to="/home">
                <button type="button" class="btn btn-outline-light">
                  Get Started
                </button>
                </Link>
                {/* <Link to="/video">
                <button type="button" class="btn btn-outline-light">
                  Watch Video
                </button>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
