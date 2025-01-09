import React from 'react';
import basketImg from '../assets/images/basket .svg';

function CustomersSay() {
    return (
      <div id="testimonials">
        <section className="container">
          <h2 className="title">Testimonials</h2>
          <div className="row gx-5">
            <div className="col-sm-3">
              <article>
                <h3>Rating</h3>
                <div>
                  <img src={basketImg} alt="" />
                  <h3>Dish name</h3>
                </div>
                <p>Review Text</p>
              </article>
            </div>
            <div className="col-sm-3">
              <article>
                <h3>Rating</h3>
                <div>
                  <img src={basketImg} alt="" />
                  <h3>Dish name</h3>
                </div>
                <p>Review Text</p>
              </article>
            </div>
            <div className="col-sm-3">
              <article>
                <h3>Rating</h3>
                <div>
                  <img src={basketImg} alt="" />
                  <h3>Dish name</h3>
                </div>
                <p>Review Text</p>
              </article>
            </div>
            <div className="col-sm-3">
              <article>
                <h3>Rating</h3>
                <div>
                  <img src={basketImg} alt="" />
                  <h3>Dish name</h3>
                </div>
                <p>Review Text</p>
              </article>
            </div>
          </div>
        </section>
      </div>
    );
  }

export default CustomersSay;
