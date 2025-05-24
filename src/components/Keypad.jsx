import Button from './Button'

export default function Keypad({ append, operate, calc, clear }) {

    const buttons = [
    '7','8','9','+',
    '4','5','6','-',
    '1','2','3','*',
    '0','.','±','/',
    'C','%','='
    ]
  const handler = label => {
  if ('0123456789'.includes(label)) append(label)
  else if ('+-*/%'.includes(label)) operate(label)
  else if (label === '=') calc()
  else if (label === 'C') clear()
  else if (label === '.') append('.')
  else if (label === '±') toggleSign()
}
  return (
    <div className='keypad'>
      {buttons.map(b => (
        <Button key={b} label={b} onClick={handler} />
      ))}
    </div>
  )
}
