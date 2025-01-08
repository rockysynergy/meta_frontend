
// Footer.js
import React from 'react';
import logoImg from './assets/images/logo.svg';

const Footer = () => {
    return (
        <footer id="footer">
        <div class="container">
            <div class="row gx-5">
                <div class="col-sm-3">
                    <img src={logoImg} alt="" srcset="" />
                </div>
                <div class="col-sm-3">
                    <h3>Doormat Navigation</h3>
                    <ul>
                        <li>Nav 1</li>
                        <li>Nav 2</li>
                        <li>Nav 3</li>
                        <li>Nav 4</li>
                        <li>Nav 5</li>
                        <li>Nav 6</li>
                    </ul>
                </div>
                <div class="col-sm-3">
                    <h3>Contact</h3>
                    <ul>
                        <li>Address</li>
                        <li>Phone number</li>
                        <li>email</li>
                    </ul>
                </div>
                <div class="col-sm-3">
                    <h3>Social MediaLinks</h3>
                    <ul>
                        <li>littleLemon@facebook</li>
                        <li>llemon@x.com</li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    );
};

export default Footer;
