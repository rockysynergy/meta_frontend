import React from 'react';
import { render, screen } from '@testing-library/react';
import BookingPage from './BookingPage';

test('renders Book a Table heading', () => {
  render(<BookingPage 
    date="" 
    setDate={() => {}} 
    time="" 
    setTime={() => {}} 
    guests={1} 
    setGuests={() => {}} 
    occasion="" 
    setOccasion={() => {}} 
    availableTimes={[]} 
    dispatch={() => {}} 
  />);
  const headingElement = screen.getByText(/Book a Table/i);
  expect(headingElement).toBeInTheDocument();
});