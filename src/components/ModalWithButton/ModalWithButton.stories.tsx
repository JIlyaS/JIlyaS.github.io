import { ModalWithButton } from './ModalWithButton';
import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof ModalWithButton>;

const meta = {
  title: 'components/ModalWithButton',
  component: ModalWithButton,
  argTypes: {},
} satisfies Meta<typeof ModalWithButton>;

export default meta;

export const Default = {
  args: {},
} satisfies Story;
