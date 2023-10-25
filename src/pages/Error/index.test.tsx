import React from 'react';
import { useRouteError } from 'react-router';
import { render } from '@testing-library/react';

import ErrorPage from '../../pages/Error';

// Mock the useRouteError function
jest.mock('react-router', () => ({
  useRouteError: jest.fn(),
}));

// Custom text matcher to find the text within the component
const findText = (container: HTMLElement, text: string) => {
  const allText = container.textContent || '';
  return allText.includes(text);
};

describe('ErrorPage Component', () => {
  it('renders an error message when error is provided', () => {
    // Mock the error data
    const error = {
      data: 'mockedErrorData',
      status: 'mockedStatus',
      statusText: 'mockedStatusText',
    };

    // Mock the useRouteError function to return the error data
    (useRouteError as jest.Mock).mockReturnValue(error);

    const { container, queryByTestId } = render(<ErrorPage />);

    // Check for specific elements using data-testid attributes
    expect(queryByTestId('error-page')).toBeInTheDocument();

    expect(findText(container, 'Oops')).toBe(true);
    expect(findText(container, 'Sorry, an unexpected error has occurred')).toBe(
      true,
    );
    expect(findText(container, error.data)).toBe(true);
    expect(findText(container, error.status)).toBe(true);
    expect(findText(container, error.statusText)).toBe(true);
  });
});
