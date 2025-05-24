import Keypad from './Keypad'

export default {
  title: 'Keypad',
  component: Keypad
}

export const Basic = {
  args: {
    append: val => console.log('append', val),
    operate: val => console.log('operate', val),
    calc: () => console.log('calc'),
    clear: () => console.log('clear'),
    toggleSign: () => console.log('toggleSign')
  }
}
