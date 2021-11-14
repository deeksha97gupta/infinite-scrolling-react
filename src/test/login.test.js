import React from "react";
import { render } from '@testing-library/react';
import Login from '../login';

describe('Login Page', () => {
  test('should have username and password', () => {
    const { getByText } = render(<Login setToken={() => {}} />)
    expect(
        getByText('Username')
      ).toBeInTheDocument()
  
    expect(
        getByText('Password')
    ).toBeInTheDocument()
  });

  test('should have submit button', () => {
    const { getByText } = render(<Login setToken={() => {}} />)
    expect(
      getByText('Submit')
    ).toBeInTheDocument()
  })
})
