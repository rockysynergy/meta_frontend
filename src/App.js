import React, { useState, useReducer } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from './Nav';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking'; // Import the ConfirmedBooking component

import { fetchAPI, submitAPI } from './api';

export const initializeTimes = () => {
    const today = new Date();
    return fetchAPI(today);
};

export const updateTimes = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            return fetchAPI(new Date(action.date));
        default:
            return state;
    }
};

const App = () => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("");
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

    const submitForm = (formData) => {
        return submitAPI(formData);
    };

    return (
        <div className="App">
            <Router>
                <Nav />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route 
                        exact 
                        path="/booking" 
                        render={(props) => (
                            <BookingPage 
                                {...props}
                                date={date}
                                setDate={setDate}
                                time={time}
                                setTime={setTime}
                                guests={guests}
                                setGuests={setGuests}
                                occasion={occasion}
                                setOccasion={setOccasion}
                                availableTimes={availableTimes}
                                dispatch={dispatch}
                                submitForm={submitForm} 
                            />
                        )}
                    />
                    <Route exact path="/confirmed" component={ConfirmedBooking} />
                </Switch>
            </Router>
        </div>
    );
};

export default App;
