import React from 'react';
import  Button  from './Button';

export default {
  title: 'Components/Buttons/Button',
  component: Button,
  argTypes: {
    children: {
      description: 'Button text',
      type: { name: 'string', required: true },
      control: {
        type: 'text',
      },
    },
    backgroundColor: {
      control: {
        type: 'select',
        required: true,
        options: ['blue', 'orange'],
      },
    },
    type: {
      control: {
        type: 'select',
        required: true,
        options: ['round', 'square'],
      },
    },
    size: {
      control: {
        type: 'select',
        required: true,
        options: ['bug', 'small'],
      },
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Blue = Template.bind({});
Blue.args = {
  children: 'Small Btn',
  backgroundColor: 'blue',
  type: 'round',
  size: 'small'
};

export const Orange = Template.bind({});
Orange.args = {
  children: 'Big Btn',
  backgroundColor: 'orange',
  type: 'square',
  size: 'big'
};
