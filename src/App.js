import React, { useState, useReducer } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from './Nav';
import HomePage from './HomePage';
import BookingPage from './BookingPage';

const initializeTimes = () => {
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

const updateTimes = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            // For now, return the same available times regardless of the date
            return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
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
                            />
                        )}
                    />
                </Switch>
            </Router>
        </div>
    );
};

export default App;
