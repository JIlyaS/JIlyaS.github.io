import React, { memo } from 'react';
import cn from 'classnames';
import { Form } from 'antd';
import { Title } from '../Title';

export type Help = null | React.ReactNode;
export type ValidateStatus = 'error' | '';

export type FormItemProps = {
  className?: string;
  title: React.ReactNode | React.ReactNode[];
  children: React.ReactNode | React.ReactNode[];
  validateStatus: ValidateStatus;
  help: Help;
  required?: boolean;
};

export const FormItem = memo<FormItemProps>(
  ({ validateStatus, required, help, className, title, children }) => (
    <div className={cn(className)}>
      <Title required={required}>{title}</Title>
      <Form.Item validateStatus={validateStatus} help={help}>
        {children}
      </Form.Item>
    </div>
  ),
);

FormItem.displayName = 'FormItem';
