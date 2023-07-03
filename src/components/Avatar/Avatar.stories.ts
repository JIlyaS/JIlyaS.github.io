import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta = {
  title: 'components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Empty: Story = {
  args: {},
};

export const AvatarWithPhoto: Story = {
  args: {
    src: 'https://sefil.ru/uploads/actors/2022-09/beb271c6e2c899d68a-kianu-rivz-2.jpg',
  },
};
