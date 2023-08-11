import { get as $get } from 'unchanged';

import { Help } from './FormItem';

export type ValidateStatus = 'error' | '';

export const getValidateStatus = (
  errors: unknown,
  touched: unknown,
  submitCount: number,
): ValidateStatus => (submitCount && errors && touched ? 'error' : '');

export const getHelp = (errors: unknown, touched: unknown, submitCount: number): Help =>
  submitCount && errors && touched ? (errors as Help) : null;

export const getValidates = (
  errors: unknown,
  touched: unknown,
  submitCount: number,
): { validateStatus: ValidateStatus; help: Help } => ({
  validateStatus: getValidateStatus(errors, touched, submitCount),
  help: getHelp(errors, touched, submitCount),
});

export const get = <T = any>(path: string, object: unknown): T =>
  $get(path, object) as unknown as T;
