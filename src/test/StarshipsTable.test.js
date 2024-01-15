import React from 'react';
import { render, screen, act, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import StarshipsTable from '../Components/StarshipsTable';


test('assert StarshipsTable rendering', async () => {

  render(<StarshipsTable />);

  await act(async () => {
    // wait for asynchronous operations
    await waitFor(() => {
      expect(screen.getByText('Star Wars Starships')).toBeInTheDocument();
    });
  });
});
