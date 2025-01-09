import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { initializeTimes, updateTimes } from './App';
import { fetchAPI } from './api';

// Mock the fetchAPI function
jest.mock('./api', () => ({
  fetchAPI: jest.fn(),
  submitAPI: jest.fn(),
}));

test('renders Book a Table heading', () => {
  render(<App />);
  const linkElement = screen.getByText(/Book a Table/i);
  expect(linkElement).toBeInTheDocument();
});

test('initializeTimes returns the correct initial state', () => {
  fetchAPI.mockReturnValue(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
  const initialState = initializeTimes();
  expect(initialState).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
});

test('updateTimes returns the correct state based on the provided date', () => {
  fetchAPI.mockReturnValue(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
  const initialState = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const action = { type: 'UPDATE_TIMES', date: '2022-12-31' };
  const newState = updateTimes(initialState, action);
  expect(newState).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
});
