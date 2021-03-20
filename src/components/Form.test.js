import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from 'components/Form';
import { renderWithTheme } from 'helpers/renderWithTheme';

describe('Form component', () => {
  let mockFetchFunc;
  beforeAll(() => {
    mockFetchFunc = jest.fn();
  });

  it('renders correctly', () => {
    renderWithTheme(<Form fetchForecast={mockFetchFunc} />);

    expect(screen.getAllByRole('textbox')).toHaveLength(2);
    expect(screen.getByRole('button')).toHaveTextContent(/check/i);
  });

  it('sets focus on city textbox', () => {
    renderWithTheme(<Form fetchForecast={mockFetchFunc} />);

    expect(screen.getByLabelText(/city/i)).toHaveFocus();
  });

  it('displays validation message on empty textbox blur', async () => {
    renderWithTheme(<Form fetchForecast={mockFetchFunc} />);

    userEvent.tab();
    userEvent.tab();

    expect(await screen.findAllByText(/required/i)).toHaveLength(2);
  });

  it('trims whitespace on textbox blur', async () => {
    const city = ' dublin ';
    renderWithTheme(<Form fetchForecast={mockFetchFunc} />);

    userEvent.type(screen.getByLabelText(/city/i), city);
    userEvent.tab();

    expect(await screen.findByLabelText(/city/i)).toHaveValue(city.trim());
  });

  it('submits form data correctly', async () => {
    const data = { city: 'dublin', country: 'ireland' };
    renderWithTheme(<Form fetchForecast={mockFetchFunc} />);

    userEvent.type(screen.getByLabelText(/city/i), data.city);
    userEvent.type(screen.getByLabelText(/country/i), data.country);
    userEvent.click(screen.getByText(/check/i));

    expect(await screen.findByLabelText(/city/i)).toHaveValue('');
    expect(await screen.findByLabelText(/country/i)).toHaveValue('');
    expect(mockFetchFunc).toHaveBeenCalledTimes(1);
    expect(mockFetchFunc).toHaveBeenCalledWith(data);
  });

  it('disables submit button while form is invalid', async () => {
    const data = { city: 'dublin', country: 'ireland' };
    renderWithTheme(<Form fetchForecast={mockFetchFunc} />);

    expect(screen.getByText(/check/i)).toBeDisabled();
    userEvent.type(screen.getByLabelText(/city/i), data.city);
    expect(await screen.findByText(/check/i)).toBeDisabled();
    userEvent.type(screen.getByLabelText(/country/i), data.country);
    expect(await screen.findByText(/check/i)).not.toBeDisabled();
  });
});
