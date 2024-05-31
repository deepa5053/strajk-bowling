import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Shoes from './Shoes';

describe('Shoe Size Selection', () => {
  it('should generate shoe size inputs for each player', () => {
    const shoeProps = { shoes: [{ id: '0dx5eEIGUBG1VpRB7tf1h', size: '' }] };
    render(<Shoes {...shoeProps} />);
    
    const playerButton = screen.getByTestId("shoe_button");
    fireEvent.click(playerButton);
    
    expect(screen.getByTestId("shoe_size_input")).toBeInTheDocument();
  });
});
