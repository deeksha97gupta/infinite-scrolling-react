import React from "react";
import { render } from '@testing-library/react';
import BookList from '../bookList';

describe('BookList Page', () => {
  test('should have Book Name Box', () => {
    const { getByText } = render(<BookList setToken={() => {}} />)
    expect(
        getByText('Book Name:')
      ).toBeInTheDocument()
  });

  test('should have Logout button', () => {
    const { getByText } = render(<BookList setToken={() => {}} />)
    expect(
      getByText('Logout')
    ).toBeInTheDocument()
  })
})
