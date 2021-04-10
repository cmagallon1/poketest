import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('Search inputs brings pokemon', async () => {
  render(<App />);
  fireEvent.change(screen.getByTestId('searchInput'), { target: { value: 'pikachu' } }) 
  fireEvent.click(screen.getByText('Find'))
  await waitFor(() => screen.getByTestId('pokemonName'))

  expect(screen.getByTestId('pokemonName')).toBeInTheDocument();
});
