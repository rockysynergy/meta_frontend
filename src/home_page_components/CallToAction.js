import React from 'react';
import bannerImg from '../assets/images/banner.png';

function CallToAction() {
    return (
      <section id="hero" class="w-100">
        <div class="container ">
            <div class="row">
                <article class="col-sm-6">
                    <h1 class="display-title">Little Lemon</h1>
                    <h2 class="display-subtitle">chicago</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit</p>
                    <input type="button" value="Reserve a Table" class="btn btn-primary cat-primary" />
                </article>
                <div class="col-sm-5 img-holder">
                    <img src={bannerImg} alt="" srcset="" class="img-fluid"/>
                </div>
            </div>
        </div>
    </section>
    );
  }

export default CallToAction;
