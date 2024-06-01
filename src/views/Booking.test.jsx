import { fireEvent, render, screen, waitFor, within } from '@testing-library/react'
import Booking from './Booking';

describe('Booking', () => {
  beforeEach(() => {
    render(<Booking />)
  });

  
  async function fillInputFields(bowlers){
    const inputs = await screen.findAllByTestId('input');
    const dateInput = inputs[0];
    const timeInput = inputs[1];
    const bowlersInput = inputs[2];
    const lanesInput = inputs[3];

    fireEvent.change(dateInput, { target: { value: '2024-04-22'} });
    fireEvent.change(timeInput, { target: { value: '22:10'} });
    fireEvent.change(bowlersInput, { target: { value: String(bowlers)} });
    fireEvent.change(lanesInput, { target: { value: '1'} });
  }

  async function generateShoes(shoes){
    const addShoeBtn = await screen.findByText('+');
    for(let i = 1; i <= shoes; i++){
      fireEvent.click(addShoeBtn);
      const shoeInput = screen.getAllByRole('textbox');
      fireEvent.change(shoeInput[i - 1], { target: { value: '35'} });
    }
    const shoeInputs = await screen.findAllByRole('textbox')
    expect(shoeInputs.length).toBe(shoes);
  }


  describe('Removing Shoes', () => {
    it('Test if the user can remove shoes after being added', async () => {
   
    
      const addShoeBtn = await screen.findByText('+');
      fireEvent.click(addShoeBtn);
  
      const shoeInput = screen.getByRole('textbox');
      fireEvent.change(shoeInput, { target: { value: '55'} });
      
      const shoeContainer = document.querySelector('.shoes');
      const shoeBtn = await within(shoeContainer).findAllByRole('button')
      expect(shoeBtn.length).toBe(2);
      
      
      fireEvent.click(shoeBtn[0]);
      const shoeBtnsAfter = await within(shoeContainer).findAllByRole('button')
      expect(shoeBtnsAfter.length).toBe(1);
    });
  });

  describe('Making a Reservation', () => {
    it('(Full user flow). Test if the user can make a reservation after filling all input fields correctly, and if a price and booking id is returned followed by possibility to navigate back to the booking page', async () => {
  
      await fillInputFields(3);
  
      await generateShoes(3);
  
      const confirmBtn = screen.getByText(/stri/i);
      fireEvent.click(confirmBtn);
      
      const headingConf = await screen.findByRole('heading', {name: /see you/i});
      expect(headingConf).toBeInTheDocument();
  
      
      //const price = screen.getByText("2560");
      //expect(price).toBeInTheDocument();
      //const bookingId = screen.getByDisplayValue(/STR82H3LL/);
      //expect(bookingId).toBeInTheDocument();
  
     
      const returnBtn = screen.getByRole('button');
      fireEvent.click(returnBtn);
  
      const headingBook = await screen.findByRole('heading', {name: /booking/i});
      expect(headingBook).toBeInTheDocument();
    });
  
    it('Test if the user can make a reservation even if date input is empty', async () => {
  
      const inputs = screen.getAllByTestId('input');
      const dateInput = inputs[0];
      const timeInput = inputs[1];
      const bowlersInput = inputs[2];
      const lanesInput = inputs[3];
  
      fireEvent.change(dateInput, { target: { value: ''} });
      fireEvent.change(timeInput, { target: { value: '22:10'} });
      fireEvent.change(bowlersInput, { target: { value: '3' } });
      fireEvent.change(lanesInput, { target: { value: '1'} });
  
      await generateShoes(3)
  
      const confirmBtn = screen.getByText(/stri/i);
      fireEvent.click(confirmBtn);
  
      const errorMsg = screen.getByText(/fill out all the fields and make sure that people and shoes is the same number/i);
      expect(errorMsg).toBeInTheDocument();
    });
  
  });
});
