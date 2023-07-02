import { Layout } from './Layout';
import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Layout>;

const meta = {
  title: 'layouts/Layout',
  component: Layout,
  argTypes: {
    sidebar: {
      description: 'Слой с сайдбаром',
      defaultValue: 'null',
    },
  }
} satisfies Meta<typeof Layout>;

export default meta;

export const Default = {
  args: {
    children: 'Контентная часть',
  }
} satisfies Story;

export const LayoutWithSidebar = {
  args: {
    children: 'Контентная часть',
    sidebar: <div>123</div>,
  }
};

// import { Layout } from './Layout';

// export default {
//   title: 'layouts/Layout',
//   component: Layout,
//   sidebar: {
//     type: 'ReactNode',
//     description: 'Слой с сайдбаром',
//     defaultValue: 'none',
//     // options: ['primary', 'secondary']
//     // control: {
//     //   type: 'radio'
//     // }
//   },
// };

// const Template = (arg) => <Layout {...arg} />;

// export const Default = Template.bind({});

// Default.args = {
//   children: 'Контентная часть',
// };

// export const LayoutWithSidebar = Template.bind({});

// LayoutWithSidebar.args = {
//   children: 'Контентная часть',
//   sidebar: <div>123</div>,
// };


