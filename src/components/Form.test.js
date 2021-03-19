import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from 'components/Form';

describe('Form component', () => {
  let mockFetchFunc;
  beforeAll(() => {
    mockFetchFunc = jest.fn();
  });

  it('renders correctly', () => {
    render(<Form fetchForecast={mockFetchFunc} />);

    expect(screen.getAllByRole('textbox')).toHaveLength(2);
    expect(screen.getByRole('button')).toHaveTextContent(/check/i);
  });

  it('sets focus on city textbox', () => {
    render(<Form fetchForecast={mockFetchFunc} />);

    expect(screen.getByLabelText(/city/i)).toHaveFocus();
  });

  it('displays validation message on empty form submission', async () => {
    render(<Form fetchForecast={mockFetchFunc} />);

    userEvent.click(screen.getByText(/check/i));

    expect(await screen.findAllByText(/required/i)).toHaveLength(2);
  });

  it('trims whitespace on textbox blur', async () => {
    const city = ' dublin ';
    render(<Form fetchForecast={mockFetchFunc} />);

    userEvent.type(screen.getByLabelText(/city/i), city);
    userEvent.tab();

    expect(await screen.findByLabelText(/city/i)).toHaveValue(city.trim());
  });

  it('submits form data correctly', async () => {
    const data = { city: 'dublin', country: 'ireland' };
    render(<Form fetchForecast={mockFetchFunc} />);

    userEvent.type(screen.getByLabelText(/city/i), data.city);
    userEvent.type(screen.getByLabelText(/country/i), data.country);
    userEvent.click(screen.getByText(/check/i));

    expect(await screen.findByLabelText(/city/i)).toHaveValue('');
    expect(await screen.findByLabelText(/country/i)).toHaveValue('');
    expect(mockFetchFunc).toHaveBeenCalledTimes(1);
    expect(mockFetchFunc).toHaveBeenCalledWith(data);
  });
});
