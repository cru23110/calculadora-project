export default function Button({ label, onClick }) {
  const ops = '+-*/%±'
  let className = ''

  if (ops.includes(label)) className = 'operator'
  else if (label === '=') className = 'equal'
  else if (label === 'C') className = 'clear'

  return (
    <button className={className} onClick={() => onClick(label)}>
      {label}
    </button>
  )
}
