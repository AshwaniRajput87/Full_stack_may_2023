
import React from 'react';
import { render } from '@testing-library/react';
import Counter from '../Counter';

// test('Counter component Sanpshot', ()=> {
//     const { asFragment } = render(<Counter />);
//     expect(asFragment()).toMatchSnapshot();
// });

describe('Counter component', ()=> {
    test('Counter component rendering the intial value', ()=> {
       render(<Counter />);
    });
});