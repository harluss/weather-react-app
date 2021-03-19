import { render, screen } from '@testing-library/react';
import Input from 'components/Input';

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
    render(<Input {...testProps} />);

    const label = await screen.findByText(testProps.label);
    expect(label).toBeInTheDocument();
  });

  it('has a default type of text', async () => {
    render(<Input {...testProps} />);

    const input = await screen.findByLabelText(testProps.label);
    expect(input).toHaveAttribute('type', 'text');
  });

  it('does not show required message after render', () => {
    render(<Input {...testProps} />);

    const validation = screen.queryByText(/required/i);
    expect(validation).not.toBeInTheDocument();
  });

  it('displays required message correctly', async () => {
    const validationError = { touched: { city: true }, errors: { city: 'Required' } };
    render(<Input {...testProps} {...validationError} />);

    const validationMessage = await screen.findByText(/required/i);
    expect(validationMessage).toBeInTheDocument();
  });
});
