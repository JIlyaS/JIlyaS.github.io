import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';

import { Button, InputField } from '../../components';

import styles from './ProfileForm.module.scss';

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
  repeatPassword: yup
    .string()
    .min(8, "Поле 'Повторите пароль' должно содержать минимум 8 символа")
    .max(16, "Поле 'Повторите пароль' не должно быть больше 16 символов")
    .required("Поле 'Повторите пароль' является обязательным полем"),
});

interface IProfileForm {
  login?: string;
  email?: string;
  password?: string;
  repeatPassword?: string;
}

export const ProfileForm: React.FC = () => {
  const { control, reset, handleSubmit } = useForm<IProfileForm>({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
  });

  const navigate = useNavigate();

  const handleGoMainClick = () => {
    navigate('/');
  };

  const onSubmit: SubmitHandler<IProfileForm> = (data) => {
    console.log(data);
    reset({
      login: '',
      email: '',
      password: '',
      repeatPassword: '',
    });
  };

  return (
    <form className={styles.profileForm} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.profileForm_block}>
        <Controller
          name="login"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <InputField
              id="login"
              label="Ваш логин"
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
              label="Ваш email"
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
        <Controller
          name="repeatPassword"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <InputField
              id="password"
              label="Повторите пароль"
              dimension="small"
              type="password"
              placeholder="Введите пароль повторно"
              extraError={error?.message}
              required
              {...field}
            />
          )}
        />
      </div>
      <div className={styles.profileForm_groupBtn}>
        <Button className={styles.profileForm_submit} type="submit">
          Сохранить
        </Button>
        <Button
          className={styles.profileForm_mainTo}
          btnType="secondary"
          onClick={handleGoMainClick}
        >
          На главную
        </Button>
      </div>
    </form>
  );
};
