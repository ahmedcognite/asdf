import { Meta, StoryObj } from '@storybook/react';

import { Post } from './Post';

const meta: Meta<typeof Post> = {
  component: Post,
};

export default meta;
type Story = StoryObj<typeof Post>;

/*
 * Example Post story with React Hooks.
 * See note below related to this example.
 */
export const Base: Story = {
  render: () => {
    return (
      <Post
        id={1}
        title="This is post title"
        tags={['Tag One', 'Two', 'Three']}
        reactions={2}
        content="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
      />
    );
  },
};
