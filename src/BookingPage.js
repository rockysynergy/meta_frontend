import React, { useState } from "react";
import './App.css';

function BookingPage() {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("");
    const [availableTimes, setAvailableTimes] = useState([
        "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"
    ]);

    const handleDateChange = (e) => setDate(e.target.value);
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
