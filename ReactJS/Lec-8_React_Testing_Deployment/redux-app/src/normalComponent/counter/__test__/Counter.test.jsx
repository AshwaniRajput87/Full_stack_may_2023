
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../Counter';

describe('Counter component', ()=> {
    test('snapshot testing', ()=>{
       const { asFragment } =  render(<Counter />);
       expect(asFragment()).toMatchSnapshot();
    });

    test('renders intial count of 0', ()=> {
        render(<Counter />);
       const decrementBtn = screen.getByText('-');
       const countText = screen.getByText('0');
       const incrementBtn = screen.getByText('+');

       expect(decrementBtn).toBeTruthy();
       expect(incrementBtn).toBeTruthy();
       expect(countText).toBeTruthy();

    });

    test('increment button increases the count by 1', ()=> {
        render(<Counter />);
        const incrementBtn = screen.getByText('+');
        fireEvent.click(incrementBtn);

        const countTxt = screen.getByText('1');
        expect(countTxt).toBeTruthy();
    });

    // Please write the decrement button test here. -> HW
});