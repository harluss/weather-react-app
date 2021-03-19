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

    expect(await screen.findByText(testProps.label)).toBeInTheDocument();
  });

  it('has a default type of text', async () => {
    render(<Input {...testProps} />);

    expect(await screen.findByLabelText(testProps.label)).toHaveAttribute('type', 'text');
  });

  it('does not show required message after render', () => {
    render(<Input {...testProps} />);

    expect(screen.queryByText(/required/i)).not.toBeInTheDocument();
  });

  it('displays required message correctly', async () => {
    const validationError = { touched: { city: true }, errors: { city: 'Required' } };
    render(<Input {...testProps} {...validationError} />);

    expect(await screen.findByText(/required/i)).toBeInTheDocument();
  });
});
