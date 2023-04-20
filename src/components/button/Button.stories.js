import React from 'react';
import Button from './Button';

export default {
  title: 'Components/Buttons/Button',
  component: Button,
  parameters: {
    componentSubtitle: 'Displays default buttons',
  },
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
        options: ['green', 'orange'],
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
        options: ['big', 'small'],
      },
    },
  },
};

const Template = (args) => <Button {...args} />;

export const DefaultBtn = Template.bind({});
DefaultBtn.args = {
  children: 'Default Btn',
  backgroundColor: 'green',
  type: 'round',
  size: 'small'
};

export const Colors = (args) => (
  <div>
    <Button {...args} backgroundColor="green" />
    <Button {...args} backgroundColor="orange" />
  </div>
);

Colors.args = {
  children: 'Color btn',
  type: 'round',
  size: 'small'
};

Colors.parameters = {
  docs: {
    storyDescription: 'Supports two colors.',
  },
};

export const Sizes = (args) => (
  <div>
    <Button {...args} size="big" />
    <Button {...args} size="small" />
  </div>
);

Sizes.args = {
  children: 'Size btn',
  backgroundColor: 'green',
  type: 'square',
};

Sizes.parameters = {
  docs: {
    storyDescription: 'Supports two sizes.',
  },
};

export const Types = (args) => (
  <div>
    <Button {...args} type="round" />
    <Button {...args} type="square" />
  </div>
);

Types.args = {
  children: 'Type btn',
  backgroundColor: 'orange',
  size: 'big',
};

Types.parameters = {
  docs: {
    storyDescription: 'Supports two types.',
  },
};
