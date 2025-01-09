import React from 'react';
import bannerImg from '../assets/images/banner.png';

function CallToAction() {
    return (
      <section id="hero" className="w-100">
        <div className="container">
            <div className="row">
                <article className="col-sm-6">
                    <h1 className="display-title">Little Lemon</h1>
                    <h2 className="display-subtitle">chicago</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit</p>
                    <input type="button" value="Reserve a Table" className="btn btn-primary cat-primary" />
                </article>
                <div className="col-sm-5 img-holder">
                    <img src={bannerImg} alt="" srcSet="" className="img-fluid"/>
                </div>
            </div>
        </div>
    </section>
    );
  }

export default CallToAction;
