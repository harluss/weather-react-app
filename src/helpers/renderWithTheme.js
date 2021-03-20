import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';

export const renderWithTheme = (children) => {
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
};
