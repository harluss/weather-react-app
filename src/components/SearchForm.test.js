import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchForm from './SearchForm';

afterEach(() => {
	jest.resetAllMocks();
});

describe('SearchForm', () => {
	it('Renders SearchFrom component', () => {
		render(<SearchForm />);

		expect(screen.getByPlaceholderText(/Enter city/i)).toBeInTheDocument();
		expect(screen.getByPlaceholderText(/Enter country/i)).toBeInTheDocument();
		expect(screen.getByText(/Check/i)).toBeInTheDocument();
	});

	it('Sets focus on City textbox', () => {
		render(<SearchForm />);

		expect(screen.getByPlaceholderText(/Enter city/i)).toHaveFocus();
	});

	it('Displays validation message on empty form submission', async () => {
		render(<SearchForm />);

		await userEvent.click(screen.getByText(/Check/i));

		expect(screen.getAllByText(/Please enter a/i)).toHaveLength(2);
	});

	it('Updates location state on user input', async () => {
		const city = 'Dublin';
		const country = 'IE';
		render(<SearchForm />);

		await userEvent.type(screen.getByPlaceholderText(/Enter city/i), city);
		await userEvent.type(
			screen.getByPlaceholderText(/Enter country/i),
			country,
		);

		expect(screen.getByPlaceholderText(/Enter city/i)).toHaveValue(city);
		expect(screen.getByPlaceholderText(/Enter country/i)).toHaveValue(country);
	});

	it('Trims white space on textbox blur', async () => {
		const city = 'Dublin';
		render(<SearchForm />);

		await userEvent.type(
			screen.getByPlaceholderText(/Enter city/i),
			`   ${city} `,
		);
		await userEvent.tab();

		expect(screen.getByPlaceholderText(/Enter city/i)).toHaveValue(city);
	});

	it('Logs location state to the console on form submission', async () => {
		const city = 'Dublin';
		const country = 'IE';
		const logResult = { city: 'Dublin', country: 'IE' };
		const log = jest.spyOn(global.console, 'log');
		render(<SearchForm />);

		await userEvent.type(screen.getByPlaceholderText(/Enter city/i), city);
		await userEvent.type(
			screen.getByPlaceholderText(/Enter country/i),
			country,
		);
		await userEvent.click(screen.getByText(/Check/i));

		expect(log).toHaveBeenCalledWith(logResult);
	});
});
