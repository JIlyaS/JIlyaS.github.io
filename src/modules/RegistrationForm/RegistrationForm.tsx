import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Button, InputField } from '../../components';

import styles from './RegistrationForm.module.scss';

const schema = yup.object({
  login: yup
    .string()
    .min(3, "Поле 'Логин' должно содержать минимум 3 символа")
    .required("Поле 'Логин' является обязательным полем"),
  email: yup
    .string()
    .email("Поле 'Email' должно быть валидным")
    .required("Поле 'Email' является обязательным полем"),
  password: yup
    .string()
    .min(8, "Поле 'Пароль' должно содержать минимум 8 символа")
    .max(16, "Поле 'Пароль' не должно быть больше 16 символов")
    .required("Поле 'Пароль' является обязательным полем"),
});

interface IRegistrationForm {
  login?: string;
  email?: string;
  password?: string;
}

export const RegistrationForm: React.FC = () => {
  const { control, reset, handleSubmit } = useForm<IRegistrationForm>({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<IRegistrationForm> = (data) => {
    console.log(data);
    reset({
      login: '',
      email: '',
      password: '',
    });
  };

  return (
    <form className={styles.registrationForm} onSubmit={handleSubmit(onSubmit)}>
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
        name="email"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <InputField
            id="email"
            label="Email"
            dimension="small"
            extraError={error?.message}
            placeholder="Введите почту"
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
        Регистрация
      </Button>
    </form>
  );
};
