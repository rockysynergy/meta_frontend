import React, { useState } from "react";
import './App.css';
import { useHistory } from 'react-router-dom';

function BookingPage({ date, setDate, time, setTime, guests, setGuests, occasion, setOccasion, availableTimes, dispatch, submitForm }) {
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({});
    const history = useHistory();
    
    const handleDateChange = (e) => {
        setDate(e.target.value);
        dispatch({ type: 'UPDATE_TIMES', date: e.target.value });
    };
    const handleTimeChange = (e) => setTime(e.target.value);
    const handleGuestsChange = (e) => setGuests(e.target.value);
    const handleOccasionChange = (e) => setOccasion(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = { date, time, guests, occasion };
        setFormData(formData);
        setShowModal(true); // Show the modal with the form data
    };

    const handleCloseModal = () => {
        setShowModal(false);
        if (submitForm(formData)) {
            history.push('/confirmed'); // Navigate to the confirmed page
        }
    };

    return (
      <div id="booking-page">
        <h1>Book a Table</h1>
        
        <form onSubmit={handleSubmit}>
          <label htmlFor="res-date">Choose date</label>
          <input type="date" id="res-date" value={date} onChange={handleDateChange} required />

          <label htmlFor="res-time">Choose time</label>
          <select id="res-time" value={time} onChange={handleTimeChange} required>
            {availableTimes.map((time) => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>
         
          <label htmlFor="guests">Number of guests</label>
          <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={handleGuestsChange} required />
          
          <label htmlFor="occasion">Occasion</label>
          <select id="occasion" value={occasion} onChange={handleOccasionChange} required>
            <option value="" disabled>Select an occasion</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
          
          <input type="submit" value="Make Your reservation"/>
        </form>

        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={handleCloseModal}>&times;</span>
              <h2>Reservation Details</h2>
              <p>Date: {formData.date}</p>
              <p>Time: {formData.time}</p>
              <p>Number of guests: {formData.guests}</p>
              <p>Occasion: {formData.occasion}</p>
              <button onClick={handleCloseModal}>Confirm</button>
            </div>
          </div>
        )}
      </div>
    );
}

export default BookingPage;
