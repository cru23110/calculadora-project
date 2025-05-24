import { render, fireEvent } from '@testing-library/react'
import Calculator from '../components/Calculator'
import { describe, it, expect } from 'vitest'

describe('Calculator', () => {
  it('muestra número al presionar botón', () => {
    const { getByText } = render(<Calculator />)
    fireEvent.click(getByText('7'))
    expect(getByText('7')).toBeInTheDocument()
  })

  it('realiza suma correctamente', () => {
    const { getByText } = render(<Calculator />)
    fireEvent.click(getByText('3'))
    fireEvent.click(getByText('+'))
    fireEvent.click(getByText('5'))
    fireEvent.click(getByText('='))
    expect(getByText('8')).toBeInTheDocument()
  })

  it('muestra ERROR si el número supera 999999999', () => {
    const { getByText } = render(<Calculator />)
    for (let i = 0; i < 9; i++) fireEvent.click(getByText('9'))
    fireEvent.click(getByText('+'))
    fireEvent.click(getByText('1'))
    fireEvent.click(getByText('='))
    expect(getByText('ERROR')).toBeInTheDocument()
  })

  it('muestra ERROR si el resultado es negativo', () => {
    const { getByText } = render(<Calculator />)
    fireEvent.click(getByText('1'))
    fireEvent.click(getByText('-'))
    fireEvent.click(getByText('2'))
    fireEvent.click(getByText('='))
    expect(getByText('ERROR')).toBeInTheDocument()
  })

  it('agrega correctamente punto decimal', () => {
    const { getByText } = render(<Calculator />)
    fireEvent.click(getByText('3'))
    fireEvent.click(getByText('.'))
    fireEvent.click(getByText('1'))
    expect(getByText('3.1')).toBeInTheDocument()
  })
})
