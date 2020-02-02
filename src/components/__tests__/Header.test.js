import React from 'react';
import ReactDOM from 'react-dom';
import { render, getByText, cleanup } from '@testing-library/react';
import { renderer } from 'react-test-renderer';
import Header from '../Header';

afterEach(cleanup);

describe('should compoenent', () => {
    xit('header exist', () => {
        const _div = document.createElement('div');
        const _result = ReactDOM.render(<Header />, _div);
        const header = render(<Header />);
        expect(header).not.toBeNull();
    });

    xit('header contain specific text', () => {
        const { getByText } = render(<Header />);
        const headerText = getByText(/header/i);
        expect(headerText).toBeInTheDocument();
    });

    it('matches snapshot', () => {
        const snapshot = renderer.create(<Header />).toJSON();
    })
})