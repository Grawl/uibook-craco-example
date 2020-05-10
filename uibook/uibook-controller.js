import UibookStarter from 'uibook/starter'

import ButtonUibook from './button.uibook'

export default UibookStarter({
  wrapper: (children, props) => ({ children }),
  values: {
    locale: ['en'],
    theme: ['light', 'dark']
  },
  pages: {
    Button: ButtonUibook,
  }
})
