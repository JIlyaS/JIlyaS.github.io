import type { Meta, StoryObj } from '@storybook/react';
import { ToggleTheme } from './ToggleTheme';

const meta = {
  title: 'components/ToggleTheme',
  component: ToggleTheme,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ToggleTheme>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
