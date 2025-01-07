import React from "react";

function BookingPage() {
    return (
      <div>
        <h1>Book a Tablea</h1>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="date">Date:</label>
          <input type="date" id="date" name="date" required />

          <label htmlFor="time">Time:</label>
          <input type="time" id="time" name="time" required />

          <label htmlFor="guests">Number of Guests:</label>
          <input type="number" id="guests" name="guests" min="1" required />

          <button type="submit">Reserve</button>
        </form>
      </div>
    );
  }

export default BookingPage;
