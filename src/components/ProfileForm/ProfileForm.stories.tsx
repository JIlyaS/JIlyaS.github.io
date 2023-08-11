import { ProfileForm } from './ProfileForm';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof ProfileForm>;

const meta = {
  title: 'components/ProfileForm',
  component: ProfileForm,
  argTypes: {},
} satisfies Meta<typeof ProfileForm>;

export default meta;

export const Default = {
  args: {},
} satisfies Story;
