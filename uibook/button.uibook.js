import UibookCase from 'uibook/case'
import Button from '../src/components/button.js'

const ButtonUibook = {
  component: Button,
  name: 'Button',
  cases: [
      () => <UibookCase
        example='<Button>Button</Button>'
      >
        Button
      </UibookCase>,
      () => <UibookCase
        example='<Button isSecondary>Secondary Button</Button>'
        props={{ isSecondary: true }}
      >
        Button
      </UibookCase>,
  ]
}

export default ButtonUibook
