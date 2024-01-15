import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Pagination from '../Components/Pagination';

test('renders pagination buttons', () => {
  const totalPages = 4;
  const currentPage = 3;
  const onPageChange = jest.fn();

  const { queryByText } = render(
    <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={onPageChange} />
  );

  // Assert that page numbers 1, 2, 3, and 4 are rendered
  expect(queryByText('1')).toBeInTheDocument();
  expect(queryByText('2')).toBeInTheDocument();
  expect(queryByText('3')).toBeInTheDocument();
  expect(queryByText('4')).toBeInTheDocument();

  // Assert that page number 5 is not rendered
  expect(queryByText('5')).toBeNull();
});

test('calls onPageChange when a button is clicked', () => {
  const totalPages = 4;
  const currentPage = 3;
  const onPageChange = jest.fn();

  const { getByText } = render(
    <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={onPageChange} />
  );

  fireEvent.click(getByText('4'));

  expect(onPageChange).toHaveBeenCalledWith(4);
});