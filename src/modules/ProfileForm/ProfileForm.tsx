import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';

import { Button, InputField } from '../../components';

import styles from './ProfileForm.module.scss';
import { useAppDispatch, useAppSelector } from '@src/store';
import { useEffect, useState } from 'react';
import { Profile } from '@src/types/profile';
import { fetchUpdateProfile } from '@src/slices/profile';

const schema = yup.object({
  name: yup
    .string()
    .matches(/^\S*$/g, 'Поле не должно содержать пробелов')
    .min(7, "Поле 'Имя' должно содержать минимум 7 символов"),
  // .required("Поле 'Логин' является обязательным полем"),
  email: yup
    .string()
    .email("Поле 'Email' должно быть валидным")
    .required("Поле 'Email' является обязательным полем"),
  // password: yup
  //   .string()
  //   .min(8, "Поле 'Пароль' должно содержать минимум 8 символа")
  //   .max(16, "Поле 'Пароль' не должно быть больше 16 символов")
  //   .required("Поле 'Пароль' является обязательным полем"),
  // repeatPassword: yup
  //   .string()
  //   .min(8, "Поле 'Повторите пароль' должно содержать минимум 8 символа")
  //   .max(16, "Поле 'Повторите пароль' не должно быть больше 16 символов")
  //   .required("Поле 'Повторите пароль' является обязательным полем"),
});

interface IProfileForm {
  name?: string;
  email?: string;
  // password?: string;
  // repeatPassword?: string;
}

export const ProfileForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const profile = useAppSelector((state) => state.profile.profile);

  const { control, setValue, handleSubmit } = useForm<IProfileForm>({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
    defaultValues: {
      name: '',
      email: '',
    },
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (profile) {
      setValue('name', profile?.name);
      setValue('email', profile?.email);
    }
  }, [profile]);

  const handleGoMainClick = () => {
    navigate('/');
  };

  const onSubmit: SubmitHandler<IProfileForm> = (data) => {
    dispatch(fetchUpdateProfile({ name: data.name }));
  };

  return (
    <form className={styles.profileForm} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.profileForm_block}>
        <Controller
          name="name"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <InputField
              {...field}
              id="name"
              label="Имя"
              dimension="small"
              extraError={error?.message}
              placeholder="Введите имя"
              value={field.value}
              required
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <InputField
              {...field}
              id="email"
              label="Ваш email"
              dimension="small"
              extraError={error?.message}
              placeholder="Введите почту"
              disabled
              required
            />
          )}
        />
        {/* <Controller
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
        /> */}
      </div>
      <div className={styles.profileForm_groupBtn}>
        <Button className={styles.profileForm_submit} type="submit">
          Изменить
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
