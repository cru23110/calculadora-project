import { useState } from 'react'

export function useCalculatorLogic() {
  const [display, setDisplay] = useState('0')
  const [lastOp, setLastOp] = useState(null)
  const [stored, setStored] = useState(null)
  const [reset, setReset] = useState(false)

  const append = val => {
    if (reset) {
      setDisplay(val)
      setReset(false)
    } else if (display.length < 9 && display !== '0') {
      setDisplay(display + val)
    } else if (display === '0') {
      setDisplay(val)
    }
  }

  const operate = op => {
    const current = Number(display)
    if (stored !== null && lastOp) calc()
    else setStored(current)
    setLastOp(op)
    setReset(true)
  }

  const calc = () => {
    const current = Number(display)
    let result = stored
    if (lastOp === '+') result += current
    if (lastOp === '-') result -= current
    if (lastOp === '*') result *= current
    if (lastOp === '/') result /= current
    if (lastOp === '%') result %= current
    showResult(result)
  }

  const showResult = val => {
    if (val < 0 || val > 999999999 || ('' + val).length > 9) {
      setDisplay('ERROR')
    } else {
      const str = ('' + val).slice(0, 9)
      setDisplay(str)
    }
    setStored(null)
    setLastOp(null)
    setReset(true)
  }

  const clear = () => {
    setDisplay('0')
    setStored(null)
    setLastOp(null)
    setReset(false)
  }

  const toggleSign = () => {
  if (display === 'ERROR') return
  if (display.startsWith('-')) {
    setDisplay(display.slice(1))
  } else if (display.length < 9) {
    setDisplay('-' + display)
  }
}

  return { display, append, operate, calc, clear, toggleSign }
}
