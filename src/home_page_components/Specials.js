import React from 'react';
import food1 from '../assets/images/food1.jpg';
import food2 from '../assets/images/food2.jpg';
import food3 from '../assets/images/food3.jpg';

function Specials() {
  return (
    <section className="container" id="special">
      <div className="row py-3 justify-content-between">
          <h2 className="col-sm-6 text-left">This Week's Specials</h2>
          <input type="button" value="Online Menu" className="col-sm-2 btn btn-primary cat-primary" />
      </div>
      <div className="row cards">
          <article className="col-sm-4 card">
              <div className="img-cap">
                  <img src={food1} alt="" className="img-fluid" />
              </div>
              <div className="content">
                  <div className="d-flex justify-content-between align-items-end">
                      <h2>Greek Salad</h2>
                      <p className="price">112.99</p>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                  <input type="button" value="Order a Delivery" className="btn btn-secondary" />
              </div>
          </article>
          <article className="col-sm-4 card">
              <div className="img-cap">
                  <img src={food2} alt="" className="img-fluid" />
              </div>
              <div className="content">
                  <div className="d-flex justify-content-between align-items-end">
                      <h2>Greek Salad</h2>
                      <p className="price">112.99</p>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                  <input type="button" value="Order a Delivery" className="btn btn-secondary" />
              </div>
          </article>
          <article className="col-sm-4 card">
              <div className="img-cap">
                  <img src={food3} alt="" className="img-fluid" />
              </div>
              <div className="content">
                  <div className="d-flex justify-content-between align-items-end">
                      <h2>Greek Salad</h2>
                      <p className="price">112.99</p>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                  <input type="button" value="Order a Delivery" className="btn btn-secondary" />
              </div>
          </article>
      </div>
    </section>
    );
  }

export default Specials;
