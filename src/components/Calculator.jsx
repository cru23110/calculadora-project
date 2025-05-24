import { useCalculatorLogic } from '../hooks/useCalculatorLogic'
import Display from './Display'
import Keypad from './Keypad'

export default function Calculator() {
  const logic = useCalculatorLogic()
  return (
    <div className='calculator'>
      <Display value={logic.display} />
      <Keypad {...logic} />
    </div>
  )
}
