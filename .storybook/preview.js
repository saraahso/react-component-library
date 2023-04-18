import { addDecorator } from '@storybook/react'
import { withConsole } from '@storybook/addon-console'

addDecorator((storyFn, context) => withConsole()(storyFn)(context));

export const parameters = {
  layout: 'fullscreen',
  controls: { expanded: true },
  actions: { argTypesRegex: "^on[A-Z].*" },
}