import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingPage from './BookingPage';

const mockDispatch = jest.fn();
const mockSubmitForm = jest.fn();

const setup = () => {
  const utils = render(
    <BookingPage
      date=""
      setDate={() => {}}
      time=""
      setTime={() => {}}
      guests={1}
      setGuests={() => {}}
      occasion=""
      setOccasion={() => {}}
      availableTimes={["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]}
      dispatch={mockDispatch}
      submitForm={mockSubmitForm}
    />
  );
  const dateInput = utils.getByLabelText(/Choose date/i);
  const timeSelect = utils.getByLabelText(/Choose time/i);
  const guestsInput = utils.getByLabelText(/Number of guests/i);
  const occasionSelect = utils.getByLabelText(/Occasion/i);
  const submitButton = utils.getByText(/Make Your reservation/i);
  return {
    dateInput,
    timeSelect,
    guestsInput,
    occasionSelect,
    submitButton,
    ...utils,
  };
};

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
    availableTimes={["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]}
    dispatch={mockDispatch}
    submitForm={mockSubmitForm}
  />);
  const headingElement = screen.getByText(/Book a Table/i);
  expect(headingElement).toBeInTheDocument();
});

test('validates form input fields', () => {
  const { dateInput, timeSelect, guestsInput, occasionSelect, submitButton } = setup();

  // Initially, the submit button should be disabled
  expect(submitButton).toBeDisabled();

  // Fill in the form with valid data
  fireEvent.change(dateInput, { target: { value: '2023-12-31' } });
  fireEvent.change(timeSelect, { target: { value: '18:00' } });
  fireEvent.change(guestsInput, { target: { value: '2' } });
  fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });

  // The submit button should be enabled
  expect(submitButton).not.toBeDisabled();

  // Clear the form to test invalid state
  fireEvent.change(dateInput, { target: { value: '' } });
  fireEvent.change(timeSelect, { target: { value: '' } });
  fireEvent.change(guestsInput, { target: { value: '' } });
  fireEvent.change(occasionSelect, { target: { value: '' } });

  // The submit button should be disabled again
  expect(submitButton).toBeDisabled();
});