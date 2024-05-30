import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import BookingInfo from './BookingInfo';

describe('Booking Info', () => {
  it('should allow user to select date, time, and number of players', () => {
    render(<BookingInfo />);
    
    const dateInput = screen.getByText("Date");
    const timeInput = screen.getByText("Time");
    const playerInput = screen.getByText("Number of awesome bowlers");
    const submitButton = screen.getByText("submit");
    
    fireEvent.change(dateInput, { target: { value: '2024-06-01' } });
    fireEvent.change(timeInput, { target: { value: '18:00' } });
    fireEvent.change(playerInput, { target: { value: '2' } });

    fireEvent.click(submitButton);

    const confirmationMessage = screen.getByText("confirmation");
    expect(confirmationMessage).toBeInTheDocument();
  });
});