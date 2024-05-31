
import { render, screen, fireEvent } from '@testing-library/react';

import { describe, it, expect } from 'vitest';
import BookingInfo from './BookingInfo';

describe('BookingInfo', () => {
  it('should allow user to select date, time, and number of players', () => {
    render(<BookingInfo />);
    
    const currentDate = new Date().toISOString().split("T")[0];
    const dateInput = screen.getByText("Date");
    fireEvent.change(dateInput, { 
        target: { value: currentDate } 
    });

    const input = screen.getByTestId("selected_time");
    const timeInput = screen.getByText("Time");
    fireEvent.change(timeInput, { 
        target: { value: input } 
    });

    const playerInput = screen.getByLabelText("Number of awesome bowlers");
    fireEvent.change(playerInput, { target: { value: '0' } });

    
    const confirmationMessage = screen.getByText("confirmation");
    expect(confirmationMessage).toBeInTheDocument();
  });
});




