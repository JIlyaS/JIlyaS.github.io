import type { Meta, StoryObj } from '@storybook/react';
import { RegistrationForm } from './RegistrationForm';

const meta = {
  title: 'modules/RegistrationForm',
  component: RegistrationForm,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof RegistrationForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
