// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from './Nav';
import HomePage from './HomePage';
import BookingPage from './BookingPage';

import React from 'react';

const App = () => {
    return (
        <div className="App">
            <Router>
                <Nav />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/booking" component={BookingPage} />
                </Switch>
            </Router>
      </div>
    );
};

export default App;
