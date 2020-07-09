import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

it('renders raining cats text', () => {
	const { getByText } = render(<App />);
	const text = getByText(/Raining cats/i);
	expect(text).toBeInTheDocument();
});
