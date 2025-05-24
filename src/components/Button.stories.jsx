import Button from './Button'

export default {
  title: 'Button',
  component: Button
}

export const WithLabel = {
  args: {
    label: '7',
    onClick: () => alert('Button clicked')
  }
}
