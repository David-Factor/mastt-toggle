import React from 'react';
import { render, screen, act } from '@testing-library/react';
import Toggle from './Toggle';

test('correctly renders initial state', () => {
  act(() => {
    render(<Toggle />);
  })
  expect(screen.getByRole('button')).toHaveTextContent('ON')
});

test('toggles button label when clicked', () => {
  act(() => {
    render(<Toggle />);
  })

  const button = screen.getByRole('button')
  const clickToggle = () => button.dispatchEvent(new MouseEvent('click', { bubbles: true }))

  act(() => {
    clickToggle()
  })
  expect(button).toHaveTextContent('OFF')

  act(() => {
    clickToggle()
  })
  expect(button).toHaveTextContent('ON')
});
