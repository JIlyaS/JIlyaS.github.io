import { Layout } from './Layout';

export default {
  title: 'layouts/Layout',
  component: Layout,
  sidebar: {
    type: 'ReactNode',
    description: 'Слой с сайдбаром',
    defaultValue: 'none',
    // options: ['primary', 'secondary']
    // control: {
    //   type: 'radio'
    // }
  },
};

const Template = (arg) => <Layout {...arg} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Контентная часть',
};

export const LayoutWithSidebar = Template.bind({});

LayoutWithSidebar.args = {
  children: 'Контентная часть',
  sidebar: <div>123</div>,
};
