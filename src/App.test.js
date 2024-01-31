import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  jest.spyOn(global, 'fetch').mockResolvedValue({
    ok: true,
    status: 200,
    json: () =>
      Promise.resolve({
        items: [
          {
            quote: 'Quote 1',
            author: 'Author 1',
          },
        ],
      }),
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('renders the header', () => {
    const { getByText } = render(<App />);
    const header = getByText('Random Quote Generator');
    expect(header).toBeInTheDocument();
  });

  it('renders initial quote and author', async () => {
    global.fetch.mockResolvedValueOnce({
      json: async () => ({ content: 'Quote 1', author: 'Author 1' }),
    });

    const { getByText } = render(<App />);

    await (() => {
      const quote = getByText('Quote 1');
      const author = getByText('Author 1');
      expect(quote).toBeInTheDocument();
      expect(author).toBeInTheDocument();
    });
  });
});
