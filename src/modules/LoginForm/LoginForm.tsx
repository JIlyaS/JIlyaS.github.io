import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Button, InputField } from '../../components';

import styles from './LoginForm.module.scss';

const schema = yup.object({
  //name is required with minimum length of 8
  login: yup
    .string()
    .min(3, "Поле 'Логин' должно содержать минимум 3 символа")
    .required("Поле 'Логин' является обязательным полем"),
  // password is required with minimum length of 8
  password: yup
    .string()
    .min(8, "Поле 'Пароль' должно содержать минимум 8 символа")
    .required("Поле 'Пароль' является обязательным полем"),
  // // email is required with email format
  // email: yup.string().email().required(),
  // // phone number needs to match the regex expression
  // phone: yup
  //   .string()
  //   .matches(
  //     /^1?[ -.]?\(?([2-9][0-9]{2})\)?[ -.]?([2-9][0-9]{2})[ -.]?([0-9]{4})$/,
  //     "Enter a valid phone number"
  //   ),
});

interface ILoginForm {
  login?: string;
  password?: string;
}

export const LoginForm: React.FC = () => {
  const { control, reset, handleSubmit } = useForm<ILoginForm>({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<ILoginForm> = (data) => {
    console.log(data);
    reset({
      login: '',
      password: '',
    });
  };

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="login"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <InputField
            id="login"
            label="Логин"
            dimension="small"
            extraError={error?.message}
            placeholder="Введите логин"
            required
            {...field}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <InputField
            id="password"
            label="Пароль"
            dimension="small"
            type="password"
            placeholder="Введите пароль"
            extraError={error?.message}
            required
            {...field}
          />
        )}
      />
      <Button className={styles.loginForm_submit} type="submit">
        Войти
      </Button>
    </form>
  );
};
