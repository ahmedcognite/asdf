import React, { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

/*
 * Example Button story with React Hooks.
 * See note below related to this example.
 */
const ButtonWithHooks = () => {
  // Sets the hooks for both the label and primary props
  const [value, setValue] = useState('Secondary');

  // Sets a click handler to change the label's value
  const handleOnChange = () => {
    setValue(value === 'Secondary' ? 'Primary' : 'Secondary');
  };
  return <Button onClick={handleOnChange}>{value}</Button>;
};

export const Base: Story = {
  render: () => <ButtonWithHooks />,
};

export const FullWidth: Story = {
  render: () => <Button fullWidth>Full Width</Button>,
};
