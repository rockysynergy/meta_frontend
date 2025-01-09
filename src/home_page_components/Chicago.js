import React from 'react';
import img1 from '../assets/images/food2.jpg';
import img2 from '../assets/images/food3.jpg';

function Chicago() {
    return (
      <section id="about" className="container">
      <div className="row">
          <article className="col-sm-7">
              <h2>Little Lemon</h2>
              <h3>Chicago</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit</p>
          </article>
          <div className="col-sm-5 images">
              <img src={img1} alt="" />
              <img src={img2} alt="" />
          </div>
        </div>
      </section>
    );
}

export default Chicago;
