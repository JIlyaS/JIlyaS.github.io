import type { Meta, StoryObj } from '@storybook/react';
import { ProfileForm } from './ProfileForm';

const meta = {
  title: 'modules/ProfileForm',
  component: ProfileForm,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ProfileForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
