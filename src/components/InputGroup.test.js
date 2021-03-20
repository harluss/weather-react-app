import { screen } from '@testing-library/react';
import InputGroup from 'components/InputGroup';
import { renderWithTheme } from 'helpers/renderWithTheme';

const setTestProps = () => ({
  label: 'city',
  name: 'city',
  touched: {},
  errors: {},
});

describe('Input component', () => {
  let testProps;
  beforeAll(() => {
    testProps = setTestProps();
  });

  it('displays correct label', async () => {
    renderWithTheme(<InputGroup {...testProps} />);

    expect(await screen.findByText(testProps.label)).toBeInTheDocument();
  });

  it('has a default type of text', async () => {
    renderWithTheme(<InputGroup {...testProps} />);

    expect(await screen.findByLabelText(testProps.label)).toHaveAttribute('type', 'text');
  });

  it('does not show required message after render', () => {
    renderWithTheme(<InputGroup {...testProps} />);

    expect(screen.queryByText(/required/i)).not.toBeInTheDocument();
  });

  it('displays required message correctly', async () => {
    const validationError = { touched: { city: true }, errors: { city: 'Required' } };
    renderWithTheme(<InputGroup {...testProps} {...validationError} />);

    expect(await screen.findByText(/required/i)).toBeInTheDocument();
  });
});
