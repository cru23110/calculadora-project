import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Calculator from '../components/Calculator'
import { describe, it, expect } from 'vitest'

describe('Calculator', () => {
  it('shows number when button is clicked', () => {
    render(<Calculator />)
    fireEvent.click(screen.getByText('7'))
    expect(screen.getByRole('heading')).toHaveTextContent('7')
  })

  it('adds numbers correctly', () => {
    render(<Calculator />)
    fireEvent.click(screen.getByText('3'))
    fireEvent.click(screen.getByText('+'))
    fireEvent.click(screen.getByText('5'))
    fireEvent.click(screen.getByText('='))
    expect(screen.getByRole('heading')).toHaveTextContent('8')
  })

  it('shows ERROR for large numbers', () => {
  render(<Calculator />)
  const button9 = screen.getAllByText('9').find(el => el.tagName === 'BUTTON')
  for (let i = 0; i < 9; i++) fireEvent.click(button9)
  fireEvent.click(screen.getByText('+'))
  fireEvent.click(screen.getByText('1'))
  fireEvent.click(screen.getByText('='))
  expect(screen.getByRole('heading')).toHaveTextContent('ERROR')
})

  it('shows ERROR when result is negative', () => {
    render(<Calculator />)
    fireEvent.click(screen.getByText('1'))
    fireEvent.click(screen.getByText('-'))
    fireEvent.click(screen.getByText('2'))
    fireEvent.click(screen.getByText('='))
    expect(screen.getByRole('heading')).toHaveTextContent('ERROR')
  })

  it('handles decimal input', () => {
    render(<Calculator />)
    fireEvent.click(screen.getByText('3'))
    fireEvent.click(screen.getByText('.'))
    fireEvent.click(screen.getByText('1'))
    expect(screen.getByRole('heading')).toHaveTextContent('3.1')
  })
})
