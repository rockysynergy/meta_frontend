import React from "react";
import './App.css';

function BookingPage({ date, setDate, time, setTime, guests, setGuests, occasion, setOccasion, availableTimes, dispatch }) {
    const handleDateChange = (e) => {
        setDate(e.target.value);
        dispatch({ type: 'UPDATE_TIMES', date: e.target.value });
    };
    const handleTimeChange = (e) => setTime(e.target.value);
    const handleGuestsChange = (e) => setGuests(e.target.value);
    const handleOccasionChange = (e) => setOccasion(e.target.value);

    return (
      <div id="booking-page">
        <h1>Book a Table</h1>
        
        <form>
          <label htmlFor="res-date">Choose date</label>
          <input type="date" id="res-date" value={date} onChange={handleDateChange} />

          <label htmlFor="res-time">Choose time</label>
          <select id="res-time" value={time} onChange={handleTimeChange}>
            {availableTimes.map((time) => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>
         
          <label htmlFor="guests">Number of guests</label>
          <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={handleGuestsChange} />
          
          <label htmlFor="occasion">Occasion</label>
          <select id="occasion" value={occasion} onChange={handleOccasionChange}>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
          
          <input type="submit" value="Make Your reservation"/>
        </form>
      </div>
    );
}

export default BookingPage;
